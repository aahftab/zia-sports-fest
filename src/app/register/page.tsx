"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SPORTS = {
  "cricket": { name: "Gully Cricket", icon: "🏏", teamSize: "11 players" },
  "volleyball": { name: "Volleyball", icon: "🏐", teamSize: "6 players" },
  "basketball": { name: "Basketball", icon: "🏀", teamSize: "5 players" },
  "badminton-boys": { name: "Badminton - Boys", icon: "🏸", teamSize: "Singles/Doubles" },
  "badminton-girls": { name: "Badminton - Girls", icon: "🏸", teamSize: "Singles/Doubles" },
  "hockey": { name: "Hockey", icon: "🏑", teamSize: "11 players" },
  "dodgeball": { name: "Dodge Ball", icon: "🤾", teamSize: "6 players" },
  "discus": { name: "Discuss Throw", icon: "🥏", teamSize: "Individual" },
  "shotput": { name: "Shot Put", icon: "🏋️", teamSize: "Individual" },
};

export default function Register() {
  const searchParams = useSearchParams();
  const sportId = searchParams.get("sport");
  const sport = sportId ? SPORTS[sportId as keyof typeof SPORTS] : null;
  
  const [formData, setFormData] = useState({
    captainName: "",
    email: "",
    phone: "",
    teamName: "",
    teammates: ["", "", "", ""],
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.captainName.trim()) {
      newErrors.captainName = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.teamName.trim() && sport?.teamSize !== "Individual") {
      newErrors.teamName = "Team name is required";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form
        setFormData({
          captainName: "",
          email: "",
          phone: "",
          teamName: "",
          teammates: ["", "", "", ""],
          agreeToTerms: false,
        });
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTeammateChange = (index: number, value: string) => {
    const newTeammates = [...formData.teammates];
    newTeammates[index] = value;
    setFormData({
      ...formData,
      teammates: newTeammates,
    });
  };

  if (!sport) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 text-white flex justify-center items-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Sport Not Found</h1>
          <p className="mb-6">Sorry, we couldn&apos;t find the sport you were looking for.</p>
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity w-full text-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 text-white p-4 py-20">
      <div className="container mx-auto max-w-4xl">
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
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-4">Registration Successful!</h2>
              <p className="mb-8 text-xl">Thank you for registering for {sport.name}. We&apos;ll be in touch soon with more details.</p>
              <Link 
                href="/" 
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              >
                Return to Home
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{sport.icon}</div>
                <div>
                  <h1 className="text-3xl font-bold">{sport.name} Registration</h1>
                  <p className="text-white/80">Team Size: {sport.teamSize}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="captainName" className="block mb-2 font-medium">
                    {sport.teamSize === "Individual" ? "Your Name" : "Captain/Manager Name"}
                  </label>
                  <input
                    type="text"
                    id="captainName"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 ring-purple-400 ${
                      errors.captainName ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.captainName && (
                    <p className="mt-1 text-red-400 text-sm">{errors.captainName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 ring-purple-400 ${
                        errors.email ? "ring-2 ring-red-500" : ""
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 ring-purple-400 ${
                        errors.phone ? "ring-2 ring-red-500" : ""
                      }`}
                      placeholder="Your contact number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {sport.teamSize !== "Individual" && (
                  <>
                    <div>
                      <label htmlFor="teamName" className="block mb-2 font-medium">
                        Team Name
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 ring-purple-400 ${
                          errors.teamName ? "ring-2 ring-red-500" : ""
                        }`}
                        placeholder="Enter your team name"
                      />
                      {errors.teamName && (
                        <p className="mt-1 text-red-400 text-sm">{errors.teamName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">
                        Team Members (Optional)
                      </label>
                      <div className="space-y-3">
                        {formData.teammates.map((teammate, index) => (
                          <input
                            key={index}
                            type="text"
                            value={teammate}
                            onChange={(e) => handleTeammateChange(index, e.target.value)}
                            className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 ring-purple-400"
                            placeholder={`Team member ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="w-4 h-4 border-gray-300 rounded focus:ring-purple-500 text-purple-600"
                    />
                  </div>
                  <label htmlFor="agreeToTerms" className="ml-2 block text-sm">
                    I agree to the terms and conditions of participation and understand the rules of the tournament
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-red-400 text-sm">{errors.agreeToTerms}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 px-6 rounded-full text-white font-bold hover:opacity-90 transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    "Register Now"
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
} 