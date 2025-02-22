import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import ChooseFile from "../../Hospitals/ChooseFile";
import UploadFiles from "../../Hospitals/UploadFiles";
import Closebtn from "../../assests/Closebtn";
import SelectInput from "../../InputFields/SelectField";
import { FormProvider, useForm } from "react-hook-form";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";
import InputField from "../../InputFields/InputField";
import TextArea from "../../InputFields/TextArea";
import { useCreateDoctors } from "../../../hooks/doctors/useCreateDoctors";
import ToastMessage from "../../toast/ToastMessage";
import FullscreenLoader from "../../loadings/FullscreenLoader";
function AddDoctors() {
  const { id } = useParams();
  const { data, isLoading } = useSpecialisationList();
  const {
    mutate,
    showToast,
    setShowToast,
    isLoading: doctorLoading,
  } = useCreateDoctors();
  const methods = useForm();
  const locations = useLocation();
  const patharray = locations.pathname.split("/");

  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Add Doctors",
      status: "active",
      link: "/manage-doctors/add-doctors",
    },
  ];

  const editBreadcrump = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Edit",
      status: "inactive",
      link: `/manage-doctors/edit-doctor`,
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-doctors/edit-doctor/${id}`,
    },
  ];
  const navigate = useNavigate();
  console.log("specialisation", data);
  const specialisationOptions = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const onCreateDoctor = (data) => {
    const specifications = data["specialisation"].map((item) => item.value);
    console.log(specifications);
    
    const doctorData = {
      name: data["doctorName"],
      email: data["doctorEmail"],
      profile_pic: "www.link.com",
      city: data["city"],
      pricing: 2000,
      specifications_id: specifications,
      phone_number: "7012896637",
    };

    mutate(doctorData);
  };
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb
            data={
              patharray.includes("edit-doctor")
                ? editBreadcrump
                : breadCrumpData
            }
          />
          {doctorLoading && <FullscreenLoader/>}
          <div className="bg-white rounded p-4 mt-3">
            <div className="row">
              <div className="col">
                <h4>Doctor Onboarding</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <Closebtn />
              </div>
            </div>

            {/* <div className="row"> */}
            <div className="row mt-4">
              <div className="col-md-8 ms-md-3">
                <ChooseFile />
              </div>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onCreateDoctor)}>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="doctorName"
                        label="Doctor Name"
                        validation={{ required: "Doctor Name is required" }}
                        placeholder="Enter doctor name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="doctorEmail"
                        label="Doctor Email ID"
                        validation={{ required: "Doctor's email is required" }}
                        placeholder="Enter doctor email"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <SelectInput
                        options={specialisationOptions}
                        label="Specialisation"
                        isLoading={isLoading}
                        name="specialisation"
                        isMultiSelect={true}
                        placeholder="Select Specialisation"
                        validationMessage="Specialisation is required"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="city"
                        label="Current City"
                        validation={{ required: "City is required" }}
                        placeholder="Enter city"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="card-title">Registration Details</h4>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="registrationNumber"
                        label="Registration Number"
                        // validation={{
                        //   required: "Registration number is required",
                        // }}
                        placeholder="Enter registration number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="councilName"
                        label="Council Name"
                        // validation={{ required: "Council name is required" }}
                        placeholder="Enter council name"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Address Locations</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="house"
                        // validation={{ required: "House name is required" }}
                        placeholder="House / Building / Appartment"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <InputField
                        name="street"
                        // validation={{ required: "Street is required" }}
                        placeholder="Street"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <TextArea
                    name="address"
                    label=""
                    // validation={{ required: "Address is required" }}
                    placeholder="Enter Address"
                  />
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <InputField
                        name="district"
                        // validation={{ required: "District is required" }}
                        placeholder="Enter District"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <InputField
                        name="state"
                        // validation={{ required: "State is required" }}
                        placeholder="Enter State"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <h4 className="card-title">Add Bank Account</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="accountNumber"
                        // validation={{ required: "Account Number is required" }}
                        placeholder="Account Number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="verifyAccountNumber"
                        // validation={{ required: "Verify account number" }}
                        placeholder="Verify Account Number"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <InputField
                        name="accountHolderName"
                        // validation={{
                        //   required: "Account holder name is required",
                        // }}
                        placeholder="Account Holder Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="ifscCode"
                        // validation={{ required: "IFSC is required" }}
                        placeholder="IFSC"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="edit-hospital">
                    <h4>Related Documents</h4>
                    <p>upload related documents to complete the process</p>
                  </div>
                  <div className="row mt-4 pb-5">
                    <div className="col-md-4 mt-2">
                      <UploadFiles />
                    </div>
                    <div className="col-md-4 mt-2">
                      <UploadFiles />
                    </div>
                    <div className="col-md-4 mt-2">
                      <UploadFiles />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="settings-btns col-md-6 col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    &nbsp;&nbsp;
                  </div>

                  <div className="settings-btns col-md-6 col-sm-12 mt-md-0 mt-2">
                    <div className="d-flex justify-content-md-end justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-main-secondary"
                      >
                        Cancel
                      </button>
                      &nbsp;&nbsp;
                      <button
                        type="submit"
                        className="border-0 btn btn-primary btn-main-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
      <ToastMessage showToast={showToast} setShowToast={setShowToast} />
    </Layout>
  );
}

export default AddDoctors;
