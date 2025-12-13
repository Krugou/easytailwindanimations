'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const GsapTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { getPresetConfig, getChaosAdjustedDuration } = useAnimationEngine(containerRef);

  useEffect(() => {
    const config = getPresetConfig();
    const duration = getChaosAdjustedDuration(0.5);

    // Create a timeline
    timelineRef.current = gsap.timeline({ paused: true });

    if (box1Ref.current && box2Ref.current && box3Ref.current && box4Ref.current) {
      timelineRef.current
        .fromTo(box1Ref.current, { x: 0, rotation: 0 }, { x: 200, rotation: 360, duration, ease: config.easing })
        .fromTo(box2Ref.current, { y: 0, scale: 1 }, { y: 100, scale: 1.5, duration, ease: config.easing }, '-=0.2')
        .fromTo(box3Ref.current, { x: 0, opacity: 1 }, { x: -200, opacity: 0.5, duration, ease: config.easing }, '-=0.3')
        .fromTo(box4Ref.current, { scale: 1, rotation: 0 }, { scale: 0.5, rotation: -180, duration, ease: config.easing }, '-=0.2');
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [getPresetConfig, getChaosAdjustedDuration]);

  const handlePlay = () => {
    if (timelineRef.current) {
      timelineRef.current.play();
      setIsPlaying(true);
      timelineRef.current.eventCallback('onComplete', () => {
        setIsPlaying(false);
      });
    }
  };

  const handleReverse = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse();
    }
  };

  const handleReset = () => {
    if (timelineRef.current) {
      timelineRef.current.restart().pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">GSAP Timeline</h3>
        <p className="text-gray-600 mb-4">Orchestrate multiple animations in sequence</p>
        
        <div className="flex gap-4 mb-8">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Play
          </button>
          <button
            onClick={handleReverse}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            Reverse
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>

        <div ref={containerRef} className="relative h-64 bg-gray-100 rounded-lg p-8">
          <div ref={box1Ref} className="absolute top-8 left-8 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
            1
          </div>
          <div ref={box2Ref} className="absolute top-8 left-32 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            2
          </div>
          <div ref={box3Ref} className="absolute top-8 right-8 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
            3
          </div>
          <div ref={box4Ref} className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
            4
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Stagger Animation</h3>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) {
                  gsap.fromTo(
                    el,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, delay: i * 0.1, repeat: -1, yoyo: true }
                  );
                }
              }}
              className="h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GsapTimeline;
