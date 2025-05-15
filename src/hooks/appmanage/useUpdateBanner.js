// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editBanner } from "../../apis/appmanage";

export const useUpdateBanner = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editBanner, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["banners"] });
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "Banner updated successfully";
      queryClient.setQueryData(["banners", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      queryClient.invalidateQueries({ queryKey: ["banners", variables.id] });
      toast.success(message);
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousBanner) {
        queryClient.setQueryData(["banners"], context.previousBanner);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit banner";
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
