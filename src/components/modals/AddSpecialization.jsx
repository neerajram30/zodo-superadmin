import PropTypes from "prop-types";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useAddSpecialisation } from "../../hooks/specialisation/useAddSpecialisation";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import TextArea from "../InputFields/TextArea";
import ChooseFile from "../Hospitals/ChooseFile";

function AddSpecialization(props) {
  const { show, setShow } = props;
  const { mutate, isLoading } = useAddSpecialisation();
  const [fileURL, setFileURL] = useState("");
  const methods = useForm();
  const onCreateSpecialisation = async (data) => {
    const specialisation = {
      name: data.specialisationName,
      description: data.message,
      image:fileURL
    };
    await mutate(specialisation);
    methods.reset();
    setShow(false);
  };

  const handleFileURL = (url) => {
    setFileURL(url);
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
            <form onSubmit={methods.handleSubmit(onCreateSpecialisation)}>
              <div className="row">
                <div className="col-md-12 ms-md-2">
                  <ChooseFile handleFileURL={handleFileURL} fileURL={fileURL} />
                </div>
              </div>
              <div className="form-group mt-3">
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
      {/* <ToastMessage showToast={showToast} setShowToast={setShowToast} /> */}
    </div>
  );
}

AddSpecialization.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
};

export default AddSpecialization;
