import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteBanner } from "../../apis/appmanage";

export const useDeleteBanner = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteBanner, // API function to delete hospital
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["banners", id] });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      const message = data.message;
      toast.success(message);
      //   navigate("/manage-hospitals");
    },
    onError: (error, id, context) => {
      const errotMessage =
        error?.response?.data?.message || "Failed to delete hospital";
      // Rollback if there is an error
      if (context?.previousBanners) {
        queryClient.setQueryData(["banners"], context.previousBanners);
      }
      toast.error(errotMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
