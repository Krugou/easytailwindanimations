'use client';

import { useState } from 'react';

// Micro-interactions - small, delightful animations
export default function MicroInteractions() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Like Button</h3>
        <button
          onClick={() => setLiked(!liked)}
          className={`p-4 rounded-full transition-all ${
            liked 
              ? 'bg-red-500 scale-110' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
        >
          <span className="text-2xl">{liked ? '❤️' : '🤍'}</span>
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Bookmark Button</h3>
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`px-6 py-3 rounded-lg transition-all ${
            bookmarked 
              ? 'bg-yellow-500 text-white scale-105 animate-bounce' 
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          {bookmarked ? '★ Bookmarked' : '☆ Bookmark'}
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Checkbox with Animation</h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="sr-only peer"
          />
          <div className={`w-6 h-6 border-2 rounded transition-all ${
            checked 
              ? 'bg-blue-500 border-blue-500 scale-110' 
              : 'border-gray-400 scale-100'
          }`}>
            {checked && <span className="text-white text-sm">✓</span>}
          </div>
          <span className="text-lg">Animated Checkbox</span>
        </label>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Ripple Effect</h3>
        <button className="relative px-6 py-3 bg-blue-500 text-white rounded-lg overflow-hidden group">
          <span className="relative z-10">Click Me</span>
          <span className="absolute inset-0 bg-white opacity-0 group-active:opacity-30 transition-opacity rounded-full scale-0 group-active:scale-150 duration-300"></span>
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Attention Seekers</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-purple-500 text-white rounded-lg animate-bounce">
            Bounce
          </div>
          <div className="px-6 py-3 bg-pink-500 text-white rounded-lg animate-pulse">
            Pulse
          </div>
          <div className="px-6 py-3 bg-indigo-500 text-white rounded-lg animate-wiggle">
            Wiggle
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Count Badge</h3>
        <div className="relative inline-block">
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg">
            Notifications
          </button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-ping"></span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            3
          </span>
        </div>
      </div>
    </div>
  );
}
