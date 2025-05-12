import { useQuery } from "@tanstack/react-query";
import { getDoctors, getDoctorsByQuery } from "../../apis/doctors";

export const useDoctorsList = (query) => {
    return useQuery({
      queryKey: ["doctors",query], // Unique query key
      queryFn: () => query ? getDoctorsByQuery(query) : getDoctors(),
    });
  };
  