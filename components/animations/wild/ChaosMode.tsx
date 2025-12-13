'use client';

import { useState } from 'react';

// Chaos mode - multiple crazy animations together
export default function ChaosMode() {
  const [chaosEnabled, setChaosEnabled] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [tooHard, setTooHard] = useState(false);

  const triggerScreenShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-xl font-semibold mb-4">Chaos Mode</h3>
        <button
          onClick={() => setChaosEnabled(!chaosEnabled)}
          className={`px-8 py-4 rounded-lg font-bold text-white transition-all ${
            chaosEnabled
              ? 'bg-red-500 animate-shake animate-pulse'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {chaosEnabled ? 'STOP THE CHAOS!' : 'Activate Chaos Mode'}
        </button>

        {chaosEnabled && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-24 rounded-lg animate-[chaos_${0.5 + (i % 3) * 0.2}s_infinite]`}
                style={{
                  background: `hsl(${i * 30}, 70%, 60%)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Screen Shake</h3>
        <button
          onClick={triggerScreenShake}
          className={`px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors ${
            shaking ? 'animate-shake' : ''
          }`}
        >
          Shake Screen
        </button>
      </div>

      <div className={shaking ? 'animate-shake' : ''}>
        <h3 className="text-xl font-semibold mb-4">&quot;Hover Too Hard&quot; Easter Egg</h3>
        <button
          onMouseEnter={() => setTooHard(true)}
          onMouseLeave={() => setTimeout(() => setTooHard(false), 3000)}
          className={`px-6 py-3 bg-purple-500 text-white rounded-lg font-bold transition-all ${
            tooHard
              ? 'animate-wobble animate-spin scale-150 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
              : 'hover:bg-purple-600'
          }`}
        >
          {tooHard ? 'AAAHHHH!!!' : 'Hover Gently'}
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Glitch Effect</h3>
        <div className="relative">
          <div className="text-6xl font-bold animate-glitch">
            GLITCH
          </div>
          <div className="absolute top-0 left-0 text-6xl font-bold text-red-500 opacity-70 animate-glitch [animation-duration:0.3s] [-webkit-text-stroke:1px_red] [clip-path:polygon(0_0,100%_0,100%_45%,0_45%)]">
            GLITCH
          </div>
          <div className="absolute top-0 left-0 text-6xl font-bold text-blue-500 opacity-70 animate-glitch [animation-duration:0.4s] [animation-delay:0.1s] [-webkit-text-stroke:1px_blue] [clip-path:polygon(0_60%,100%_60%,100%_100%,0_100%)]">
            GLITCH
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Noise Overlay</h3>
        <div className="relative h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 animate-noise opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            STATIC NOISE
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Distortion Effect</h3>
        <div className="text-4xl font-bold text-center hover:[filter:url(#distortion)] transition-all cursor-pointer">
          HOVER FOR DISTORTION
        </div>
      </div>

      <style jsx>{`
        @keyframes chaos {
          0% {
            transform: scale(1) rotate(0deg) translateY(0);
          }
          25% {
            transform: scale(1.2) rotate(90deg) translateY(-20px);
          }
          50% {
            transform: scale(0.8) rotate(180deg) translateY(20px);
          }
          75% {
            transform: scale(1.1) rotate(270deg) translateY(-10px);
          }
          100% {
            transform: scale(1) rotate(360deg) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
