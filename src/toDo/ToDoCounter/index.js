import "./ToDoCounter.css";

function ToDoCounter(props) {
  const { completedTask, totalTask } = props;

  return (
    <h5 className="title pb-4">
      You have completed {completedTask} of {totalTask} task
    </h5>
  );
}

export default ToDoCounter;
