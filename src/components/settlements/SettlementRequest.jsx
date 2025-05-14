import PropTypes from "prop-types";
import React from "react";
import SettlementRequestCard from "./SettlementRequestCard";
import FullscreenLoader from "../loadings/FullscreenLoader";

function SettlementRequest(props) {
  const { data, loading} = props;

  return (
    <div className="row mt-2">
      {data?.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <SettlementRequestCard data={item}/>
        </div>
      ))}
      {loading && <FullscreenLoader />}
    </div>
  );
}

SettlementRequest.propTypes = {
  data: PropTypes.node,
  loading: PropTypes.node,
};

export default SettlementRequest;
