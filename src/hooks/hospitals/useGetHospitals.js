import { useQuery } from "@tanstack/react-query";
import { getHospitals } from "../../apis/hospitals";

export const useGetHospitals = () => {
  return useQuery({
    queryKey: ['hospitalList'], // Unique query key
    queryFn: () => getHospitals(),
  });
};
