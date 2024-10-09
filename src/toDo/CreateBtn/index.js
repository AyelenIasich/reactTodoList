import React from "react";
import "./CreateBtn.css";

function CreateBtn({ setShowModalCreate }) {
  return (
    <button
      onClick={() => {
        setShowModalCreate((state) => !state);
      }}
      className="btn-create-task-do"
    >
      +
    </button>
  );
}

export default CreateBtn;
