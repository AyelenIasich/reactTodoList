import React, { useContext } from "react";
import "./ToDoCounter.css";
import LoadingToDoCounter from "../LoadingToDoCounter";

function ToDoCounter({ completedTask, totalTask, loading }) {
  return (
    <>
      {loading ? (
        <LoadingToDoCounter />
      ) : (
        <h5 className="title pb-4">
          You have completed {completedTask} of {totalTask} task
        </h5>
      )}
    </>
  );
}

export default ToDoCounter;
