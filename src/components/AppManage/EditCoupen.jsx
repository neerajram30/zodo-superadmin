import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import InputField from "../InputFields/InputField";
import SelectField from "../InputFields/SelectField";
import PropTypes from "prop-types";
import { editCoupen } from "../../apis/appmanage";
import { toast } from "react-toastify";
import { toInputDateFormat } from "../configs/toInputDateFormat";

function EditCoupen({ handleClose, coupen }) {
  const methods = useForm();
  const queryClient = useQueryClient();
  const discountOptions = [
    {
      label: "Percentage",
      value: "percentage",
    },
    {
      label: "Flat",
      value: "flat",
    },
  ];

  const [discountType, setDiscountType] = useState("");

  const WatchDiscountTypeChange = () => {
    const { control } = useFormContext();
    const discountType = useWatch({ control, name: "discountOptions" }); // replace with your actual `name`
    useEffect(() => {
      if (discountType !== undefined) {
        // You can trigger any side-effect here
        setDiscountType(discountType.value);
      }
    }, [discountType]);

    return null; // no UI output
  };

  useEffect(() => {
    if (coupen) {
      const inputDate = toInputDateFormat(coupen?.valid_untill);
      methods.reset({
        coupencode: coupen?.coupon_code || "",
        discountOptions:
          discountOptions.find((opt) => opt.value === coupen?.discount_type) ||
          discountOptions[0],
        minimumcart: coupen?.minimum_cart_amount || "",
        minimumdiscount: coupen?.minimum_discount_allowed || "",
        usagelimit: coupen?.usage_limit || "",
        usagelimituser: coupen?.usage_limit_per_user || "",
        expiry: inputDate,
      });
    }
  }, [coupen]);

  const mutation = useMutation({
    mutationFn: editCoupen, // API function to create
  });

  const onEditCoupen = (data) => {
    const coupen_data = {
      coupon_code: data?.coupencode,
      discount_type: data?.discountOptions?.value,
      valid_untill: data?.expiry,
      minimum_cart_amount: parseInt(data?.minimumcart ?? 0),
      minimum_discount_allowed: parseInt(data?.minimumdiscount ?? 0),
      usage_limit: parseInt(data?.usagelimit ?? 0),
      usage_limit_per_user: parseInt(data?.usagelimituser ?? 0),
    };
    const coupenId = coupen?.id;

    mutation.mutate(
      { id: coupenId, data: coupen_data },
      {
        onSuccess: (data) => {
          handleClose();
          methods.reset();
          const message = data?.message || "Coupen updated successfully";
          toast.success(message);
          queryClient.invalidateQueries(["coupens"]);
        },
        onError: (error) => {
          const errorMessage =
            error?.response?.data?.validationErrors ||
            error?.response?.data?.message ||
            "Failed to edit coupen";
          toast.error(errorMessage);
          queryClient.invalidateQueries(["coupens"]);
          handleClose();
          methods.reset();
        },
      }
    );
  };
  const loading = mutation.isPending;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onEditCoupen)}>
        <div className="settings-form">
          <div className="form-group">
            <InputField
              name="coupencode"
              label="Coupen Code"
              validation={{ required: "Coupen code is required" }}
              placeholder="Enter coupen code"
              type="text"
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <SelectField
                options={discountOptions}
                name="discountOptions"
                isMultiSelect={false}
                placeholder="Select Discount Option"
                label="Discount Option"
                validation={{ required: "Discount option is required" }}
                defaultValue={discountOptions[0]}
              />
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <InputField
                  name="minimumcart"
                  label="Minimum Cart Amount"
                  validation={{ required: "Minimum cart amount is required" }}
                  type="price"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <InputField
                  name="minimumdiscount"
                  label={`Minimum Discount ${
                    discountType === "percentage" ? "Percentage" : "Amount"
                  }`}
                  validation={{
                    required: `Minimum discount ${
                      discountType === "percentage" ? "percentage" : "amount"
                    } is required`,
                  }}
                  type={discountType === "percentage" ? "text" : "price"}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <InputField
                name="usagelimit"
                label="Usage Limit"
                validation={{ required: "Usage Limit is required" }}
                type="text"
              />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <InputField
                  name="usagelimituser"
                  label="Usage Limit Per User"
                  validation={{ required: "Usage limit per user is required" }}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <InputField
                  name="expiry"
                  label="Expiry"
                  validation={{ required: "Expiry date is required" }}
                  type="date"
                />
              </div>
            </div>
          </div>
          <WatchDiscountTypeChange />

          <div className="w-100 ms-2 mt-2 form-group mb-0 d-flex justify-content-end">
            <button className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2">
              {/* {appDetailsLoading || */}
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
              )}
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

EditCoupen.propTypes = {
  handleClose: PropTypes.func,
  coupen: PropTypes.object,
};
export default EditCoupen;
