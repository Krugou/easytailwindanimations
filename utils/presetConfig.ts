/**
 * Shared animation preset configurations
 * Used across AnimationContext and useAnimationEngine
 */

export type AnimationPreset = 'calm' | 'energetic' | 'feral';

export interface PresetConfig {
  speed: 'slow' | 'normal' | 'fast';
  chaos: number;
  duration: number;
  easing: string;
  intensity: number;
}

export const presetConfigs: Record<AnimationPreset, PresetConfig> = {
  calm: {
    speed: 'slow',
    chaos: 0,
    duration: 1.5,
    easing: 'ease-in-out',
    intensity: 0.5,
  },
  energetic: {
    speed: 'normal',
    chaos: 30,
    duration: 0.8,
    easing: 'ease-out',
    intensity: 1,
  },
  feral: {
    speed: 'fast',
    chaos: 80,
    duration: 0.3,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    intensity: 1.5,
  },
};

export const getPresetConfig = (preset: AnimationPreset): PresetConfig => 
  presetConfigs[preset];
