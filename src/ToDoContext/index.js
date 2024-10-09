import React, { useState, createContext } from "react";
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

  //   useEffect(() => {
  //     if (completedTask === totalTask && totalTask > 0) {
  //       handleOpenSuccessModal();
  //     }
  //   }, [completedTask, totalTask]);

  const handleCloseSuccessModal = () => {
    setShowSuccessMessage(false);
  };

  const handleOpenSuccessModal = () => {
    setShowSuccessMessage(true);
  };

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
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
