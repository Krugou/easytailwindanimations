'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Framer Motion Layout Animations
 * Advanced layout and shared element transitions
 */
const FramerLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: 'Item 1', color: 'bg-blue-500' },
    { id: 2, title: 'Item 2', color: 'bg-green-500' },
    { id: 3, title: 'Item 3', color: 'bg-purple-500' },
    { id: 4, title: 'Item 4', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Layout Animations</h3>
        <p className="text-gray-600 mb-4">
          Automatically animate layout changes with the layout prop
        </p>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[200px]">
          <motion.div
            layout
            className={`${
              isExpanded ? 'w-full h-48' : 'w-32 h-32'
            } bg-blue-500 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold`}
            onClick={() => setIsExpanded(!isExpanded)}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            Click to {isExpanded ? 'Shrink' : 'Expand'}
          </motion.div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Shared Layout Animations</h3>
        <p className="text-gray-600 mb-4">
          Smooth transitions between layout states
        </p>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[300px]">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                className={`${item.color} p-6 rounded-lg cursor-pointer text-white font-bold`}
                onClick={() => setSelectedId(item.id)}
              >
                {item.title}
              </motion.div>
            ))}
          </div>
          
          <AnimatePresence>
            {selectedId && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setSelectedId(null)}
                />
                <motion.div
                  layoutId={`item-${selectedId}`}
                  className={`${
                    items.find((i) => i.id === selectedId)?.color
                  } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg z-50 text-white font-bold`}
                  onClick={() => setSelectedId(null)}
                >
                  <h2 className="text-2xl mb-4">
                    {items.find((i) => i.id === selectedId)?.title}
                  </h2>
                  <p>Click to close</p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Reorder with Drag</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[200px]">
          <div className="space-y-2">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                layout
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white font-bold cursor-grab active:cursor-grabbing"
              >
                Drag me to reorder - Item {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Automatic layout animations with single prop</li>
          <li>Shared element transitions (layoutId)</li>
          <li>Drag-to-reorder lists</li>
          <li>Complex layout orchestration</li>
          <li>Smooth transitions between any layout changes</li>
        </ul>
      </div>
    </div>
  );
};

export default FramerLayout;
