import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  Users, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

const slides = [
  {
    icon: Building2, color: 'text-blue-400', bg: 'from-[#1C3F6E] to-[#0E2244]',
    title: 'Campus Assets,\nRedefined.',
    body: 'Track, rent, buy, and report everything on campus — all in one beautifully curated vault.',
  },
  {
    icon: Search, color: 'text-emerald-400', bg: 'from-[#1A7A6A] to-[#0A3F35]',
    title: 'Never Lose\nAnything Again.',
    body: 'Report lost items and get notified instantly when they are found by a fellow student.',
  },
  {
    icon: Users, color: 'text-indigo-400', bg: 'from-[#5A489A] to-[#2A2050]',
    title: 'Trade, Rent &\nConnect.',
    body: 'List your unused gear, rent what you need, and negotiate deals directly through chat.',
  },
  {
    icon: Star, color: 'text-amber-400', bg: 'from-[#C07828] to-[#6A3A08]',
    title: 'Your Curator\nReputation.',
    body: 'Build trust with ratings and badges. Top curators unlock exclusive campus perks.',
  },
];

export default function Onboarding() {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();
  const slide = slides[idx];
  const Icon = slide.icon;

  return (
    <div className={`h-full flex flex-col items-center p-8 pb-12 transition-all duration-700 bg-gradient-to-br ${slide.bg} font-dm-sans overflow-y-auto no-scrollbar relative`}>
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-[120px]" />
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
        {/* Animated Icon Container */}
        <div className="w-32 h-32 rounded-[40px] bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center mb-12 shadow-2xl animate-float">
          <Icon size={56} className={`${slide.color}`} strokeWidth={1.5} />
        </div>

        {/* Text area */}
        <div className="text-center w-full max-w-[300px]">
          <h2 className="font-syne font-extrabold text-3xl text-white mb-4 leading-tight tracking-tighter whitespace-pre-line animate-fadeUp">
            {slide.title}
          </h2>
          <p className="text-sm leading-relaxed text-white/50 tracking-tight animate-fadeUp [animation-delay:0.1s]">
            {slide.body}
          </p>
        </div>
      </div>

      {/* Pagination & Actions */}
      <div className="w-full max-w-[320px] flex flex-col items-center gap-10 mt-auto pb-8 z-10">
        {/* Progress dots */}
        <div className="flex gap-2.5">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setIdx(i)} 
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-500
                ${i === idx ? 'w-8 bg-white' : 'w-1.5 bg-white/20'}`} 
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 w-full">
          {idx < slides.length - 1 ? (
            <>
              <button 
                onClick={() => navigate('/')} 
                className="flex-1 py-4 rounded-2xl font-syne font-black text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              >
                Skip
              </button>
              <button 
                onClick={() => setIdx(i => i + 1)} 
                className="flex-[1.5] py-4 bg-white rounded-2xl font-syne font-black text-xs uppercase tracking-widest text-[#1B1916] shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Next <ArrowRight size={16} strokeWidth={3} />
              </button>
            </>
          ) : (
            <button 
              onClick={() => navigate('/')} 
              className="w-full py-4 bg-white rounded-[24px] font-syne font-black text-sm uppercase tracking-[0.2em] text-[#1B1916] shadow-2xl shadow-black/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Enter the Vault <Zap size={18} className="fill-[#1B1916]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
