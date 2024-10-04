import React, { useState } from "react";
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
import "./App.css";

const defaultTasks = [
  { id: 1, text: "Cortar Cebolla", completed: true },
  { id: 2, text: "Cleaning", completed: false },
  { id: 3, text: "Cooking", completed: false },
  { id: 4, text: "Cooking", completed: false },
  { id: 5, text: "Cooking", completed: false },
  { id: 6, text: "Cooking", completed: false },
  { id: 7, text: "Cooking", completed: false },
  { id: 8, text: "Cooking", completed: false },
];

function App() {
  const [taskList, setTaskList] = useState(defaultTasks)
  const [searchValue, setSearchValue] = useState("");

  const completedTask = taskList.filter(task => !!task.completed).length;
  const totalTask = taskList.length;
 
  const normalizeText = (text) =>{
    return text 
    .toLowerCase()
    .normalize("NFD") //Descompone los acentos
    .replace(/[\u0300-\u036f]/g, ""); //Elimina los acentos
  };

  const searchTasks = taskList.filter(
    (task) => {
      return normalizeText(task.text).includes(normalizeText(searchValue));
    }
  );


  return (
    <React.Fragment>
      <Container>
        <Header />
        <ToDoContainer>
          <ToDoCounter completedTask={completedTask} totalTask={totalTask}/>
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
                  completed={task.completed}
                />
              ))}
            </ToDoList>
          </Card>
          <div className="mb-5 pb-4 mb-sm-0 pb-md-0">
            <Card>
              <CompletedList />
            </Card>
          </div>
          <CreateToTaskBtn />
        </ToDoContainer>
      </Container>
    </React.Fragment>
  );
}

export default App;
