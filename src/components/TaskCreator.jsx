import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  function handleButton(e) {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  }

  return (
    <form className="flex flex-col w-60 m-auto gap-4">
      <input
        className="py-1 px-2 text-black"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Escribe algo"
      />
      <button
        className="bg-sky-500 px-2 py-1 rounded-lg"
        onClick={handleButton}
      >
        Add Task
      </button>
    </form>
  );
};
