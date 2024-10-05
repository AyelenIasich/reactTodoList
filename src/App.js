import React, { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import ToDoCounter from "./components/ToDo/ToDoCounter/ToDoCounter";
import ToDoSearch from "./components/ToDo/ToDoSearch/ToDoSearch";
import ToDoContainer from "./components/ToDo/ToDoContainer/ToDoContainer";
import Header from "./components/Header/Header";
import Card from "./components/ToDo/Card/Card";
import ToDoList from "./components/ToDo/ToDoList/ToDoList";
import ToDoItem from "./components/ToDo/ToDoItem/ToDoItem";
import CompletedList from "./components/ToDo/CompletedTaskList/CompletedList";
import CreateToTaskBtn from "./components/ToDo/Buttons/CreateToTaskBtn";
import SuccessModal from "./components/ToDo/SuccesModal/SuccessModal";
import "./App.css";

const defaultTasks = [
  { id: 1, text: "Cortar Cebolla", completed: true },
  { id: 2, text: "Cleaning", completed: false },
  { id: 3, text: "Cooking", completed: false },
 
];

function App() {
  const [taskList, setTaskList] = useState(defaultTasks);
  const [searchValue, setSearchValue] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const completedTask = taskList.filter((task) => !!task.completed).length;
  const totalTask = taskList.length;

  useEffect(() => {
    if (completedTask === totalTask && totalTask > 0) {
      handleOpenSuccessModal();
    }
  }, [taskList]);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD") //Descompone los acentos
      .replace(/[\u0300-\u036f]/g, ""); //Elimina los acentos
  };

  const searchTasks = taskList.filter((task) => {
    const tastText = normalizeText(task.text);
    const searchText = normalizeText(searchValue);
    return tastText.includes(searchText);
  });

  const handleCompletedTask = (id) => {
    const newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex((task) => task.id == id);
    newTaskList[taskIndex].completed = true;
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (id) => {
    const newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex((task) => task.id == id);
    newTaskList.splice(taskIndex, 1);
    setTaskList(newTaskList);
  };

  const handleCloseSuccessModal = () =>{
    setShowSuccessMessage(false);
  }

  const handleOpenSuccessModal = () =>{
    setShowSuccessMessage(true);
  }

  return (
    <React.Fragment>
      <Container>
        <Header />
        <ToDoContainer>
          <ToDoCounter completedTask={completedTask} totalTask={totalTask} />
          <ToDoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Card>
            <ToDoList>
              {searchTasks.map((task) => (
                <ToDoItem
                  text={task.text}
                  key={task.id}
                  isCompleted={task.completed}
                  onComplete={() => handleCompletedTask(task.id)}
                  handleDeleteTask={() => handleDeleteTask(task.id)}
                />
              ))}
            </ToDoList>
          </Card>
          <div className="mb-5 pb-4 mb-sm-0 pb-md-0">
            <Card>
              <CompletedList />
            </Card>
          </div>
          <CreateToTaskBtn setTaskList={setTaskList} taskList={taskList} />
        </ToDoContainer>
      </Container>
      {showSuccessMessage && (
        <SuccessModal handleCloseModal={handleCloseSuccessModal} />
      )}
    </React.Fragment>
  );
}

export default App;
