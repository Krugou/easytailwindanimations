'use client';

import { useEffect, useState } from 'react';

// Parallax scrolling effect - elements move at different speeds
export default function ParallaxSections() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-xl font-semibold mb-4">Parallax Scrolling</h3>
        <p className="text-gray-600">Scroll to see layers move at different speeds</p>
      </div>

      <div className="relative h-96 overflow-hidden rounded-lg">
        {/* Background layer - slowest */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-600"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />

        {/* Middle layer - medium speed */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="text-6xl">⛰️</div>
        </div>

        {/* Foreground layer - fastest */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-green-800 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        {/* Text layer */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h2 className="text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
            PARALLAX
          </h2>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-b from-purple-900 to-pink-600">
        <div
          className="absolute inset-0 flex items-center justify-center gap-8"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <div className="text-8xl animate-float">🌙</div>
          <div className="text-6xl animate-float [animation-delay:0.5s]">⭐</div>
          <div className="text-8xl animate-float [animation-delay:1s]">✨</div>
        </div>
      </div>
    </div>
  );
}
