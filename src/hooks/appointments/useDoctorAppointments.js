import { useQuery } from "@tanstack/react-query";
import { getDoctorAppointments } from "../../apis/appointments";

export const useDoctorAppointments = (id) => {
  return useQuery({
    queryKey: ["appointments", id], // Unique query key
    queryFn: () => getDoctorAppointments(id),
    enabled: !!id,
  });
};
