import { Modal } from "antd";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import TextArea from "../InputFields/TextArea";
import ToastMessage from "../toast/ToastMessage";
import { useEditSpecialisation } from "../../hooks/specialisation/useEditSpecialisation";
import PropTypes from "prop-types";

function EditSpecialization(props) {
  const { show, setShow } = props;
  const { mutate, isLoading, showToast, setShowToast } =
    useEditSpecialisation();
  const methods = useForm();
  const onEditSpecialisation = async (data) => {
    const specialisation = {
      name: data.specialisationName,
      description: data.message,
    };
    await mutate(specialisation);
    // methods.reset();
  };
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
          <Modal.Title>Specialisation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onEditSpecialisation)}>
              <div className="form-group">
                <div className="col-md-12">
                  <InputField
                    name="specialisationName"
                    label="Specialisation Name"
                    validation={{ required: "Specialisation Name is required" }}
                    placeholder="Enter Specialisation Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <TextArea
                    name="message"
                    label="Message"
                    placeholder="Type message here"
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
      <ToastMessage showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
}


EditSpecialization.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
};

export default EditSpecialization;
