"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link href="/" className="font-bold text-xl">
        TaskDash
      </Link>
      <div>
        <Link href="/dashboard" className="mr-3 hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="mr-2 hover:underline">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100">
          Signup
        </Link>
      </div>
    </nav>
  );
}