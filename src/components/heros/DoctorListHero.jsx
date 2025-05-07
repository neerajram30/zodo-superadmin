import React from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";
import { addicon } from "../imagepath";

function DoctorListHero() {
  return (
    <div className="page-header invoices-page-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Doctors List</h3>
          </div>
          <div className="ms-3 w-50">
            <SearchBox />
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="d-flex w-100 flex-column flex-md-row">
            <Link
              to="/manage-doctors/specialization"
              className="hospital-draft-btn rounded-pill text-primary doctor-list-btn-manage"
            >
              Manage Specialisation
            </Link>
            <Link
              to="/manage-doctors/add-doctors"
              className="hospital-add-btn rounded-pill ms-1 text-white doctor-list-btn-add"
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2">Add Doctor</span>
            </Link>
          </div>
          {/* <div className="w-25 d-flex justify-content-between ps-3 pe-3">
            <Link to="#" className="">
              <img src={pdficon} alt="#" />
            </Link>
            <Link to="#" className="">
              <img src={pdficon3} alt="#" />
            </Link>
            <Link to="#">
              <img src={pdficon4} alt="#" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DoctorListHero;
