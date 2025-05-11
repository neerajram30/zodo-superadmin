import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHospital } from "../../apis/hospitals";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useDeleteHospital = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: deleteHospital, // API function to delete hospital
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["hospitals"] });
      // Optimistically update the cache
      queryClient.setQueryData(["hospitals"], (oldHospitals) => ({
        // const oldHospitalList = oldHospitals?.data || [];
        // oldHospitalList.length > 1
        //   ? oldHospitalList.filter((h) => h.id === id)
        //   : []
        ...oldHospitals,
        data: oldHospitals?.data?.filter((hospital) => hospital.id !== id),
      }));
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
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
      navigate("/manage-hospitals");
    },
    onError: (error, id, context) => {
      const errotMessage =
        error?.response?.data?.message || "Failed to delete hospital";
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["hospitals"], context.previousHospitals);
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

export default useDeleteHospital;
