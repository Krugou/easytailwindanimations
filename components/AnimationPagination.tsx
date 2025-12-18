'use client';

interface AnimationPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination component for navigating through animation demos.
 */
const AnimationPagination = ({ currentPage, totalPages, onPageChange }: AnimationPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-purple-500 text-white hover:bg-purple-600"
      >
        ← Previous
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              currentPage === i
                ? 'bg-purple-600 text-white scale-110'
                : 'bg-white text-purple-600 border-2 border-purple-300 hover:bg-purple-50'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-purple-500 text-white hover:bg-purple-600"
      >
        Next →
      </button>
    </div>
  );
};

export default AnimationPagination;
