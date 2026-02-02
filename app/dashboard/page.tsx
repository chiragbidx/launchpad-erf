import Navbar from "@/components/Navbar";
import { getUser } from "@/lib/auth";
import { getTodos } from "@/lib/todo";
import TodoList from "@/components/TodoList";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) {
    // Only render this server-side redirect, no client JS required.
    return (
      <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
        <Navbar />
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
    <main className="max-w-3xl mx-auto min-h-screen py-8 px-4 bg-gray-50">
      <Navbar />
      <header className="flex items-center mb-8 justify-between">
        <h1 className="text-4xl font-bold">My Todos</h1>
      </header>
      <TodoList userId={user.id} initialTodos={todos} />
    </main>
  );
}