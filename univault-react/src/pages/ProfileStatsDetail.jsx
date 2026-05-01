import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  TrendingUp,
  Star,
  Users,
  Award
} from 'lucide-react';
import { BottomNav } from '../components/Layout';

const metrics = [
  { 
    label: 'Verification Level', 
    value: 'Level 4', 
    desc: 'Government & Campus ID Verified', 
    icon: ShieldCheck, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50',
    progress: 100 
  },
  { 
    label: 'Response Time', 
    value: '5 mins', 
    desc: 'Faster than 98% of campus', 
    icon: Clock, 
    color: 'text-amber-600', 
    bg: 'bg-amber-100',
    progress: 95 
  },
  { 
    label: 'Success Rate', 
    value: '100%', 
    desc: '34 successful transactions', 
    icon: CheckCircle2, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50',
    progress: 100 
  },
  { 
    label: 'Community Help', 
    value: '14 Items', 
    desc: 'Lost items returned this month', 
    icon: Award, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50',
    progress: 85 
  },
];

const reputationLog = [
  { title: 'Verified ID Badge', date: '2 days ago', points: '+50', type: 'positive' },
  { title: 'Successful Rental', date: 'Yesterday', points: '+15', type: 'positive' },
  { title: 'Fast Response Bonus', date: '3 hours ago', points: '+10', type: 'positive' },
  { title: 'Item Report Accuracy', date: 'Last week', points: '+25', type: 'positive' },
];

export default function ProfileStatsDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative font-dm-sans">
      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar overscroll-contain">
        {/* Header */}
        <header className="sticky top-0 left-0 w-full z-50 flex items-center px-6 h-16 bg-white/80 backdrop-blur-md">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1C3F6E]" />
          </button>
          <h1 className="ml-4 text-lg font-bold font-syne text-[#1C3F6E]">Trust Analytics</h1>
        </header>

        {/* Global Score Card */}
        <div className="px-6 py-4">
          <div className="bg-[#1C3F6E] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/20">
            <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">Current reputation</span>
              <div className="text-6xl font-syne font-bold mb-4">890</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
                <TrendingUp size={16} className="text-emerald-400" />
                <span className="text-xs font-bold text-white">+12% from last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Breakdown */}
        <div className="px-6 py-6">
          <h2 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-2">Core Metrics</h2>
          <div className="grid grid-cols-1 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center ${m.color}`}>
                      <m.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B1916] text-[15px]">{m.label}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{m.desc}</p>
                    </div>
                  </div>
                  <div className={`text-[15px] font-syne font-bold ${m.color}`}>{m.value}</div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${m.color.replace('text-', 'bg-')} transition-all duration-1000`} 
                    style={{ width: `${m.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reputation Log */}
        <div className="px-6 py-6">
          <h2 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-2">Reputation Log</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            {reputationLog.map((log, i) => (
              <div 
                key={log.title + i}
                className={`flex justify-between items-center p-5 ${i < reputationLog.length - 1 ? 'border-b border-slate-50' : ''}`}
              >
                <div>
                  <h4 className="font-bold text-[#1B1916] text-[14px]">{log.title}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">{log.date}</p>
                </div>
                <div className="text-emerald-600 font-syne font-bold">{log.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
