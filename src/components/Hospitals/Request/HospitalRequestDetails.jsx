import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  apollo_logo,
  arrow_left,
  email_icon,
  pencil_icon,
  phone_icon,
  search_outline_icon,
  three_dots_menu,
} from "../../imagepath";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import FastTag from "../FastTag";
import HospitalDocuments from "./HospitalDocuments";
import PropTypes from "prop-types";

function HospitalRequestDetails(props) {
  const { id } = useParams();
  const { hospitalDetails, isLoading } = props;
  const navigate = useNavigate();
  return (
    <div className="mt-3">
      <div className="card-box profile-header rounded-bottom-0 pb-4 mb-3">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="basic-hero-header">
              <Link to onClick={() => navigate(-1)}>
                <img src={arrow_left} alt="" />
              </Link>
              <span className="ms-3">Hospital Details</span>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="customdropdown"
              >
                <img src={three_dots_menu} alt="" />
              </Link>
              <div className="dropdown-menu" aria-labelledby="customdropdown">
                <Link
                  className="dropdown-item d-flex"
                  to={`/manage-hospitals/manage-request/${id}/edit`}
                >
                  <img
                    src={pencil_icon}
                    alt="edit"
                    className="dropdown-menu-icon"
                  />
                  <span className="ps-2">Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <div className="hospital-img-wrap">
                  <div className="profile-img">
                    <Link to="#">
                      <img className="" src={apollo_logo} alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ps-4">
                {/* <div className="col-md-4"> */}
                <div className="profile-info-left pt-3">
                  <h3 className="user-name m-t-0 mb-0">
                    {hospitalDetails?.name}
                  </h3>
                  {/* <small className="text-muted">
                          multinational healthcare group
                        </small> */}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 ps-md-5">
            <ul className="personal-info ps-md-5">
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={phone_icon} alt="phone" />{" "}
                    <span className="ms-1">
                      {hospitalDetails?.contact_details?.mobile ??
                        "No phone number"}
                    </span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={email_icon} alt="email" />{" "}
                    <span className="ms-1">
                      {hospitalDetails?.contact_details?.email ?? "No email"}
                    </span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to>
                    <img src={search_outline_icon} alt="website" />{" "}
                    <span className="ms-1">
                      {hospitalDetails?.contact_details?.website ?? (
                        <span className="text-dark">No website</span>
                      )}
                    </span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
            <h6>
              <span>GSTIN</span>{" "}
              <span className="fw-semibold text-black">
                {hospitalDetails?.gst}
              </span>
            </h6>
            <button className="hospital-draft-btn text-primary w-75 mt-1 pt-1 pb-1">
              {!hospitalDetails?.isDisabled ? "Active" : "Inactive"}
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <ul className="personal-info">
              <li>
                <span className="title">Address:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">
                    {hospitalDetails?.address?.lineOne +
                      " " +
                      hospitalDetails?.address?.lineTwo +
                      " " +
                      hospitalDetails?.address?.city}
                  </p>
                </span>
              </li>
              <li>
                <span className="title">District:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">
                    {hospitalDetails?.address?.district}
                  </p>
                </span>
              </li>
              <li>
                <span className="title">State:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">
                    {hospitalDetails?.address?.state}
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-5">
            <div className="row border border-secondary-subtle pt-3 pb-1">
              <div className="col">
                <ul className="payment-info w-1">
                  <li>
                    <span className="payment-title">
                      Account Number:{" "}
                      <span className="fw-semibold text-black">
                        {hospitalDetails?.bank_details?.account_number}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      Account Holder Name:{" "}
                      <span className="fw-semibold text-black">
                        {hospitalDetails?.bank_details?.account_holder}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="payment-info">
                  <li>
                    <span className="payment-title">
                      IFSC Code:{" "}
                      <span className="fw-semibold text-black">
                        {hospitalDetails?.bank_details?.ifsc}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      UPI ID:{" "}
                      <span className="fw-semibold text-black">
                        {hospitalDetails?.bank_details?.upi_id}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col mt-4 mt-md-0">
            <FastTag
              fastTagDetails={hospitalDetails?.fastTag}
              toggleFasttag={true}
            />
          </div>
          <HospitalDocuments />
        </div>
      </div>
      {isLoading && <FullscreenLoader />}
    </div>
  );
}

HospitalRequestDetails.propTypes = {
  hospitalDetails: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default HospitalRequestDetails;
