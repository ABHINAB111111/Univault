import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Mail, Bug, ChevronDown, ChevronUp, Info, Headphones } from 'lucide-react';

const FAQS = [
  { q: 'How do I rent an item from another student?', a: 'Browse the Rent section, tap an item, choose your duration and tap "Request Rent". The owner will receive a notification and either approve or decline. Once approved, arrange pickup directly via in-app chat.' },
  { q: 'How does Lost & Found work?', a: 'Use the Lost & Found tab to report a lost item or post something you found. Campus alerts are sent to all verified students. Claimants must describe the item to verify ownership before pickup is arranged.' },
  { q: 'Is payment processed inside the app?', a: 'No. UniVault is a peer-to-peer platform. All payments happen directly between students (cash, UPI, etc.) after agreeing on terms via chat. UniVault does not handle, hold or process any money.' },
  { q: 'Who can see my listings?', a: 'Only verified students at your university can see your listings. UniVault is campus-restricted — no one outside your institution can access the marketplace or your profile.' },
  { q: 'How do I improve my Trust Score?', a: 'Complete transactions on time, return items in good condition, respond promptly to messages, and collect positive reviews. Each successful transaction adds to your score. Disputes or overdue returns reduce it.' },
];

const HelpSupport = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Help & Support</h1>
          </div>
          <Headphones className="w-5 h-5 text-teal-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-12 px-6 overflow-y-auto">
        {/* Support Hero */}
        <div className="bg-gradient-to-br from-teal-600 to-[#1A7A6A] rounded-3xl p-6 text-center mb-6 relative overflow-hidden shadow-xl border border-teal-500/20">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="text-4xl mb-3 animate-bounce">🆘</div>
          <h2 className="text-lg font-syne font-bold text-white mb-1 uppercase tracking-wider">We're here to help</h2>
          <p className="text-xs text-teal-50/70 font-medium">Average response time: under 2 hours</p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center group active:scale-95 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-full flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Live Chat</h3>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">Online Now</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center group active:scale-95 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Email Support</h3>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">support@univault.app</p>
          </div>
        </div>

        {/* Bug Report */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-800 mb-8 active:scale-98 transition-all cursor-pointer">
          <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-500 shadow-inner">
            <Bug className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Report a Bug</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Found something broken? Let us know.</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-300" />
        </div>

        {/* FAQ Section */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Frequently Asked Questions</h4>
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-all cursor-pointer"
            >
              <div className="p-4 flex items-center justify-between gap-4">
                <h5 className="font-dm-sans font-bold text-sm text-[#1B1916] dark:text-slate-300 flex-1">{faq.q}</h5>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-teal-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </div>
              <div className={`overflow-hidden transition-all duration-300 bg-slate-50/50 dark:bg-slate-800/30 ${openFaq === idx ? 'max-h-40 pb-4 px-4' : 'max-h-0'}`}>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Tip */}
        <div className="mt-8 bg-[#1C3F6E] p-5 rounded-3xl text-white shadow-xl flex items-start gap-4">
          <Info className="w-6 h-6 text-orange-400 flex-shrink-0" />
          <div>
            <h4 className="font-syne font-bold text-xs uppercase tracking-widest mb-1 italic">Pro Tip</h4>
            <p className="text-[11px] text-blue-100/70 leading-relaxed">Most campus rental disputes can be resolved by checking the Item Condition report submitted at the start of the transaction.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpSupport;
