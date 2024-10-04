import React, { useState } from "react";
import "./CompletedList.css";
import ToDoItem from "../ToDoItem/ToDoItem";

function CompletedList(props) {
  const { completedNumber = 2 } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const completedTask = [
    { id: 1, text: "Cortar Cebolla 222", completed: true },
    { id: 2, text: "Cleaning 22", completed: true },
    { id: 3, text: "Cooking 333", completed: true },
  ];

  return (
    <>
      <div className="dropdown-wrapper " onClick={toggleDropdown}>
        <p className="title-list mb-0">Completed ({completedNumber})</p>
        <i className="fa-solid fa-chevron-down arrow-down-icon"></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <ul className="ps-0">
            {completedTask.map((completedTask) => (
              <ToDoItem
                text={completedTask.text}
                key={completedTask.id}
                completed={completedTask.completed}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CompletedList;
