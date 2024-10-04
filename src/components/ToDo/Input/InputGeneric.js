import React from "react";
import "./InputGeneric.css";

function InputGeneric(props) {
    const { placeholder, }= props;
  return (
    <input
      type="text"
      className="input-generic"
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
}

export default InputGeneric;
