import PropTypes from "prop-types";
import React from "react";

function StatusBadge(props) {
  const { status } = props;
  const statusCheck = status?.toLowerCase();
  console.log("Status",statusCheck);
  
  return (
    <div
      className={`custom-badge ${
        (statusCheck === "active" && "status-green") ||
        (statusCheck === "approved" && "status-green") ||
        (statusCheck === "paid fully" && "status-green") ||
        (statusCheck === "completed" && "status-green") ||
        (statusCheck === "disabled" && "status-grey") ||
        (statusCheck === "unavailable" && "status-grey") ||
        (statusCheck === "blocked" && "status-grey") ||
        (statusCheck === "rejected" && "status-red") ||
        (statusCheck === "pending" && "status-orange") ||
        (statusCheck === "requested" && "status-orange") ||
        (statusCheck === "accepted" && "status-orange")

      }`}
    >
      {status}
    </div>
  );
}
// props validation
StatusBadge.propTypes = {
  status: PropTypes.string,
};
export default StatusBadge;
