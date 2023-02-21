import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function cleanTask(){
      setTaskItems(taskItems.filter(task => !task.done))
      setShowCompleted(false)
  }

  function toggleTask(task) {
    setTaskItems(
      taskItems.map((item) =>
        item.name == task.name ? { ...task, done: !item.done } : item
      )
    );
  }

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="text-white">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable toggleTask={toggleTask} tasks={taskItems} />
      <VisibilityControl 
      isCheked={showCompleted}
      setShowCompleted={(checked)=>setShowCompleted(checked)}
      cleanTask={cleanTask} />
      {showCompleted && (
        <TaskTable
          toggleTask={toggleTask}
          tasks={taskItems}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;