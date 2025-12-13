'use client';

import { useState, useEffect } from 'react';

// Typewriter effect - characters appear one by one
export default function TypewriterEffect() {
  const [text, setText] = useState('');
  const fullText = 'This is a typewriter effect animation!';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Typewriter Effect (JS)</h3>
        <div className="text-2xl font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">CSS Typewriter</h3>
        <div className="text-2xl font-mono overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-typewriter w-fit">
          Hello, World!
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Multiple Lines</h3>
        <div className="space-y-2">
          <div className="text-xl font-mono overflow-hidden whitespace-nowrap animate-typewriter w-fit">
            Line one appears first
          </div>
          <div className="text-xl font-mono overflow-hidden whitespace-nowrap animate-typewriter w-fit opacity-0 [animation-delay:2s] [animation-fill-mode:forwards]">
            Then line two
          </div>
          <div className="text-xl font-mono overflow-hidden whitespace-nowrap animate-typewriter w-fit opacity-0 [animation-delay:4s] [animation-fill-mode:forwards]">
            Finally line three!
          </div>
        </div>
      </div>
    </div>
  );
}
