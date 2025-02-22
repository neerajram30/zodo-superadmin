// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHospital } from "../../apis/hospitals";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAddHostpital = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });

  const mutation = useMutation({
    mutationFn: addHospital, // API function to create
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["hospitals"] });

      // Get previous hospital list before deleting
      const previousHospitals = queryClient.getQueryData(["hospitals"]);

      // Optimistically update the cache
      queryClient.setQueryData(["hospitals"], (oldHospitals) =>
        oldHospitals ? oldHospitals.filter((h) => h.id !== id) : []
      );

      return { previousHospitals };
    },
    onSuccess: (data) => {
      const message = data.message;
      setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      console.error("Error deleting hospital:", error.message);
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["hospitals"], context.previousHospitals);
      }
      setShowToast({
        show: true,
        message: error.message,
        status: "danger",
      });
    }
  });

  return {
    mutate: mutation.mutate,
    showToast,
    setShowToast,
    isLoading: mutation.isPending,
  };
};
