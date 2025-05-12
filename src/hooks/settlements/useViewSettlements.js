import { useQuery } from "@tanstack/react-query";
import { getViewSettlement } from "../../apis/settlements";

export const useViewSettlements = (id) => {  
    return useQuery({
      queryKey: ["settlements",id], // Unique query key
      queryFn: () => getViewSettlement(id),
    });
  };