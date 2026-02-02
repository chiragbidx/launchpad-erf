"use client";
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between bg-white rounded shadow px-4 py-2">
      <label className="flex items-center cursor-pointer flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="mr-3 accent-blue-600"
        />
        <span className={`text-lg ${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.title}
        </span>
      </label>
      <button
        onClick={onDelete}
        aria-label="Delete todo"
        className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </li>
  );
}