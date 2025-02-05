import React, { useState } from "react";
// import SwitchSelector from "react-switch-selector";
import Select from "react-select";
import FasttagToggle from "../FasttagRevenue/FasttagToggle";
import PropTypes from "prop-types";

function FastTag(props) {
  const { fastTagDetails } = props;
  console.log(fastTagDetails);

  const [selectedOption, setSelectedOption] = useState({
    label: fastTagDetails?.count,
    value: fastTagDetails?.count,
  });
  const [tagsCount] = useState([
    { label: 0, value: 0 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 20, value: 20 },
    { label: 25, value: 25 },
  ]);
  return (
    <div>
      <div className="d-flex">
        <h5 className="ms-md-5 pt-1">FAST TAG</h5>
        <div className="ms-5">
          <FasttagToggle />
        </div>
      </div>
      <div className="mt-3 ps-md-5">
        <h5>Select Fast Tag Count Per Day</h5>
        <div className="w-75">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={tagsCount}
          />
        </div>
      </div>
    </div>
  );
}

FastTag.propTypes = {
  fastTagDetails: PropTypes.node,
};

export default FastTag;
