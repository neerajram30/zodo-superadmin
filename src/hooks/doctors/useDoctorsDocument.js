import { useQuery } from "@tanstack/react-query";
import { getDoctorDocuments } from "../../apis/doctors";

export const useDoctorsDocument = (id) => {
  if (!id || typeof id !== "string" || id.trim() === "" || id === undefined) {
    return { data: null, isLoading: false, isError: true };
  }

  return useQuery({
    queryKey: ["documents", id], // Unique query key
    queryFn: () => getDoctorDocuments(id),
  });
};
