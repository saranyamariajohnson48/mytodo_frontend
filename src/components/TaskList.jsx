export default function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm border hover:shadow-md transition"
        >
          <span
            className={`flex-1 ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
            onClick={() => toggleTask(task._id, task.completed)}
          >
            {task.text}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => editTask(task._id, prompt("Edit Task", task.text))}
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
