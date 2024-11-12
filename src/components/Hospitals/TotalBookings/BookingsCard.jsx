import React, { useState } from "react";
import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";
// import Select from "react-select";
function BookingsCard(props) {
  const { data } = props;
    const [selectedOption] = useState({
      value: "nov",
      label: "Nov",
    });
  const months = [
    { value: "jan", label: "Jan" },
    { value: "feb", label: "Feb" },
    { value: "mar", label: "Mar" },
    { value: "apr", label: "Apr" },
    { value: "may", label: "May" },
    { value: "jun", label: "Jun" },
    { value: "jul", label: "Jul" },
    { value: "aug", label: "Aug" },
    { value: "sep", label: "Sep" },
    { value: "oct", label: "Oct" },
    { value: "nov", label: "Nov" },
    { value: "dec", label: "Dec" },
  ];
  return (
    <div>
      <div className="dash-widget h-75">
        <div className="w-50">
          <select className="form-select" aria-label="Default select example">
          <option value={selectedOption.value} selected>{selectedOption.label}</option>
            {months.map((month, i) => (
              <option value={month.value} key={month.value + i}>{month.label}</option>
            ))}
          </select>
          
        </div>
        <div className="dash-content dash-count flex-grow-1 mt-4">
          <h6>{data.bookings}</h6>
          <div className="row">
            <p className="text-dark col">{data.operation}</p>
            <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BookingsCard.propTypes = {
  varient: PropTypes.node,
  data: PropTypes.node,
};

export default BookingsCard;
