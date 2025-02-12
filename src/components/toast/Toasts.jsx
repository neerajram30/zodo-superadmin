import React, { useState } from "react";
import { ToastContainer, To, Toast } from "react-bootstrap";

function Toasts() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");

  const showToast = (msg, type = "success") => {
    setMessage(msg);
    setVariant(type);
    setShow(true);
  };

  return (
    <>
      {/* This will be used in other components */}
      {showToast && (
        <button
          style={{ display: "none" }}
          onClick={() => showToast("")}
        ></button>
      )}

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={variant}
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default Toasts;
