'use client';
import { motion } from 'framer-motion';

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  { title: "Singers", icon: "/icons/singer.png" },
  { title: "Dancers", icon: "/icons/dancer.png" },
  { title: "DJs", icon: "/icons/dj.png" },
  { title: "Speakers", icon: "/icons/speaker.png" },
];

export default function HomePage() {
  return (
    <div className="dark:bg-zinc-950 transition-colors">
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 bg-purple-50 dark:bg-zinc-900 transition-colors"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Discover & Book Performing Artists</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
          Artistly helps event planners connect with talented performers across India. Start exploring now.
        </p>
        <a href="/artists" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-800 transition">Explore Artists</a>
      </motion.section>
       
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} title={cat.title} icon={cat.icon} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
