import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { removeSettlement } from "../../apis/settlements";

export const useDeleteSettlement = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: removeSettlement, // API function to delete settlement
    onMutate: async (id) => {
      // Cancel any ongoing queries for settlements to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["settlements"] });
      // Optimistically update the cache
      queryClient.setQueryData(["settlements"], (oldSettlements) => ({
        ...oldSettlements,
        data: oldSettlements?.data?.filter((settlement) => settlement.id !== id),
      }));
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["settlements"] });
      const message = data.message;
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(-1);
    },
    onError: (error, id, context) => {
      const errotMessage =
        error?.response?.data?.message || "Failed to remove settlement";
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["settlements"], context.previousSettlements);
      }
      toast.error(errotMessage, {
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

