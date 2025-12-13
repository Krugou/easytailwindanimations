'use client';

// Hover effect animations - simple hover state changes
const HoverEffects = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Scale</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-transform hover:scale-110">
            Scale Up
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg transition-transform hover:scale-95">
            Scale Down
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg transition-transform hover:scale-105 hover:rotate-3">
            Scale + Rotate
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Shadow</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg transition-shadow hover:shadow-lg">
            Shadow Small
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg transition-shadow hover:shadow-2xl">
            Shadow Large
          </button>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50">
            Colored Shadow
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Border</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg transition-colors hover:bg-blue-500 hover:text-white">
            Fill Background
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-lg transition-all hover:border-green-600 hover:text-green-600 hover:translate-y-[-2px]">
            Border + Lift
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Glow</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg transition-all hover:ring-4 hover:ring-indigo-300">
            Ring Glow
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg transition-all hover:brightness-125">
            Brightness
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Translate</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg transition-transform hover:-translate-y-2">
            Lift Up
          </button>
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg transition-transform hover:translate-x-2">
            Slide Right
          </button>
        </div>
      </div>
    </div>
  );

export default HoverEffects;
