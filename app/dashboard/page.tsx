import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <section className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg text-gray-700">
          Welcome to your TaskDash dashboard! Your todos and activity will appear here.
        </p>
      </section>
    </main>
  );
}