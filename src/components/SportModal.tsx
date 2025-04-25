'use client';

import { motion } from 'framer-motion';
import type { SportEvent } from '@/data/sportsEvents';

interface SportModalProps {
  sport: SportEvent;
  onClose: () => void;
}

export default function SportModal({ sport, onClose }: SportModalProps) {
  // Container variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Modal content variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1] // Custom easing (ease-out-back)
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl overflow-hidden max-w-2xl w-full mx-auto relative"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        style={{ maxHeight: "90vh" }}
      >
        {/* Header with image background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/90 z-10"></div>
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"></div>
          
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.span 
                className="text-5xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {sport.icon}
              </motion.span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{sport.name}</h3>
                <p className="text-white/90 text-sm">{sport.teamSize}</p>
              </div>
            </motion.div>
            
            <motion.button 
              onClick={onClose}
              className="text-white/90 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </div>
        </div>
        
        {/* Content area with scroll */}
        <div className="p-6 md:p-8 overflow-y-auto" style={{ maxHeight: "calc(90vh - 8rem)" }}>
          <motion.div 
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <p className="text-white/90 text-base md:text-lg">
              {sport.longDescription}
            </p>
          </motion.div>
          
          <motion.div 
            custom={1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 p-5 rounded-lg space-y-4 mb-6"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-medium text-white">Date:</span>
              <span className="ml-2 text-white/90">{sport.date}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium text-white">Time:</span>
              <span className="ml-2 text-white/90">{sport.time}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="font-medium text-white">Venue:</span>
              <span className="ml-2 text-white/90">{sport.venue}</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              custom={2}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 text-white">Eligibility</h4>
              <p className="text-white/90">{sport.eligibility}</p>
            </motion.div>
            
            <motion.div 
              custom={3}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 text-white">Rules</h4>
              <ul className="space-y-2 text-white/90">
                {sport.rules.map((rule, idx) => (
                  <motion.li 
                    key={idx} 
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1 text-yellow-400">•</span> {rule}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            custom={4}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 space-y-4"
          >
            <h4 className="text-lg font-bold border-b border-white/20 pb-2 text-white">Prizes</h4>
            <p className="text-white/90">{sport.prizes}</p>
          </motion.div>
          
          <motion.div 
            custom={5}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 space-y-4"
          >
            <h4 className="text-lg font-bold border-b border-white/20 pb-2 text-white">Contact</h4>
            <div className="flex flex-col gap-3">
              {sport.coordinators.map((coordinator, idx) => (
                <motion.div 
                  key={idx}
                  custom={idx}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center bg-white/5 p-3 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-3 text-white font-bold">
                    {coordinator.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{coordinator.name}</p>
                    <p className="text-white/80 text-sm">{coordinator.contact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Fixed footer with register button */}
        <motion.div 
          className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <a
            href={sport.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity text-center"
          >
            Register Now
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 