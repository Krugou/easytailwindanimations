'use client';

import { useState } from 'react';

// Animated accordion components
export default function AnimatedAccordions() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const items = [
    { id: 0, title: 'What is an animation?', content: 'An animation is a visual effect that creates the illusion of motion by displaying a sequence of static images.' },
    { id: 1, title: 'Why use animations?', content: 'Animations enhance user experience by providing visual feedback, guiding attention, and making interfaces more engaging.' },
    { id: 2, title: 'Best practices?', content: 'Keep animations subtle, respect user preferences (prefers-reduced-motion), and ensure they serve a purpose.' },
  ];

  const toggleItem = (id: number) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Animated Accordion</h3>
        <div className="space-y-2">
          {items.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  {item.title}
                  <span className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="p-4 pt-0 text-gray-600">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Colorful Accordion</h3>
        <div className="space-y-2">
          {items.map((item, index) => {
            const isOpen = openItems.has(item.id);
            const colors = ['blue', 'green', 'purple'];
            const color = colors[index];
            return (
              <div
                key={`color-${item.id}`}
                className={`bg-${color}-500 text-white rounded-lg overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 text-left font-semibold flex justify-between items-center"
                >
                  {item.title}
                  <span className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180 scale-125' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                <div className={`transition-all duration-300 ${
                  isOpen ? 'max-h-40 p-4 pt-0' : 'max-h-0'
                } overflow-hidden`}>
                  <div className="opacity-90">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
