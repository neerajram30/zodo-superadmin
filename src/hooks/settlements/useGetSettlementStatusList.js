import { useQuery } from "@tanstack/react-query";
import { getSettlementStatuslist } from "../../apis/settlements";

export const useSetSettlementStatusList = (status) => {
  return useQuery({
    queryKey: ["settlements", status], // Unique query key
    queryFn: () => getSettlementStatuslist(status),
  });
};