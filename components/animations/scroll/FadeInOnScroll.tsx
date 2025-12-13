'use client';

import { useEffect, useRef, useState } from 'react';
import { useAnimation } from '@/utils/AnimationContext';

// Fade in elements as they scroll into view using IntersectionObserver
const FadeInOnScroll = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { enabled, chaos } = useAnimation();
  const [resetMode, setResetMode] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(index));
          } else if (resetMode) {
            // Reset animation when element leaves viewport if reset mode is enabled
            setVisibleElements((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enabled, resetMode]);

  const getChaosOffset = (_index: number) => {
    if (chaos === 0) return 10;
    // Add chaos variation to translate offset
    return 10 + (Math.random() * chaos / 5);
  };

  return (
    <div className="space-y-32">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scroll Down to See Animations</h3>
        <p className="text-gray-600 mb-4">Elements will fade in as they enter the viewport</p>
        <button
          onClick={() => setResetMode(!resetMode)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            resetMode
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Reset Mode: {resetMode ? 'ON (animations reset when scrolling away)' : 'OFF (play once)'}
        </button>
      </div>

      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          ref={(el) => {
            elementsRef.current[item] = el;
          }}
          data-index={item}
          className={`p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-2xl font-bold text-center transition-all duration-1000 ${
            visibleElements.has(item)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0'
          }`}
          style={{
            transform: visibleElements.has(item) 
              ? 'translateY(0)' 
              : `translateY(${getChaosOffset(item)}px)`
          }}
        >
          Element {item} - Fades In
        </div>
      ))}
    </div>
  );
};

export default FadeInOnScroll;
