import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
function SelectField(props) {
  const {
    name,
    label,
    options,
    validationMessage,
    placeholder,
    isMultiSelect,
    isLoading,
    defaultValue,
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  
  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused
        ? "none"
        : "2px solid rgba(46, 55, 164, 0.1);",
      boxShadow: state.isFocused ? "0 0 0 1px #05A95C" : "none",
      "&:hover": {
        borderColor: state.isFocused
          ? "none"
          : "2px solid rgba(46, 55, 164, 0.1)",
      },
      borderRadius: "10px",
      fontSize: "14px",
      minHeight: "45px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#347D73" : provided.backgroundColor,
      "&:active": {
        backgroundColor: state.isSelected
          ? "#347D73"
          : provided.backgroundColor,
      },
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
      width: "35px",
      height: "35px",
    }),
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-2">
          {label}
          {validationMessage && (
            <span style={{ color: "red" }} className="ms-1">
              *
            </span>
          )}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: validationMessage }}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            // className="basic-single"
            // classNamePrefix="select"
            placeholder={placeholder}
            styles={selectStyle}
            isMulti={isMultiSelect}
            isLoading={isLoading}
          />
        )}
      />
      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

SelectField.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  validationMessage: PropTypes.node,
  placeholder: PropTypes.node,
  isMultiSelect: PropTypes.node,
  options: PropTypes.node,
  isLoading: PropTypes.node,
  defaultValue: PropTypes.object,
};

export default SelectField;
