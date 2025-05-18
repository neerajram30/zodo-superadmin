import PropTypes from "prop-types";

function StatusButton(props) {
  const { status } = props;
  console.log("Button status ", status);

  return (
    <button
      className={`btn hospital-draft-btn w-75 mt-1 ${
        (status === "active" && "text-success border border-success") ||
        (status === "approved" && "text-success border border-success") ||
        (status === "approved" &&
          "text-success border border-success"(
            status === "disabled" && "text-secondary border border-secondary"
          )) ||
        (status === "rejected" && "text-danger border border-danger") ||
        (status === "pending" && "text-warning border border-warning") ||
        (status === "requested" && "text-warning border border-warning")
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
