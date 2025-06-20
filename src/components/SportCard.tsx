'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SportEvent } from '@/data/sportsEvents';

interface SportCardProps {
  sport: SportEvent;
  onClick: () => void;
}

export default function SportCard({ sport, onClick }: SportCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick of parent
    window.open("https://forms.gle/ZKAoBAmnrGrg6x9D8", '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gray-800 shadow-xl cursor-pointer h-64"
      whileHover={{ 
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {sport.imageBg ? (
          <Image 
            src={sport.imageBg}
            alt={sport.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900" />
        )}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-4xl">{sport.icon}</span>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white">
              {sport.date}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{sport.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            {sport.shortDescription}
          </p>
        </div>
        
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center text-xs text-gray-300">
              <span className="mr-1">📍</span>
              <span>{sport.venue}</span>
            </div>
            <div className="flex gap-2">
              <motion.button 
                className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                whileHover={{ scale: 1.05 }}
              >
                View Details
              </motion.button>
              <motion.button 
                onClick={handleRegisterClick}
                className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white"
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Registration button in top right */}
      {/* <div className="absolute top-2 right-2 z-30">
        <motion.button
          onClick={handleRegisterClick}
          className="p-2 bg-pink-500 rounded-full text-white shadow-md"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </motion.button>
      </div> */}
    </motion.div>
  );
} 