import { useQuery } from "@tanstack/react-query";
import {
  getSpecializations,
  getSpecializationsByQuery,
} from "../../apis/specialisation";

export const useSpecialisationList = (query) => {
  return useQuery({
    queryKey: ["specialisations",query], // Unique query key
    queryFn: () =>
      query ? getSpecializationsByQuery(query) : getSpecializations(),
  });
};
