import React from "react";
import ReactDOM from "react-dom";
import "./ModalCreate.css"

function Modal({ children }) {
  return ReactDOM.createPortal(<div className="modal-wrapper">{children}</div>, 
    document.getElementById("modal")
  );
}

export default Modal;
