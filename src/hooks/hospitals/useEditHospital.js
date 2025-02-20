// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHospital } from "../../apis/hospitals";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useEditHostpital = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });

  const mutation = useMutation({
    mutationFn: editHospital, // API function to create
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
    onSuccess: (data, variables) => {

      // Show toast message and navigate to the list of hospitals  
      const message = data?.message || "Hospital updated successful0ly";
      queryClient.setQueryData(["hospitals", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["hospitals"], context.previousHospitals);
      }
      setShowToast({
        show: true,
        message: error.message || "An error occurred while editing hospital",
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
