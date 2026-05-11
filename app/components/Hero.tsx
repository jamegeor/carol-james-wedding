'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center monsoon-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2400')",
            backgroundAttachment: 'fixed',
          }}
        />
      </motion.div>

      {/* Animated mist overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-b from-white/10 via-transparent to-white/10"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-ivory font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Together with our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-ivory mb-4 text-shadow-soft"
        >
          CAROL
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-ivory font-serif text-3xl md:text-4xl italic my-6"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-ivory mb-8 text-shadow-soft"
        >
          JAMES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-ivory font-sans text-lg md:text-xl tracking-wider"
        >
          <p className="mb-2">29 AUGUST 2026</p>
          <p className="text-warmBeige">PALA, KERALA</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-ivory w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
