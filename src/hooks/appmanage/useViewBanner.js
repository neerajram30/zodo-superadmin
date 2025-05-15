import { useQuery } from "@tanstack/react-query";
import { viewBanner } from "../../apis/appmanage";

export const useViewBanner = (id) => {
  return useQuery({
    queryKey: ["banners", id], // Unique query key
    queryFn: () => viewBanner(id),
    enabled: !!id
  });
};
