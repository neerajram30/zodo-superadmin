import { useQuery } from "@tanstack/react-query";
import { getHospital } from "../../apis/hospitals";

export const useViewHospital = (id) => {
  if (!id || typeof id !== "string" || id.trim() === "" || id === undefined) {
    return { data: null, isLoading: false, isError: true };
  }
  
  return useQuery({
    queryKey: ["hospital", id], // Unique query key
    queryFn: () => getHospital(id),
    onError: (error) => {
      console.log(error);
    },
  });
};
