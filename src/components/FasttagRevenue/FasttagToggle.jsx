import React from "react";
import SwitchSelector from "react-switch-selector";

function FasttagToggle() {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  const options = [
    {
      label: "",
      value: "",
      selectedBackgroundColor: "#FFFFFF",
    },
    {
      label: "",
      value: "",
      selectedBackgroundColor: "#FFFFFF",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "bar"
  );
  return (
    <div className="fastag-switch-table">
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#34C759"}
        fontColor={"#f5f6fa"}
      />
    </div>
  );
}

export default FasttagToggle;
