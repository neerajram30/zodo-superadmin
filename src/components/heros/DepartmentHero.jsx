import React from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";

function DepartmentHero() {
  return (
    <div className="page-header invoices-page-header mt-2">
      <div className="row align-items-center">
        <div className="col-1">
          <h5>All Departments</h5>
        </div>
        <div className="col-11 col-md">
          <div className="w-50">
            <SearchBox />
          </div>
        </div>
        <div className="col-auto">
          <div className="invoices-create-btn">
            
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
            >
              Add Department
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentHero;
