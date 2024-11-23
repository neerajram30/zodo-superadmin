import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import AddSpecialization from "../modals/AddSpecialization";
import { addicon, uploadfiles_icon } from "../imagepath";

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
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-draft-btn rounded-pill text-primary ps-4 pe-4 pt-2 pb-2"
            >
              <img src={uploadfiles_icon} alt="upload" />
              <span className="ms-2 me-2"> Upload Files</span>
            </Link>
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
              onClick={() => setShow(true)}
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2"> Add Specialisation</span>
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
      <AddSpecialization show={show} setShow={setShow} />
    </div>
  );
}

export default SpecializationHero;
