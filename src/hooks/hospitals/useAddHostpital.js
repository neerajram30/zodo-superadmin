// Custom hook for creating hospital
import { useMutation } from "@tanstack/react-query";
import { addHospital } from "../../apis/hospitals";

export const useAddHostpital = () => {
  const mutation = useMutation({
    mutationFn: addHospital,
  });

  return {
    onSubmit: mutation.mutateAsync, // Function to call on form submission
    isLoading: mutation.isPending, // Loading state
    isSuccess: mutation.isSuccess, // Success state
  };
};
