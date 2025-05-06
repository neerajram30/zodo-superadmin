import React from "react";
import HospitalRequestCard from "./HospitalRequestCard";
import PropTypes from "prop-types";

function HospitalRequest(props) {
  const { hospitalList } = props;

  return (
    <div className="row mt-2">
      {hospitalList.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <HospitalRequestCard hospitalData={item} />
        </div>
      ))}
    </div>
  );
}

HospitalRequest.propTypes = {
  hospitalList: PropTypes.node,
  loading: PropTypes.node,
};

export default HospitalRequest;
