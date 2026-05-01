import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit3, BarChart3, Users, MessageSquare, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const WEEKLY_VIEWS = [
  { day: 'Mon', views: 42 },
  { day: 'Tue', views: 58 },
  { day: 'Wed', views: 35 },
  { day: 'Thu', views: 64 },
  { day: 'Fri', views: 72 },
  { day: 'Sat', views: 48 },
  { day: 'Sun', views: 55 },
];

const ItemStats = () => {
  const navigate = useNavigate();
  const maxViews = Math.max(...WEEKLY_VIEWS.map(d => d.views));

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased h-full flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Listing Analytics</h1>
          </div>
          <button onClick={() => navigate('/edit-listing')} className="p-2 text-[#1C3F6E] dark:text-blue-400 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-20 px-6 overflow-y-auto">
        {/* Item Hero Card */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-3xl shadow-inner italic">📚</div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">DS Algorithms Textbook</h3>
            <p className="text-lg font-syne font-extrabold text-[#C07828] mt-0.5">₹220</p>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Active · Posted 7 days ago</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center animate-[popIn_0.3s_0.1s_ease-out_forwards]">
            <div className="font-syne font-extrabold text-2xl text-[#1C3F6E] dark:text-blue-400">47</div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">Views</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center animate-[popIn_0.3s_0.2s_ease-out_forwards]">
            <div className="font-syne font-extrabold text-2xl text-amber-600">4</div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">Interests</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center animate-[popIn_0.3s_0.3s_ease-out_forwards]">
            <div className="font-syne font-extrabold text-2xl text-teal-600">2</div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">Chats</div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em]">Views This Week</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal-600 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded uppercase font-syne tracking-tighter">
              <TrendingUp className="w-3 h-3" />
              +12% vs last week
            </div>
          </div>
          <div className="flex items-end justify-between h-32 px-1">
            {WEEKLY_VIEWS.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group flex-1">
                <div 
                  className="w-2.5 bg-gradient-to-t from-[#1C3F6E] to-blue-400 rounded-full transition-all duration-1000 group-hover:from-teal-500 group-hover:to-emerald-400"
                  style={{ height: `${(d.views / maxViews) * 100}%` }}
                ></div>
                <span className="text-[9px] font-bold text-slate-400 uppercase">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Tips */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Boost Your Listing</h4>
        <div className="space-y-3 mb-8">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-98 cursor-pointer">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600 italic text-xl shadow-inner group-hover:rotate-12 transition-transform">
              ✨
            </div>
            <div className="flex-1">
              <h5 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Add more photos</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Items with 3+ photos get 2× more views</p>
            </div>
            <Edit3 className="w-4 h-4 text-slate-300" />
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-98 cursor-pointer">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 italic text-xl shadow-inner">
              📝
            </div>
            <div className="flex-1">
              <h5 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Detailed description</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Add specs and condition to close deals faster</p>
            </div>
            <Edit3 className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        {/* Interested Buyers */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Interested Buyers</h4>
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 p-1">
          {[
            { name: 'Riya Mehta', sub: 'Offered ₹180 · 2h ago', status: 'Offer', color: 'bg-teal-600', init: 'RM' },
            { name: 'Karan Mehta', sub: 'Viewed · 1 day ago', status: 'Viewed', color: 'bg-blue-700', init: 'KM' },
          ].map((buyer, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-4 ${idx === 0 ? 'border-b border-slate-50 dark:border-slate-800' : ''} hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer`}>
              <div className={`w-10 h-10 rounded-full ${buyer.color} flex items-center justify-center text-white font-syne font-extrabold italic text-sm border-2 border-white dark:border-slate-900 shadow-md`}>
                {buyer.init}
              </div>
              <div className="flex-1">
                <h5 className="font-syne font-bold text-[13px] text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">{buyer.name}</h5>
                <p className="text-[11px] text-slate-400 font-medium">{buyer.sub}</p>
              </div>
              <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${buyer.status === 'Offer' ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'}`}>
                {buyer.status}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#F3F1ED] dark:from-slate-950 via-[#F3F1ED] dark:via-slate-950 to-transparent flex gap-3">
        <button onClick={() => navigate('/edit-listing')} className="flex-1 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-[#1C3F6E] dark:text-blue-400 font-syne font-extrabold text-[11px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2">
          <Edit3 className="w-4 h-4" />
          Edit Listing
        </button>
        <button className="flex-1 py-4 bg-[#1C3F6E] text-white rounded-2xl font-syne font-extrabold text-[11px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <CheckCircle2 className="w-4 h-4" />
          Mark as Sold
        </button>
      </div>
    </div>
  );
};

export default ItemStats;
