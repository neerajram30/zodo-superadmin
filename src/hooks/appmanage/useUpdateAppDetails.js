// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateAppdetails } from "../../apis/appmanage";

export const useUpdateAppDetails = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateAppdetails, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["app-details"] });
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "App details updated successfully";
      queryClient.setQueryData(["app-details", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["app-details"] });
      queryClient.invalidateQueries({
        queryKey: ["app-details", variables.id],
      });
      toast.success(message);
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousDoctors) {
        queryClient.setQueryData(["app-details"], context.previousDoctors);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to update app details";
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
