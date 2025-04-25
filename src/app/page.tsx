"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { sportsEvents } from "@/data/sportsEvents";
import SportCard from "@/components/SportCard";
import SportModal from "@/components/SportModal";

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSportClick = (sportId: string) => {
    setSelectedSport(sportId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const selectedSportData = selectedSport 
    ? sportsEvents.find(sport => sport.id === selectedSport) 
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Zia Sports Fest
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
            About
          </Link>
          <a href="#sports" className="text-white hover:text-yellow-300 transition-colors">
            Events
          </a>
          <a href="#schedule" className="text-white hover:text-yellow-300 transition-colors">
            Schedule
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 mb-6">
            ZIA SPORTS FEST 2025
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Join us April 28-29, 2025 for an exciting celebration of athletic excellence and sportsmanship.
            Events include Gully Cricket, Volleyball, Basketball, Badminton (Boys & Girls), Hockey, Dodge Ball, Discuss throw, and Shot Put.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button 
            onClick={() => window.scrollTo({
              top: document.getElementById('sports')?.offsetTop,
              behavior: 'smooth'
            })}
            className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300"
          >
            Explore Events
          </button>
          <a 
            href="https://forms.gle/ZKAoBAmnrGrg6x9D8"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </header>

      {/* Sports Section */}
      <section id="sports" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sports Events</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from a variety of exciting sports events and register through Google Forms. Click on any card for more details and registration link.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsEvents.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
              onClick={() => handleSportClick(sport.id)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedSportData && (
          <SportModal sport={selectedSportData} onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* Schedule Section */}
      <section id="schedule" className="container mx-auto px-4 py-20 bg-black/30 backdrop-blur-md rounded-xl mx-4 my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Event Schedule</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Mark your calendar and don&apos;t miss any of the exciting events!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/20">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Team Sports</h3>
                <p className="text-white/80">Gully Cricket, Volleyball, Basketball, Hockey</p>
              </div>
              <div className="mt-2 md:mt-0 bg-purple-900/50 px-4 py-2 rounded-full text-white">
                April 28, 2025
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/20">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Racket Sports</h3>
                <p className="text-white/80">Badminton - Boys and Girls categories</p>
              </div>
              <div className="mt-2 md:mt-0 bg-purple-900/50 px-4 py-2 rounded-full text-white">
                April 28, 2025
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/20">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Dodge Ball</h3>
                <p className="text-white/80">Fast-paced dodgeball competition</p>
              </div>
              <div className="mt-2 md:mt-0 bg-purple-900/50 px-4 py-2 rounded-full text-white">
                April 28, 2025
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Athletics & Closing</h3>
                <p className="text-white/80">Discus Throw, Shot Put and prize distribution</p>
              </div>
              <div className="mt-2 md:mt-0 bg-purple-900/50 px-4 py-2 rounded-full text-white">
                April 29, 2025
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://forms.gle/ZKAoBAmnrGrg6x9D8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            Register for Events
          </a>
          <p className="mt-4 text-white/80">Registration deadline: April 20, 2025</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Zia Sports Fest</h2>
          <p className="mb-4">Join us for the ultimate sports experience</p>
          <div className="mb-6">
            <a 
              href="https://forms.gle/ZKAoBAmnrGrg6x9D8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Register Now
            </a>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.instagram.com/zia_sports_fest" className="text-white hover:text-yellow-300 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Zia Sports Fest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
