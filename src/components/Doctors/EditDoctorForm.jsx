import React, { useEffect, useState } from "react";
import Closebtn from "../assests/Closebtn";
import ChooseFile from "../Hospitals/ChooseFile";
import FullscreenLoader from "../loadings/FullscreenLoader";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import SelectField from "../InputFields/SelectField";
import UploadFiles from "../Hospitals/UploadFiles";
import { useNavigate, useParams } from "react-router-dom";
import { useDoctorById } from "../../hooks/doctors/useDoctorById";
import { useSpecialisationList } from "../../hooks/specialisation/useSpecialisationList";
import { useEditDoctor } from "../../hooks/doctors/useEditDoctor";
import { toast } from "react-toastify";
import TextArea from "../InputFields/TextArea";
function EditDoctorForm() {
  const { data, isLoading } = useSpecialisationList();
  const { id } = useParams();
  const [fileURL, setFileURL] = useState("");
  const handleFileURL = (url) => {
    setFileURL(url);
  };
  const [document1, setDocument1] = useState("");
  const [document2, setDocument2] = useState("");

  const handleFileKeyDoc1 = (filekey) => {
    setDocument1(filekey);
  };
  const handleFileKeyDoc2 = (filekey) => {
    setDocument2(filekey);
  };
  const { data: doctorDetails, isLoading: doctorLoading } = useDoctorById(id);
  console.log("Doctor", doctorDetails);
  const { mutate, isLoading: editingLoader } = useEditDoctor();
  const methods = useForm();
  const navigate = useNavigate();
  const specialisationOptions =
    Array.isArray(data) &&
    data?.map((item) => ({
      value: item.id,
      label: item.name,
    }));

  useEffect(() => {
    if (doctorDetails) {
      setFileURL(doctorDetails?.profile_pic);
      const specialisation = doctorDetails?.specialisations;
      const specialisations = specialisation.map((item) => ({
        label: item.name,
        value: item.id,
      }));
      methods.reset({
        doctorName: doctorDetails?.name,
        doctorEmail: doctorDetails?.email,
        specialisation: specialisations,
        city: doctorDetails?.city,
        qualification: doctorDetails?.registration_details?.qualification,
        pricing: doctorDetails?.pricing,
        councilName: doctorDetails?.registration_details?.council_name,
        registrationNumber:
          doctorDetails?.registration_details?.registration_number,
        accountNumber: doctorDetails?.bank_details?.account_number,
        verifyAccountnumber: doctorDetails?.bank_details?.account_number,
        accountHoldername: doctorDetails?.bank_details?.account_holder,
        bankname: doctorDetails?.bank_details?.bank_name,
        ifsc: doctorDetails?.bank_details?.ifsc,
        upiid: doctorDetails?.bank_details?.upi_id,
        about: doctorDetails?.about
      });
    }
  }, [doctorDetails]);

  const onEditDoctor = async (data) => {
    if (data.accountNumber === data.verifyAccountnumber) {
      const specifications = data["specialisation"].map((item) => item.value);
      const doctorData = {
        name: data["doctorName"],
        email: data["doctorEmail"],
        profile_pic: fileURL,
        city: data["city"],
        pricing: parseInt(data?.pricing),
        specifications_id: specifications,
        phone_number: "7012896637",
        // district: data?.district.value,
        registration_details: {
          registration_number: data?.registrationNumber,
          council_name: data?.councilName,
          qualification: data?.qualification,
          // registration_proof: document1,
          // degree_proof: document2
        },
        bank_details: {
          account_number: data?.accountNumber,
          account_holder: data?.accountHoldername,
          ifsc: data?.ifsc,
          bank_name: data?.bankname,
          upi_id: data?.upiid,
        },
        documents: [
          { name: "registration_proof", file: document1 },
          { name: "degree_proof", file: document2 },
        ],
        about: data?.about,
      };
      console.log(doctorData);
      await mutate({ id: id, data: doctorData });
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
    // await mutate(doctorData, { onSuccess: () => methods.reset() });
  };
  return (
    <div className="bg-white rounded p-4 mt-3">
      <div className="row">
        <div className="col">
          <h4>Edit Doctor</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <Closebtn />
        </div>
      </div>

      {/* <div className="row"> */}
      <div className="row mt-4">
        <div className="col-md-8 ms-md-3">
          <ChooseFile handleFileURL={handleFileURL} fileURL={fileURL} />
        </div>
      </div>
      {doctorLoading || (editingLoader && <FullscreenLoader />)}

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onEditDoctor)}>
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
                <SelectField
                  options={specialisationOptions || []}
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

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <InputField
                  name="qualification"
                  label="Highest Qualification"
                  validation={{ required: "Qualification is required" }}
                  placeholder="Enter qualification"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <InputField
                  name="pricing"
                  label="Pricing"
                  validation={{ required: "Pricing is required" }}
                  placeholder="Enter Pricing"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <TextArea
                name="about"
                label="About"
                // validation={{ required: "Description is required" }}
                placeholder="Write here.."
                // disabled={isSameAsCompanyAddress}
              />
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

          {/* <h4 className="card-title">Address Locations</h4>
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
                        validation={{ required: "Address is required" }}
                        placeholder="Enter Address"
                      />
                    </div>
    
                    <div className="row">
                      <div className="col-md-7">
                        <div className="form-group">
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
                      <div className="col-md-5">
                        <div className="form-group">
                          <InputField
                            name="state"
                            validation={{ required: "State is required" }}
                            placeholder="Enter State"
                            type="text"
                          />
                        </div>
                      </div>
                    </div> */}

          <h4 className="card-title">Add Bank Account</h4>
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

          <div>
            <div className="edit-hospital">
              <h4>Related Documents</h4>
              <p>upload related documents to complete the process</p>
            </div>
            <div className="row mt-4 pb-5">
              <div className="col-md-6">
                <label className="pb-2">Registration Proof</label>
                <UploadFiles handleFileKey={handleFileKeyDoc1} />
              </div>
              <div className="col-md-6">
                <label className="pb-2">Degree Proof</label>
                <UploadFiles handleFileKey={handleFileKeyDoc2} />
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
  );
}

export default EditDoctorForm;
