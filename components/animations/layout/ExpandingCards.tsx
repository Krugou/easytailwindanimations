'use client';

import { useState } from 'react';

// Expanding card animations
export default function ExpandingCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    { id: 1, color: 'bg-blue-500', title: 'Card 1', content: 'This card expands to show more content when clicked.' },
    { id: 2, color: 'bg-green-500', title: 'Card 2', content: 'Click to see the smooth expansion animation.' },
    { id: 3, color: 'bg-purple-500', title: 'Card 3', content: 'Notice how other cards adjust their positions.' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Expandable Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
              className={`${card.color} text-white rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                expandedCard === card.id ? 'md:col-span-3 scale-105' : ''
              }`}
            >
              <h4 className="text-2xl font-bold mb-2">{card.title}</h4>
              <p className={`transition-all duration-300 ${
                expandedCard === card.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hover Expand</h3>
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex-1 h-48 bg-gradient-to-br from-pink-${i * 100 + 400} to-red-${i * 100 + 400} rounded-lg transition-all duration-300 hover:flex-[2] cursor-pointer flex items-center justify-center text-white text-2xl font-bold`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Accordion Style</h3>
        <div className="space-y-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} text-white rounded-lg overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                className="w-full p-4 text-left font-bold flex justify-between items-center"
              >
                {card.title}
                <span className={`transition-transform duration-300 ${
                  expandedCard === card.id ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              <div className={`transition-all duration-300 ${
                expandedCard === card.id ? 'max-h-40 p-4 pt-0' : 'max-h-0'
              } overflow-hidden`}>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
