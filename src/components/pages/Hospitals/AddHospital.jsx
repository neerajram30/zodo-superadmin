import React, { useState } from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import ChooseFile from "../../Hospitals/ChooseFile";
import UploadFiles from "../../Hospitals/UploadFiles";
import { useNavigate } from "react-router-dom";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import Select from "react-select";
import Closebtn from "../../assests/Closebtn";
import { useAddHostpital } from "../../../hooks/hospitals/useAddHostpital";
import { useForm } from "react-hook-form";

function AddHospital() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [toggleFasttag, setToggleFasttag] = useState(false);
  const { mutate: addHospital, isLoading } = useAddHostpital();
  
  const onSubmit = (data) => {
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
    console.log(hospital);
    
    addHospital(hospital)
  };
  console.log(isLoading);
  
  console.log(watch("example")); // watch input value by passing the name of it
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
  const [formDetails, setFormDetails] = useState({});
  const [checked, setchecked] = useState(false);
  const handelForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };

  // const { mutate: addHospital, isLoading } = useAddHostpital();
  console.log("Form details", formDetails);

  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFormDetails({
        ...formDetails,
        billingAccountHoldername: formDetails["companyName"] ?? "",
        billingStreet: formDetails["street"] ?? "",
        billingAddress: formDetails["address"] ?? "",
        billingTown: formDetails["town"] ?? "",
        billingState: formDetails["state"] ?? "",
      });
    } else {
      setFormDetails({
        ...formDetails,
        billingAccountHoldername: "",
        billingStreet: "",
        billingAddress: "",
        billingTown: "",
        billingState: "",
      });
    }
    setchecked(checked);
  };

  // const handleSave = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name: "Aster Medicity",
  //     logo: "hihihi",
  //     location: "Cherthala",
  //     address: {
  //       lineOne: "Address",
  //       lineTwo: "AddressTwo",
  //       city: "Cherthala",
  //       district: "Alappuzha",
  //       state: "Kerala",
  //       pincode: "688523",
  //     },
  //     billing_address: {
  //       lineOne: "Address",
  //       lineTwo: "AddressTwo",
  //       city: "Cherthala",
  //       district: "Alappuzha",
  //       state: "Kerala",
  //       pincode: "688523",
  //     },
  //     admin: {
  //       name: "Anandhu",
  //       email: "superadmins@examples.com",
  //       password: "securepassword",
  //     },
  //     fastTag: {
  //       enabled: false,
  //       count: 0,
  //       price: 0,
  //     },
  //   };
  //   addHospital(data);
  // };

  // console.log("is loading ", isLoading);
  console.log("Hook form error ", errors);

  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
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

            {/* <div className="row"> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-4">
                <div className="col-md-8 ms-md-3">
                  <ChooseFile />
                </div>
                {/* <div className="col mt-md-0 mt-4">
                <FastTag />
              </div> */}
              </div>
              <div className="w-100 mt-4 mt-md-2">
                <div className="form-group">
                  <label>
                    <h4 className="card-title">Hospital Name</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Apollo"
                    name="hospitalName"
                    onChange={handelForm}
                    value={formDetails["hospitalName"]}
                    {...register("hospitalName", { required: true })}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Admin Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="adminName"
                      value={formDetails["adminName"]}
                      onChange={handelForm}
                      {...register("adminName", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Admin Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="adminEmail"
                      value={formDetails["adminEmail"]}
                      onChange={handelForm}
                      {...register("adminEmail", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Passsword</label>
                    <input
                      type="password"
                      className="form-control"
                      name="adminPassword"
                      value={formDetails["adminPassword"]}
                      onChange={handelForm}
                      {...register("adminPassword", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website"
                      name="website"
                      value={formDetails["website"]}
                      onChange={handelForm}
                      {...register("website", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <h4 className="card-title">GSTIN</h4>
              <div className="w-50">
                <div className="form-group">
                  <label>GST Number</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="GST Number"
                    name="gstnumber"
                    value={formDetails["gstnumber"]}
                    onChange={handelForm}
                    {...register("gstnumber", { required: true })}
                  />
                </div>
              </div>
              {console.log("Toggle fasttag ", toggleFasttag)}

              <h4 className="card-title">Fast Tag</h4>
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

              <h4 className="card-title mt-4">Company Locations</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="companyName"
                      value={formDetails["companyName"]}
                      onChange={handelForm}
                      {...register("companyName", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area / Street / Sector"
                      name="street"
                      value={formDetails["street"]}
                      onChange={handelForm}
                      {...register("street", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                {/* <label>Your message:</label> */}
                <textarea
                  rows={5}
                  cols={5}
                  className="form-control"
                  placeholder="Enter Address"
                  defaultValue={""}
                  name="address"
                  value={formDetails["address"]}
                  onChange={handelForm}
                  {...register("address", { required: true })}
                />
              </div>

              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Town"
                      name="town"
                      value={formDetails["town"]}
                      onChange={handelForm}
                      {...register("town", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="District"
                      name="district"
                      value={formDetails["district"]}
                      onChange={handelForm}
                      {...register("district", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      name="state"
                      value={formDetails["state"]}
                      onChange={handelForm}
                      {...register("state", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pincode"
                      name="pincode"
                      value={formDetails["pincode"]}
                      onChange={handelForm}
                      {...register("pincode", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <h4 className="card-title">Add Bank Account</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Number"
                      name="accountNumber"
                      value={formDetails["accountNumber"]}
                      onChange={handelForm}
                      {...register("accountNumber", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Verify Account Number"
                      name="verifyAccountnumber"
                      value={formDetails["verifyAccountnumber"]}
                      onChange={handelForm}
                      {...register("verifyAccountnumber", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Holder Name"
                      name="accountHoldername"
                      value={formDetails["accountHoldername"]}
                      onChange={handelForm}
                      {...register("accountHoldername", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="IFSC"
                      name="ifsc"
                      value={formDetails["ifsc"]}
                      onChange={handelForm}
                      {...register("ifsc", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="card-title">Billing Address</h4>
                <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                  {" "}
                  Same as Company Address
                  <input
                    type="checkbox"
                    name="radio"
                    onChange={handleCheck}
                    checked={checked}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Holder Name"
                      name="billingAccountHoldername"
                      value={formDetails["billingAccountHoldername"]}
                      onChange={handelForm}
                      {...register("billingAccountHoldername", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area / Street / Sector"
                      name="billingStreet"
                      value={formDetails["billingStreet"]}
                      onChange={handelForm}
                      {...register("billingStreet", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                {/* <label>Your message:</label> */}
                <textarea
                  rows={5}
                  cols={5}
                  className="form-control"
                  placeholder="Enter Address"
                  defaultValue={""}
                  name="billingAddress"
                  value={formDetails["billingAddress"]}
                  onChange={handelForm}
                  {...register("billingAddress", { required: true })}
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Town / City"
                      name="billingTown"
                      value={formDetails["billingTown"]}
                      onChange={handelForm}
                      {...register("billingTown", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="District"
                      name="billingDistrict"
                      value={formDetails["billingDistrict"]}
                      onChange={handelForm}
                      {...register("billingDistrict", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      name="billingState"
                      value={formDetails["billingState"]}
                      onChange={handelForm}
                      {...register("billingState", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label>Address line:</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pincode"
                      name="billingPincode"
                      value={formDetails["billingPincode"]}
                      onChange={handelForm}
                      {...register("billingPincode", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="w-100">
                <div className="form-group">
                  <label>Company Website</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="Enter Company Website"
                    name="companyWebsite"
                    value={formDetails["companyWebsite"]}
                    onChange={handelForm}
                    {...register("companyWebsite", { required: true })}
                  />
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
                      className="border-0 btn-primary btn-main-primary text-white"
                      // onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddHospital;
