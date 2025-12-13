'use client';

// Scale and rotate animations
export default function ScaleRotate() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scale Animations</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-blue-500 text-white rounded-lg animate-scaleUp">
            Scale Up
          </div>
          <div className="px-6 py-3 bg-green-500 text-white rounded-lg animate-pulse">
            Pulse Scale
          </div>
          <div className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:scale-125 transition-transform cursor-pointer">
            Hover Scale
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Rotate Animations</h3>
        <div className="flex flex-wrap gap-4">
          <div className="w-16 h-16 bg-red-500 rounded-lg animate-spin"></div>
          <div className="w-16 h-16 bg-orange-500 rounded-lg hover:rotate-45 transition-transform cursor-pointer"></div>
          <div className="w-16 h-16 bg-pink-500 rounded-lg hover:rotate-90 transition-transform cursor-pointer"></div>
          <div className="w-16 h-16 bg-yellow-500 rounded-lg hover:rotate-180 transition-transform cursor-pointer"></div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Combined Scale + Rotate</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:scale-110 hover:rotate-3 transition-transform cursor-pointer">
            Scale + Slight Rotate
          </div>
          <div className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:scale-125 hover:rotate-12 transition-transform cursor-pointer">
            Scale + Rotate
          </div>
          <div className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:scale-90 hover:rotate-[-12deg] transition-transform cursor-pointer">
            Scale Down + Rotate
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">3D Transforms</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-violet-500 text-white rounded-lg hover:[transform:rotateY(180deg)] transition-transform duration-500 cursor-pointer">
            Flip Horizontal
          </div>
          <div className="px-6 py-3 bg-fuchsia-500 text-white rounded-lg hover:[transform:rotateX(180deg)] transition-transform duration-500 cursor-pointer">
            Flip Vertical
          </div>
        </div>
      </div>
    </div>
  );
}
