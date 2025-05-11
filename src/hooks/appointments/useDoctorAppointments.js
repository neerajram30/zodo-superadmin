import { useQuery } from "@tanstack/react-query";
import { getDoctorAppointments, getDoctorAppointmentsByQuery } from "../../apis/appointments";

export const useDoctorAppointments = (id,query) => {
  return useQuery({
    queryKey: ["appointments", id,query], // Unique query key
    queryFn: () => query ? getDoctorAppointmentsByQuery(query) : getDoctorAppointments(id),
    enabled: !!id,
  });
};
