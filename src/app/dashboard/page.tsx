'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const artistList = [
    { name: 'Aditi Sharma', category: 'Singer', city: 'Delhi', fee: '₹15,000 - ₹25,000' },
    { name: 'Ravi Mehta', category: 'DJ', city: 'Mumbai', fee: '₹20,000 - ₹40,000' },
    { name: 'Nisha Verma', category: 'Dancer', city: 'Pune', fee: '₹10,000 - ₹20,000' },
  ];

  return (
    <div className="dark:bg-zinc-950 min-h-screen transition-colors">
      <Navbar />
      <main className="px-6 py-12 max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Manager Dashboard
        </motion.h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-zinc-900 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-200 dark:bg-zinc-800">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">City</th>
                <th className="px-6 py-3">Fee</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {artistList.map((artist, i) => (
                <tr key={i} className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-700">
                  <td className="px-6 py-4">{artist.name}</td>
                  <td className="px-6 py-4">{artist.category}</td>
                  <td className="px-6 py-4">{artist.city}</td>
                  <td className="px-6 py-4">{artist.fee}</td>
                  <td className="px-6 py-4">
                    <button className="text-purple-700 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
