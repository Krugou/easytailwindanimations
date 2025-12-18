'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Anime.js SVG Animations
 * Advanced SVG path and shape animations
 */
const AnimeSVG = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const circlesRef = useRef<SVGSVGElement>(null);
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {
    const loadAnime = async () => {
      const animeModule = await import('animejs') as any;
      setAnime(animeModule.default || animeModule);
    };
    loadAnime();
  }, []);

  const animatePath = () => {
    if (anime && pathRef.current) {
      anime({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        direction: 'alternate',
        loop: false,
      });
    }
  };

  const animateCircles = () => {
    if (anime && circlesRef.current) {
      anime({
        targets: circlesRef.current.querySelectorAll('circle'),
        r: [0, 30],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(100, { from: 'center' }),
        loop: false,
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">SVG Path Drawing</h3>
        <div className="bg-gray-100 rounded-lg p-8">
          <svg width="300" height="200" viewBox="0 0 300 200">
            <path
              ref={pathRef}
              d="M 50 100 Q 150 20 250 100 T 450 100"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
            />
          </svg>
        </div>
        <button
          onClick={animatePath}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Draw Path
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Staggered Circles</h3>
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
          <svg ref={circlesRef} width="400" height="200" viewBox="0 0 400 200">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle
                key={i}
                cx={50 + i * 80}
                cy="100"
                r="30"
                fill={`hsl(${i * 60}, 70%, 50%)`}
                opacity="0"
              />
            ))}
          </svg>
        </div>
        <button
          onClick={animateCircles}
          className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
        >
          Animate Circles
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">SVG Animation Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Animate SVG paths and shapes</li>
          <li>Morphing between shapes</li>
          <li>Line drawing animations</li>
          <li>Transform animations on SVG elements</li>
          <li>Built-in support for stroke-dashoffset</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimeSVG;
