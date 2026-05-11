'use client';

import { motion } from 'framer-motion';
import { MapPin, Utensils, Wine, Music, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
} as const;

export default function Events() {
  return (
    <section className="py-20 px-4 bg-ivory">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-keralaGray mb-4 font-sans">
            The Celebration
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
            EVENTS
          </h2>
          <div className="w-24 h-px bg-mossGreen mx-auto"></div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Wedding Ceremony Card */}
          <motion.div
            variants={cardVariants}
            className="bg-cream p-8 md:p-10 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-6">
              {/* Custom Cathedral Illustration */}
              <div className="w-full max-w-[200px] h-[160px] mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/images/cathedral-illustration.png" 
                  alt="St Thomas Cathedral Church, Pala"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">
                WEDDING CEREMONY
              </h3>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-mossGreen" />
                <p className="font-sans text-sm">
                  St Thomas Cathedral Church, Pala
                </p>
              </div>
              <p className="font-serif text-2xl text-gray-900">4:30 PM</p>
              <button className="mt-4 text-sm font-sans tracking-wider uppercase text-mossGreen hover:text-earthBrown transition-colors flex items-center gap-2 mx-auto">
                <MapPin className="w-4 h-4" />
                VIEW LOCATION
              </button>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            variants={cardVariants}
            className="bg-cream p-8 md:p-10 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-mossGreen">
                  <rect x="20" y="30" width="60" height="40" fill="currentColor" opacity="0.3" />
                  <path d="M15 30 L85 30 L80 25 L20 25 Z" fill="currentColor" opacity="0.6" />
                  <path d="M25 70 L75 70 L75 80 L25 80 Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">
                RECEPTION
              </h3>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-mossGreen" />
                <p className="font-sans text-sm">
                  Orchard River Mansion, Pala
                </p>
              </div>
              <p className="font-serif text-2xl text-gray-900">7:30 PM ONWARDS</p>
              
              {/* Reception Icons */}
              <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-fogGray">
                <div className="text-center">
                  <Utensils className="w-5 h-5 text-mossGreen mx-auto mb-1" />
                  <p className="text-xs uppercase tracking-wider text-gray-600">Dinner</p>
                </div>
                <div className="text-center">
                  <Wine className="w-5 h-5 text-mossGreen mx-auto mb-1" />
                  <p className="text-xs uppercase tracking-wider text-gray-600">Drinks</p>
                </div>
                <div className="text-center">
                  <Music className="w-5 h-5 text-mossGreen mx-auto mb-1" />
                  <p className="text-xs uppercase tracking-wider text-gray-600">Live Music</p>
                </div>
                <div className="text-center">
                  <Sparkles className="w-5 h-5 text-mossGreen mx-auto mb-1" />
                  <p className="text-xs uppercase tracking-wider text-gray-600">Celebration</p>
                </div>
              </div>

              <button className="mt-4 text-sm font-sans tracking-wider uppercase text-mossGreen hover:text-earthBrown transition-colors flex items-center gap-2 mx-auto">
                <MapPin className="w-4 h-4" />
                VIEW LOCATION
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          variants={cardVariants}
          className="mt-12 text-center"
        >
          <svg
            viewBox="0 0 200 50"
            className="w-32 h-8 mx-auto text-mossGreen opacity-40"
          >
            <path
              d="M10 25 Q 30 10, 50 25 T 90 25 T 130 25 T 170 25 T 190 25"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
