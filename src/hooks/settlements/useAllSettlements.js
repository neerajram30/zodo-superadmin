import { useQuery } from "@tanstack/react-query";
import { getAllSettlements, getAllSettlementsByQuery } from "../../apis/settlements";

export const useAllSettlements = (query) => { 
  console.log("UNIQUE QUERY ",query);
   
    return useQuery({
      queryKey: ["settlements",query], // Unique query key
      queryFn: () => query ? getAllSettlementsByQuery(query) : getAllSettlements(),
    });
  };