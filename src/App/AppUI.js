import React, { useContext } from "react";
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
import ToDosLoading from "../toDo/ToDosLoading";
import ToDosError from "../toDo/ToDosError";
import EmptyTodos from "../toDo/EmpyTodos/EmptyTodos";
import { ToDoContext } from "../ToDoContext";
import Modal from "../toDo/Modal";
import CreateBtn from "../toDo/CreateBtn";
import ToDoForm from "../toDo/ToDoForm";

function AppUI() {
  const {
    loading,
    error,
    searchTasks,
    handleDeleteTask,
    handleCompletedTask,
    showModalCreate,
    setShowModalCreate,
    showSuccessMessage, 
    handleCloseSuccessModal, 
  } = useContext(ToDoContext);

  return (
    <React.Fragment>
      <Container>
        <Header />
        <ToDoContainer>
          <ToDoCounter />
          <ToDoSearch />
          <Card>
            <ToDoList>
              {loading && (
                <>
                  <ToDosLoading />
                  <ToDosLoading />
                  <ToDosLoading />
                </>
              )}
              {error && <ToDosError />}
              {!loading && searchTasks.length === 0 && <EmptyTodos />}
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
          {/* <CreateTaskBtn/> */}
          <CreateBtn setShowModalCreate={setShowModalCreate}/>
        </ToDoContainer>
      </Container>
      {showSuccessMessage && (
        <SuccessModal handleCloseModal={handleCloseSuccessModal} />
      )}
      {showModalCreate && 
      <Modal>
        <ToDoForm/>
      </Modal>}
    </React.Fragment>
  );
}

export default AppUI;
