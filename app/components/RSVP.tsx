'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietaryRestrictions: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          guests: '1',
          attending: 'yes',
          dietaryRestrictions: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('RSVP submission error:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-ivory">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-keralaGray mb-4 font-sans">
            Kindly Respond By
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
            RSVP
          </h2>
          <p className="font-sans text-gray-700">31 JULY 2026</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-cream p-12 rounded-lg"
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-serif text-3xl text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="font-sans text-gray-700">
              We can't wait to celebrate with you in<br />the beautiful hills of Kerala.
            </p>
            <p className="font-sans text-sm text-gray-600 mt-6 italic">
              Love,<br />Carol & James
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-sans text-sm text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-sans text-sm text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Attending */}
            <div>
              <label htmlFor="attending" className="block font-sans text-sm text-gray-700 mb-2">
                Will you be attending? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans"
              >
                <option value="yes">Joyfully accepts</option>
                <option value="no">Regretfully declines</option>
              </select>
            </div>

            {/* Number of Guests */}
            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="guests" className="block font-sans text-sm text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Dietary Restrictions */}
            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="dietaryRestrictions" className="block font-sans text-sm text-gray-700 mb-2">
                  Dietary Restrictions or Preferences
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans"
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-sans text-sm text-gray-700 mb-2">
                Message for the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-fogGray bg-cream rounded-sm focus:outline-none focus:border-mossGreen transition-colors font-sans resize-none"
                placeholder="Share your wishes, memories, or excitement..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-mossGreen text-white py-4 rounded-sm font-sans tracking-wider uppercase hover:bg-earthBrown transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? 'Submitting...' : 'Submit RSVP'}
              {!submitting && <Send className="w-4 h-4" />}
            </motion.button>
          </form>
        )}

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-600 mt-8 font-sans">
          We can't wait to celebrate with you!
        </p>
      </motion.div>
    </section>
  );
}
