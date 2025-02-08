import PropTypes from "prop-types";
import React from "react";
import { useFormContext } from "react-hook-form";

function TextArea(props) {
  const { name, label, validation, placeholder } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        rows={5}
        cols={5}
        id={name}
        name={name}
        // type={type}
        placeholder={placeholder}
        className={`form-control ${
          errors !== undefined && errors[name] ? "is-invalid" : ""
        }`}
        {...register(name, validation)}
      />
      {errors !== undefined && errors[name] && (
        <div className="invalid-feedback">
          {errors !== undefined && errors[name].message}
        </div>
      )}
    </div>
  );
}

TextArea.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  validation: PropTypes.node,
  placeholder: PropTypes.node,
};

export default TextArea;
