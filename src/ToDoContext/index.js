import React, { useState, createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const {
    item: taskList,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("tasks_v1", []);

  const [searchValue, setSearchValue] = useState("");
  const completedTask = taskList.filter((task) => !!task.completed).length;
  const totalTask = taskList.length;
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [formError, setFormError] = useState({ field: "", message: "" });

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
    const taskIndex = newTaskList.findIndex((task) => task.id === id);
    newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed;
    saveTasks(newTaskList);
  };

  const handleDeleteTask = (id) => {
    const newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex((task) => task.id === id);
    newTaskList.splice(taskIndex, 1);
    saveTasks(newTaskList);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCloseSuccessModal = () => {
    setShowSuccessMessage(false);
  };

  const handleOpenSuccessModal = () => {
    setShowSuccessMessage(true);
  };

  const handleCreateTask = (newTask) => {
    const errorEntity = { ...onValidate(newTask) };

    if (Object.keys(errorEntity).length === 0) {
      const newTodos = [...taskList];
      const newTaskObject = {
        id: taskList.length + 1,
        text: newTask,
        completed: false,
      };
      newTodos.push(newTaskObject);
      saveTasks(newTodos);
      setShowModalCreate(false);
    }
  };

  const onValidate = (newTask) => {
    const validationNameTask = onValidateTask(newTask);

    let errorEntity = {};
    if (validationNameTask.message) {
        errorEntity = validationNameTask;
      }
    setFormError(errorEntity);
    return errorEntity;
  };

  const onValidateTask = (newTask) => {
    let error = { field: "taskName", message: "" };

    if (!newTask.trim()) {
      error.message = "Task name cannot be empty";
    }
    return error;
  };

  useEffect(() => {
    if (completedTask === totalTask && totalTask > 0) {
      handleOpenSuccessModal();
    }
  }, [completedTask, totalTask]);

  return (
    <ToDoContext.Provider
      value={{
        completedTask,
        totalTask,
        searchValue,
        setSearchValue,
        showSuccessMessage,
        loading,
        error,
        searchTasks,
        handleDeleteTask,
        handleCompletedTask,
        handleCloseSuccessModal,
        handleOpenSuccessModal,
        showModalCreate,
        setShowModalCreate,
        handleCreateTask,
        formError,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
