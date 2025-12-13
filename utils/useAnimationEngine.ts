'use client';

import { useEffect, useRef, RefObject } from 'react';
import { useAnimation } from './AnimationContext';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  resetOnExit?: boolean;
}

/**
 * Unified animation engine hook for all animations
 * Handles IntersectionObserver, chaos mode, and preset configurations
 */
export const useAnimationEngine = (
  elementRef?: RefObject<HTMLElement | null>,
  onVisible?: () => void,
  onHidden?: () => void,
  options: AnimationOptions = {}
) => {
  const { enabled, chaos, preset } = useAnimation();
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    resetOnExit = false,
  } = options;

  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!enabled || !elementRef || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!triggerOnce || !hasTriggered.current) {
              onVisible?.();
              hasTriggered.current = true;
            }
          } else if (resetOnExit) {
            onHidden?.();
            hasTriggered.current = false;
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, onVisible, onHidden, threshold, rootMargin, triggerOnce, resetOnExit, enabled]);

  /**
   * Get chaos-adjusted timing
   */
  const getChaosAdjustedDuration = (baseDuration: number): number => {
    const chaosVariation = (Math.random() - 0.5) * (chaos / 100) * baseDuration;
    return Math.max(0.1, baseDuration + chaosVariation);
  };

  /**
   * Get chaos-adjusted delay
   */
  const getChaosAdjustedDelay = (baseDelay: number): number => {
    const chaosVariation = Math.random() * (chaos / 100) * baseDelay;
    return Math.max(0, baseDelay + chaosVariation);
  };

  /**
   * Get random animation intensity based on chaos level
   */
  const getRandomIntensity = (base: number, max: number): number => {
    const range = (max - base) * (chaos / 100);
    return base + Math.random() * range;
  };

  /**
   * Get preset-based configuration
   */
  const getPresetConfig = () => {
    switch (preset) {
      case 'calm':
        return {
          duration: 1.5,
          easing: 'ease-in-out',
          intensity: 0.5,
        };
      case 'energetic':
        return {
          duration: 0.8,
          easing: 'ease-out',
          intensity: 1,
        };
      case 'feral':
        return {
          duration: 0.3,
          easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          intensity: 1.5,
        };
      default:
        return {
          duration: 1,
          easing: 'ease',
          intensity: 1,
        };
    }
  };

  return {
    chaos,
    preset,
    enabled,
    getChaosAdjustedDuration,
    getChaosAdjustedDelay,
    getRandomIntensity,
    getPresetConfig,
  };
};
