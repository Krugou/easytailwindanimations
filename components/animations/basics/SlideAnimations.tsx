'use client';

// Slide animations from different directions
export default function SlideAnimations() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Slide In Animations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-6 py-3 bg-blue-500 text-white rounded-lg animate-slideInLeft">
            Slide In Left
          </div>
          <div className="px-6 py-3 bg-green-500 text-white rounded-lg animate-slideInRight">
            Slide In Right
          </div>
          <div className="px-6 py-3 bg-purple-500 text-white rounded-lg animate-slideInUp">
            Slide In Up
          </div>
          <div className="px-6 py-3 bg-pink-500 text-white rounded-lg animate-slideInDown">
            Slide In Down
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Slide</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-red-500 text-white rounded-lg hover:translate-x-2 transition-transform cursor-pointer">
            Slide Right
          </div>
          <div className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:-translate-x-2 transition-transform cursor-pointer">
            Slide Left
          </div>
          <div className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:-translate-y-2 transition-transform cursor-pointer">
            Slide Up
          </div>
          <div className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:translate-y-2 transition-transform cursor-pointer">
            Slide Down
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Diagonal Slides</h3>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:[transform:translate(10px,-10px)] transition-transform cursor-pointer">
            Top Right
          </div>
          <div className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:[transform:translate(-10px,-10px)] transition-transform cursor-pointer">
            Top Left
          </div>
          <div className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:[transform:translate(10px,10px)] transition-transform cursor-pointer">
            Bottom Right
          </div>
          <div className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:[transform:translate(-10px,10px)] transition-transform cursor-pointer">
            Bottom Left
          </div>
        </div>
      </div>
    </div>
  );
}
