'use client';

import { useState, ReactNode } from 'react';

interface AnimationDemoProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

/**
 * Wrapper component for individual animation demos.
 * Allows users to toggle visibility of each animation separately.
 */
const AnimationDemo = ({ title, children, defaultOpen = false }: AnimationDemoProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            isOpen
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isOpen ? '👁️ Hide' : '👁️ Show'}
        </button>
      </div>
      {isOpen && (
        <div className="p-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default AnimationDemo;
