import { useQuery } from "@tanstack/react-query";
import { getSpecializations } from "../../apis/specialisation";

export const useSpecialisationList = () => {
  return useQuery({
    queryKey: ["specialisations"], // Unique query key
    queryFn: () =>getSpecializations(),
  });
};
