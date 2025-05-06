import { useQuery } from "@tanstack/react-query";
import { getRequestedHospitalList } from "../../apis/hospitals";

export const useRequestedHospitals = (status) => {
  return useQuery({
    queryKey: ["hospitals", status], // Unique query key
    queryFn: () => getRequestedHospitalList(status),
  });
};
