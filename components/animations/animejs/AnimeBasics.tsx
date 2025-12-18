'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Anime.js Basic Animations
 * Lightweight animation library with powerful features
 */
const AnimeBasics = () => {
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const staggerRef = useRef<HTMLDivElement>(null);
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {
    // Dynamically import anime.js to avoid SSR issues
    const loadAnime = async () => {
      const animeModule = await import('animejs') as any;
      setAnime(animeModule.default || animeModule);
    };
    loadAnime();
  }, []);

  const animateTranslate = () => {
    if (anime && box1Ref.current) {
      anime({
        targets: box1Ref.current,
        translateX: [0, 250],
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false,
      });
    }
  };

  const animateScale = () => {
    if (anime && box2Ref.current) {
      anime({
        targets: box2Ref.current,
        scale: [1, 1.5],
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: false,
      });
    }
  };

  const animateElastic = () => {
    if (anime && box3Ref.current) {
      anime({
        targets: box3Ref.current,
        translateY: [0, -100],
        scale: [1, 1.2],
        duration: 800,
        easing: 'easeOutElastic(1, .5)',
        direction: 'alternate',
        loop: false,
      });
    }
  };

  const animateStagger = () => {
    if (anime && staggerRef.current) {
      anime({
        targets: staggerRef.current.querySelectorAll('.stagger-item'),
        translateY: [0, -20],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutExpo',
        direction: 'alternate',
        loop: false,
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Translate Animation</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px] relative">
          <div
            ref={box1Ref}
            className="w-16 h-16 bg-blue-500 rounded-lg"
          />
        </div>
        <button
          onClick={animateTranslate}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Animate
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Scale & Rotate</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px] flex items-center justify-center">
          <div
            ref={box2Ref}
            className="w-16 h-16 bg-green-500 rounded-lg"
          />
        </div>
        <button
          onClick={animateScale}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          Animate
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Elastic Bounce</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[160px] flex items-end">
          <div
            ref={box3Ref}
            className="w-16 h-16 bg-purple-500 rounded-full"
          />
        </div>
        <button
          onClick={animateElastic}
          className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
        >
          Animate
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Stagger Animation</h3>
        <div className="bg-gray-100 rounded-lg p-8 min-h-[120px]" ref={staggerRef}>
          <div className="flex gap-4 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="stagger-item w-12 h-12 bg-orange-500 rounded-lg"
              />
            ))}
          </div>
        </div>
        <button
          onClick={animateStagger}
          className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
        >
          Animate
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Lightweight (~6KB minified + gzipped)</li>
          <li>Powerful easing functions</li>
          <li>Timeline control</li>
          <li>SVG animation support</li>
          <li>Stagger animations</li>
          <li>CSS, transform, and object property animations</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimeBasics;
