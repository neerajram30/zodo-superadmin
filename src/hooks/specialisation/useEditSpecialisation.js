// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSpecialization } from "../../apis/specialisation";
import { toast } from "react-toastify";
// import useSpecialisations from "../../store/useSpecialisations";

export const useEditSpecialisation = () => {
  const queryClient = useQueryClient();
//   const specialisationData = useSpecialisations(
//     (state) => state.specialisations
//   );
//   const addNewSpecialisation = useSpecialisations(
//     (state) => state.addNewSpecialisation
//   );
  // const [showToast, setShowToast] = useState({
  //   show: false,
  //   message: "",
  //   status: "",
  // });

  const mutation = useMutation({
    mutationFn: editSpecialization, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["specialisations"] });
      // Get previous hospital list before deleting
    },
    onSuccess: (data, variables) => {
      const message = data.message || "Specialisation edited successfully";
      queryClient.setQueryData(["specialisations", variables.id], data);
      queryClient.invalidateQueries({ queryKey: ["specialisations"] });
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
      console.error("Error deleting hospital:", error.message);
      // Rollback if there is an error
      if (context?.previousSpecialisation) {
        queryClient.setQueryData(["specialisations"], context.previousSpecialisation);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit specialisation";
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
    isSuccess: mutation.isSuccess,
  };
};
