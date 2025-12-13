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

const categories = [
  { id: 'all' as AnimationCategory, label: 'All' },
  { id: 'basics' as AnimationCategory, label: 'Basics' },
  { id: 'text' as AnimationCategory, label: 'Text' },
  { id: 'scroll' as AnimationCategory, label: 'Scroll' },
  { id: 'loaders' as AnimationCategory, label: 'Loaders' },
  { id: 'layout' as AnimationCategory, label: 'Layout' },
  { id: 'wild' as AnimationCategory, label: 'Wild' },
];

const AnimationSwitcher = ({ activeCategory, onCategoryChange }: AnimationSwitcherProps) => {
  const { speed, setSpeed, enabled, setEnabled } = useAnimation();

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
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
            {/* Speed Control */}
            <div className="flex items-center gap-2">
              <label className="text-white text-sm font-medium">Speed:</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value as typeof speed)}
                className="bg-white text-purple-600 rounded px-2 py-1 text-sm font-medium cursor-pointer"
              >
                <option value="slow">0.5x</option>
                <option value="normal">1x</option>
                <option value="fast">2x</option>
              </select>
            </div>

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
      </div>
    </div>
  );
};

export default AnimationSwitcher;
