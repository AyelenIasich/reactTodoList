import React from "react";
import "./ModalStandard.css";

function ModalStandard({ children, title, handleCloseModal, style }) {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className={`modal-title ${style}`}>{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalStandard;
