import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addDoctors } from "../../apis/doctors";

export const useCreateDoctors = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });

  const mutation = useMutation({
    mutationFn: addDoctors, // API function to create
    onMutate: async (id) => {
      // Cancel any ongoing queries for doctors to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["doctors"] });

      // Get previous hospital list before deleting
      const previousDoctors = queryClient.getQueryData(["doctors"]);

      // Optimistically update the cache
      queryClient.setQueryData(["doctors"], (oldDoctors) =>
        oldDoctors ? Array.isArray(oldDoctors) && oldDoctors.filter((h) => h.id !== id) : []
      );
      return { previousDoctors };
    },
    onSuccess: (data) => {
      const message = data?.message || "Doctor added successfully";
      setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousDoctors) {
        queryClient.setQueryData(["doctors"], context.previousDoctors);
      }
      setShowToast({
        show: true,
        message: error.message || "An error occurred",
        status: "danger",
      });
    },
  });

  return {
    mutate: mutation.mutate,
    showToast,
    setShowToast,
    isLoading: mutation.isPending,
  };
};
