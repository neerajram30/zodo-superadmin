import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

function LinksForm() {
  const methods = useForm();
  const onUploadLinks = (data) => {
    console.log(data);
  };
  return (
    <div className="card ps-3 pe-3 pb-5">
      <div className="card-header">
        <h5 className="card-title">App links</h5>
      </div>
      <div className="settings-form w-100">
        <div className="links-info">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onUploadLinks)}>
              <div className="form-group d-flex w-100 justify-content-start">
                <button className="btn social-icon ">
                  <i className="feather-facebook">
                    <FeatherIcon icon="link" />
                  </i>
                </button>
                <div className="w-100">
                  <InputField
                    name="privactPolicy"
                    label=""
                    validation={{
                      required: "Privacy policy link is required",
                    }}
                    placeholder="Privacy policy link"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group d-flex w-100 justify-content-start">
                <button className="btn social-icon ">
                  <i className="feather-facebook">
                    <FeatherIcon icon="link" />
                  </i>
                </button>
                <div className="w-100">
                  <InputField
                    name="terms"
                    label=""
                    validation={{
                      required: "Terms and conditions link is required",
                    }}
                    placeholder="Terms & conditions link"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group d-flex w-100 justify-content-start">
                <button className="btn social-icon ">
                  <i className="feather-facebook">
                    <FeatherIcon icon="link" />
                  </i>
                </button>
                <div className="w-100">
                  <InputField
                    name="connect"
                    label=""
                    validation={{
                      required: "Connect link is required",
                    }}
                    placeholder="Connect us link"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-50 ms-2 mt-2">
                <button className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2">
                  Save
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default LinksForm;
