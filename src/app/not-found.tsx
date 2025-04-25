"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 text-white flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md w-full bg-white/10 backdrop-blur-xl rounded-xl p-8"
      >
        <div className="text-7xl mb-4">🏆</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8 text-lg">Sorry, we couldn&apos;t find the page you were looking for.</p>
        <Link 
          href="/" 
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity w-full"
        >
          Go back to homepage
        </Link>
      </motion.div>
    </div>
  );
} 