import React from "react";
import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";

function BookingsCard(props) {
    const { data } = props;
  return (
    <div >
      <div className="dash-widget h-75">
        <div className="dash-content dash-count flex-grow-1">
          <h6>{data.bookings}</h6>
          <div className="row">
            <p className="text-dark mt-2 col">{data.operation}</p>
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
