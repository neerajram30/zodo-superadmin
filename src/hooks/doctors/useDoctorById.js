import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../../apis/doctors";

export const useDoctorById = (id) => {
  if (!id || typeof id !== "string" || id.trim() === "" || id === undefined) {
    return { data: null, isLoading: false, isError: true };
  }
  // const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["doctor", id], // Unique query key
    queryFn: () => getDoctorById(id),
    onError: (error) => { 
      console.log(error);
    },
  });
};
