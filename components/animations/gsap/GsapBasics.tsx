'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const GsapBasics = () => {
  const fadeRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);
  const bounceRef = useRef<HTMLDivElement>(null);

  const { getPresetConfig, getChaosAdjustedDuration } = useAnimationEngine(fadeRef);

  useEffect(() => {
    const config = getPresetConfig();
    const duration = getChaosAdjustedDuration(config.duration);

    // Fade animation
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration, ease: config.easing, repeat: -1, yoyo: true }
      );
    }

    // Scale animation
    if (scaleRef.current) {
      gsap.fromTo(
        scaleRef.current,
        { scale: 0.8 },
        { scale: 1.2, duration: duration * 0.8, ease: 'power2.inOut', repeat: -1, yoyo: true }
      );
    }

    // Rotate animation
    if (rotateRef.current) {
      gsap.to(rotateRef.current, {
        rotation: 360,
        duration: duration * 2,
        ease: 'linear',
        repeat: -1,
      });
    }

    // Bounce animation
    if (bounceRef.current) {
      gsap.fromTo(
        bounceRef.current,
        { y: 0 },
        { y: -30, duration: duration * 0.6, ease: 'bounce.out', repeat: -1, yoyo: true }
      );
    }
  }, [getPresetConfig, getChaosAdjustedDuration]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">GSAP Fade & Slide</h3>
        <div
          ref={fadeRef}
          className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center font-bold"
        >
          Fade & Slide Animation
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">GSAP Scale</h3>
        <div className="flex justify-center">
          <div
            ref={scaleRef}
            className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Scale
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">GSAP Rotate</h3>
        <div className="flex justify-center">
          <div
            ref={rotateRef}
            className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Rotate
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">GSAP Bounce</h3>
        <div className="flex justify-center">
          <div
            ref={bounceRef}
            className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
          >
            Bounce
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapBasics;
