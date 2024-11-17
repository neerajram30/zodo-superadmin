import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import AddSpecialization from "../modals/AddSpecialization";

function SpecializationHero() {
  const [show, setShow] = useState(false);
  return (
    <div className="page-header invoices-page-header mt-2">

<div className="row align-items-center">
        <div className="col-12 col-md-1 hero-title">
          <h5>Specialization</h5>
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
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#save_invocies_details"
              className="btn hospital-draft-btn rounded-pill text-primary"
            >
              Upload Files
            </Link>
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
              onClick={()=> setShow(true)}
            >
              Add Specialization
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="row align-items-center">
        <div className="col-1">
          <h5>Specialization</h5>
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
              className="btn hospital-draft-btn rounded-pill text-primary"
            >
              Upload Files
            </Link>
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
              onClick={()=> setShow(true)}
            >
              Add Specialization
            </Link>
          </div>
        </div>
      </div> */}
      <AddSpecialization show={show} setShow={setShow}/>
    </div>
  );
}

export default SpecializationHero;
