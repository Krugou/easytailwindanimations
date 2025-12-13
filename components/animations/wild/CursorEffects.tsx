'use client';

import { useState, useEffect, useRef } from 'react';

// Cursor-reactive background and elements
const CursorEffects = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-xl font-semibold mb-4">Cursor Spotlight</h3>
        <div
          ref={containerRef}
          className="relative h-64 bg-gray-900 rounded-lg overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={(e) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }
          }}
        >
          {isHovering && (
            <div
              className="absolute w-64 h-64 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                left: cursorPos.x - 128,
                top: cursorPos.y - 128,
              }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            Move Your Cursor Here
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Floating Elements</h3>
        <div className="relative h-64 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
              style={{
                left: `${(i * 12) + 5}%`,
                top: `${(i * 8) % 60 + 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            Floating Particles
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Ripple Effect</h3>
        <div className="relative h-64 bg-gradient-to-br from-cyan-900 to-teal-900 rounded-lg overflow-hidden cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            Click Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursorEffects;
