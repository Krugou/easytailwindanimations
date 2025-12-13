'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AnimationSpeed = 'slow' | 'normal' | 'fast';

interface AnimationContextType {
  speed: AnimationSpeed;
  setSpeed: (speed: AnimationSpeed) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [speed, setSpeed] = useState<AnimationSpeed>('normal');
  const [enabled, setEnabled] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (!enabled || prefersReducedMotion) {
      root.classList.add('no-animations');
    } else {
      root.classList.remove('no-animations');
      root.classList.remove('animation-speed-slow', 'animation-speed-normal', 'animation-speed-fast');
      root.classList.add(`animation-speed-${speed}`);
    }
  }, [speed, enabled, prefersReducedMotion]);

  return (
    <AnimationContext.Provider value={{ speed, setSpeed, enabled, setEnabled }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
