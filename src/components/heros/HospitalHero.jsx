import React from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";

function HospitalHero() {
  return (
    <div className="page-header invoices-page-header mt-2">
      <div className="row align-items-center">
        <div className="col-12 col-md-1 hero-title">
          <h5>All Hospitals</h5>
        </div>
        <div className="col-12 col-md-3 ms-md-3">
          <div className="doctor-list-search">
            <div className="search-container">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="col-md col-sm-12">
          <div className="invoices-create-btn d-flex justify-content-md-end">
            <Link
              to="/manage-hospitals/add-hospital"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
            >
              Add Hospital
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalHero;
