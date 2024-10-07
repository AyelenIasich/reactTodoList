import React, { useState } from "react";
import "./CreateTaskBtn.css"
import CreateTaskModal from "../CreateTaskModal";

function CreateTaskBtn({setTaskList, taskList}) {
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

export default CreateTaskBtn;
