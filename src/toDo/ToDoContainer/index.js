import React from "react";
import "./ToDoContainer.css";

function ToDoContainer({ children }) {
  return <div className="bg-grey-card px-sm-5 px-3 py-4 ">{children}</div>;
}

export default ToDoContainer;
