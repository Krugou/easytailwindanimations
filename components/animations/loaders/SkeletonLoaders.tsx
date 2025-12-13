'use client';

// Skeleton loading placeholders
const SkeletonLoaders = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Card Skeleton</h3>
        <div className="max-w-sm p-4 border border-gray-200 rounded-lg">
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="flex gap-2">
              <div className="h-8 bg-gray-300 rounded w-20" />
              <div className="h-8 bg-gray-300 rounded w-20" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">List Skeleton</h3>
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-3 bg-gray-300 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Text Skeleton</h3>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-4/6" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Shimmer Effect</h3>
        <div className="relative max-w-sm h-48 bg-gray-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-[shimmer_2s_infinite]" 
               style={{
                 animation: 'shimmer 2s infinite',
                 backgroundSize: '200% 100%',
               }}>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );

export default SkeletonLoaders;
