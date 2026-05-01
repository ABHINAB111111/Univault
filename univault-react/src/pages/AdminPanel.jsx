import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart2, ShieldAlert, Users, MessageSquare, Send, CheckCircle, AlertTriangle, Trash2, Gavel } from 'lucide-react';

const FLAG_ITEMS = [
  { id: 1, name: 'iPhone 14 Charger', status: 'Overdue', sub: 'Rental overdue by 4 days. Owner requested return twice.', type: 'rose', icon: '🔌' },
  { id: 2, name: 'Lab Oscilloscope', status: 'Dispute', sub: 'Returned damaged. Renter claims it was pre-existing.', type: 'amber', icon: '📟' },
  { id: 3, name: '3D Printer Filament', status: 'Suspicious', sub: 'Price changed 3× in 24h. Possible manipulation.', type: 'violet', icon: '🏺' },
];

const ADMIN_STATS = [
  { label: 'Total Listed', val: '142', color: 'text-[#1C3F6E]', bg: 'bg-blue-50' },
  { label: 'Active Rentals', val: '38', color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Lost Items', val: '7', color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'Active Users', val: '94', color: 'text-teal-600', bg: 'bg-teal-50' },
];

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Admin Panel</h1>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/40 text-rose-600 px-3 py-1 rounded-full text-[10px] font-syne font-extrabold uppercase tracking-widest italic border border-rose-100">
            Staff
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-32 px-6 overflow-y-auto no-scrollbar overscroll-contain">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {ADMIN_STATS.map((stat, i) => (
            <div key={i} className={`bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 animate-[popIn_0.3s_${i*0.1}s_ease-out_forwards]`}>
              <div className={`font-syne font-extrabold text-3xl mb-1 ${stat.color}`}>{stat.val}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Flagged Items */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 italic">Flagged Items ({FLAG_ITEMS.length})</h4>
        <div className="space-y-4 mb-10">
          {FLAG_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-md border-l-4 ${item.type === 'rose' ? 'border-rose-500' : item.type === 'amber' ? 'border-amber-500' : 'border-indigo-500'} border-slate-100 dark:border-slate-800`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl italic">{item.icon}</span>
                  <h5 className="font-syne font-bold text-[13px] text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">{item.name}</h5>
                </div>
                <div className={`text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-widest ${item.type === 'rose' ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-400'}`}>
                  {item.status}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-4 leading-relaxed">{item.sub}</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95 transition-all">
                  <CheckCircle className="w-3.5 h-3.5" /> Resolve
                </button>
                <button className={`flex-1 py-2.5 ${item.type === 'rose' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'} rounded-xl font-syne font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95 transition-all`}>
                  {item.type === 'rose' ? <Trash2 className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />} 
                  {item.type === 'rose' ? 'Remove' : 'Escalate'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 italic">Platform Pulse</h4>
        <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800 p-2 mb-10">
          {[
            { label: 'Soldering Kit returned', sub: 'Riya S. → Ankit R.', time: 'Now', dot: '✅', bg: 'bg-emerald-50' },
            { label: 'New listing: Microscope', sub: 'Priya M. · 18 min ago', time: '18m', dot: '📦', bg: 'bg-blue-50' },
            { label: 'Room Keys claimed', sub: 'Karan D. · 1h ago', time: '1h', dot: '🔑', bg: 'bg-violet-50' },
          ].map((act, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 ${i < 2 ? 'border-b border-slate-50 dark:border-slate-800' : ''} hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer`}>
              <div className={`w-10 h-10 ${act.bg} rounded-xl flex items-center justify-center text-xl italic shadow-inner`}>
                {act.dot}
              </div>
              <div className="flex-1">
                <h5 className="font-syne font-extrabold text-[12px] text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">{act.label}</h5>
                <p className="text-[10px] text-slate-400 font-medium">{act.sub}</p>
              </div>
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">{act.time}</span>
            </div>
          ))}
        </div>

        {/* Broadcast Message */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 italic text-[#C07828]">Emergency Broadcast</h4>
        <div className="bg-[#1C3F6E] p-6 rounded-[32px] shadow-2xl relative overflow-hidden group">
          <textarea 
            className="w-full h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-sm text-white placeholder-blue-100/40 font-dm-sans outline-none focus:ring-2 focus:ring-amber-500 italic mb-4"
            placeholder="Announce to all 94 campus users..."
          />
          <button className="w-full py-4 bg-amber-600 text-white rounded-2xl font-syne font-extrabold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all group-hover:bg-amber-500">
            <Send className="w-5 h-5" />
            Send Broadcast
          </button>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
