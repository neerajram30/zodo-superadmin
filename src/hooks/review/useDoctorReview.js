import { useQuery } from "@tanstack/react-query";
import { getDoctorReview, getDoctorReviewByQuery } from "../../apis/reviews";

export const useDoctorReview = (doctor_id, query) => {
  return useQuery({
    queryKey: ["doctor_reviews", doctor_id, query], // Unique query key
    queryFn: () =>
      query
        ? getDoctorReviewByQuery(doctor_id, query)
        : getDoctorReview(doctor_id),
  });
};
