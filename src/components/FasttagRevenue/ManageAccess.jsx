import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactHospital from "../modals/ContactHospital";

function ManageAccess(props) {
  const { record } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="row mt-2 w-75">
      <div className="invoices-create-btn-table">
        <Link
          to="#"
          onClick={() => setShow(true)}
          // data-bs-toggle="modal"
          // data-bs-target="#delete_invoices_details"
          className="hospital-draft-btn rounded-pill text-primary manage-access"
        >
          Contact them
        </Link>
        <Link
          to={`/manage-hospitals/manage-request/${record.id}`}
          // data-bs-toggle="modal"
          // data-bs-target="#save_invocies_details"
          className="hospital-add-btn rounded-pill ms-md-1 text-white manage-access"
        >
          Approve
        </Link>
        <ContactHospital setShow={setShow} show={show} data={record} />
      </div>
    </div>
  );
}

ManageAccess.propTypes = {
  record: PropTypes.object,
};

export default ManageAccess;
