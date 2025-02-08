import PropTypes from "prop-types";
import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function ToastMessage(props) {
  const { showToast, setShowToast, state, message } = props;
  return (
    <ToastContainer position="top-end" className="p-3 position-fixed">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong
            className={`me-auto ${
              state === "Success" ? "text-success" : "text-danger"
            } `}
          >
            {state}
          </strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

ToastMessage.propTypes = {
  showToast: PropTypes.node,
  setShowToast: PropTypes.node,
  state: PropTypes.node,
  message: PropTypes.node,
};

export default ToastMessage;
