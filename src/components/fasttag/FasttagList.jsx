import React from "react";
import FasttagCard from "./FasttagCard";
import ComponentLoader from "../loadings/ComponentLoader";
import PropTypes from "prop-types";

function FasttagList(props) {
  const { hospitalList, loading } = props;

  return (
    <div className="row mt-3">
      {!loading ? (
        <>
          {hospitalList?.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <FasttagCard hospitalData={item} hospitalId={item?.id} />
            </div>
          ))}
        </>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
}

// props validation
FasttagList.propTypes = {
  hospitalList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FasttagList;
