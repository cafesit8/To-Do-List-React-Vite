import { TaskRow } from "./TaskRown";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  function taskTableRows(doneValue) {
    return (
        tasks
        .filter(task => task.done === doneValue)
        .map((task) => {
        return <TaskRow toggleTask={toggleTask} key={task.name} task={task} />;
    }));
  }

  return (
    <table className="w-full mt-5">
      <thead className="bg-sky-700">
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {taskTableRows(showCompleted)}
      </tbody>
    </table>
  );
};
