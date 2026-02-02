import { getUser } from "@/lib/auth";
import { getTodos } from "@/lib/todo";
import TodoList from "@/components/TodoList";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) {
    // Only render this server-side redirect, no client JS required.
    return (
      <main className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl mb-4">Not Signed In</h1>
        <p>
          Please{" "}
          <a href="/login" className="underline text-blue-600">
            log in
          </a>{" "}
          to view your todos.
        </p>
      </main>
    );
  }
  const todos = await getTodos(user.id);

  return (
    <main className="max-w-3xl mx-auto min-h-screen py-8 px-4">
      <header className="flex items-center mb-8 justify-between">
        <h1 className="text-4xl font-bold">My Todos</h1>
        <a
          href="/"
          className="rounded px-3 py-2 bg-gray-100 hover:bg-blue-50 font-semibold text-blue-600"
        >
          Home
        </a>
      </header>
      <TodoList userId={user.id} initialTodos={todos} />
    </main>
  );
}