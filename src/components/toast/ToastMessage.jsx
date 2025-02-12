import PropTypes from "prop-types";
import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function ToastMessage(props) {
  const { showToast, setShowToast } = props;
  return (
    <ToastContainer position="top-end" className="p-3 position-fixed">
      <Toast
        onClose={() => setShowToast({ show: false, message: "", state: "" })}
        show={showToast.show}
        delay={5000}
        autohide
        // bg={showToast.status}
      >
        {/* <Toast.Header>
          <strong
            className={`me-auto ${
              state === "Success" ? "text-success" : "text-danger"
            } `}
          >
            {state}
          </strong>
        </Toast.Header> */}
        <Toast.Body className={`text-${showToast.status} bg-white`}>{showToast?.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

ToastMessage.propTypes = {
  showToast: PropTypes.node,
  setShowToast: PropTypes.node,
};

export default ToastMessage;
