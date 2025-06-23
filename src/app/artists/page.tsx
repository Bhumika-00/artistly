
'use client';
import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import artists from "@/data/artists.json";

export default function ArtistListing() {
  return (
    <div className="dark:bg-zinc-950 transition-colors">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-12 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">All Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

