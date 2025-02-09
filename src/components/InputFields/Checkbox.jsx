import PropTypes from "prop-types";
import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

function Checkbox(props) {
  const { name, label } = props;
  const [checked, setChecked] = useState(false);
  const {
    register,
    // formState: { errors },
    setValue,
    control
  } = useFormContext();

  const address = useWatch({ control, name: "address" });
  const companyName = useWatch({control, name: "companyName"});
  const street = useWatch({control, name: "street"});
  const town = useWatch({control, name: "town"});
  const district = useWatch({control, name: "district"});
  const state = useWatch({control, name: "state"});
  const pincode = useWatch({control, name: "pincode"});

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    // console.log(e.target.checked);
    setChecked(isChecked);
    // onChangeHandler(isChecked);
    if(isChecked){
      setValue('billingAddress',address);
      setValue('billingAccountHoldername',companyName);
      setValue('billingStreet',street);
      setValue('billingTown',town);
      setValue('billingDistrict',district);
      setValue('billingState',state);
      setValue('billingPincode',pincode);
      // setValue('billingAddress',address);

    }
    else{
      setValue('billingAddress','');
      setValue('billingAccountHoldername','');
      setValue('billingStreet','');
      setValue('billingTown','');
      setValue('billingDistrict','');
      setValue('billingState','');
      setValue('billingPincode','');
    }
  };
  return (
    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
      {" "}
      {label}
      <input
        type="checkbox"
        name={name}
        onClick={handleCheck}
        checked={checked}
        {...register(name)}
      />
      <span className="checkmark" />
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  // validation: PropTypes.node,
  // onChangeHandler: PropTypes.node,
};

export default Checkbox;
