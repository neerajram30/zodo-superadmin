import { useQuery } from "@tanstack/react-query";
import { getAppdetails } from "../../apis/appmanage";

export const useAppDetails = () => {
  return useQuery({
    queryKey: ["app-details"], // Unique query key
    queryFn: () => getAppdetails(),
  });
};
