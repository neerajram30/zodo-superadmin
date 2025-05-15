import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createAppdetails } from "../../apis/appmanage";

export const useCreateAppDetails = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createAppdetails, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for doctors to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["app-details"] });
    },
    onSuccess: (data) => {
      const message = data?.message || "Appdetails added successfully";
      queryClient.invalidateQueries(["app-details"]);
      //   navigate("/manage-doctors");
      toast.success(message);
      // setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousAppDetails) {
        queryClient.setQueryData(["app-details"], context.previousAppDetails);
      }
      const errorMessage =
        error?.response?.data?.validationErrors ||
        error?.response?.data?.message ||
        "Failed to create app details";
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
