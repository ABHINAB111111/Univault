import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight, Share2 } from 'lucide-react';
import { StatusBar } from '../components/Layout';

export default function ReportConfirm() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add any initialization logic if needed
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#1C3F6E] text-white relative overflow-y-auto no-scrollbar overscroll-contain pb-32 font-dm-sans">
      {/* Decorative background elements */}
      <div className="absolute top-[-100px] right-[-100px] w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 rounded-full bg-blue-400/10 blur-2xl" />
      
      <div className="px-6 pt-2 h-full flex flex-col items-center justify-center relative z-10">
        <StatusBar white />
        
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl animate-pulse scale-150" />
            <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-2xl relative animate-pop">
              <CheckCircle2 className="w-12 h-12 text-teal-500" strokeWidth={2.5} />
              
              {/* Confetti particles (CSS animation) */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-confettiFall"
                  style={{ 
                    background: ['#FACC15', '#4ADE80', '#60A5FA', '#F87171'][i % 4],
                    left: `${Math.random() * 100}%`,
                    top: '-20px',
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              ))}
            </div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce d2">
              <Sparkles className="w-5 h-5 text-[#1C3F6E]" />
            </div>
          </div>

          <h1 className="font-syne font-extrabold text-3xl mb-4 leading-tight animate-up d1">
            Report Published!
          </h1>
          <p className="text-white/60 text-base font-medium leading-relaxed mb-10 animate-up d2">
            Your report is live. We've matched it with our current database and notified potential finders.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full animate-up d3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Status</p>
              <p className="text-sm font-bold text-teal-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" /> Active
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Reach</p>
              <p className="text-sm font-bold text-white">Entire Campus</p>
            </div>
          </div>
        </div>

        <div className="w-full pb-12 px-6 flex flex-col gap-4 animate-up d4">
          <button 
            onClick={() => navigate('/lost-found')}
            className="w-full py-4.5 rounded-2xl bg-white text-[#1C3F6E] font-syne font-extrabold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Go to My Reports <ArrowRight size={18} />
          </button>
          
          <button className="w-full py-4.5 rounded-2xl bg-white/10 border border-white/10 text-white font-syne font-bold text-sm hover:bg-white/15 active:scale-95 transition-all flex items-center justify-center gap-2">
            <Share2 size={18} /> Share Report
          </button>
        </div>
      </div>
    </div>
  );
}
