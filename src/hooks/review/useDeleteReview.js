import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { removeReview } from "../../apis/reviews";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: removeReview, // API function to delete hospital
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["reviews"] });
      // Optimistically update the cache
      queryClient.setQueryData(["reviews"], (oldreviews) => ({
        ...oldreviews,
        data: oldreviews?.data?.filter((review) => review.id !== id),
      }));
    },
    onSuccess: (data) => {
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
      //   navigate("/manage-hospitals");
    },
    onError: (error, id, context) => {
      const errotMessage =
        error?.response?.data?.message || "Failed to delete review";
      // Rollback if there is an error
      if (context?.previousreviews) {
        queryClient.setQueryData(["reviews"], context.previousreviews);
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

