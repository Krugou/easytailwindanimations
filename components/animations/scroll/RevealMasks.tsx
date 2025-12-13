'use client';

import { useEffect, useRef, useState } from 'react';

// Reveal mask animations - content is revealed as you scroll
export default function RevealMasks() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-32">
      <div>
        <h3 className="text-xl font-semibold mb-4">Reveal Mask Animations</h3>
        <p className="text-gray-600">Content reveals with different mask effects as you scroll</p>
      </div>

      {/* Slide from left */}
      <div
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        data-index={0}
        className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-white transition-transform duration-1000 ${
            visibleSections.has(0) ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Slide Reveal
        </div>
      </div>

      {/* Wipe from top */}
      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        data-index={1}
        className="relative h-48 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-white transition-transform duration-1000 ${
            visibleSections.has(1) ? '-translate-y-full' : 'translate-y-0'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Wipe Reveal
        </div>
      </div>

      {/* Scale from center */}
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        data-index={2}
        className="relative h-48 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-white transition-all duration-1000 ${
            visibleSections.has(2) ? 'scale-0' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Scale Reveal
        </div>
      </div>

      {/* Diagonal reveal */}
      <div
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        data-index={3}
        className="relative h-48 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-white transition-transform duration-1000 origin-top-left ${
            visibleSections.has(3) ? 'scale-0 rotate-45' : 'scale-150 rotate-0'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Diagonal Reveal
        </div>
      </div>

      {/* Split reveal */}
      <div
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        data-index={4}
        className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg overflow-hidden"
      >
        <div
          className={`absolute inset-0 flex transition-transform duration-1000 ${
            visibleSections.has(4) ? '' : ''
          }`}
        >
          <div
            className={`w-1/2 h-full bg-white transition-transform duration-1000 ${
              visibleSections.has(4) ? '-translate-x-full' : 'translate-x-0'
            }`}
          />
          <div
            className={`w-1/2 h-full bg-white transition-transform duration-1000 ${
              visibleSections.has(4) ? 'translate-x-full' : 'translate-x-0'
            }`}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          Split Reveal
        </div>
      </div>
    </div>
  );
}
