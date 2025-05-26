import React from "react";
// import { hospitalDetails } from "../configs/hospitalDetails";
import HospitalCard from "./HospitalCard";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";

function AllHospitals(props) {
  const { hospitalList, loading } = props;

  return (
    <div className="row mt-2">
      {!loading ? (
        <>
          {hospitalList?.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <HospitalCard hospitalData={item} hospitalId={item?.id} />
            </div>
          ))}
        </>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
}

AllHospitals.propTypes = {
  hospitalList: PropTypes.node,
  loading: PropTypes.node,
};

export default AllHospitals;
