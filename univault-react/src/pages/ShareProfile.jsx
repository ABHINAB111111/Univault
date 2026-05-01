import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Copy, Image, MessageCircle, ShieldCheck, QrCode } from 'lucide-react';

const ShareProfile = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    
    // Simple mock QR code pattern
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#1C3F6E';
    
    // Corners
    const drawEye = (x, y) => {
      ctx.fillRect(x, y, 40, 40);
      ctx.clearRect(x + 8, y + 8, 24, 24);
      ctx.fillRect(x + 14, y + 14, 12, 12);
    };
    drawEye(0, 0);
    drawEye(size - 40, 0);
    drawEye(0, size - 40);
    
    // Random dots
    for (let i = 0; i < 400; i++) {
      const x = Math.floor(Math.random() * (size / 8)) * 8;
      const y = Math.floor(Math.random() * (size / 8)) * 8;
      if (!((x < 50 && y < 50) || (x > size - 50 && y < 50) || (x < 50 && y > size - 50))) {
        ctx.fillRect(x, y, 6, 6);
      }
    }
  }, []);

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400 uppercase italic tracking-tighter">Campus ID</h1>
          </div>
          <QrCode className="w-5 h-5 text-teal-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-14 pb-12 flex flex-col items-center">
        <div className="px-6 py-8 w-full max-w-sm flex flex-col items-center">
          
          {/* Profile Card Overlay */}
          <div className="bg-[#1C3F6E] rounded-[32px] p-6 w-full text-center mb-8 shadow-2xl relative overflow-hidden group border-b-4 border-[#C07828]">
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[72px] h-[72px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-2xl font-syne font-extrabold text-white mb-4 italic shadow-lg">
                AT
              </div>
              <h2 className="text-xl font-syne font-bold text-white tracking-wide">Alexander Thorne</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-blue-100/60 font-bold uppercase tracking-[0.2em]">Verified Senior</span>
                <div className="w-1 h-1 rounded-full bg-blue-100/30"></div>
                <span className="text-[10px] text-blue-100/60 font-bold uppercase tracking-[0.2em]">CSE · 21BCE1892</span>
              </div>

              <div className="grid grid-cols-3 w-full mt-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-lg font-syne font-extrabold text-white">4.9</div>
                  <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mt-1">Rating</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-lg font-syne font-extrabold text-white">872</div>
                  <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mt-1">Trust</div>
                </div>
                <div>
                  <div className="text-lg font-syne font-extrabold text-white">142</div>
                  <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest mt-1">Vaulted</div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Canvas */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] shadow-xl border border-slate-50 dark:border-slate-800 mb-8 flex flex-col items-center">
            <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl">
              <canvas ref={canvasRef} width={180} height={180} className="rounded-lg dark:opacity-80" />
            </div>
            <p className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mt-5">Scan to verify student status</p>
          </div>

          {/* Share Link */}
          <div className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex items-center justify-between mb-8 shadow-sm group">
            <span className="text-xs text-slate-500 font-medium font-dm-sans truncate pr-4">univault.app/u/alexander-thorne</span>
            <button className="flex items-center gap-2 text-[#1C3F6E] dark:text-blue-400 font-syne font-extrabold text-[10px] uppercase tracking-widest hover:text-[#C07828] transition-colors">
              <Copy className="w-3.5 h-3.5" />
              Copy
            </button>
          </div>

          {/* Grid of Share Options */}
          <div className="grid grid-cols-3 gap-3 w-full">
            <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-800 active:scale-95 transition-all">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-800 active:scale-95 transition-all">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                <Image className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Save QR</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-800 active:scale-95 transition-all">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Share...</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShareProfile;
