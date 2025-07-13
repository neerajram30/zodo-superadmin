import { useQuery } from "@tanstack/react-query";
import { getHospitalTransactions } from "../../apis/settlements";

export const useHospitalSettlements = (hospital_id, query) => {
  return useQuery({
    queryKey: ["settlements", hospital_id, query], // Unique query key
    queryFn: () => getHospitalTransactions(hospital_id, query),
    enabled: !!hospital_id,
  });
};
