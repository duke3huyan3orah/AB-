import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Shuffle } from 'lucide-react';

export default function ABτγSillyGenerator() {
  const [combo, setCombo] = useState('ABτγ');
  const [fact, setFact] = useState('');
  const [color, setColor] = useState('#FF6B6B');
  const [spinning, setSpinning] = useState(false);

  const greekLetters = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'];
  const latinLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  const sillyFacts = [
    'This combination can predict the weather... incorrectly!',
    'Scientists believe this formula makes perfect pizza dough.',
    'Ancient Greeks used this to confuse their enemies.',
    'If you say this three times fast, nothing happens.',
    'This is the chemical formula for procrastination.',
    'Mathematicians use this when they give up on actual math.',
    'This combination won "Most Confusing Symbols" in 2024.',
    'Rumored to be the password to Atlantis (unconfirmed).',
    'This sequence appears in exactly zero important equations.',
    'If you stare at this long enough, you\'ll want a snack.',
    'This is what happens when keyboard autocorrect malfunctions.',
    'Philosophers debate: is this letters or just squiggles?',
    'The official notation for "I have no idea what I\'m doing."',
    'Studies show 9/10 people can\'t pronounce this correctly.',
    'This is how aliens say "hello" (citation needed).'
  ];

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

  const generateCombo = () => {
    setSpinning(true);
    
    const newCombo = Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () => {
      if (Math.random() > 0.5) {
        return latinLetters[Math.floor(Math.random() * latinLetters.length)];
      } else {
        return greekLetters[Math.floor(Math.random() * greekLetters.length)];
      }
    }).join('');
    
    setTimeout(() => {
      setCombo(newCombo);
      setFact(sillyFacts[Math.floor(Math.random() * sillyFacts.length)]);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      setSpinning(false);
    }, 500);
  };

  useEffect(() => {
    setFact(sillyFacts[Math.floor(Math.random() * sillyFacts.length)]);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="text-purple-500" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">Project ABτγ</h1>
          <Sparkles className="text-purple-500" size={32} />
        </div>
        
        <p className="text-gray-600 mb-8 italic">The Absolutely Bizarre Tau-Gamma Initiative</p>
        
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-12 mb-8 relative overflow-hidden">
          <div className={`text-7xl font-bold mb-4 transition-all duration-500 ${spinning ? 'scale-150 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} style={{ color }}>
            {combo}
          </div>
          
          {!spinning && (
            <div className="absolute top-4 right-4">
              <Zap className="text-yellow-500 animate-pulse" size={24} />
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 min-h-24 flex items-center justify-center">
          <p className="text-gray-700 text-lg italic">"{fact}"</p>
        </div>
        
        <button
          onClick={generateCombo}
          disabled={spinning}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
        >
          <Shuffle size={24} />
          {spinning ? 'Generating Nonsense...' : 'Generate New Combo!'}
        </button>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Warning: This project has no practical applications whatsoever.</p>
          <p className="mt-2">Side effects may include: confusion, laughter, and existential questions.</p>
        </div>
      </div>
    </div>
  );
}
