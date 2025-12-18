'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AnimationPreset, getPresetConfig } from './presetConfig';

type AnimationSpeed = 'slow' | 'normal' | 'fast';

interface AnimationContextType {
  speed: AnimationSpeed;
  setSpeed: (speed: AnimationSpeed) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  chaos: number; // 0-100 percentage
  setChaos: (chaos: number) => void;
  preset: AnimationPreset;
  setPreset: (preset: AnimationPreset) => void;
  gsapEnabled: boolean;
  setGsapEnabled: (enabled: boolean) => void;
  theatreEnabled: boolean;
  setTheatreEnabled: (enabled: boolean) => void;
  animeEnabled: boolean;
  setAnimeEnabled: (enabled: boolean) => void;
  framerEnabled: boolean;
  setFramerEnabled: (enabled: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<AnimationSpeed>('normal');
  const [enabled, setEnabled] = useState(true);
  const [chaos, setChaos] = useState(0);
  const [preset, setPreset] = useState<AnimationPreset>('calm');
  const [gsapEnabled, setGsapEnabled] = useState(false);
  const [theatreEnabled, setTheatreEnabled] = useState(false);
  const [animeEnabled, setAnimeEnabled] = useState(false);
  const [framerEnabled, setFramerEnabled] = useState(false);
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

  // Apply preset when it changes
  useEffect(() => {
    const config = getPresetConfig(preset);
    setSpeed(config.speed);
    setChaos(config.chaos);
  }, [preset]);

  useEffect(() => {
    const root = document.documentElement;
    
    if (!enabled || prefersReducedMotion) {
      root.classList.add('no-animations');
    } else {
      root.classList.remove('no-animations');
      root.classList.remove('animation-speed-slow', 'animation-speed-normal', 'animation-speed-fast');
      root.classList.add(`animation-speed-${speed}`);
    }

    // Set chaos level CSS variable
    root.style.setProperty('--chaos-level', (chaos / 100).toString());
  }, [speed, enabled, prefersReducedMotion, chaos]);

  return (
    <AnimationContext.Provider value={{ 
      speed, 
      setSpeed, 
      enabled, 
      setEnabled,
      chaos,
      setChaos,
      preset,
      setPreset,
      gsapEnabled,
      setGsapEnabled,
      theatreEnabled,
      setTheatreEnabled,
      animeEnabled,
      setAnimeEnabled,
      framerEnabled,
      setFramerEnabled
    }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
