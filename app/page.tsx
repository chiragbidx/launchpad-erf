"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <nav className="w-full flex justify-between items-center p-4 max-w-4xl mx-auto">
        <span className="font-bold text-xl text-blue-600">TaskDash</span>
        <div>
          <Link href="/login" className="mr-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 rounded bg-white text-blue-600 border border-blue-500 hover:bg-blue-100">
            Signup
          </Link>
        </div>
      </nav>
      <section className="text-center mt-20 max-w-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Organize Your Life with <span className="text-blue-600">TaskDash</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The modern, fast, and secure Todo List app. Stay productive and never miss a task again!
        </p>
        <Link href="/signup">
          <button className="px-8 py-4 text-lg font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 shadow-md">
            Get Started Free
          </button>
        </Link>
      </section>
      <footer className="absolute bottom-4 w-full text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TaskDash. All rights reserved.
      </footer>
    </main>
  );
}