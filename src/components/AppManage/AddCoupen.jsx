import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import SelectField from "../InputFields/SelectField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCoupen } from "../../apis/appmanage";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function AddCoupen({ handleClose }) {
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

  const mutation = useMutation({
    mutationFn: createCoupen, // API function to create
    // onMutate: async () => {
    //   // Cancel any ongoing queries for doctors to prevent race conditions
    //   await QueryClient.cancelQueries({ queryKey: ["coupens"] });
    // },
  });

  const onCreateCoupen = (data) => {
    console.log(data);
    const coupen_data = {
      coupon_code: data?.coupencode,
      discount_type: data?.discountOptions?.value,
      valid_untill: data?.expiry,
      minimum_cart_amount: parseInt(data?.minimumcart),
      minimum_discount_allowed: parseInt(data?.minimumdiscount),
      usage_limit: parseInt(data?.usagelimit),
      usage_limit_per_user: parseInt(data?.usagelimituser),
    };

    mutation.mutate(coupen_data, {
      onSuccess: (data) => {
        handleClose();
        methods.reset();
        const message = data?.message || "Coupen added successfully";
        toast.success(message);
        queryClient.invalidateQueries(["coupens"]);
      },
      onError:(error)=>{
        const errorMessage =
        error?.response?.data?.validationErrors || error?.response?.data?.message || "Failed to add coupen";
        toast.error(errorMessage);
        queryClient.invalidateQueries(["coupens"]);
        handleClose();
        methods.reset();
      }
    });
  };
  const loading = mutation.isPending;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onCreateCoupen)}>
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
                  label="Minimum Discount Amount"
                  validation={{
                    required: "Minimum discount amount is required",
                  }}
                  type="price"
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

          <div className="form-group mb-0 d-flex justify-content-end">
            <div className="settings-btns">
              <button
                type="submit"
                className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2 ms-2"
                disabled={loading}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

AddCoupen.propTypes = {
  handleClose: PropTypes.func,
};

export default AddCoupen;
