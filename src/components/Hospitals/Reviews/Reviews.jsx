import { useState } from "react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { useHospitalReview } from "../../../hooks/review/useHospitalReview";
import BasicSearchHero from "../../heros/BasicSearchHero";

function Reviews() {
  const { id } = useParams();
  const [searchTerm,setSearchterm] = useState("");
  const query = `name=${searchTerm}`
  const { data: reviews, isLoading } = useHospitalReview(id,query);
  const handleSearchterm = (term)=>{
    setSearchterm(term)
  }
  return (
    <div className="mt-3">
      <BasicSearchHero 
      
      title="Reviews" 
      handleSearchterm={handleSearchterm}
      />
      <Review reviews={reviews ?? []} isLoading={isLoading} />
    </div>
  );
}

export default Reviews;
