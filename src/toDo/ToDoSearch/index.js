import React, {useContext} from "react";
import { ToDoContext } from "../../ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {
 const {searchValue, setSearchValue} = useContext(ToDoContext)
 
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  };
 
  return (
    <div className=" mb-3 search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Search a task"
        aria-label="Search a task"
        onChange={handleSearch}
        value={searchValue}
      />
      <i className="fa-solid fa-magnifying-glass search-icon pe-3"></i>
    </div>
  );
}

export default ToDoSearch;
