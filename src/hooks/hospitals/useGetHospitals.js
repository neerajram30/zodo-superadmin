import { useQuery } from "@tanstack/react-query";
import { getHospitals, getHospitalsBySearch } from "../../apis/hospitals";

export const useGetHospitals = (query) => {  
  return useQuery({
    queryKey: ["hospitals",query], // Unique query key
    queryFn: () => query ? getHospitalsBySearch(query) : getHospitals(),
  });
};
