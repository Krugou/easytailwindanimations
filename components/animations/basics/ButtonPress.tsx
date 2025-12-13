'use client';

// Button press feedback animations - active state animations
export default function ButtonPress() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Press Scale</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-transform active:scale-95">
            Press Me
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg transition-transform active:scale-90">
            Strong Press
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg transition-all active:scale-95 active:rotate-2">
            Press + Rotate
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Press Translate</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md transition-all active:translate-y-1 active:shadow-sm">
            Push Down
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg transition-all active:translate-y-2 active:shadow-none">
            Deep Press
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Press Effects</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-lg transition-all active:bg-pink-600 active:shadow-inner">
            Color Change
          </button>
          <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg transition-all active:brightness-90">
            Brightness
          </button>
        </div>
      </div>
    </div>
  );
}
