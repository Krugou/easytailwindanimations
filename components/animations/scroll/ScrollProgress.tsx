'use client';

import { useEffect, useState } from 'react';

// Scroll progress indicators
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scroll Progress Bar</h3>
        <div className="sticky top-20 z-40 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Circular Progress</h3>
        <div className="sticky top-32 flex justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-blue-500 transition-all duration-150"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress / 100)}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Growing Bar</h3>
        <div className="sticky top-48 flex gap-2 justify-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-8 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t transition-all duration-300"
              style={{
                height: scrollProgress >= (i + 1) * 10 ? '80px' : '20px',
              }}
            />
          ))}
        </div>
      </div>

      {/* Spacer content to enable scrolling */}
      <div className="space-y-8 pt-16">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              Scroll content section {i + 1}. Keep scrolling to see the progress indicators update.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
