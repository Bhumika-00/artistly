'use client';
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function OnboardingPage() {
  return (
    <div className="dark:bg-zinc-950 min-h-screen transition-colors">
      <Navbar />
      <main className="px-6 py-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Artist Onboarding</h2>
        <form className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4">
          <input type="text" placeholder="Artist Name" className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white" />
          <textarea placeholder="Short Bio" className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"></textarea>
          <select className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white">
            <option>Select Category</option>
            <option>Singer</option>
            <option>Dancer</option>
            <option>DJ</option>
            <option>Speaker</option>
          </select>
          <input type="text" placeholder="Location" className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white" />
          <button type="submit" className="w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
