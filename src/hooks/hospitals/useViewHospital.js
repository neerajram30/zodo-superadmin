import { useQuery } from "@tanstack/react-query";
import { getHospital } from "../../apis/hospitals";

export const useViewHospital = (id) => {
  return useQuery({
    queryKey: ["hospital"], // Unique query key
    queryFn: () => getHospital(id),
  });
};
