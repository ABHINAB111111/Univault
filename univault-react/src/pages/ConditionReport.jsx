import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle2, Camera, Info, ShieldCheck } from 'lucide-react';

const CONDITIONS = [
  { id: 'excellent', label: 'Excellent', icon: '✨', sub: 'Same as given' },
  { id: 'good', label: 'Good', icon: '👌', sub: 'Minor wear' },
  { id: 'fair', label: 'Fair', icon: '🔄', sub: 'Noticeable wear' },
  { id: 'damaged', label: 'Damaged', icon: '⚠️', sub: 'Raise dispute', color: 'text-rose-500' },
];

const ConditionReport = () => {
  const navigate = useNavigate();
  const [selectedCond, setSelectedCond] = useState('excellent');
  const [checks, setChecks] = useState({
    parts: false, clean: false, damage: false, time: false
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleCheck = (id) => setChecks(prev => ({ ...prev, [id]: !prev[id] }));

  if (submitted) {
    return (
      <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans min-h-screen flex flex-col items-center justify-center p-8 text-center animate-[popIn_0.4s_ease-out]">
        <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-5xl mb-6 shadow-xl text-emerald-500 animate-bounce">✅</div>
        <h2 className="text-2xl font-syne font-bold text-[#1C3F6E] dark:text-blue-400 mb-2 uppercase tracking-wide">Return Confirmed!</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">The item condition has been logged. Both you and the owner will receive a copy in the chat thread.</p>
        <button onClick={() => navigate('/reviews')} className="w-full py-4 bg-[#1C3F6E] text-white rounded-3xl font-syne font-extrabold uppercase tracking-widest shadow-xl active:scale-95 transition-all">
          Leave a Review
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400 italic">Return Condition</h1>
          </div>
          <Info className="w-5 h-5 text-amber-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-20 px-6 overflow-y-auto">
        {/* Warning Alert */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 p-4 rounded-2xl flex gap-4 mb-8 italic">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-normal font-bold uppercase tracking-tight">
            Please inspect the item carefully before confirming return. Both parties' condition reports are stored securely.
          </p>
        </div>

        {/* Item Summary */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex gap-4 mb-8">
          <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner italic">🔧</div>
          <div>
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Soldering Iron Kit</h3>
            <p className="text-[11px] text-slate-400 font-medium">Rented 3 days · Returned Today</p>
            <div className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mt-1 italic">Original: Excellent</div>
          </div>
        </div>

        {/* Condition Selector */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 font-bold italic">Current Condition on Return</h4>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {CONDITIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCond(c.id)}
              className={`p-4 rounded-[28px] border flex flex-col items-center gap-1 transition-all ${
                selectedCond === c.id 
                ? 'border-[#1C3F6E] bg-blue-50/50 dark:bg-blue-900/20 scale-105 shadow-xl' 
                : 'bg-white dark:bg-slate-900 border-slate-50 dark:border-slate-800 opacity-60'
              }`}
            >
              <span className="text-3xl mb-1">{c.icon}</span>
              <span className={`text-[11px] font-bold font-syne uppercase tracking-tight ${c.color || 'text-[#1C3F6E] dark:text-blue-200'}`}>{c.label}</span>
              <span className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">{c.sub}</span>
            </button>
          ))}
        </div>

        {/* Checklist */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 font-bold italic">Checklist (Tap to confirm)</h4>
        <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
          {[
            { id: 'parts', label: 'All parts / accessories returned' },
            { id: 'clean', label: 'Item is clean and functional' },
            { id: 'damage', label: 'No visible damage or scratches' },
            { id: 'time', label: 'Returned within agreed timeframe' },
          ].map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-center gap-4 p-4 ${idx < 3 ? 'border-b border-slate-50 dark:border-slate-800' : ''} active:bg-slate-50 transition-colors cursor-pointer group`}
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${checks[item.id] ? 'bg-teal-600 border-teal-600' : 'border-slate-200 dark:border-slate-700'}`}>
                {checks[item.id] && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <span className={`text-[13px] font-dm-sans ${checks[item.id] ? 'text-slate-900 dark:text-slate-200 font-bold' : 'text-slate-500 font-medium'}`}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Photo Evidence */}
        <div className="bg-[#1C3F6E] p-6 rounded-[32px] text-center mb-8 shadow-xl border-b-4 border-amber-600 group active:scale-98 transition-all cursor-pointer">
          <Camera className="w-8 h-8 text-white mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform" />
          <h5 className="font-syne font-bold text-xs text-white uppercase tracking-widest">Attach Return Photo</h5>
          <p className="text-[10px] text-blue-100/60 mt-1 font-medium italic">Recommended for security</p>
        </div>

        {/* Submit */}
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full py-5 bg-teal-600 text-white rounded-3xl font-syne font-extrabold uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <ShieldCheck className="w-6 h-6" />
          Confirm Return
        </button>
      </main>
    </div>
  );
};

export default ConditionReport;
