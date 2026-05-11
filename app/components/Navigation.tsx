'use client';

import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'EVENTS', href: '#events' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'RSVP', href: '#rsvp' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [muted, setMuted] = useState(true);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-fogGray"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-serif text-xl text-gray-900">
            C & J
          </div>
          
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wider text-gray-700 hover:text-mossGreen transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMuted(!muted)}
            className="p-2 hover:bg-fogGray rounded-full transition-colors"
            aria-label={muted ? 'Unmute audio' : 'Mute audio'}
          >
            {muted ? (
              <VolumeX className="w-5 h-5 text-gray-700" />
            ) : (
              <Volume2 className="w-5 h-5 text-mossGreen" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-t border-fogGray"
      >
        <div className="flex items-center justify-around py-3 px-4">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-sans tracking-wider text-gray-700 hover:text-mossGreen transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Audio Control (Top Right) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        onClick={() => setMuted(!muted)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-cream/90 backdrop-blur-sm rounded-full shadow-lg"
        aria-label={muted ? 'Unmute audio' : 'Mute audio'}
      >
        {muted ? (
          <VolumeX className="w-5 h-5 text-gray-700" />
        ) : (
          <Volume2 className="w-5 h-5 text-mossGreen" />
        )}
      </motion.button>
    </>
  );
}
