import { useInfiniteQuery } from "@tanstack/react-query";
import { getHospitals } from "../../apis/hospitals";

export const useGetHospitals = (query = "", status="") => {
  return useInfiniteQuery({
    queryKey: ["hospitals", query, status], // Unique query key
    queryFn: ({ pageParam = 1 }) => getHospitals({ pageParam, query, status }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.meta?.currentPage ?? 1;
      const totalPages = lastPage?.meta?.totalPages ?? 1;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });
};
