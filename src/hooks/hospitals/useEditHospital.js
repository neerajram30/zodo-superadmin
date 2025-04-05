// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHospital } from "../../apis/hospitals";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useEditHostpital = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  // const successToast = <ToastContainer containerId="editHospitalSuccessToast"/>;
  // const errorToast = <ToastContainer containerId="editHospitalErrorToast"/>;

  const mutation = useMutation({
    mutationFn: editHospital, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["hospitals"] });

      // // Get previous hospital list before deleting
      // const previousHospitals = queryClient.getQueryData(["hospitals"]);

      // // Optimistically update the cache
      // queryClient.setQueryData(["hospitals"], (oldHospitals) =>
      //   oldHospitals ? oldHospitals.filter((h) => h.id !== id) : []
      // );

      // return { previousHospitals };
    },
    onSuccess: (data, variables) => {
      // Show toast message and navigate to the list of hospitals
      console.log("Edit update data", data);

      const message = data?.message || "Hospital updated successfully";
      queryClient.setQueryData(["hospitals", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      queryClient.invalidateQueries({ queryKey: ["hospital", variables.id] });
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["hospitals"], context.previousHospitals);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit hospital";
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
