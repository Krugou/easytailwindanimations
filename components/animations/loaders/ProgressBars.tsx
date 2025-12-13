'use client';

import { useState, useEffect } from 'react';

// Progress bar animations
export default function ProgressBars() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Basic Progress Bar</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Striped Progress Bar</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 bg-[length:20px_20px] transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Animated Stripes</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-purple-600 animate-[stripes_1s_linear_infinite] transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Gradient Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Glowing Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Multi-step Progress</h3>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                progress >= (i + 1) * 20
                  ? 'bg-green-500 scale-100'
                  : 'bg-gray-300 scale-90'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 0;
          }
        }
      `}</style>
    </div>
  );
}
