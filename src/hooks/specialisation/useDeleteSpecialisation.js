import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteSpecialization } from "../../apis/specialisation";

const useDeleteSpecialisation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });
  const mutation = useMutation({
    mutationFn: deleteSpecialization, // API function to delete hospital
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["specialisations"] });

      // Get previous hospital list before deleting
      const previousSpecialisations = queryClient.getQueryData(["specialisations"]);

      // Optimistically update the cache
      queryClient.setQueryData(["specialisations"], (oldHospitals) =>
        oldHospitals ? oldHospitals?.filter((h) => h.id !== id) : []
      );

      return { previousSpecialisations };
    },
    onSuccess: (data) => {
      const message = data.message;
      setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousSpecialisations) {
        queryClient.setQueryData(["specialisations"], context.previousSpecialisations);
      }
      setShowToast({
        show: true,
        message: error.message,
        status: "danger",
      });
    },
    onSettled: () => {
      // Redirect after deletion (even if it fails)
      setTimeout(() => {
        navigate("/manage-doctors/specialization");
      }, 5000);
    },
  });

  return { mutate: mutation.mutate, showToast, setShowToast, isLoading: mutation.isPending };
};

export default useDeleteSpecialisation;