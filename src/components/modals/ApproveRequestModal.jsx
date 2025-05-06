import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

function ApproveRequestModal(props) {
  const { show, setShow, title, handleRequest } = props;

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdropClassName="hospital-modal-backdrop"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            Are you sure you want to approve the {title} ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <div className="form-group">
            <label className="col-form-label col-md-4">Add remarks</label>
            <div className="">
              <textarea
                rows={5}
                cols={5}
                className="form-control modal-input"
                placeholder="Write Here.."
                defaultValue={""}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <button
            to="#"
            // data-bs-toggle="modal"
            // data-bs-target="#delete_invoices_details"
            className="hospital-draft-btn text-primary modal-btn"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
          <button
            to="#"
            // data-bs-toggle="modal"
            // data-bs-target="#save_invocies_details"
            className="hospital-add-btn ms-1 text-white modal-btn border-0"
            onClick={()=>handleRequest()}
          >
            Yes, Approve
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ApproveRequestModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  title: PropTypes.string,
  handleRequest: PropTypes.func,
};

export default ApproveRequestModal;
