import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  User, 
  QrCode, 
  Info,
  Calendar,
  Building,
  Fingerprint,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { BottomNav } from '../components/Layout';
import { useSettings } from '../contexts/SettingsContext';

export default function SecurityVerification() {
  const navigate = useNavigate();
  const { settings } = useSettings();

  const user = {
    name: 'Arjun Mehta',
    id: '21BCE1892',
    dept: 'Computer Science',
    year: '4th Year (Senior)',
    status: 'Verified',
    trustScore: 87,
    verifiedSince: 'Oct 2021',
    avatar: import.meta.env.BASE_URL + 'assets/avatar.png'
  };

  return (
    <div className={`flex flex-col h-screen font-dm-sans ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F3F1ED]'}`}>
      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold font-syne text-[#1C3F6E] dark:text-blue-400">Identity & Trust</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar pb-32">
        {/* Virtual ID Card */}
        <div className="relative mb-8 group perspective">
          <div className="bg-gradient-to-br from-[#1C3F6E] via-[#2A4B7A] to-[#0F172A] rounded-[32px] p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden transition-transform duration-700 hover:rotate-y-12">
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-50 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={24} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] font-syne">Campus Verified</span>
              </div>
              <QrCode size={40} className="text-white/20" />
            </div>

            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg bg-slate-800">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-syne font-extrabold tracking-tight leading-tight mb-1">{user.name}</h2>
                <p className="text-xs text-blue-100/60 font-medium tracking-wide">{user.dept}</p>
                <p className="text-[10px] text-blue-100/40 font-bold uppercase tracking-widest mt-1">ID: {user.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                <span className="text-[8px] font-black text-blue-100/40 uppercase tracking-widest block mb-1">Status</span>
                <span className="text-xs font-bold text-blue-100 flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-400" /> {user.year}
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                <span className="text-[8px] font-black text-blue-100/40 uppercase tracking-widest block mb-1">Campus Rank</span>
                <span className="text-xs font-bold text-blue-100">Top 5% Shared</span>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Verification Checklist */}
        <section className="mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">Verification Status</h3>
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            {[
              { label: 'Campus Email Verified', val: 'arjun.mehta@dibru.ac.in', icon: CheckCircle2, active: true },
              { label: 'Physical ID Scanned', val: 'Verified by Admin', icon: CheckCircle2, active: true },
              { label: 'Mobile Number', val: '+91 98XXX X4291', icon: CheckCircle2, active: true },
              { label: 'Academic Standing', val: 'Good (No Records)', icon: CheckCircle2, active: true },
            ].map((item, i) => (
              <div key={item.label} className={`p-4 flex items-center justify-between ${i < 3 ? 'border-b border-slate-50 dark:border-slate-800' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.active ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-300'}`}>
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B1916] dark:text-white">{item.label}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{item.val}</p>
                  </div>
                </div>
                <Info size={14} className="text-slate-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">Trust Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-[28px] border border-blue-100 dark:border-blue-900/50">
              <Building className="text-blue-600 mb-3" size={20} />
              <div className="text-xl font-syne font-extrabold text-[#1C3F6E] dark:text-blue-400 mb-1">{user.trustScore}</div>
              <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Total Trust Score</div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-[28px] border border-emerald-100 dark:border-emerald-900/50">
              <Calendar className="text-emerald-600 mb-3" size={20} />
              <div className="text-xl font-syne font-extrabold text-emerald-700 mb-1">3.5y</div>
              <div className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Member Since</div>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl flex items-center justify-between border border-slate-100 dark:border-slate-800 shadow-sm active:scale-95 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#1C3F6E] transition-colors">
              <Fingerprint size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1B1916] dark:text-white">Re-verify Account</h4>
              <p className="text-[10px] text-slate-400">Update your documents</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
