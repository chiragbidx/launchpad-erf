type Todo = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
};

let todos: Todo[] = [];

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

export async function getTodos(userId: string): Promise<Todo[]> {
  return todos.filter((t) => t.userId === userId);
}

export async function createTodo({
  title,
  userId,
}: {
  title: string;
  userId: string;
}) {
  const todo: Todo = {
    id: makeId(),
    title,
    completed: false,
    userId,
  };
  todos.unshift(todo);
  return todo;
}

export async function updateTodo({
  id,
  completed,
  title,
  userId,
}: {
  id: string;
  completed?: boolean;
  title?: string;
  userId: string;
}) {
  const todo = todos.find((t) => t.id === id && t.userId === userId);
  if (!todo) return null;
  if (typeof completed === "boolean") todo.completed = completed;
  if (typeof title === "string") todo.title = title;
  return todo;
}

export async function deleteTodo({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) {
  const index = todos.findIndex((t) => t.id === id && t.userId === userId);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}