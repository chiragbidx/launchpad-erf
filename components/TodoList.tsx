"use client";
import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  userId: string;
  initialTodos: Todo[];
};

export default function TodoList({ userId, initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [title, setTitle] = useState("");
  const [creating, setCreating] = useState(false);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setCreating(true);
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    if (res.ok) {
      setTodos([data.todo, ...todos]);
      setTitle("");
    }
    setCreating(false);
  }

  async function handleUpdate(id: string, completed: boolean) {
    const res = await fetch("/api/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed }),
    });
    const data = await res.json();
    if (res.ok) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: data.todo.completed } : t))
      );
    }
  }

  async function handleDelete(id: string) {
    const res = await fetch("/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }
  }

  return (
    <section>
      <form onSubmit={handleCreate} className="flex items-center gap-2 mb-6">
        <input
          className="border rounded p-2 flex-1"
          placeholder="Add new todo…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={creating}
          maxLength={100}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
          type="submit"
          disabled={creating}
        >
          {creating ? "Adding…" : "Add"}
        </button>
      </form>
      <ul className="space-y-2">
        {todos.length === 0 && <li className="text-gray-500">No todos yet.</li>}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleUpdate(todo.id, !todo.completed)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}