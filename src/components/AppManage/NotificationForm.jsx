import React from "react";
import TextArea from "../InputFields/TextArea";
import { FormProvider, useForm } from "react-hook-form";

function NotificationForm() {
  const methods = useForm();
  const onSendNotification = (data) => {
    console.log(data);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Send notification</h5>
      </div>
      <div className="card-body pt-0">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSendNotification)}>
            <div className="form-group">
              <TextArea
                name="description"
                label="Description"
                validation={{ required: "Description is required" }}
                placeholder="Enter notification description"
                // disabled={isSameAsCompanyAddress}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2">
                Send
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default NotificationForm;
