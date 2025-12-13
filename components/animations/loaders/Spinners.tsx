'use client';

// Various spinner/loading animations
const Spinners = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Basic Spinners</h3>
        <div className="flex flex-wrap gap-8">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
          <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 border-r-green-500 rounded-full animate-spin" />
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 border-r-purple-500 border-b-purple-500 rounded-full animate-spin" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Dot Spinners</h3>
        <div className="flex flex-wrap gap-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
          </div>

          <div className="flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse [animation-delay:0.2s]" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse [animation-delay:0.4s]" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Ring Spinners</h3>
        <div className="flex flex-wrap gap-8">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-4 border-pink-200 rounded-full animate-ping" />
            <div className="absolute inset-0 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
          </div>

          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-4 border-indigo-300 border-t-transparent rounded-full animate-spin [animation-direction:reverse]" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Bar Spinners</h3>
        <div className="flex flex-wrap gap-8">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-cyan-500 animate-bounce"
                style={{
                  height: '40px',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-teal-500 animate-pulse"
                style={{
                  height: '40px',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default Spinners;
