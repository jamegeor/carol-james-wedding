'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'KOCHI', x: '20%', y: '60%', icon: 'plane' },
  { name: 'FORT KOCHI', x: '18%', y: '68%', icon: 'fort' },
  { name: 'VAGAMON', x: '55%', y: '30%', icon: 'mountain' },
  { name: 'PALA', x: '48%', y: '55%', icon: 'church' },
  { name: 'KUMARAKOM', x: '35%', y: '75%', icon: 'boat' },
  { name: 'KUMILY / THEKKADY', x: '75%', y: '80%', icon: 'elephant' },
];

export default function JourneyMap() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-warmBeige relative overflow-hidden">
      {/* Decorative misty background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 155, 126, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-mossGreen mb-4 font-sans">
            Explore With Us
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">
            A JOURNEY<br />            THROUGH KERALA
          </h2>
          <p className="font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We invite you to experience the beauty, culture and calm of God's own country. 
            From misty hills to serene backwaters, Kerala awaits.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-ivory rounded-lg shadow-2xl p-8 md:p-12"
        >
          {/* Map Background Illustration */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <path
                d="M200 150 Q300 100 400 150 T600 200 Q650 250 600 350 T500 500 Q400 550 300 500 T150 400 Q100 300 200 150"
                fill="currentColor"
                className="text-mossGreen"
              />
            </svg>
          </div>

          {/* Locations with connecting paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Dotted path connections */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M160 360 Q200 320 320 240 T384 330 Q400 380 280 450 Q350 500 600 480"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              className="text-mossGreen opacity-40"
            />
          </svg>

          {/* Location Markers */}
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.2, zIndex: 50 }}
              className="absolute group cursor-pointer"
              style={{
                left: location.x,
                top: location.y,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            >
              {/* Location Pin */}
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-earthBrown drop-shadow-lg" />
                
                {/* Location Name Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white px-3 py-1 rounded text-xs md:text-sm font-sans whitespace-nowrap">
                    {location.name}
                  </div>
                  <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1" />
                </div>

                {/* Pulsing Circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute inset-0 w-6 h-6 md:w-8 md:h-8 bg-earthBrown rounded-full -z-10"
                />
              </div>
            </motion.div>
          ))}

          {/* Location Icons/Labels (visible on desktop) */}
          <div className="hidden md:block absolute left-[20%] top-[50%] text-center">
            <div className="text-2xl">✈️</div>
          </div>
          <div className="hidden md:block absolute left-[18%] top-[78%] text-center">
            <div className="text-2xl">🏰</div>
          </div>
          <div className="hidden md:block absolute left-[55%] top-[20%] text-center">
            <div className="text-2xl">⛰️</div>
          </div>
          <div className="hidden md:block absolute left-[48%] top-[45%] text-center">
            <div className="text-2xl">⛪</div>
          </div>
          <div className="hidden md:block absolute left-[35%] top-[85%] text-center">
            <div className="text-2xl">🚣</div>
          </div>
          <div className="hidden md:block absolute right-[18%] bottom-[15%] text-center">
            <div className="text-2xl">🐘</div>
          </div>
        </motion.div>

        {/* Location Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 text-center text-sm md:text-base font-sans text-gray-700 max-w-3xl mx-auto"
        >
          <p className="mb-4">
            All within a few hours from Pala
          </p>
        </motion.div>
      </div>
    </section>
  );
}
