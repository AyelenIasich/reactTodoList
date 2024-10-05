import React, {useState} from "react";
import "./CreateTaskModal.css";
import ModalStandard from "../ModalStandard/ModalStandard";
import InputGeneric from "../Input/InputGeneric";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { handleCreateTask } from "../../../utils/buttonHandlers";
import SecondaryBtn from "../Buttons/SecondaryBtn";

function CreateTaskModal(props) {
  const { handleCloseModal, setTaskList , taskList} = props;
  const [taskName, setTaskName] = useState("");


  const handleSaveTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: taskList.length + 1, 
        text: taskName,          
        completed: false,       
      };

      setTaskList((taskList) => [...taskList, newTask]);

      setTaskName('');
      handleCloseModal();
    } else {
      alert("Task name cannot be empty.");
    }
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <ModalStandard title={"Create Task"} handleCloseModal={handleCloseModal}>
      <div className="modal-body py-4">
        <InputGeneric
          placeholder="Task name"
          value={taskName}
          onChange={handleChange}
        />
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
