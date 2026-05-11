'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-ivory py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="font-serif text-4xl mb-4">C & J</div>
        <p className="font-sans text-sm tracking-wider mb-2">
          29 AUGUST 2026
        </p>
        <p className="font-sans text-sm text-warmBeige mb-8">
          PALA, KERALA
        </p>
        
        <svg
          viewBox="0 0 200 50"
          className="w-24 h-6 mx-auto text-mossGreen opacity-60 mb-8"
        >
          <path
            d="M10 25 Q 30 10, 50 25 T 90 25 T 130 25 T 170 25 T 190 25"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
        </svg>

        <p className="font-sans text-xs text-gray-400">
          © 2026 Carol & James. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
