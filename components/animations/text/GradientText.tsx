'use client';

// Gradient animated text - gradient colors shift across text
const GradientText = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Gradient Shift</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradientShift">
          GRADIENT TEXT
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Rainbow Gradient</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradientShift">
          RAINBOW
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Gradient</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-pink-500 bg-[length:100%_auto] hover:bg-[length:200%_auto] bg-clip-text text-transparent hover:animate-gradientShift cursor-pointer transition-all">
          HOVER ME
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Neon Glow</h3>
        <div className="text-4xl font-bold text-cyan-400 [text-shadow:0_0_10px_rgba(34,211,238,0.7),0_0_20px_rgba(34,211,238,0.5),0_0_30px_rgba(34,211,238,0.3)] animate-pulse">
          NEON GLOW
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Fire Gradient</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradientShift">
          FIRE TEXT
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Ocean Gradient</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradientShift">
          OCEAN WAVES
        </div>
      </div>
    </div>
  );

export default GradientText;
