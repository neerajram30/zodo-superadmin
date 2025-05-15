import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
function BannerForm() {
  const [show, setShow] = useState(false);
  const methods = useForm();
  const onCreateBanner = (data) => {
    console.log(data);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Add Banners</h5>
          </div>
          <div className="card-body pt-0">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onCreateBanner)}>
                <div className="settings-form">
                  <div className="form-group">
                    <InputField
                      name="title"
                      label="Banner Title"
                      validation={{ required: "Banner title is required" }}
                      placeholder="Enter banner title"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <InputField
                      name="link"
                      label="Banner Link"
                      validation={{ required: "Banner link is required" }}
                      placeholder="Enter banner link"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <p className="settings-label">
                      Upload Banner <span className="star-red">*</span>
                    </p>
                    <div className="settings-btn">
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="file"
                        // onchange="loadFile(event)"
                        className="hide-input"
                      />
                      <label htmlFor="file" className="upload">
                        <i className="feather-upload">
                          <FeatherIcon icon="upload" />
                        </i>
                      </label>
                    </div>
                    <h6 className="settings-size">
                      Recommended image size is <span>150px x 150px</span>
                    </h6>
                    <div
                      className="upload-images upload-banner"
                      style={{ display: show ? "none" : "" }}
                    >
                      <img
                        // src={favicon}
                        alt="Image"
                      />
                      <Link to="#" className="btn-icon logo-hide-btn">
                        <i
                          className="feather-x-circle crossmark"
                          onClick={() => setShow((s) => !s)}
                        >
                          <FeatherIcon icon="x-circle" />
                        </i>
                      </Link>
                    </div>
                  </div>
                  <div className="form-group mb-0 d-flex justify-content-end">
                    <div className="settings-btns">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2 ms-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerForm;
