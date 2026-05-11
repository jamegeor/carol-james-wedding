'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
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
          We're here to help
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-12">
          CONTACT
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Family Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-ivory p-6 rounded-sm"
          >
            <h3 className="font-serif text-xl text-gray-900 mb-4">
              Family Coordinators
            </h3>
            <div className="space-y-2 text-sm font-sans text-gray-700">
              <a href="tel:+919999999999" className="flex items-center justify-center gap-2 hover:text-mossGreen transition-colors">
                <Phone className="w-4 h-4" />
                +91 999 999 9999
              </a>
            </div>
          </motion.div>

          {/* Best Man */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-ivory p-6 rounded-sm"
          >
            <h3 className="font-serif text-xl text-gray-900 mb-4">
              Best Man
            </h3>
            <div className="space-y-2 text-sm font-sans text-gray-700">
              <a href="tel:+919888888888" className="flex items-center justify-center gap-2 hover:text-mossGreen transition-colors">
                <Phone className="w-4 h-4" />
                +91 888 888 8888
              </a>
            </div>
          </motion.div>

          {/* Maid of Honor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-ivory p-6 rounded-sm"
          >
            <h3 className="font-serif text-xl text-gray-900 mb-4">
              Maid of Honor
            </h3>
            <div className="space-y-2 text-sm font-sans text-gray-700">
              <a href="tel:+919777777777" className="flex items-center justify-center gap-2 hover:text-mossGreen transition-colors">
                <Phone className="w-4 h-4" />
                +91 777 777 7777
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <p className="font-sans text-gray-700 mb-6">
            For any queries, feel free to reach out.
          </p>
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
