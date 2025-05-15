import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";

function PlatfromVersions() {
  const methods = useForm();
  const onPlatformVersion = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Platfrom Versions</h5>
        </div>
        <div className="card-body pt-0">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onPlatformVersion)}
              className="ms-3"
            >
              <div className="form-group d-flex w-100 justify-content-start">
                <div className="row w-100">
                  <div className="social-icon border border-success text-success manage-btn col-1">
                    Android
                  </div>
                  <div className="col-3">
                    <div className="ms-2">
                      <InputField
                        name="androidMinimumversion"
                        label=""
                        validation={{
                          required: "Android minimum version is required",
                        }}
                        placeholder="Minimum version"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="ms-2">
                      <InputField
                        name="androidCurrentVersion"
                        label=""
                        validation={{
                          required: "Android current version is required",
                        }}
                        placeholder="Current version"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group d-flex w-100 justify-content-start">
                <div className="row w-100">
                  <div className="social-icon border border-success text-success  manage-btn col-1">
                    IOS
                  </div>
                  <div className="col-3">
                    <div className="ms-2">
                      <InputField
                        name="iosMinimumversion"
                        label=""
                        validation={{
                          required: "IOS minimum version is required",
                        }}
                        placeholder="Minimum version"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="ms-2">
                      <InputField
                        name="iosCurrentVersion"
                        label=""
                        validation={{
                          required: "Ios current version is required",
                        }}
                        placeholder="Current version"
                        type="text"
                      />
                    </div>
                  </div>
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
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Platfrom Fee</h5>
        </div>
        <div className="card-body pt-0">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onPlatformVersion)}
              className="ms-3"
            >
              <div className="form-group row">
                <div className="col-6">
                  <InputField
                    name="serviceFee"
                    label="Services Fee"
                    validation={{
                      required: "Service fee is required",
                    }}
                    placeholder="Enter service commision in %"
                    type="number"
                  />
                </div>

                <div className="col-6">
                  <InputField
                    name="fasttagFee"
                    label="Fasttag Fee"
                    validation={{
                      required: "Fasttag fee is required",
                    }}
                    placeholder="Enter fasttag commision in %"
                    type="number"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-6">
                  <InputField
                    name="onlineDoctorFee"
                    label="Online doctor Fee"
                    validation={{
                      required: "Online doctor fee is required",
                    }}
                    placeholder="Enter online doctor commision in %"
                    type="number"
                  />
                </div>

                <div className="col-6">
                  <InputField
                    name="doctorFee"
                    label="Doctor Fee"
                    validation={{
                      required: "Doctor fee is required",
                    }}
                    placeholder="Enter doctor commision in %"
                    type="number"
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
    </>
  );
}

export default PlatfromVersions;
