import React from "react";
import "./EmptyTodos.css";
import emptyTasksImage  from "../../assets/png/EmpyTaskIcon.png";

function EmptyTodos() {
  return (
    <div  className="empty-todos-container">
     <img src={emptyTasksImage} alt="No tasks available" className="empty-todos-image" />
      <p>There is not a task. Please create one</p>
    </div>
  );
}

export default EmptyTodos;
