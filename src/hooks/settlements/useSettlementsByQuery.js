import { useQuery } from "@tanstack/react-query";
import { getHospitalSettlement } from "../../apis/settlements";

export const useSettlementsByQuery = (id) => {
    return useQuery({
      queryKey: ["settlements",id], // Unique query key
      queryFn: () => getHospitalSettlement(id),
      enabled: !!id
    });
  };