'use client';

import { useState, useRef } from 'react';

// Magnetic button that follows cursor
const MagneticButtons = () => {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    setPosition: (pos: { x: number; y: number }) => void,
    buttonRef: React.RefObject<HTMLButtonElement | null>
  ) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const strength = 0.3;
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = (setPosition: (pos: { x: number; y: number }) => void) => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-xl font-semibold mb-4">Magnetic Button</h3>
        <button
          ref={button1Ref}
          onMouseMove={(e) => handleMouseMove(e, setPosition1, button1Ref)}
          onMouseLeave={() => handleMouseLeave(setPosition1)}
          className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl"
          style={{
            transform: `translate(${position1.x}px, ${position1.y}px)`,
          }}
        >
          Hover Near Me
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Strong Magnetic Pull</h3>
        <button
          ref={button2Ref}
          onMouseMove={(e) => handleMouseMove(e, setPosition2, button2Ref)}
          onMouseLeave={() => handleMouseLeave(setPosition2)}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-lg transition-all duration-150 hover:shadow-2xl hover:scale-105"
          style={{
            transform: `translate(${position2.x}px, ${position2.y}px) scale(${1 + Math.abs(position2.x + position2.y) / 200})`,
          }}
        >
          Strong Magnet
        </button>
      </div>
    </div>
  );
};

export default MagneticButtons;
