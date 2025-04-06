import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";
import useDeleteDepartment from "../../../hooks/departments/useDeleteDepartment";
import { useParams } from "react-router-dom";

function DeleteDepartment(props) {
  const { show, setShow, departmentId } = props;
  const { id } = useParams();
  const { mutate, isLoading: deleteLoading } = useDeleteDepartment(id);
  const handleDelete = async () => {
    await mutate(departmentId);
  };
  console.log(deleteLoading);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="hospital-modal-backdrop"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Are you sure you want to delete department?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div className="form-group">
          <label className="col-form-label col-md-4">Reason For Deleting</label>
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
          className="hospital-draft-btn text-primary modal-btn"
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
        <button
          to="#"
          className="hospital-add-btn ms-1 text-white modal-btn border-0"
          onClick={handleDelete}
        >
          Yes, Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteDepartment.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  departmentId: PropTypes.node,
};

export default DeleteDepartment;
