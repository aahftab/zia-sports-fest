"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 mx-auto mb-6"
        />
        <h2 className="text-xl text-white font-bold">Loading...</h2>
      </motion.div>
    </div>
  );
} 