import React from "react";
import HospitalCard from "./HospitalCard";
import PropTypes from "prop-types";

function HospitalsList(props) {
  const { hospitalDetails } = props;
  return (
    <div className="row mt-4">
      {hospitalDetails.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <HospitalCard hospitalData={item} />
        </div>
      ))}
    </div>
  );
}

HospitalsList.propTypes = {
  hospitalDetails: PropTypes.node,
};

export default HospitalsList;
