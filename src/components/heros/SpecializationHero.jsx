import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import AddSpecialization from "../modals/AddSpecialization";
import { addicon, uploadfiles_icon } from "../imagepath";

function SpecializationHero() {
  const [show, setShow] = useState(false);
  return (
    <div className="page-header invoices-page-header mb-2 mt-3">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Specialisation</h3>
          </div>
          <div className="ms-3 w-50">
            <SearchBox />
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="d-flex w-100 flex-column flex-md-row justify-content-end">
            <Link
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-draft-btn rounded-pill text-primary specialization-upload-btn"
            >
              <img src={uploadfiles_icon} alt="upload" />
              <span className="ms-2 me-2"> Upload Files</span>
            </Link>
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-add-btn rounded-pill ms-1 text-white specialization-add-btn"
              onClick={() => setShow(true)}
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2"> Add Specialisation</span>
            </Link>
          </div>
        </div>
      </div>
      <AddSpecialization show={show} setShow={setShow} />
    </div>
  );
}

export default SpecializationHero;
