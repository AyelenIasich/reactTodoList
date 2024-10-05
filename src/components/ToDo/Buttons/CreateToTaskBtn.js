import React, { useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import "./CreateToTaskBtn.css";

function CreateToTaskBtn({setTaskList, taskList}) {
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenCreateModal = () => {
    setShowModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenCreateModal} className="btn-create-task">
        +
      </button>
      {showModal && <CreateTaskModal handleCloseModal={handleCloseCreateModal} setTaskList={setTaskList} taskList={taskList} />}
    </>
  );
}

export default CreateToTaskBtn;
