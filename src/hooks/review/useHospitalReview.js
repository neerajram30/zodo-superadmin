import { useQuery } from "@tanstack/react-query";
import { getHospitalReview, getHospitalReviewByQuery } from "../../apis/reviews";

export const useHospitalReview = (hospital_id, query) => {
  return useQuery({
    queryKey: ["reviews", hospital_id, query], // Unique query key
    queryFn: () =>
      query
        ? getHospitalReviewByQuery(hospital_id, query)
        : getHospitalReview(hospital_id),
  });
};
