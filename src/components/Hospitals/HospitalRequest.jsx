import React from "react";
import HospitalRequestCard from "./HospitalRequestCard";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";

function HospitalRequest(props) {
  const { hospitalList, loading } = props;

  return (
    <div className="row mt-2">
      {!loading ? (
        <>
          {hospitalList.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <HospitalRequestCard hospitalData={item} />
            </div>
          ))}
        </>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
}

HospitalRequest.propTypes = {
  hospitalList: PropTypes.node,
  loading: PropTypes.node,
};

export default HospitalRequest;
