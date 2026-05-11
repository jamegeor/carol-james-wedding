'use client';

import { motion } from 'framer-motion';

const dressColors = [
  { name: 'Warm Beige', color: '#E8DCC4' },
  { name: 'Moss Green', color: '#8B9B7E' },
  { name: 'Fog Gray', color: '#D0CEC9' },
  { name: 'Earth Brown', color: '#A67C52' },
];

export default function DressCode() {
  return (
    <section className="py-20 px-4 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <p className="text-sm tracking-[0.3em] uppercase text-keralaGray mb-4 font-sans">
          For Our Guests
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8">
          DRESS CODE
        </h2>

        {/* Description */}
        <p className="font-sans text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
          We'd love to see you in warm neutrals, earthy tones and elegant attire. 
          Festive yet Pala.
        </p>

        {/* Dress Icons */}
        <div className="flex justify-center gap-12 mb-12">
          {/* Groom Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <svg viewBox="0 0 100 150" className="w-16 h-24 md:w-20 md:h-32 text-gray-800">
              <path
                d="M50 20 L45 30 L35 35 L35 60 L40 90 L35 140 L45 140 L50 95 L55 140 L65 140 L60 90 L65 60 L65 35 L55 30 Z"
                fill="currentColor"
              />
              <circle cx="50" cy="15" r="8" fill="currentColor" />
            </svg>
            <p className="mt-2 text-sm font-sans tracking-wider uppercase text-gray-600">Groom</p>
          </motion.div>

          {/* Bride Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <svg viewBox="0 0 100 150" className="w-16 h-24 md:w-20 md:h-32 text-gray-800">
              <circle cx="50" cy="15" r="8" fill="currentColor" />
              <path
                d="M50 25 L45 35 L35 40 L30 60 L25 90 L20 140 L35 140 L40 95 L50 100 L60 95 L65 140 L80 140 L75 90 L70 60 L65 40 L55 35 Z"
                fill="currentColor"
              />
            </svg>
            <p className="mt-2 text-sm font-sans tracking-wider uppercase text-gray-600">Bride</p>
          </motion.div>
        </div>

        {/* Color Palette */}
        <div className="max-w-md mx-auto">
          <p className="font-sans text-sm text-gray-600 mb-6">Suggested Color Palette</p>
          <div className="flex justify-center gap-4">
            {dressColors.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg mx-auto mb-2 border-2 border-white"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-xs font-sans text-gray-600">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
