'use client';

import { useState, useEffect, useRef } from 'react';

// Physics-like bouncing elements using requestAnimationFrame
export default function PhysicsAnimations() {
  const [balls, setBalls] = useState<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Initialize balls
    const initialBalls = [...Array(5)].map(() => ({
      x: Math.random() * 300,
      y: Math.random() * 200,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
    }));
    setBalls(initialBalls);

    const animate = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let { x, y, vx, vy } = ball;

          // Apply gravity
          vy += 0.2;

          // Update position
          x += vx;
          y += vy;

          // Bounce off walls
          if (x <= 0 || x >= 350) {
            vx *= -0.8;
            x = Math.max(0, Math.min(350, x));
          }
          if (y <= 0 || y >= 250) {
            vy *= -0.8;
            y = Math.max(0, Math.min(250, y));
          }

          // Damping
          vx *= 0.99;
          vy *= 0.99;

          return { x, y, vx, vy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-xl font-semibold mb-4">Bouncing Balls (Physics)</h3>
        <div
          ref={containerRef}
          className="relative w-full max-w-md h-64 bg-gray-900 rounded-lg overflow-hidden"
        >
          {balls.map((ball, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg"
              style={{
                transform: `translate(${ball.x}px, ${ball.y}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Spring Animation</h3>
        <div className="flex gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg animate-[spring_2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Pendulum Effect</h3>
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute top-0 left-1/2 w-1 h-32 bg-gray-400 origin-top animate-[swing_2s_ease-in-out_infinite]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spring {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-40px) scale(1, 0.8);
          }
          50% {
            transform: translateY(0) scale(1);
          }
          75% {
            transform: translateY(-20px) scale(1, 0.9);
          }
        }

        @keyframes swing {
          0%, 100% {
            transform: rotate(30deg);
          }
          50% {
            transform: rotate(-30deg);
          }
        }
      `}</style>
    </div>
  );
}
