import PropTypes from "prop-types";
import React from "react";

function FasttagToggle(props) {
  const { index, setToggleFasttag } = props;
  return (
    <div className="status-toggle d-flex justify-content-between align-items-center">
      <input
        type="checkbox"
        id={`${index ? "status_" + index : "status_0"}`}
        className="check"
        onChange={(e)=>setToggleFasttag && setToggleFasttag(e.target.checked)}
      />
      <label
        htmlFor={`${index ? "status_" + index : "status_0"}`}
        className="checktoggle"
      >
        checkbox
      </label>
    </div>
  );
}

FasttagToggle.propTypes = {
  index: PropTypes.node,
  setToggleFasttag: PropTypes.node,
};

export default FasttagToggle;
