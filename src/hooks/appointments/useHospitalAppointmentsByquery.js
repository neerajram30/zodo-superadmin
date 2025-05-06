import { useQuery } from "@tanstack/react-query";
import {
  getHospitalAppointmentsByQuery,
} from "../../apis/appointments";

export const useHospitalAppointmentsByquery = (id, query) => {
  return useQuery({
    queryKey: ["appointments", id, query], // Unique query key
    queryFn: () => getHospitalAppointmentsByQuery(id, query),
    enabled: !!id,
  });
};
