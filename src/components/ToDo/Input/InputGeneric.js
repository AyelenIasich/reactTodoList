import React from "react";
import "./InputGeneric.css";

function InputGeneric(props) {
    const { placeholder, value, onChange }= props;
  return (
    <input
      type="text"
      className="input-generic"
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputGeneric;
