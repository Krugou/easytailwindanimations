'use client';

import { useEffect, useRef, useState } from 'react';

// Fade in elements as they scroll into view using IntersectionObserver
export default function FadeInOnScroll() {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-32">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scroll Down to See Animations</h3>
        <p className="text-gray-600">Elements will fade in as they enter the viewport</p>
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
              : 'opacity-0 translate-y-10'
          }`}
        >
          Element {item} - Fades In
        </div>
      ))}
    </div>
  );
}
