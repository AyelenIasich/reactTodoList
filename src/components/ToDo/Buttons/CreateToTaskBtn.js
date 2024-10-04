import React, { useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import "./CreateToTaskBtn.css";

function CreateToTaskBtn() {
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenCreateModal = () => {
    setShowModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowModal(false);
  };

  const handleSaveTask = () => {
    console.log("save task");
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenCreateModal} className="btn-create-task">
        +
      </button>
      {showModal && <CreateTaskModal handleCloseModal={handleCloseCreateModal} handleSaveTask={handleSaveTask} />}
    </>
  );
}

export default CreateToTaskBtn;
