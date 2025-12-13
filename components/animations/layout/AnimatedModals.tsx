'use client';

import { useState } from 'react';

// Animated modal/dialog animations
export default function AnimatedModals() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Scale Modal</h3>
        <button
          onClick={() => setModal1(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Open Scale Modal
        </button>

        {modal1 && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn"
            onClick={() => setModal1(false)}
          >
            <div
              className="bg-white rounded-lg p-8 max-w-md animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Scale Modal</h3>
              <p className="mb-6">This modal scales up from the center!</p>
              <button
                onClick={() => setModal1(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Slide Up Modal</h3>
        <button
          onClick={() => setModal2(true)}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Open Slide Modal
        </button>

        {modal2 && (
          <div
            className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fadeIn"
            onClick={() => setModal2(false)}
          >
            <div
              className="bg-white rounded-t-lg p-8 w-full max-w-md animate-slideInUp"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Slide Up Modal</h3>
              <p className="mb-6">This modal slides up from the bottom!</p>
              <button
                onClick={() => setModal2(false)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Fade Modal</h3>
        <button
          onClick={() => setModal3(true)}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Open Fade Modal
        </button>

        {modal3 && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn"
            onClick={() => setModal3(false)}
          >
            <div
              className="bg-white rounded-lg p-8 max-w-md animate-fadeIn [animation-delay:0.1s]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Fade Modal</h3>
              <p className="mb-6">This modal fades in smoothly!</p>
              <button
                onClick={() => setModal3(false)}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
