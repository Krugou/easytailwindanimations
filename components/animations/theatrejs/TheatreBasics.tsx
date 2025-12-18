'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Theatre.js Basic Animations
 * Demonstrates core Theatre.js features for timeline-based animations
 */
const TheatreBasics = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sheet, setSheet] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Theatre.js to avoid SSR issues
    const initTheatre = async () => {
      try {
        const { getProject } = await import('@theatre/core');
        
        const proj = getProject('Demo Project', { state: {} });
        const sheetInstance = proj.sheet('Demo Sheet');
        
        setSheet(sheetInstance);

        // Create animated objects
        if (boxRef.current) {
          const box = sheetInstance.object('Box', {
            position: { x: 0, y: 0 },
            scale: 1,
            rotation: 0,
          });

          box.onValuesChange((values) => {
            if (boxRef.current) {
              boxRef.current.style.transform = `translate(${values.position.x}px, ${values.position.y}px) scale(${values.scale}) rotate(${values.rotation}deg)`;
            }
          });
        }

        if (circleRef.current) {
          const circle = sheetInstance.object('Circle', {
            position: { x: 0, y: 0 },
            opacity: 1,
          });

          circle.onValuesChange((values) => {
            if (circleRef.current) {
              circleRef.current.style.transform = `translate(${values.position.x}px, ${values.position.y}px)`;
              circleRef.current.style.opacity = String(values.opacity);
            }
          });
        }
      } catch (error) {
        console.error('Theatre.js initialization error:', error);
      }
    };

    initTheatre();
  }, []);

  const handlePlay = () => {
    if (sheet) {
      sheet.sequence.play({ iterationCount: 1, range: [0, 3] });
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Theatre.js Timeline Animation</h3>
        <p className="text-gray-600 mb-4">
          Theatre.js is a powerful animation library with a visual editor for creating complex timeline-based animations.
        </p>
        
        <div className="bg-gray-100 rounded-lg p-8 min-h-[300px] relative overflow-hidden">
          <div
            ref={boxRef}
            className="w-20 h-20 bg-blue-500 rounded-lg absolute top-20 left-10"
          />
          <div
            ref={circleRef}
            className="w-16 h-16 bg-green-500 rounded-full absolute top-20 right-10"
          />
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isPlaying ? '▶️ Playing...' : '▶️ Play Animation'}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Visual timeline editor (Theatre.js Studio)</li>
          <li>Precise keyframe control</li>
          <li>Complex animation sequences</li>
          <li>Real-time preview and editing</li>
          <li>Export and import animation states</li>
          <li>Perfect for motion design and complex UI animations</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Theatre.js is best used with its Studio editor for creating animations visually. 
          This is a simplified demo showing programmatic usage.
        </p>
      </div>
    </div>
  );
};

export default TheatreBasics;
