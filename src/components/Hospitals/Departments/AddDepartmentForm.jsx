import { useAddDepartment } from "../../../hooks/departments/useAddDepartment";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../InputFields/InputField";
import TextArea from "../../InputFields/TextArea";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function AddDepartmentForm(props) {
  const { handleClose } = props;
  const { id } = useParams();
  const { mutate, isLoading } = useAddDepartment();
  const methods = useForm();
  const onCreateDepartment = async (data) => {
    const department = {
      name: data.departmentName,
      description: data.message,
      hospital_id: id,
    };
    await mutate(department, {
      onSuccess: () => {
        methods.reset();
        handleClose();
      },
    });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onCreateDepartment)}>
        <div className="form-group">
          <div className="col-md-12">
            <InputField
              name="departmentName"
              label="Department Name"
              validation={{ required: "Department Name is required" }}
              placeholder="Enter Department Name"
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
            onClick={() => handleClose()}
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
  );
}

AddDepartmentForm.propTypes = {
  handleClose: PropTypes.func,
};

export default AddDepartmentForm;
