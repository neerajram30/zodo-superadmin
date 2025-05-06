import React from "react";
// import SwitchSelector from "react-switch-selector";
import FasttagToggle from "../FasttagRevenue/FasttagToggle";
import PropTypes from "prop-types";

function FastTag(props) {
  const { fastTagDetails, toggleFasttag } = props;

  return (
    <div>
      <div className="d-flex">
        <h5 className="ms-md-5 pt-1">FAST TAG</h5>
        <div className="ms-5">
          <FasttagToggle toggleFasttag={toggleFasttag} />
        </div>
      </div>
      <div className="mt-3 ps-md-5">
        <h5>Fast Tag Count Per Day</h5>
        <div className="w-50">
          <input className="form-control border border-secondary-subtle" value={fastTagDetails?.count ?? 0} />
        </div>
      </div>
    </div>
  );
}

FastTag.propTypes = {
  fastTagDetails: PropTypes.node,
  toggleFasttag: PropTypes.bool,
};

export default FastTag;
