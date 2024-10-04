import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const { text, completed } = props;
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted); 
  };

  return (
    <li className="list-item-wrapper py-3 ">
      <span 
        className={`circle ${isCompleted ? "completed" : ""}`} 
        onClick={toggleComplete}
      />
      <p className={`mb-0 task ${isCompleted ? "task-completed" : "" }`}>{text}</p>
      <i className="fa-solid fa-x delete-icon"></i>
    </li>
  );
}

export default ToDoItem;
