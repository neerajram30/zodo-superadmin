import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { apollo_logo } from "../imagepath";
import { formatDate } from "fullcalendar/index.js";

function SettlementCard(props) {
  const { data } = props;
  const getDuestatus = (inputdate)=>{
    const date = new Date(inputdate);
    const now = new Date();
    if(date < now){
      return "OVER DUE AMOUNT";
    }
    else if(date > now){
      return "REQUEST AMOUNT";
    }
  }
  return (
    <div className="card invoices-grid-card w-100">
      <Link to={`/dashboard/settlement-requests/${data.id}`}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={apollo_logo} alt="#" />
            </div>
            <div className="col-auto">
              <span className={data.status === "rejected" && `text-danger` || data.status === "requested" && `text-warning` || `text-success`}>●</span>
            
              {/* <h5 className="custom-badgestatus-orange">{data.status}</h5> */}
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>Hospital name</h5>
              </div>
              {/* <div className="col-auto">
                <h5 className="text-primary">{data.status}</h5>
              </div> */}
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p className={`${getDuestatus(data?.request_date) === "OVER DUE AMOUNT" ? "custom-badge status-red" :"custom-badge status-orange"}`}>{getDuestatus(data?.request_date)}</p>
              </div>
              <div className="col-auto">
                <h5>₹ {data.amount}</h5>
              </div>
            </div>

            <div className="row">
              <p>Requested On {formatDate(data?.request_date)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

SettlementCard.propTypes = {
  data: PropTypes.node,
};

export default SettlementCard;
