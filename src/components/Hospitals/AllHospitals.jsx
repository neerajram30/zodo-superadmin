import React from "react";
// import { hospitalDetails } from "../configs/hospitalDetails";
import HospitalCard from "./HospitalCard";
import PropTypes from "prop-types";

function AllHospitals(props) {
  const { hospitalList } = props;

  return (
    <div className="row mt-2">
      {hospitalList?.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          {console.log(item?.id)}
          <HospitalCard hospitalData={item} hospitalId={item?.id} />
        </div>
      ))}
    </div>
  );
}

AllHospitals.propTypes = {
  hospitalList: PropTypes.node,
};

export default AllHospitals;
