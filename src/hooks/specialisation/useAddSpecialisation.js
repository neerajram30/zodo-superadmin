// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addSpecialization } from "../../apis/specialisation";
import useSpecialisations from "../../store/useSpecialisations";

export const useAddSpecialisation = () => {
  const queryClient = useQueryClient();
  const specialisationData = useSpecialisations((state) => state.specialisations);
  const addNewSpecialisation = useSpecialisations((state) => state.addNewSpecialisation);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });

  const mutation = useMutation({
    mutationFn: addSpecialization, // API function to create
    onMutate: async (id) => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["specialisation"] });

      // Get previous hospital list before deleting
      const previousHospitals = queryClient.getQueryData(["specialisation"]);

      // Optimistically update the cache
      queryClient.setQueryData(["specialisation"], (oldHospitals) =>
        oldHospitals ? oldHospitals.filter((h) => h.id !== id) : []
      );

      return { previousHospitals };
    },
    onSuccess: (data) => {
      const message = data.message || "Specialisation added successfully";
      const specialisation = [...specialisationData, data];
      console.log("Specialisation data ", specialisation);
      addNewSpecialisation(data);
      setShowToast({ show: true, message: message, status: "success" });
    },
    onError: (error, id, context) => {
      console.error("Error deleting hospital:", error.message);
      // Rollback if there is an error
      if (context?.previousHospitals) {
        queryClient.setQueryData(["specialisation"], context.previousHospitals);
      }
      setShowToast({
        show: true,
        message: error.message,
        status: "danger",
      });
    }
  });

  return {
    mutate: mutation.mutate,
    showToast,
    setShowToast,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
