import React from "react";
import "./CreateTaskModal.css";
import ModalStandard from "../ModalStandard/ModalStandard";
import InputGeneric from "../Input/InputGeneric";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { handleCreateTask } from "../../../utils/buttonHandlers";
import SecondaryBtn from "../Buttons/SecondaryBtn";

function CreateTaskModal(props) {
  const { handleCloseModal, handleSaveTask } = props;
  return (
    <ModalStandard title={"Create Task"} handleCloseModal={handleCloseModal}>
      <div className="modal-body py-4">
        <InputGeneric placeholder="Task name" />
      </div>
      <div className="row py-2  d-flex justify-content-end">
        <div className="col-6 col-sm-4">
          <SecondaryBtn label="Cancel" onClick={handleCloseModal} />
        </div>
        <div className="col-6 col-sm-4">
          <PrimaryBtn label="Create Task" onClick={handleSaveTask} />
        </div>
      </div>
    </ModalStandard>
  );
}

export default CreateTaskModal;
