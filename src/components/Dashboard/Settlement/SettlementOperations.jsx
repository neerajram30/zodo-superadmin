import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactHospital from "../../modals/ContactHospital";

function SettlementOperations(props) {
  const { approveRequest, isLoading, status, declineRequest, hospitalDetails } =
    props;
    console.log("Doctor details ",hospitalDetails);
    
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  return (
    <div className="row pb-4">
      <div className="settings-btns col-md-6 col-sm-12">
        <button
          type="submit"
          className="btn-outline-primary rounded pt-2 pb-2 ps-5 pe-5 d-none d-md-block"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        &nbsp;&nbsp;
      </div>

      <div className="settings-btns col-md-6 col-sm-12 mt-md-0 mt-2">
        <div className="d-flex justify-content-md-end justify-content-center flex-column flex-md-row">
          {/* &nbsp;&nbsp;
          <button
            type="submit"
            className="btn-outline-primary rounded pt-2 pb-2 ps-4 pe-4"
          >
            Contact Them
          </button> */}
            <button
              type="submit"
              className="btn-outline-primary rounded pt-2 pb-2 ps-5 pe-5"
              onClick={() =>setShow(true)}
            >
              Contact Them
            </button>
          &nbsp;&nbsp;
          {status !== "rejected" && (
            <button
              type="submit"
              className="btn-outline-danger rounded pt-2 pb-2 ps-5 pe-5"
              onClick={() => declineRequest()}
            >
              Decline
            </button>
          )}
          &nbsp;&nbsp;
          {status !== "active" && (
            <button
              type="submit"
              className="border-0 btn-primary btn-main-primary text-white ps-5 pe-5"
              onClick={() => approveRequest()}
            >
              {isLoading && (
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
              )}
              <span className="ps-2">Approve</span>
            </button>
          )}
        </div>
      </div>
      <ContactHospital
        setShow={setShow}
        show={show}
        data={hospitalDetails}
      />
    </div>
  );
}

SettlementOperations.propTypes = {
  approveRequest: PropTypes.func,
  isLoading: PropTypes.bool,
  status: PropTypes.string,
  declineRequest: PropTypes.func,
  hospitalDetails: PropTypes.object,
};

export default SettlementOperations;
