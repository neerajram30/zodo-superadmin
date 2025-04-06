import PropTypes from "prop-types";
import React from "react";
import { apollo_logo, right_chevron } from "../imagepath";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function HospitalCard(props) {
  const { hospitalData, hospitalId } = props;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handelClick = () => {
    queryClient.invalidateQueries(["departments", hospitalId]);
    navigate(`/manage-hospitals/${hospitalId}`);
  }


  return (
    <div className="card invoices-grid-card w-100" key={hospitalId}>
      <a to onClick={handelClick}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={apollo_logo} alt="#" />
            </div>
            <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{hospitalData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">{hospitalData?.current}</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>{hospitalData?.fastTag?.count}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col text-secondary">
                <p>TODAY BOOKING</p>
              </div>
              <div className="col-auto">
                <h5>0</h5>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

HospitalCard.propTypes = {
  hospitalData: PropTypes.node,
  hospitalId: PropTypes.node,
};
export default HospitalCard;
