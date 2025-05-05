import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUser } from "../../apis/auth";

export const useGetUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: getUser, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["user"] });
      // Get previous hospital list before deleting
    },
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
    onError: (error, id, context) => {
      const errorMessage = error?.response?.data?.message || "Failed";
      // Rollback if there is an error
      if (context?.previousUser) {
        queryClient.setQueryData(["user"], context.previousUser);
      }
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
    mutate: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
