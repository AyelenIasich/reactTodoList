import React, { useState } from "react";
import "./InputError.css";

function InputError({ formError }) {
  const [errorVisible, setErrorVisible] = useState(true);
  const handleHideError = () => {
    setErrorVisible(false);
  };
  return (
    <>
      {errorVisible && formError ? (
        <div className="error-wrapper mb-3">
          <p className="error-message">{formError}</p>
          <i className="fa-solid fa-x hide-error" onClick={handleHideError}></i>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputError;
