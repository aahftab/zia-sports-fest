"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <Link href="/" className="inline-flex items-center text-white mb-8 hover:text-yellow-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 mb-12 text-center">
            About Zia Sports Fest
          </h1>
          
          <div className="space-y-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Zia Sports Fest is dedicated to promoting sports excellence, fostering community spirit, and providing a platform 
                for athletes to showcase their talents. We believe in the power of sports to unite people, build character, and create lasting memories.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Event History</h2>
              <p className="text-lg leading-relaxed mb-4">
                Founded in 2015, the Zia Sports Fest has grown from a small hall event to one of the most anticipated sports 
                competitions of the year. Each year, we bring together hundreds of participants across multiple disciplines.
              </p>
              <p className="text-lg leading-relaxed">
                Our event promotes healthy competition, teamwork, and sportsmanship among participants from all backgrounds.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    <span className="mr-3">🏏</span> Gully Cricket
                  </h3>
                  <p>A fast-paced version of cricket with customized rules to make matches exciting and quick.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    <span className="mr-3">🏐</span> Volleyball
                  </h3>
                  <p>Teams of six compete in this high-energy ball game that tests coordination and teamwork.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    <span className="mr-3">🏀</span> Basketball
                  </h3>
                  <p>Fast and strategic gameplay that challenges players&apos; endurance and skill.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    <span className="mr-3">🏸</span> Badminton
                  </h3>
                  <p>Singles and doubles competitions for both boys and girls, testing precision and agility.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg leading-relaxed mb-6">
                Zia Sports Fest is organized by a dedicated team of sports enthusiasts, event managers, and student volunteers who work 
                tirelessly to ensure a seamless and enjoyable experience for all participants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Rahul Sharma</h3>
                  <p className="text-white/80">Event Director</p>
                </div>
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Priya Patel</h3>
                  <p className="text-white/80">Sports Coordinator</p>
                </div>
                <div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-red-500 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Amit Kumar</h3>
                  <p className="text-white/80">Logistics Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed mb-6">
                Have questions about the event? Want to volunteer or become a sponsor? Reach out to us!
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="mailto:info@ziasportsfest.com"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Email Us
                </a>
                <Link 
                  href="/register"
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium hover:bg-white/30 transition-colors text-center"
                >
                  Register for Events
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black/50 py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Zia Sports Fest</h2>
          <p className="mb-6">Join us for the ultimate sports experience</p>
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Zia Sports Fest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 