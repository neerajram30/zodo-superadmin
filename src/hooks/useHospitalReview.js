import { useQuery } from "@tanstack/react-query";
import { getHospitalReview } from "../apis/reviews";

export const useHospitalReview = (hospital_id) => {
    return useQuery({
      queryKey: ["reviews", hospital_id], // Unique query key
      queryFn: () => getHospitalReview(hospital_id),
    });
  };
  