import React from "react";
import { right_chevron } from "../imagepath";
import TransactionTable from "./Transactions/TransactionTable";

function Finance() {
  return (
    <div>
      <div className="row pt-2">
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <p>
                <span className="text-warning">REQUESTED AMOUNT</span>
              </p>
              <div className="row">
                <p className="col">Requested On 24-11-2024</p>
                {/* <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div> */}
              </div>
              <div>
                <button
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#save_invocies_details"
                  className="btn hospital-add-btn rounded-pill text-white mt-2"
                >
                  Paid fully
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 0</h6>
              <p>
                <span className="text-danger">NO DUES</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Total Revenue In Month</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <p>
                <span className="passive-view">No Dues</span>
              </p>
              <div className="row">
                <p className="text-dark mt-2 col">Total Balance</p>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-box mt-0">
        <h5>Transactions</h5>
        <TransactionTable/>
      </div>
    </div>
  );
}

export default Finance;
