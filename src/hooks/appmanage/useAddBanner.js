// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addBanner } from "../../apis/appmanage";

export const useAddBanner = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addBanner, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["banners"] });
      // Get previous hospital list before deleting
    },
    onSuccess: (data) => {
      const message = data.message;
      // Invalidate and refetch the hospitals query after a successful mutation
      queryClient.invalidateQueries(["banners"]);
      toast.success(message);
    },
    onError: (error, id, context) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to create banner";
      // Rollback if there is an error
      if (context?.previousBanners) {
        queryClient.setQueryData(["banners"], context.previousBanners);
      }
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
