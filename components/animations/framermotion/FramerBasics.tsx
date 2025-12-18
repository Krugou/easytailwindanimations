'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Framer Motion Basic Animations
 * Production-ready motion library for React
 */
const FramerBasics = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Simple Animation</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px] flex items-center justify-center">
          <motion.div
            className="w-20 h-20 bg-blue-500 rounded-lg"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover & Tap Animations</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px] flex items-center justify-center gap-4">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hover Me
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg"
            whileHover={{ rotate: 5 }}
            whileTap={{ rotate: -5 }}
          >
            Click Me
          </motion.button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Variants Animation</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px]">
          <motion.div
            className="flex gap-4 justify-center"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-16 h-16 bg-orange-500 rounded-lg"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">AnimatePresence (Exit Animations)</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[200px] flex flex-col items-center justify-center gap-4">
          {isVisible && (
            <motion.div
              className="w-32 h-32 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              I'm Here!
            </motion.div>
          )}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all"
          >
            {isVisible ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Spring Animation</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px] flex items-center justify-center">
          <motion.div
            className="w-20 h-20 bg-red-500 rounded-full"
            animate={{
              y: [0, -50, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Drag & Drop</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
          <motion.div
            className="w-24 h-24 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1 }}
          >
            Drag Me!
          </motion.div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Declarative API built for React</li>
          <li>Spring physics for natural motion</li>
          <li>Gesture animations (drag, hover, tap, etc.)</li>
          <li>Layout animations with shared element transitions</li>
          <li>SVG path animations</li>
          <li>Variants for complex animation orchestration</li>
          <li>AnimatePresence for exit animations</li>
        </ul>
      </div>
    </div>
  );
};

export default FramerBasics;
