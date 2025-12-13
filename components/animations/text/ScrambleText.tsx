'use client';

import { useState } from 'react';

// Scramble text on hover - letters randomize then settle
const ScrambleText = () => {
  const [scrambling, setScrambling] = useState(false);
  const [displayText, setDisplayText] = useState('SCRAMBLE');
  const originalText = 'SCRAMBLE';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const scramble = () => {
    if (scrambling) return;
    
    setScrambling(true);
    let iterations = 0;
    const maxIterations = 20;

    const interval = setInterval(() => {
      setDisplayText(() =>
        originalText
          .split('')
          .map((_, index) => {
            if (index < iterations / 2) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
        setScrambling(false);
      }
    }, 50);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scramble on Hover</h3>
        <div
          className="text-4xl font-bold font-mono cursor-pointer select-none"
          onMouseEnter={scramble}
        >
          {displayText}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Blur to Focus</h3>
        <div className="text-4xl font-bold blur-sm hover:blur-none transition-all duration-500 cursor-pointer">
          FOCUS ME
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Scale Letters on Hover</h3>
        <div className="flex gap-1 text-4xl font-bold">
          {'INTERACTIVE'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block hover:scale-150 hover:text-blue-500 transition-all duration-200 cursor-pointer"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Rotate Letters on Hover</h3>
        <div className="flex gap-1 text-4xl font-bold">
          {'SPINTEXT'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block hover:rotate-180 hover:text-purple-500 transition-all duration-300 cursor-pointer"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrambleText;
