import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import UploadFiles from "../../Hospitals/UploadFiles";
import ChooseFile from "../../Hospitals/ChooseFile";
import { useNavigate, useParams } from "react-router-dom";
import Closebtn from "../../assests/Closebtn";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../InputFields/InputField";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import Select from "react-select";
import TextArea from "../../InputFields/TextArea";
import useSelectedHospital from "../../../store/useSelectedHospital";
import { useEditHostpital } from "../../../hooks/hospitals/useEditHospital";
import ToastMessage from "../../toast/ToastMessage";
import FullscreenLoader from "../../loadings/FullscreenLoader";
function EditHospital() {
  const { id } = useParams();
  const [toggleFasttag, setToggleFasttag] = useState(false);
  console.log(toggleFasttag);
  const { mutate, showToast, setShowToast, isLoading } = useEditHostpital();

  const selectedHospital = useSelectedHospital(
    (state) => state.selectedHospital
  );
  // const locations = useLocation();
  // const patharray = locations.pathname.split("/");

  const methods = useForm();
  // const control = methods.control;
  const navigate = useNavigate();
  console.log("isloading", isLoading);

  const onCreateHospital = async (data) => {
    const hospital = {
      name: data?.hospitalName,
      logo: "hihihi",
      location: data?.town,
      address: {
        lineOne: data?.companyName,
        lineTwo: data?.address + " " + data?.street,
        city: data?.town,
        district: data?.district,
        state: data?.state,
        pincode: data?.pincode,
      },
      billing_address: {
        lineOne: data?.billingAccountHoldername,
        lineTwo: data?.billingAddress + " " + data?.billingStreet,
        city: data?.billingTown,
        district: data?.billingDistrict,
        state: data?.billingState,
        pincode: data?.billingPincode,
      },
      admin: {
        name: data?.adminName,
        email: data?.adminEmail,
        password: data?.adminPassword,
      },
      fastTag: {
        enabled: toggleFasttag,
        count: 0,
        price: 0,
      },
    };
    // console.log("hospital !!", hospital);
    // console.log(mutate);
    await mutate(id, hospital);
    methods.reset();
  };

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-hospitals/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-hospitals/${id}/edit`,
    },
  ];
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      {isLoading && <FullscreenLoader />}

      {/* {isLoading && <FullscreenLoader />} */}
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="bg-white rounded p-4 mt-3">
            <div className="row">
              <div className="col">
                <h4>Hospital Onboarding</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <Closebtn />
              </div>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onCreateHospital)}>
                <div className="row mt-4">
                  <div className="col-md-8 ms-md-3">
                    <ChooseFile />
                  </div>
                </div>
                <div className="w-100 mt-4 mt-md-2">
                  <div className="form-group">
                    <InputField
                      name="hospitalName"
                      label="Hospital Name"
                      validation={{ required: "Hospital Name is required" }}
                      placeholder=""
                      type="text"
                      defaultValue={selectedHospital?.name} // {selectedHospital?.name}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="adminName"
                        label="Admin Name"
                        validation={{ required: "Admin Name is required" }}
                        placeholder=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="adminEmail"
                        label="Admin Email ID"
                        validation={{ required: "Admin Email is required" }}
                        placeholder=""
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="adminPassword"
                        label="Password"
                        validation={{ required: "Password is required" }}
                        placeholder=""
                        type="password"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="website"
                        label="Website"
                        validation={{ required: "Website is required" }}
                        placeholder="Website"
                        type="text"
                        defaultValue={selectedHospital?.website}
                      />
                    </div>
                  </div>
                </div>
                <h4 className="card-title">GSTIN</h4>
                <div className="w-50">
                  <InputField
                    name="gstnumber"
                    label="GST Number"
                    validation={{ required: "GST Number is required" }}
                    placeholder="GST Number"
                    type="text"
                    defaultValue={selectedHospital?.gst}
                  />
                </div>

                <h4 className="card-title mt-4">Fast Tag</h4>
                <div className="d-flex">
                  <label className="">Enable Fast Tag</label>
                  <div className="ms-2">
                    <FasttagToggle setToggleFasttag={setToggleFasttag} />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Choose Percentage of Profit</label>
                      <Select
                      // defaultValue={selectedOption}
                      // onChange={setSelectedOption}
                      // options={option}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Fast tag Issue Per Day</label>
                      <Select
                      // defaultValue={selectedOption}
                      // onChange={setSelectedOption}
                      // options={option}
                      />
                    </div>
                  </div>
                </div>

                <h4 className="card-title mt-3">Company Location</h4>
                <div className="row">
                  <div className="col-md-4">
                    <InputField
                      name="companyName"
                      label=""
                      validation={{ required: "Company Location is required" }}
                      placeholder="Company Name"
                      type="text"
                      defaultValue={selectedHospital?.address.lineOne}
                    />
                  </div>

                  <div className="col-md-8">
                    <InputField
                      name="street"
                      label=""
                      validation={{ required: "Street is required" }}
                      placeholder="Area / Street / Sector"
                      type="text"
                      defaultValue={selectedHospital?.address.city}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <TextArea
                    name="address"
                    label=""
                    validation={{ required: "Address is required" }}
                    placeholder="Enter Address"
                    defaultValue={selectedHospital?.address.lineTwo}
                  />
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <InputField
                        name="town"
                        label=""
                        validation={{ required: "Town is required" }}
                        placeholder="Town"
                        type="text"
                        defaultValue={selectedHospital?.address.city}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="form-group">
                      <InputField
                        name="district"
                        label=""
                        validation={{ required: "District is required" }}
                        placeholder="District"
                        type="text"
                        defaultValue={selectedHospital?.address.district}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <InputField
                        name="state"
                        label=""
                        validation={{ required: "State is required" }}
                        placeholder="State"
                        type="text"
                        defaultValue={selectedHospital?.address.state}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="form-group">
                      <InputField
                        name="pincode"
                        label=""
                        validation={{ required: "Pincode is required" }}
                        placeholder="Pincode"
                        type="text"
                        defaultValue={selectedHospital?.address.pincode}
                      />
                    </div>
                  </div>
                </div>

                <h4 className="card-title mt-3">Add Bank Account</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="accountNumber"
                        label=""
                        validation={{ required: "Account Number is required" }}
                        placeholder="Account Number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="verifyAccountnumber"
                        label=""
                        validation={{ required: "Account Number is required" }}
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
                        name="accountHoldername"
                        label=""
                        validation={{
                          required: "Account Holder Name is required",
                        }}
                        placeholder="Account Holder Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="ifsc"
                        label=""
                        validation={{ required: "IFSC Code is required" }}
                        placeholder="IFSC"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mt-3">Billing Address</h4>
                  {/* <Checkbox
                    name="sameascompany"
                    label="Same as Company Address"
                    validation={null}
                    // onChangeHandler={handleChcekbox}
                  /> */}
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="billingAccountHoldername"
                        label=""
                        validation={{
                          required: "Account Holder Name is required",
                        }}
                        placeholder="Account Holder Name"
                        type="text"
                        // disabled={isSameAsCompanyAddress}
                        defaultValue={selectedHospital?.billing_address.lineOne}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <InputField
                        name="billingStreet"
                        label=""
                        validation={{ required: "Street is required" }}
                        placeholder="Area / Street / Sector"
                        type="text"
                        // disabled={isSameAsCompanyAddress}
                        defaultValue={selectedHospital?.billing_address.city}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <TextArea
                    name="billingAddress"
                    label=""
                    validation={{ required: "Address is required" }}
                    placeholder="Enter Address"
                    // disabled={isSameAsCompanyAddress}
                    defaultValue={selectedHospital?.billing_address.lineTwo}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="billingTown"
                        label=""
                        validation={{ required: "Town is required" }}
                        placeholder="Town / City"
                        type="text"
                        // disabled={isSameAsCompanyAddress}
                        defaultValue={selectedHospital?.billing_address.city}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="billingDistrict"
                        label=""
                        validation={{ required: "District is required" }}
                        placeholder="District"
                        type="text"
                        defaultValue={
                          selectedHospital?.billing_address.district
                        }
                        // disabled={isSameAsCompanyAddress}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="billingState"
                        label=""
                        validation={{ required: "State is required" }}
                        placeholder="State"
                        type="text"
                        defaultValue={selectedHospital?.billing_address.state}
                        // disabled={isSameAsCompanyAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="billingPincode"
                        label=""
                        validation={{ required: "Pincode is required" }}
                        placeholder="Pincode"
                        type="text"
                        defaultValue={selectedHospital?.billing_address.pincode}
                        // disabled={isSameAsCompanyAddress}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-100 mt-3">
                  <div className="form-group">
                    <InputField
                      name="companyWebsite"
                      label="Company Website"
                      validation={{ required: "Company Website is required" }}
                      placeholder="Enter Company Website"
                      type="text"
                      defaultValue={selectedHospital?.website}
                    />
                  </div>
                </div>

                <div className="mt-4">
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
                        className="border-0 btn-primary btn-main-primary text-white"
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

export default EditHospital;
