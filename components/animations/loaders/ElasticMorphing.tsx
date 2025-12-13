'use client';

// Elastic and morphing loader animations
const ElasticMorphing = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Elastic Bounce</h3>
        <div className="flex gap-8">
          <div className="w-16 h-16 bg-blue-500 rounded-full animate-elastic" />
          <div className="w-16 h-16 bg-green-500 rounded-lg animate-elastic [animation-delay:0.2s]" />
          <div className="w-16 h-16 bg-purple-500 animate-elastic [animation-delay:0.4s]"
               style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Morphing Shapes</h3>
        <div className="flex gap-8">
          <div className="w-16 h-16 bg-pink-500 animate-morph" />
          <div className="w-16 h-16 bg-red-500 animate-morph [animation-delay:0.3s]" />
          <div className="w-16 h-16 bg-orange-500 animate-morph [animation-delay:0.6s]" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Squash and Stretch</h3>
        <div className="flex gap-8 items-end h-24">
          <div className="w-12 h-12 bg-cyan-500 rounded-full animate-[squash_1s_ease-in-out_infinite]" />
          <div className="w-12 h-12 bg-teal-500 rounded-full animate-[squash_1s_ease-in-out_infinite] [animation-delay:0.2s]" />
          <div className="w-12 h-12 bg-emerald-500 rounded-full animate-[squash_1s_ease-in-out_infinite] [animation-delay:0.4s]" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Blob Loader</h3>
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-[blob_2s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-[blob_2s_ease-in-out_infinite] [animation-delay:1s] opacity-70" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Rotating Squares</h3>
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 animate-[rotate-square_2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes squash {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          50% {
            transform: scaleX(1.5) scaleY(0.5);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.1) rotate(90deg);
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          50% {
            transform: scale(0.9) rotate(180deg);
            border-radius: 50%;
          }
          75% {
            transform: scale(1.05) rotate(270deg);
            border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%;
          }
        }

        @keyframes rotate-square {
          0%, 100% {
            transform: rotate(0deg) scale(1);
            border-radius: 0%;
          }
          25% {
            transform: rotate(90deg) scale(1.1);
            border-radius: 20%;
          }
          50% {
            transform: rotate(180deg) scale(1);
            border-radius: 50%;
          }
          75% {
            transform: rotate(270deg) scale(0.9);
            border-radius: 20%;
          }
        }
      `}</style>
    </div>
  );

export default ElasticMorphing;
