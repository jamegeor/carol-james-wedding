'use client';

import { motion } from 'framer-motion';

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
            A JOURNEY<br />THROUGH KERALA
          </h2>
          <p className="font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We invite you to experience the beauty, culture and calm of God's own country. 
            From misty hills to serene backwaters, Kerala awaits.
          </p>
        </motion.div>

        {/* Custom Watercolor Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden"
        >
          <img 
            src="/images/kerala-journey-map.png" 
            alt="Kerala Journey Map showing Kochi, Fort Kochi, Alleppey, Kumarakom, Pala, Vagamon, and Kumily/Thekkady"
            className="w-full h-auto"
          />
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
