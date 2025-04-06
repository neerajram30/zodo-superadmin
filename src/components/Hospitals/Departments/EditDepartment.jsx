import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";
import InputField from "../../InputFields/InputField";
import { FormProvider, useForm } from "react-hook-form";
import TextArea from "../../InputFields/TextArea";
import { useEditDepartment } from "../../../hooks/departments/useEditDepartment";

function EditDepartment(props) {
  const { show, setShow, departmentData } = props;
  const methods = useForm();
  const { mutate, isLoading } = useEditDepartment();
  console.log(isLoading);

  const onEditDepartment = async (data) => {
    const departmentId = departmentData?.id;
    
    const department = {
      name: data.departmentName,
      description: data.message,
      hospital_id: data.hospital_id,
    };
    await mutate({ id: departmentId, data: department });
    methods.reset();
  };
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
        <Modal.Title>Specialisation</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onEditDepartment)}>
            <div className="form-group">
              <div className="col-md-12">
                <InputField
                  name="departmentName"
                  label="Department Name"
                  validation={{ required: "Department Name is required" }}
                  placeholder="Enter Department Name"
                  type="text"
                  defaultValue={departmentData?.name}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <TextArea
                  name="message"
                  label="Message"
                  placeholder="Type message here"
                  defaultValue={departmentData?.message}
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-end pt-3">
              <button
                to="#"
                //   data-bs-toggle="modal"
                //   data-bs-target="#delete_invoices_details"
                className="hospital-draft-btn text-primary pt-1 pb-1 ps-3 pe-3 rounded"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button
                to="#"
                //   data-bs-toggle="modal"
                //   data-bs-target="#save_invocies_details"
                className="hospital-add-btn ms-1 text-white border-0 pt-1 pb-1 ps-3 pe-3 rounded"
                // onClick={handleEdit}
              >
                {isLoading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                <span className="ps-2">Save</span>
              </button>
            </div>
          </form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}

EditDepartment.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  departmentData: PropTypes.node,
};

export default EditDepartment;
