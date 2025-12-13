'use client';

// Staggered letter reveal - letters appear one after another
export default function StaggeredReveal() {
  const text = 'STAGGERED';
  const letters = text.split('');

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Staggered Fade In</h3>
        <div className="flex gap-2 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Staggered Slide Up</h3>
        <div className="flex gap-2 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block translate-y-10 opacity-0 animate-slideInUp animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Staggered Scale</h3>
        <div className="flex gap-2 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block scale-0 animate-scaleUp"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Staggered Rotate</h3>
        <div className="flex gap-2 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block rotate-90 opacity-0 transition-all duration-500"
              style={{ 
                animation: 'fadeIn 0.5s forwards, spin 0.5s forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
