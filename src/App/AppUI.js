import React from "react";
import Container from "../components/Container";
import ToDoCounter from "../toDo/ToDoCounter";
import ToDoSearch from "../toDo/ToDoSearch";
import ToDoContainer from "../toDo/ToDoContainer";
import Header from "../toDo/Header";
import Card from "../components/Card";
import ToDoList from "../toDo/ToDoList";
import ToDoItem from "../toDo/ToDoItem";
import CompletedList from "../toDo/CompletedTaskList";
import CreateTaskBtn from "../toDo/CreateTaskBtn";
import SuccessModal from "../toDo/SuccesModal";

function AppUI({
  completedTask,
  totalTask,
  searchValue,
  setSearchValue,
  searchTasks,
  handleCompletedTask,
  handleDeleteTask,
  handleCloseSuccessModal,
  showSuccessMessage,
}) {
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
              {searchTasks > 0 ? (
                searchTasks.map((task) => (
                  <ToDoItem
                    text={task.text}
                    key={task.id}
                    isCompleted={task.completed}
                    onComplete={() => handleCompletedTask(task.id)}
                    handleDeleteTask={() => handleDeleteTask(task.id)}
                  />
                ))
              ) : (
                <p className="text-center">No tasks found. Start adding some tasks!</p>
              )}
            </ToDoList>
          </Card>
          <div className="mb-5 pb-4 mb-sm-0 pb-md-0">
            <Card>
              <CompletedList />
            </Card>
          </div>
          {/* <CreateToTaskBtn setTaskList={setTaskList} taskList={taskList} /> */}
        </ToDoContainer>
      </Container>
      {showSuccessMessage && (
        <SuccessModal handleCloseModal={handleCloseSuccessModal} />
      )}
    </React.Fragment>
  );
}

export default AppUI;
