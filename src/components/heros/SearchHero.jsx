import React from "react";
import { Link } from "react-router-dom";

function SearchHero() {
  return (
    <div className="page-header invoices-page-header mt-2">
      <div className="row align-items-center">
        <div className="col">
          {/* <ul className="breadcrumb invoices-breadcrumb">
            <li className="breadcrumb-item invoices-breadcrumb-item">
              <Link to="/invoice-list">
                <i className="fa fa-chevron-left" /> Back to Invoice List
              </Link>
            </li>
          </ul> */}
          <h5>All Reviews</h5>
        </div>
        <div className="col-auto">
          <div className="invoices-create-btn">
            
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#save_invocies_details"
              className="btn save-invoice-btn"
            >
              Sort By
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHero;
