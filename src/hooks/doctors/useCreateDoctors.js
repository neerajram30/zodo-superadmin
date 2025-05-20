import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoctors } from "../../apis/doctors";
import { toast } from "react-toastify";

export const useCreateDoctors = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: addDoctors, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for doctors to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["doctors"] });
    },
    onSuccess: (data) => {
      const message = data?.message || "Doctor added successfully";
      queryClient.invalidateQueries(["doctors"]);
      // navigate("/manage-doctors");
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousDoctors) {
        queryClient.setQueryData(["doctors"], context.previousDoctors);
      }
      const errorMessage =
        error?.response?.data?.validationErrors || error?.response?.data?.message || "Failed to create doctor";
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
