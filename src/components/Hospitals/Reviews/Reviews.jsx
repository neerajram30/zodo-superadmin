import React from "react";
import Review from "./Review";
import ReviewHero from "../../heros/ReviewHero";
import { useValidateId } from "../../../hooks/useValidateId";
import { useParams } from "react-router-dom";
import { useHospitalReview } from "../../../hooks/useHospitalReview";

function Reviews() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const { data: reviews, isLoading } = useHospitalReview(validId);
  return (
    <div>
      <ReviewHero />
      <Review reviews={reviews ?? []} isLoading={isLoading}/>
    </div>
  );
}

export default Reviews;
