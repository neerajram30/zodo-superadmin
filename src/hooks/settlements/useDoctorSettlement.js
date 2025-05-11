import { useQuery } from "@tanstack/react-query";
import {
  getDoctorSettlements,
  getDoctorSettlementsByQuery,
} from "../../apis/settlements";

export const useDoctorSettlements = (id, query) => {
  return useQuery({
    queryKey: ["settlements", id, query], // Unique query key
    queryFn: () =>
      query ? getDoctorSettlementsByQuery(id, query) : getDoctorSettlements(id),
    enabled: !!id,
  });
};
