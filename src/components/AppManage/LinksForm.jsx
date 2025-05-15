import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useAppDetails } from "../../hooks/appmanage/useAppDetails";
import ComponentLoader from "../loadings/ComponentLoader";
import { useEffect } from "react";
import { useCreateAppDetails } from "../../hooks/appmanage/useCreateAppDetails";

function LinksForm() {
  const methods = useForm();
  const { data: appDetails, isLoading: appLoading } = useAppDetails();
  // const { mutate: updateAppdetails, isLoading: appDetailsLoading } =
  //   useUpdateAppDetails();
  const { mutate: createAppdetails, isLoading } = useCreateAppDetails();
  console.log(appDetails);
  useEffect(() => {
    if (appDetails) {
      methods.reset({
        privacyPolicy: appDetails?.privacy_policy_link,
        terms: appDetails?.terms_and_conditions_link,
        connect: appDetails?.connect_link,
      });
    }
  }, [appDetails]);

  const onUploadLinks = (data) => {
    if (appDetails) {
      const links = {
        connect_link: data?.connect,
        terms_and_conditions_link: data?.terms,
        privacy_policy_link: data?.privacyPolicy,
      };
      console.log(data);
      createAppdetails(links);
    } else {
      const appdetails = {
        app_store_link: "",
        play_store_link: "",
        platform_fee: 0,
        version_details_ios: {
          min_version: "",
          latest_version: "",
          last_update_date: "2025-05-13",
        },
        version_details_android: {
          min_version: "",
          latest_version: "",
          last_update_date: "2025-05-13",
        },
        connect_link: data?.connect,
        terms_and_conditions_link: data?.terms,
        privacy_policy_link: data?.privactPolicy,
      };
      createAppdetails(appdetails);
    }
  };
  return (
    <div className="card ps-3 pe-3 pb-5">
      <div className="card-header">
        <h5 className="card-title">App links</h5>
      </div>
      {!appLoading ? (
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
                      name="privacyPolicy"
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
                    {
                      // appDetailsLoading ||
                      isLoading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                      )
                    }
                    Save
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
}

export default LinksForm;
