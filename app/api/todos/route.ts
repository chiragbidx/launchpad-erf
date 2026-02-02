import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/auth";
import { getTodos, createTodo, updateTodo, deleteTodo } from "@/lib/todo";

export async function GET(req: NextRequest) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const todos = await getTodos(user.id);
  return NextResponse.json({ todos });
}

export async function POST(req: NextRequest) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { title } = await req.json();
  if (!title || typeof title !== "string")
    return NextResponse.json({ error: "Invalid title" }, { status: 400 });
  const todo = await createTodo({ title, userId: user.id });
  return NextResponse.json({ todo }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, title, completed } = await req.json();
  if (!id || typeof id !== "string")
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  const todo = await updateTodo({ id, title, completed, userId: user.id });
  if (!todo) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ todo });
}

export async function DELETE(req: NextRequest) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  if (!id || typeof id !== "string")
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  const ok = await deleteTodo({ id, userId: user.id });
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}