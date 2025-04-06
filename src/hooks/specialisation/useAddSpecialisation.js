// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";
import { addSpecialization } from "../../apis/specialisation";
import useSpecialisations from "../../store/useSpecialisations";
import { toast } from "react-toastify";

export const useAddSpecialisation = () => {
  const queryClient = useQueryClient();
  // const specialisationData = useSpecialisations((state) => state.specialisations);
  const addNewSpecialisation = useSpecialisations((state) => state.addNewSpecialisation);
  // const [showToast, setShowToast] = useState({
  //   show: false,
  //   message: "",
  //   status: "",
  // });

  const mutation = useMutation({
    mutationFn: addSpecialization, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["specialisations"] });

      // Get previous hospital list before deleting
      // const previousHospitals = queryClient.getQueryData(["specialisations"]);

      // // Optimistically update the cache
      // queryClient.setQueryData(["specialisations"], (oldHospitals) =>
      //   oldHospitals ? oldHospitals.filter((h) => h.id !== id) : []
      // );

      // return { previousHospitals };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["specialisations"]);
      const message = data.message || "Specialisation added successfully";
      // const specialisation = [...specialisationData, data];
      addNewSpecialisation(data);
      // setShowToast({ show: true, message: message, status: "success" });
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
      // console.error("Error deleting hospital:", error.message);
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["specialisations"], context.previousHospitals);
      }
      // setShowToast({
      //   show: true,
      //   message: error.message,
      //   status: "danger",
      // });
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  });

  return {
    mutate: mutation.mutate,
    // showToast,
    // setShowToast,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
