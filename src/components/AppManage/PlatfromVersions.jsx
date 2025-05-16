import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAppDetails } from "../../hooks/appmanage/useAppDetails";
import { useCreateAppDetails } from "../../hooks/appmanage/useCreateAppDetails";
// import { useUpdateAppDetails } from "../../hooks/appmanage/useUpdateAppDetails";
import ComponentLoader from "../loadings/ComponentLoader";

function PlatfromVersions() {
  const methods = useForm();
  const [androidDate, setAndroidDate] = useState(null);
  const { mutate: createAppdetails, isLoading } = useCreateAppDetails();
  const { data: appDetails, isLoading: appLoading } = useAppDetails();
  // const { mutate: updateAppdetails, isLoading: appDetailsLoading } =
  //   useUpdateAppDetails();

  console.log("App details <><><", appDetails);

  const [iosDate, setIosDate] = useState(null);
  const onPlatformVersion = (data) => {
    const formattedAndroidDate = dayjs(androidDate).format("DD/MM/YYYY");
    const formattedIosDate = dayjs(iosDate).format("DD/MM/YYYY");

    if (appDetails) {
      const details = {
        platform_fee: parseInt(data.platformFee),
        version_details_ios: {
          min_version: data.iosMinimumversion,
          latest_version: data.iosCurrentVersion,
          last_update_date: iosDate,
        },
        version_details_android: {
          min_version: data.androidMinimumversion,
          latest_version: data.androidCurrentVersion,
          last_update_date: androidDate,
        },
      };
      createAppdetails(details);
    } else {
      const appdetails = {
        app_store_link: "",
        play_store_link: "",
        platform_fee: parseInt(data.platformFee),
        version_details_ios: {
          min_version: data.iosMinimumversion,
          latest_version: data.iosCurrentVersion,
          last_update_date: new Date(formattedIosDate),
        },
        version_details_android: {
          min_version: data.androidMinimumversion,
          latest_version: data.androidCurrentVersion,
          last_update_date: new Date(formattedAndroidDate),
        },
        connect_link: "",
        terms_and_conditions_link: "",
        privacy_policy_link: "",
      };
      createAppdetails(appdetails);
    }
  };

  useEffect(() => {
    if (appDetails) {
      setAndroidDate(
        dayjs(appDetails?.version_details_android?.last_update_date)
      );
      setIosDate(dayjs(appDetails?.version_details_ios?.last_update_date));
      methods.reset({
        androidMinimumversion: appDetails?.version_details_android?.min_version,
        androidCurrentVersion:
          appDetails?.version_details_android?.latest_version,
        iosMinimumversion: appDetails?.version_details_ios?.min_version,
        iosCurrentVersion: appDetails?.version_details_ios?.latest_version,
        platformFee: appDetails?.platform_fee,
      });
    }
  }, [appDetails]);

  const handelAndroidDate = (date) => {
    setAndroidDate(date);
  };

  const handelIodDate = (date) => {
    setIosDate(date);
  };
  return (
    <>
      <div className="card">
        {/* <div className="card-header">
          <h5 className="card-title">Platfrom Versions</h5>
        </div> */}
        {!appLoading ? (
          <div className="card-body pt-5 pb-5">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onPlatformVersion)}
                className="ms-3"
              >
                <div className="form-group d-flex w-100 justify-content-start">
                  <div className="row w-100">
                    {/* <div className="social-icon border border-success text-success manage-btn col-1 platform-btn">
                      Android
                    </div> */}
                    <h6 className="platform-name">Android</h6>
                    <div className="col-2">
                      <div className="">
                        <InputField
                          name="androidMinimumversion"
                          label="Minimum Version"
                          validation={{
                            required: "Android minimum version is required",
                          }}
                          placeholder="Minimum version"
                          type="text"
                          pattern="[0-9]*[.,]?[0-9]*"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="ms-2">
                        <InputField
                          name="androidCurrentVersion"
                          label="Current Version"
                          validation={{
                            required: "Android current version is required",
                          }}
                          placeholder="Current version"
                          type="text"
                          pattern="[0-9]*[.,]?[0-9]*"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="ms-2">
                        <div className="form-group">
                          <label className="form-label">Start date</label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={handelAndroidDate}
                            suffixIcon={null}
                            value={androidDate}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group d-flex w-100 justify-content-start">
                  <div className="row w-100">
                    {/* <div className="social-icon border border-success text-success  manage-btn col-1 platform-btn">
                      IOS
                    </div> */}
                    <h6 className="platform-name">IOS</h6>
                    <div className="col-2">
                      <div className="">
                        <InputField
                          name="iosMinimumversion"
                          label="Minimum Version"
                          validation={{
                            required: "IOS minimum version is required",
                          }}
                          placeholder="Minimum version"
                          type="text"
                          pattern="[0-9]*[.,]?[0-9]*"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="ms-2">
                        <InputField
                          name="iosCurrentVersion"
                          label="Current Version"
                          validation={{
                            required: "Ios current version is required",
                          }}
                          placeholder="Current version"
                          type="text"
                          pattern="[0-9]*[.,]?[0-9]*"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="ms-2">
                        <div className="form-group">
                          <label className="form-label">Start date</label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={handelIodDate}
                            suffixIcon={null}
                            value={iosDate}
                          />
                          {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="card-title">Platfrom Fee (%)</h5>
                <div className="form-group row">
                  <div className="col-6">
                    <InputField
                      name="platformFee"
                      label=""
                      validation={{
                        required: "Platform fee is required",
                      }}
                      placeholder="Enter commision in %"
                      type="text"
                    />
                  </div>
                </div>

                <div className="w-50 ms-2 mt-2">
                  <button className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2">
                    {/* {appDetailsLoading || */}
                    {isLoading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    )}
                    Save
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        ) : (
          <ComponentLoader />
        )}
      </div>
      {/* <div className="card">
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
      </div> */}
    </>
  );
}

export default PlatfromVersions;
