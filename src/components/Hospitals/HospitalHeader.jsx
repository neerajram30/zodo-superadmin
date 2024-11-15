import React from "react";
import { Link } from "react-router-dom";
import { searchnormal } from "../imagepath";

function HospitalHeader() {
  return (
    <div className="page-header invoices-page-header">
      <div className="row align-items-center">
        <div className="col">
          <ul className="breadcrumb invoices-breadcrumb">
            <li className="breadcrumb-item invoices-breadcrumb-item d-flex align-items-center">
              {/* <Link to="/invoice-list">
                <i className="fa fa-chevron-left" /> Back to Invoice List
              </Link> */}
              <h5>All Hospitals</h5>
                {/* <div className="hospital-search">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <Link className="btn">
                      <img src={searchnormal} alt="" />
                    </Link>
                  </form>
                </div> */}

                <div className="top-liv-search top-chat-search">
                  <form>
                    <div className="chat-search pt-4 ms-3">
                      <div className="form-group me-2 mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here"
                        />
                        <Link className="btn">
                          <img src={searchnormal} alt="#" />
                        </Link>
                      </div>
                      {/* <div className="add-search">
                        <Link to="#">
                          <i className="fa fa-plus" />
                        </Link>
                      </div> */}
                    </div>
                  </form>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-9 col-md-auto col-lg-auto">
          <div className="invoices-create-btn">
            {/* <Link
              className="invoices-preview-link"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#invoices_preview"
            >
              <i className="fa fa-eye" /> Preview
            </Link> */}
            {/* <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_invoices_details"
              className="btn hospital-draft-btn rounded-pill text-primary"
            >
              My Draft
            </Link> */}
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

export default HospitalHeader;
