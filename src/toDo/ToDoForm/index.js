import React, { useContext, useState } from "react";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import "./ToDoForm.css";
import { ToDoContext } from "../../ToDoContext";
import InputError from "../../components/InputError";

function ToDoForm() {
  const {setShowModalCreate, handleCreateTask, formError} = useContext(ToDoContext);
  const [newTaskValue , setNewTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTask(newTaskValue);
  };

  const handleCancel = () =>{
    setShowModalCreate(false);
  }

  const handleChange = (e) => {
    setNewTaskValue(e.target.value);
  };
  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <label className="label-create">Create New Task</label>
      <textarea
        className="textarea-create"
        placeholder="Cleaning kitchen"
        value={newTaskValue}
        onChange={handleChange}
      ></textarea>
      <InputError formError={formError.field === 'taskName' && formError.message}/>
      <div className="row py-2  d-flex justify-content-end">
        <div className="col-6 col-sm-4">
          <SecondaryBtn label="Cancel" onClick={handleCancel} />
        </div>
        <div className="col-6 col-sm-4">
          <PrimaryBtn label="Create Task" />
        </div>
      </div>
    </form>
  );
}

export default ToDoForm;
