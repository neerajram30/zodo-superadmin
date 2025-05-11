import { useQuery } from "@tanstack/react-query";
import {
  getHospitalSettlement,
  getHospitalSettlementByquery,
} from "../../apis/settlements";

export const useHospitalSettlements = (id, query) => {
  return useQuery({
    queryKey: ["settlements", id, query], // Unique query key
    queryFn: () =>
      query
        ? getHospitalSettlementByquery(id, query)
        : getHospitalSettlement(id),
    enabled: !!id,
  });
};
