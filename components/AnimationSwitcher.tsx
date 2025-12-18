'use client';

import { useAnimation } from '@/utils/AnimationContext';

export type AnimationCategory = 
  | 'basics' 
  | 'text' 
  | 'scroll' 
  | 'loaders' 
  | 'layout' 
  | 'wild'
  | 'all';

interface AnimationSwitcherProps {
  activeCategory: AnimationCategory;
  onCategoryChange: (category: AnimationCategory) => void;
}

const categories: { id: AnimationCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'basics', label: 'Basics' },
  { id: 'text', label: 'Text' },
  { id: 'scroll', label: 'Scroll' },
  { id: 'loaders', label: 'Loaders' },
  { id: 'layout', label: 'Layout' },
  { id: 'wild', label: 'Wild' },
];

const AnimationSwitcher = ({ activeCategory, onCategoryChange }: AnimationSwitcherProps) => {
  const { 
    speed, setSpeed, 
    enabled, setEnabled, 
    chaos, setChaos, 
    preset, setPreset, 
    gsapEnabled, setGsapEnabled,
    theatreEnabled, setTheatreEnabled,
    animeEnabled, setAnimeEnabled,
    framerEnabled, setFramerEnabled
  } = useAnimation();

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Top Row: Category Switcher & Main Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Switcher */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-white text-purple-600 shadow-md scale-105'
                      : 'bg-purple-500/30 text-white hover:bg-purple-500/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Animation Controls */}
            <div className="flex items-center gap-4 bg-white/10 rounded-lg px-4 py-2">
              {/* Enable/Disable Toggle */}
              <button
                onClick={() => setEnabled(!enabled)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  enabled
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {enabled ? '✓ ON' : '✗ OFF'}
              </button>
            </div>
          </div>

          {/* Bottom Row: Advanced Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white/10 rounded-lg px-4 py-3">
            {/* Presets */}
            <div className="flex items-center gap-2">
              <label className="text-white text-sm font-medium">Preset:</label>
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value as typeof preset)}
                className="bg-white text-purple-600 rounded px-3 py-1 text-sm font-medium cursor-pointer"
              >
                <option value="calm">😌 Calm</option>
                <option value="energetic">⚡ Energetic</option>
                <option value="feral">🔥 Feral</option>
              </select>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-2">
              <label className="text-white text-sm font-medium">Speed:</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value as typeof speed)}
                className="bg-white text-purple-600 rounded px-3 py-1 text-sm font-medium cursor-pointer"
              >
                <option value="slow">0.5x</option>
                <option value="normal">1x</option>
                <option value="fast">2x</option>
              </select>
            </div>

            {/* Chaos Slider */}
            <div className="flex items-center gap-3 flex-1 max-w-xs">
              <label className="text-white text-sm font-medium whitespace-nowrap">
                Chaos: {chaos}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={chaos}
                onChange={(e) => setChaos(Number(e.target.value))}
                className="flex-1 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            {/* Library Toggles */}
            <div className="flex items-center gap-3">
              <label className="text-white text-sm font-medium">Libraries:</label>
              <button
                onClick={() => setGsapEnabled(!gsapEnabled)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  gsapEnabled
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : 'bg-gray-500/50 text-white hover:bg-gray-500'
                }`}
                title="Toggle GSAP examples"
              >
                GSAP
              </button>
              <button
                onClick={() => setTheatreEnabled(!theatreEnabled)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  theatreEnabled
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-500/50 text-white hover:bg-gray-500'
                }`}
                title="Toggle Theatre.js examples"
              >
                Theatre
              </button>
              <button
                onClick={() => setAnimeEnabled(!animeEnabled)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  animeEnabled
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-500/50 text-white hover:bg-gray-500'
                }`}
                title="Toggle Anime.js examples"
              >
                Anime
              </button>
              <button
                onClick={() => setFramerEnabled(!framerEnabled)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  framerEnabled
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-500/50 text-white hover:bg-gray-500'
                }`}
                title="Toggle Framer Motion examples"
              >
                Framer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSwitcher;
