import PropTypes from "prop-types";
import React from "react";
import { right_chevron } from "../imagepath";
import { Link } from "react-router-dom";

function HospitalRequestCard(props) {
  const { hospitalData } = props;
  return (
    <div className="card invoices-grid-card w-100" key={hospitalData.id}>
      <Link to={`/manage-hospitals/${hospitalData.id}`}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={hospitalData.logo} alt="#" />
            </div>
            <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{hospitalData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">
                  {hospitalData.completed} Completed
                </h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="invoices-create-btn">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_invoices_details"
                  className="btn hospital-draft-btn rounded-pill text-primary"
                >
                  Approve
                </Link>
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#save_invocies_details"
                  className="btn hospital-add-btn rounded-pill ms-1"
                >
                  Review Now
                </Link>
              </div>
            </div>

            {/* <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>{hospitalData.totalFasttags}</h5>
              </div>
            </div> */}

            {/* <div className="row">
              <div className="col text-secondary">
                <p>TODAY BOOKING</p>
              </div>
              <div className="col-auto">
                <h5>{hospitalData.todayBookings}</h5>
              </div>
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

HospitalRequestCard.propTypes = {
  hospitalData: PropTypes.node,
};
export default HospitalRequestCard;
