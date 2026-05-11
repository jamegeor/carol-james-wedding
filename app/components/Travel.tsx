'use client';

import { motion } from 'framer-motion';
import { Plane, Train, Car, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const travelOptions = [
  {
    icon: Plane,
    title: 'BY FLIGHT',
    content: 'Fly into Kochi. Explore Fort Kochi, Mattancherry and drive to Pala (approx. 45 mins).',
  },
  {
    icon: Train,
    title: 'BY TRAIN',
    content: 'Take a train to Kottayam. Drive onward to Pala via scenic routes (approx. 45 mins).',
  },
  {
    icon: Car,
    title: 'BY ROAD',
    content: 'Scenic routes via Salem → Kochi → Pala or Coimbatore → Doodhial → Kumily → Kanjirappally → Pala. Beautiful drives!',
  },
];

const thingsToDo = [
  'Fort Kochi',
  'Alleppey Backwaters',
  'Athirappilly Waterfalls',
  'Vagamon Hills',
  'Kumily / Thekkady',
];

export default function Travel() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Travel Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Plane className="w-8 h-8 text-mossGreen mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                BY FLIGHT
              </h2>
              <p className="font-sans text-gray-700 leading-relaxed">
                Fly into Kochi<br />
                Explore Fort Kochi, Mattancherry<br />
                and drive to Pala<br />
                (approx. 45 mins)
              </p>
            </div>

            <div className="mb-8">
              <Train className="w-8 h-8 text-mossGreen mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                BY TRAIN
              </h2>
              <p className="font-sans text-gray-700 leading-relaxed">
                Take a train to Kottayam<br />
                Drive onward to Pala<br />
                via scenic routes<br />
                (approx. 45 mins)
              </p>
            </div>

            <div className="mb-8">
              <Car className="w-8 h-8 text-mossGreen mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                BY ROAD
              </h2>
              <p className="font-sans text-gray-700 leading-relaxed">
                From Bangalore:<br />
                Scenic routes via<br />
                Salem – Kochi – Pala<br />
                or via Coimbatore – <br />
                Doodhial – Kumily – Kanjirappally – Pala<br />
                <br />
                Beautiful drives!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Weather, Things to Do, August Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* August Weather */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-mossGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                  AUGUST WEATHER
                </h2>
              </div>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">
                It's monsoon season!<br />
                Expect lush greenery, occasional rain, misty hills and<br />
                beautiful drives.
              </p>
            </div>

            {/* Things to Explore */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-mossGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                  THINGS TO<br />EXPLORE
                </h2>
              </div>
              <ul className="space-y-3 font-sans text-gray-700">
                {thingsToDo.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-mossGreen rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="font-sans text-sm text-gray-600 mt-4 italic">
                All within a few hours from Pala.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
