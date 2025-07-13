import React from "react";
import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";
// import Select from "react-select";
function BookingsCard(props) {
  const { data } = props;
  return (
    <div>
      <div className="dash-widget h-75 mt-2">
        <div className={`dash-content dash-count flex-grow-1 ${!data.dueStatus && 'pt-2 pb-2 mt-2'}`}>
          <h6 className="text-black">{data.type === "currency" ? "₹" : ""} {data.bookings}</h6>
          <p>
            <span className="passive-view">{data.dueStatus}</span>
          </p>
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
