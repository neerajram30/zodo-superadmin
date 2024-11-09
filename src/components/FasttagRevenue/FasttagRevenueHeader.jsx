import React from "react";
import { useNavigate } from "react-router-dom";
import { arrow_left } from "../imagepath";

function FasttagRevenueHeader() {
    const navigate = useNavigate();
  return (
    <div className="card-box profile-header mb-4">
      <h5>
        <span onClick={() => navigate(-1)}>
          <img src={arrow_left} alt="" />
        </span>
        <span className="ms-2">Fast Tag Revenue</span>
      </h5>
    </div>
  );
}

export default FasttagRevenueHeader;
