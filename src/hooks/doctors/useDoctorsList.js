import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../apis/doctors";

export const useDoctorsList = () => {
    return useQuery({
      queryKey: ["doctors"], // Unique query key
      queryFn: () => getDoctors(),
    });
  };
  