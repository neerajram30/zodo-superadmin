import { useQuery } from "@tanstack/react-query";
import { getBannerList } from "../../apis/appmanage";

export const useGetBanner = () => {
  return useQuery({
    queryKey: ["banners"], // Unique query key
    queryFn: () => getBannerList(),
  });
};
