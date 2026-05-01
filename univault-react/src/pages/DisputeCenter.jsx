import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Scale, ShieldAlert, Camera, Send, ChevronRight, Gavel } from 'lucide-react';

const TRANSACTION_OPTIONS = [
  'Soldering Kit — Karan M. (Mar 21)',
  'DS Algorithms — Riya M. (Mar 18)',
  'Campus Cycle — Karan D. (Mar 20)',
];

const ISSUE_TYPES = [
  { id: 'damaged', label: 'Item Damaged', icon: '⚠️' },
  { id: 'noshow', label: 'No Show', icon: '🚫' },
  { id: 'wrong', label: 'Wrong Item', icon: '📦' },
  { id: 'other', label: 'Other', icon: '📋' },
];

const DisputeCenter = () => {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState('damaged');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans h-full flex flex-col items-center justify-center p-8 text-center animate-[popIn_0.4s_ease-out] overflow-hidden">
        <div className="w-24 h-24 bg-rose-50 dark:bg-rose-900/40 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl text-rose-500 animate-pulse">📋</div>
        <h2 className="text-2xl font-syne font-bold text-[#1C3F6E] dark:text-blue-400 mb-2 uppercase tracking-wide italic">Dispute Raised!</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">Your report has been submitted to campus admins. We will review the evidence and contact you within 48 hours via chat.</p>
        <button onClick={() => navigate('/profile')} className="w-full py-4 bg-[#1C3F6E] text-white rounded-3xl font-syne font-extrabold uppercase tracking-widest shadow-xl active:scale-95 transition-all">
          Go To Profile
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
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400 italic">Dispute Center</h1>
          </div>
          <Gavel className="w-5 h-5 text-rose-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-20 px-6 overflow-y-auto">
        {/* Warning Alert */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 p-4 rounded-2xl flex gap-4 mb-8 italic">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-normal font-bold uppercase tracking-tight">
            Disputes are reviewed by campus admins within 48 hours. Only raise disputes for genuine institution-wide policy violations.
          </p>
        </div>

        {/* Existing Disputes */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Active Disputes (0)</h4>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 text-center mb-8 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 italic group-hover:scale-110 transition-transform duration-500">🤝</div>
            <h5 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 mb-1 uppercase tracking-tight">No active disputes</h5>
            <p className="text-[11px] text-slate-400 font-medium">All your transactions are in good standing</p>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-slate-50/50 dark:bg-slate-800/50 rounded-full blur-2xl"></div>
        </div>

        {/* New Dispute Form */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Raise a new dispute</h4>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8 space-y-6">
          
          <div>
            <label className="text-[10px] font-syne font-bold text-[#1C3F6E] dark:text-blue-400 uppercase tracking-widest block mb-2 px-1">Select Transaction</label>
            <div className="relative">
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-dm-sans outline-none focus:ring-2 focus:ring-[#1C3F6E] appearance-none cursor-pointer italic font-bold text-[#1C3F6E] dark:text-blue-400">
                {TRANSACTION_OPTIONS.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C07828] rotate-90" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-syne font-bold text-[#1C3F6E] dark:text-blue-400 uppercase tracking-widest block mb-4 px-1">Issue Type</label>
            <div className="grid grid-cols-2 gap-3">
              {ISSUE_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedIssue(type.id)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    selectedIssue === type.id 
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 scale-105' 
                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <span className="text-xl">{type.icon}</span>
                  <span className={`text-[11px] font-bold font-syne uppercase tracking-tight ${selectedIssue === type.id ? 'text-rose-600' : 'text-slate-500 font-medium'}`}>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-syne font-bold text-[#1C3F6E] dark:text-blue-400 uppercase tracking-widest block mb-2 px-1">Describe the issue</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What happened? Include dates, amounts, and any evidence..."
              className="w-full h-32 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm font-dm-sans outline-none focus:ring-2 focus:ring-[#1C3F6E] italic dark:text-slate-300"
            />
          </div>

          <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center bg-slate-50/50 dark:bg-slate-800/30 group hover:border-[#1C3F6E] transition-colors cursor-pointer">
            <Camera className="w-8 h-8 text-[#1C3F6E] dark:text-blue-400 mx-auto mb-2 opacity-40 group-hover:opacity-100 transition-opacity" />
            <h5 className="font-syne font-bold text-xs text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tighter">Attach evidence</h5>
            <p className="text-[10px] text-slate-400 mt-1 font-medium italic">Photos, screenshots, recordings</p>
          </div>

          <button 
            onClick={() => setSubmitted(true)}
            className="w-full py-4 bg-rose-600 text-white rounded-2xl font-syne font-extrabold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <ShieldAlert className="w-5 h-5" />
            Submit Dispute
          </button>
        </div>
      </main>
    </div>
  );
};

export default DisputeCenter;
