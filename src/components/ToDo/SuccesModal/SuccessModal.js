import React from "react";
import "./SuccessModal.css";
import ModalStandard from "../ModalStandard/ModalStandard";
import StarSuccessIcon from "../../Icons/StarSuccessIcon";

function SuccessModal(props) {
  const { handleCloseModal } = props;
  return (
    <ModalStandard
      title={"Congratulations"}
      handleCloseModal={handleCloseModal}
      style="title-modal"
    >
      <div className="modal-body py-4">
        <StarSuccessIcon />
        <h4 className="text-center pt-3">You have completed all your tasks!!</h4>
      </div>
    </ModalStandard>
  );
}

export default SuccessModal;
