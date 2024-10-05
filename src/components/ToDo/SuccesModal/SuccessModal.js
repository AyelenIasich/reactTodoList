import React from "react";
import "./SuccessModal.css";
import ModalStandard from "../ModalStandard/ModalStandard";

function SuccessModal(props) {
  const { handleCloseModal } = props;
  return (
    <ModalStandard
      title={"Congratulations"}
      handleCloseModal={handleCloseModal}
    >
      <div className="modal-body py-4">
        <h4>You have completed all your tasks!!</h4>
      </div>
    </ModalStandard>
  );
}

export default SuccessModal;
