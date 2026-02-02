"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar />
      <section className="flex flex-col items-center text-center mt-20 max-w-xl mx-auto flex-1">
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
      <footer className="w-full text-center text-gray-400 text-sm mt-auto mb-4">
        © {new Date().getFullYear()} TaskDash. All rights reserved.
      </footer>
    </main>
  );
}