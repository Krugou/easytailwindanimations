'use client';

// Glitch text effect - text appears to glitch/distort
export default function GlitchText() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Glitch Animation</h3>
        <div className="text-4xl font-bold animate-glitch">
          GLITCH
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Glitch</h3>
        <div className="text-4xl font-bold hover:animate-glitch cursor-pointer">
          HOVER ME
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Shake Effect</h3>
        <div className="text-4xl font-bold animate-shake">
          SHAKE
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Wobble Effect</h3>
        <div className="text-4xl font-bold animate-wobble">
          WOBBLE
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Multi-Layer Glitch</h3>
        <div className="relative text-4xl font-bold">
          <span className="relative z-10">LAYERED</span>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch [animation-duration:0.3s]">
            LAYERED
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch [animation-duration:0.4s] [animation-delay:0.1s]">
            LAYERED
          </span>
        </div>
      </div>
    </div>
  );
}
