import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Heart, ArrowRight, Share2, Sparkles, Trophy } from 'lucide-react';


export default function RewardSent() {
  const navigate = useNavigate();

  const [confettiPositions] = useState(() => 
    [...Array(8)].map(() => Math.random() * 100)
  );

  return (
    <div className="flex flex-col h-full bg-[#EAF4EE] text-[#1A7A6A] relative overflow-y-auto no-scrollbar overscroll-contain pb-32 font-dm-sans">
      {/* Decorative background elements */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full bg-teal-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-amber-400/10 blur-2xl flex items-center justify-center opacity-40">
        <Heart className="w-32 h-32 text-amber-500 fill-current rotate-12" />
      </div>
      
      <div className="px-6 pt-12 h-full flex flex-col items-center justify-center relative z-10 text-center">
        
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-3xl animate-pulse scale-150" />
            <div className="w-28 h-28 bg-white rounded-[40px] flex items-center justify-center shadow-2xl relative animate-pop">
              <Trophy className="w-14 h-14 text-amber-500" strokeWidth={1.5} />
              
              {/* Specialized Confetti */}
              {confettiPositions.map((leftPos, i) => (
                <div 
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full animate-confettiFall"
                  style={{ 
                    background: ['#FACC15', '#4ADE80', '#60A5FA', '#F87171'][i % 4],
                    left: `${leftPos}%`,
                    top: '-20px',
                    animationDelay: `${i * 0.12}s`
                  }}
                />
              ))}
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce d2">
              <Heart className="w-6 h-6 text-rose-500 fill-current" />
            </div>
          </div>

          <h1 className="font-syne font-extrabold text-3xl mb-4 leading-tight animate-up d1">
            Reward Sent!
          </h1>
          <p className="text-teal-900/60 text-base font-medium leading-relaxed mb-10 animate-up d2 max-w-[260px]">
            You've just made someone's day. Your thank-you gift is on its way to <span className="text-[#1A7A6A] font-bold">Leo K.</span>
          </p>

          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 w-full shadow-lg border border-white/50 animate-up d3 mb-8">
            <p className="text-[10px] font-bold text-teal-800/40 uppercase tracking-widest mb-3">Transaction Summary</p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-teal-900/60">Reward Amount</span>
              <span className="text-lg font-syne font-extrabold text-teal-900">₹100.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-teal-900/60">Trust Score Gain</span>
              <span className="text-sm font-bold text-teal-600 flex items-center gap-1">
                <Sparkles size={14} /> +15 pts
              </span>
            </div>
          </div>
        </div>

        <div className="w-full pb-12 px-6 flex flex-col gap-4 animate-up d4">
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4.5 rounded-2xl bg-[#1A7A6A] text-white font-syne font-extrabold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Back to Home <ArrowRight size={18} />
          </button>
          
          <button className="w-full py-4.5 rounded-2xl bg-white/50 border border-teal-100 text-teal-700 font-syne font-bold text-sm hover:bg-white/80 active:scale-95 transition-all flex items-center justify-center gap-2">
            View My Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
