// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateUserStatus } from "../../apis/users";

export const useUserStatusToggle = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateUserStatus, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["userslist"] });
    },
    onSuccess: (data) => {
      const message = data?.message || "User updated successfully";
      queryClient.invalidateQueries({ queryKey: ["userslist"] });
      toast.success(message);
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousUsers) {
        queryClient.setQueryData(["userlist"], context.previousUsers);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to change user status";
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
