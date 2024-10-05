import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const { text, isCompleted, onComplete , handleDeleteTask} = props;

  return (
    <li className="list-item-wrapper py-3 ">
      <span 
        className={`circle ${isCompleted ? "completed" : ""}`} 
        onClick={onComplete}
      />
      <p className={`mb-0 task ${isCompleted ? "task-completed" : "" }`}>{text}</p>
      <i className="fa-solid fa-x delete-icon" onClick={handleDeleteTask}></i>
    </li>
  );
}

export default ToDoItem;
