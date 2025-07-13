import { useQuery } from "@tanstack/react-query";
import {
    getDoctorTransactions
} from "../../apis/settlements";

export const useDoctorTransactions = (id, query) => {
  return useQuery({
    queryKey: ["transactions", id, query], // Unique query key
    queryFn: () => getDoctorTransactions(id, query),
    enabled: !!id,
  });
};