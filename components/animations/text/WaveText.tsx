'use client';

// Wave text - letters move up and down in a wave pattern
export default function WaveText() {
  const text = 'WAVE TEXT';
  const letters = text.split('');

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Wave Animation</h3>
        <div className="flex gap-1 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Wave</h3>
        <div className="flex gap-1 text-4xl font-bold group cursor-pointer">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform group-hover:animate-wave"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Bounce Wave</h3>
        <div className="flex gap-1 text-4xl font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
