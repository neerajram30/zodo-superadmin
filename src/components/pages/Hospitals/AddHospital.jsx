import React, { useState } from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import ChooseFile from "../../Hospitals/ChooseFile";
import UploadFiles from "../../Hospitals/UploadFiles";
import { useNavigate } from "react-router-dom";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import Closebtn from "../../assests/Closebtn";
import { useAddHostpital } from "../../../hooks/hospitals/useAddHostpital";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import InputField from "../../InputFields/InputField";
import TextArea from "../../InputFields/TextArea";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import Checkbox from "../../InputFields/Checkbox";
import { toast } from "react-toastify";
import { useGetDistrict } from "../../../hooks/useGetDistrict";
import SelectField from "../../InputFields/SelectField";

function AddHospital() {
  const [toggleFasttag, setToggleFasttag] = useState(false);

  const [profilePic, setProfilePic] = useState("");
  const { mutate, isLoading } = useAddHostpital();
  const methods = useForm();
  const control = methods.control;
  const isSameAsCompanyAddress = useWatch({ control, name: "sameascompany" });
  const [document1, setDocument1] = useState("");
  const [document2, setDocument2] = useState("");
  const [document3, setDocument3] = useState("");

  const handleFileKeyDoc1 = (filekey) => {
    setDocument1(filekey);
  };
  const handleFileKeyDoc2 = (filekey) => {
    setDocument2(filekey);
  };
  const handleFileKeyDoc3 = (filekey) => {
    setDocument3(filekey);
  };
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: "Add Hospitals",
      status: "active",
      link: "/manage-hospitals/add-hospital",
    },
  ];
  const navigate = useNavigate();
  const { data: districts, isLoading: districtLoading } = useGetDistrict();
  const districtOptions = districts?.map((item) => ({
    label: item.name,
    value: item.name,
  }));
  const handleFileURL = (fileURL) => {
    setProfilePic(fileURL);
  };
  const onCreateHospital = async (data) => {
    if (data.accountNumber === data.verifyAccountnumber) {
      const hospital = {
        name: data?.hospitalName,
        logo: profilePic,
        location: data?.town,
        address: {
          lineOne: data?.companyName,
          lineTwo: data?.address,
          city: data?.town,
          district: data?.district.value,
          state: data?.state,
          pincode: data?.pincode,
          street: data?.street,
        },
        billing_address: {
          lineOne: data?.billingAccountHoldername,
          lineTwo: data?.billingAddress,
          city: data?.billingTown,
          district: data?.billingDistrict?.value,
          state: data?.billingState,
          pincode: data?.billingPincode,
          street: data?.billingStreet,
        },
        admin: {
          name: data?.adminName,
          email: data?.adminEmail,
          password: data?.adminPassword,
        },
        fastTag: {
          enabled: toggleFasttag,
          count: parseInt(data?.fastTagcount),
          price: 0,
        },
        bank_details: {
          account_number: data?.accountNumber,
          account_holder: data?.accountHoldername,
          ifsc: data?.ifsc,
          bank_name: data?.bankname,
          upi_id: data?.upiid,
        },
        contact_details: {
          email: data?.email,
          mobile: data?.phone,
          website: data?.website,
        },
        gst: data?.gstnumber,
        documents: [{name:"doc1", file :document1},{name:"doc2", file :document2},{name:"doc3", file :document3}],
      };
      await mutate(hospital);
      // methods.reset();
    } else {
      const errorMessage = "Account number mismatch";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      {isLoading && <FullscreenLoader />}
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
                    <ChooseFile handleFileURL={handleFileURL} />
                  </div>
                </div>
                <div className="w-100 mt-4 mt-md-2">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <InputField
                          name="hospitalName"
                          label="Hospital Name"
                          validation={{ required: "Hospital Name is required" }}
                          placeholder=""
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <InputField
                          name="email"
                          label="Contact email"
                          validation={{ required: "Contact email is required" }}
                          placeholder=""
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputField
                        name="phone"
                        label="Contact number"
                        validation={{ required: "Contact number is required" }}
                        placeholder=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <InputField
                        name="website"
                        label="Hospital Website"
                        // validation={{ required: "Hospital Website is required" }}
                        placeholder="Enter hospital website"
                        type="text"
                      />
                    </div>
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
                <h4 className="card-title">GSTIN</h4>
                <div className="w-50">
                  <InputField
                    name="gstnumber"
                    label="GST Number"
                    validation={{ required: "GST Number is required" }}
                    placeholder="GST Number"
                    type="text"
                  />
                </div>

                <h4 className="card-title mt-4">Fast Tag</h4>
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-flex pt-2">
                      <label className="">Enable Fast Tag</label>
                      <div className="ms-2">
                        <FasttagToggle setToggleFasttag={setToggleFasttag} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <InputField
                      name="fastTagcount"
                      label=""
                      // validation={{ required: "Fasttag issues per day is required" }}
                      placeholder="Fasttag issues per day"
                      type="number"
                      disabled={!toggleFasttag}
                      defaultValue={5}
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>Choose Percentage of Profit</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={option}
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>Fast tag Issue Per Day</label>
                      <Select
                      // defaultValue={selectedOption}
                      // onChange={setSelectedOption}
                      // options={option}
                      />
                    </div>
                  </div> */}
                </div>

                <h4 className="card-title mt-1">Hospital Location</h4>
                <div className="row">
                  <div className="col-md-4">
                    <InputField
                      name="companyName"
                      label=""
                      validation={{ required: "Company name is required" }}
                      placeholder="Company Name"
                      type="text"
                    />
                  </div>

                  <div className="col-md-8">
                    <InputField
                      name="street"
                      label=""
                      validation={{ required: "Street is required" }}
                      placeholder="Area / Street / Sector"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <TextArea
                    name="address"
                    label=""
                    validation={{ required: "Address is required" }}
                    placeholder="Enter Address"
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
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="form-group">
                      {/* <InputField
                        name="district"
                        label=""
                        validation={{ required: "District is required" }}
                        placeholder="District"
                        type="text"
                      /> */}

                      <SelectField
                        options={districtOptions || []}
                        label=""
                        isLoading={districtLoading}
                        name="district"
                        isMultiSelect={false}
                        placeholder="Select District"
                        validationMessage="District is required"
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <InputField
                        name="bankname"
                        label=""
                        validation={{ required: "Bank name is required" }}
                        placeholder="Bank name"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
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
                  <div className="col-md-8">
                    <div className="form-group">
                      <InputField
                        name="upiid"
                        label=""
                        // validation={{ required: "IFSC Code is required" }}
                        placeholder="Upi id (optional)"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mt-3">Billing Address</h4>
                  <Checkbox
                    name="sameascompany"
                    label="Same as Company Address"
                    validation={null}
                    // onChangeHandler={handleChcekbox}
                  />
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
                        disabled={isSameAsCompanyAddress}
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
                        disabled={isSameAsCompanyAddress}
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
                    disabled={isSameAsCompanyAddress}
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
                        disabled={isSameAsCompanyAddress}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <InputField
                        name="billingDistrict"
                        label=""
                        validation={{ required: "District is required" }}
                        placeholder="District"
                        type="text"
                        disabled={isSameAsCompanyAddress}
                      /> */}
                      <SelectField
                        options={districtOptions || []}
                        label=""
                        isLoading={districtLoading}
                        name="billingDistrict"
                        isMultiSelect={false}
                        placeholder="Select District"
                        validationMessage="Billing District is required"
                        disabled={isSameAsCompanyAddress}
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
                        disabled={isSameAsCompanyAddress}
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
                        disabled={isSameAsCompanyAddress}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="edit-hospital">
                    <h4>Related Documents</h4>
                    <p>upload related documents to complete the process</p>
                  </div>
                  <div className="row mt-4 pb-5">
                    <div className="col-md-4 mt-2">
                      <UploadFiles handleFileKey={handleFileKeyDoc1} />
                    </div>
                    <div className="col-md-4 mt-2">
                      <UploadFiles handleFileKey={handleFileKeyDoc2} />
                    </div>
                    <div className="col-md-4 mt-2">
                      <UploadFiles handleFileKey={handleFileKeyDoc3} />
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
    </Layout>
  );
}

export default AddHospital;
