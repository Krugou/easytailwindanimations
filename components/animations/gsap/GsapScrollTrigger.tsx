'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const GsapScrollTrigger = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const { getPresetConfig, getChaosAdjustedDuration } = useAnimationEngine(section1Ref);

  useEffect(() => {
    // Register ScrollTrigger plugin on client side
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const config = getPresetConfig();
    const duration = getChaosAdjustedDuration(config.duration);

    // Scroll-triggered fade in
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Scroll-triggered scale
    if (section2Ref.current) {
      gsap.fromTo(
        section2Ref.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Scroll-triggered rotation
    if (section3Ref.current) {
      gsap.fromTo(
        section3Ref.current,
        { rotation: -180, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: duration * 1.5,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Parallax effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [getPresetConfig, getChaosAdjustedDuration]);

  return (
    <div className="space-y-64">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scroll Down to See GSAP ScrollTrigger</h3>
        <p className="text-gray-600">Elements will animate as you scroll</p>
      </div>

      <div
        ref={section1Ref}
        className="p-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-center text-2xl font-bold"
      >
        Slide In From Left
      </div>

      <div
        ref={section2Ref}
        className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center text-2xl font-bold"
      >
        Scale Up
      </div>

      <div
        ref={section3Ref}
        className="p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-center text-2xl font-bold"
      >
        Rotate In
      </div>

      <div className="relative h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
        >
          Parallax Effect
        </div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
