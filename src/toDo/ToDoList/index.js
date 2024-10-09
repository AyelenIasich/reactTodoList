import "./ToDoList.css";

function ToDoList({ children }) {
    
  return (
    <>
      <div className="title-icon-wrapper pb-4">
        <p className="title-list mb-0">Today tasks</p>
        <i className="fa-solid fa-ellipsis rotated-icon option-icon"  ></i> 
      </div>
      <ul className="ps-0">{children}</ul>
    </>
  );
}

export default ToDoList;
