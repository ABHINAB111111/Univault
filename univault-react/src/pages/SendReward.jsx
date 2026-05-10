import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Gift, Heart, ShieldCheck, ChevronRight, CreditCard, Wallet } from 'lucide-react';


export default function SendReward() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('100');
  const [method, setMethod] = useState('upi');

  const methods = [
    { id: 'upi', label: 'UPI / GPay', icon: Wallet },
    { id: 'card', label: 'Saved Card', icon: CreditCard },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F3F1ED] font-dm-sans overflow-hidden">
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm border-b border-slate-100 relative z-40">
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-all">
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-syne font-extrabold text-lg text-[#1B1916]">Send Reward</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 bg-amber-100 rounded-[28px] flex items-center justify-center text-amber-600 mb-6 shadow-xl shadow-amber-900/5 animate-pop">
            <Gift size={36} strokeWidth={1.5} />
          </div>
          <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] mb-2 tracking-tight">Show your gratitude!</h2>
          <p className="text-sm text-slate-400 font-medium px-4 leading-relaxed">
            Send a small thank-you gift to <span className="text-[#1C3F6E] font-bold">Leo K.</span> for finding your keys.
          </p>
        </div>

        <div className="mb-8 animate-up d1">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">Select Amount</label>
          <div className="grid grid-cols-3 gap-3">
            {['50', '100', '200'].map(amt => (
              <button 
                key={amt}
                onClick={() => setAmount(amt)}
                className={`py-4 rounded-2xl font-syne font-extrabold text-lg transition-all border-2 ${
                  amount === amt 
                  ? 'bg-[#1C3F6E] text-white border-[#1C3F6E] shadow-lg shadow-blue-900/20' 
                  : 'bg-white text-slate-400 border-transparent hover:border-slate-200'
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <button className="w-full mt-3 py-3 rounded-xl border border-dashed border-slate-300 text-slate-400 font-bold text-xs hover:bg-slate-50 transition-all">
            Custom Amount
          </button>
        </div>

        <div className="mb-8 animate-up d2">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Message (Optional)</label>
          <textarea 
            className="w-full bg-white rounded-2xl p-4 text-sm font-medium border border-slate-100 shadow-sm min-h-[100px] resize-none outline-none focus:ring-2 ring-[#1C3F6E]/5"
            placeholder="Write a sweet thank you note..."
            defaultValue="You're a lifesaver! Thanks for the help."
          />
        </div>

        <div className="mb-8 animate-up d3">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Payment Method</label>
          <div className="flex flex-col gap-3">
            {methods.map(m => (
              <button 
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  method === m.id 
                  ? 'bg-white border-[#1C3F6E]' 
                  : 'bg-white border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method === m.id ? 'bg-[#1C3F6E] text-white' : 'bg-slate-50 text-slate-400'}`}>
                  <m.icon size={20} />
                </div>
                <span className={`font-bold text-sm flex-1 text-left ${method === m.id ? 'text-[#1B1916]' : 'text-slate-400'}`}>{m.label}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${method === m.id ? 'border-[#1C3F6E] bg-[#1C3F6E]' : 'border-slate-100'}`}>
                   {method === m.id && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-4 flex items-center gap-3 mb-4 animate-up d4 border border-teal-100/50">
          <ShieldCheck className="text-teal-600" size={18} />
          <p className="text-[11px] text-teal-700 font-medium leading-tight">
            UniVault Secure Pay ensures your reward is delivered instantly. No extra fees.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 flex flex-col gap-3 z-50">
        <button 
          onClick={() => navigate('/reward-sent')}
          className="w-full py-4.5 rounded-2xl bg-[#1C3F6E] text-white font-syne font-extrabold text-sm shadow-xl shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          Pay ₹{amount} Reward <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
