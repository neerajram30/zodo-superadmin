import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHospital } from "../../apis/hospitals";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useDeleteHospital = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });
  const mutation = useMutation({
    mutationFn: deleteHospital, // API function to delete hospital
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
      console.log("Hospital deleted successfully", data);
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
        message: "Failed to delete hospital",
        status: "danger",
      });
    },
    onSettled: () => {
      // Redirect after deletion (even if it fails)
      setTimeout(() => {
        navigate("/manage-hospitals");
      }, 5000);
    },
  });

  return { mutate: mutation.mutate, showToast, setShowToast, isLoading: mutation.isPending };
};

export default useDeleteHospital;
