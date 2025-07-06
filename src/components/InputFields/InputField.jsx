import PropTypes from "prop-types";
import React from "react";
import { useFormContext } from "react-hook-form";

function InputField(props) {
  const {
    name,
    label,
    type,
    validation,
    placeholder,
    disabled,
    defaultValue,
    pattern,
    minValue,
  } = props;
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  // 🛡️ Block value less than minValue
  const handleInput = (e) => {
    console.log(e.target.type);
    
    const value = e.target.value;
    if (value === "") return; // Allow empty temporarily (optional)
    if (Number(value) < minValue) {
      e.target.value = minValue;
      setValue(name, minValue); // sync with form
    }
  };


  // const handleKeyDown = (e) => {
  //   const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight"];
  //   const currentValue = getValues(name);

  //   if (
  //     e.key === "Backspace" &&
  //     (currentValue === "" || Number(currentValue) <= minValue)
  //   ) {
  //     e.preventDefault(); // block deletion if already at min
  //   }

  //   if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
  //     e.preventDefault(); // block anything not a digit or control key
  //   }

  //   const nextValue = currentValue + e.key;
  //   if (!isNaN(nextValue) && Number(nextValue) < minValue) {
  //     e.preventDefault(); // block if resulting value < minValue
  //   }
  // };

  return (
    <div>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {validation?.required && (
            <span style={{ color: "red" }} className="ms-1">
              *
            </span>
          )}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`form-control ${
          errors !== undefined && errors[name] ? "is-invalid" : ""
        }`}
        {...register(name, validation)}
        defaultValue={defaultValue}
        pattern={pattern}
        min={minValue}
        onInput={handleInput}
        // onKeyDown={handleKeyDown}
      />
      {errors !== undefined && errors[name] && (
        <div className="invalid-feedback">
          {errors !== undefined && errors[name].message}
        </div>
      )}
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  type: PropTypes.node,
  validation: PropTypes.node,
  placeholder: PropTypes.node,
  disabled: PropTypes.node,
  defaultValue: PropTypes.node,
  pattern: PropTypes.string,
  minValue: PropTypes.number,
};

export default InputField;
