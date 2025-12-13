'use client';

import { useState } from 'react';

// Fade in/out animations
const FadeAnimations = () => {
  const [showFade, setShowFade] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Fade In</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-blue-500 text-white rounded-lg animate-fadeIn">
            Fade In
          </div>
          <div className="px-6 py-3 bg-green-500 text-white rounded-lg animate-fadeIn [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Delayed Fade In
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Fade Toggle</h3>
        <div className="space-y-4">
          <button
            onClick={() => setShowFade(!showFade)}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Toggle Fade
          </button>
          {showFade && (
            <div className="px-6 py-3 bg-pink-500 text-white rounded-lg inline-block animate-fadeIn">
              I fade in when shown!
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Opacity Hover</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-indigo-500 text-white rounded-lg opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            Hover to Reveal
          </div>
          <div className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:opacity-50 transition-opacity cursor-pointer">
            Hover to Fade
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeAnimations;
