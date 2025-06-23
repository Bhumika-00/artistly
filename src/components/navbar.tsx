'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Theme toggle
export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-zinc-900 shadow-md flex justify-between items-center transition-colors">
      <Link href="/">
        <span className="text-2xl font-bold text-purple-700 dark:text-purple-400 cursor-pointer">Artistly</span>
      </Link>
      <div className="space-x-4 flex items-center">
        <Link href="/">
          <span className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 cursor-pointer">Home</span>
        </Link>
        <Link href="/artists">
          <span className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 cursor-pointer">Explore Artists</span>
        </Link>
        <Link href="/onboarding">
          <span className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 cursor-pointer">Onboard</span>
        </Link>
        <Link href="/dashboard">
          <span className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 cursor-pointer">Dashboard</span>
        </Link>
        <button onClick={() => setIsDark(!isDark)} className="ml-4 text-sm px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white">
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}