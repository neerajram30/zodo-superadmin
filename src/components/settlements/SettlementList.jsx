import React from "react";
import SettlementCard from "./SettlementCard";
import PropTypes from "prop-types";
import FullscreenLoader from "../loadings/FullscreenLoader";
// import { apollo_logo } from "../imagepath";

function SettlementList(props) {
  const { data, loading } = props;
  if (loading) {
    return <FullscreenLoader />;
  }
  return (
    <div className="row mt-2">
      {data.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <SettlementCard data={item} />
        </div>
      ))}
    </div>
  );
}

SettlementList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default SettlementList;
