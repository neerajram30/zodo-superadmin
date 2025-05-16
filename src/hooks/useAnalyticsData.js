import { useQuery } from "@tanstack/react-query";
import { getAnalyticsData } from "../apis/dashboard";

export const useAnalyticsData = () => {  
  return useQuery({
    queryKey: ["analytics"], // Unique query key
    queryFn: () => getAnalyticsData(),
  });
};