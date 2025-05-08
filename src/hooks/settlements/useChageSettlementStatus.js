// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { changeSettlementStatus } from "../../apis/settlements";

export const useChangeSettlementStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: changeSettlementStatus, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["hospitals"] });
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "Settlement updated successfully";
      queryClient.setQueryData(["settlements", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["settlements"] });
      queryClient.invalidateQueries({ queryKey: ["settlement", variables.id] });
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["settlements"], context.previousHospitals);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to change settlement status";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
