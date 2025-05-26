import { useQuery } from "@tanstack/react-query";
import { getDoctorAnalytics } from "../../apis/dashboard";

export const useDoctorAnalytics = (id) => {
  if (!id || typeof id !== "string" || id.trim() === "" || id === undefined) {
    return { data: null, isLoading: false, isError: true };
  }
  // const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["doctor-analytics", id], // Unique query key
    queryFn: () => getDoctorAnalytics(id),
  });
};
