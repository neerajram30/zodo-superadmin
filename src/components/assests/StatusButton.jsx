import PropTypes from "prop-types";
import React from "react";

function StatusButton(props) {
  const { status } = props;
  return (
    <button
      className={`btn hospital-draft-btn w-75 mt-1 ${
        (status === "active" || status === "approved" && "text-success border border-success") ||
        (status === "disabled" && "text-secondary border border-secondary") ||
        (status === "rejected" && "text-danger border border-danger") ||
        (status === "pending" || status === "requested" && "text-warning border border-warning")
      }`}
    >
      {status ?? "Inactive"}
    </button>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string,
};

export default StatusButton;
