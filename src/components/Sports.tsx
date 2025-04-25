"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sportsEvents, SportEvent } from "@/data/sportsEvents";
import SportDetail from "./SportDetail";

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState<SportEvent | null>(null);

  const handleSportClick = (sport: SportEvent) => {
    setSelectedSport(sport);
  };

  const handleCloseDetail = () => {
    setSelectedSport(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="sports" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Sports Events</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sportsEvents.map((sport) => (
            <motion.div
              key={sport.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleSportClick(sport)}
            >
              <div className="relative h-48 w-full">
                {sport.imageBg ? (
                  <Image
                    src={sport.imageBg}
                    alt={sport.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                    <span className="text-6xl">{sport.icon}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{sport.icon}</span>
                  <h3 className="text-xl font-bold">{sport.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{sport.shortDescription}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{sport.date}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{sport.time}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{sport.venue}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 flex justify-between items-center">
                <div className="text-sm font-medium text-indigo-600">
                  {sport.teamSize}
                </div>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSportClick(sport);
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedSport && (
        <SportDetail sport={selectedSport} onClose={handleCloseDetail} />
      )}
    </section>
  );
} 