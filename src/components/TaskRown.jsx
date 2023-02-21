

export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td className="bg-blue-900 flex justify-center items-center py-2">
        {task.name}
        <input
            className="ml-3 cursor-pointer"
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
