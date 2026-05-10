import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  Star, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Lock,
  ChevronRight
} from 'lucide-react';
import { BottomNav } from '../components/Layout';

const badges = [
  { id: 1, name: 'Early Adopter', desc: 'Joined in the first month of UniVault launch.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50', earned: true },
  { id: 2, name: 'Trusted Seller', desc: 'Completed 10+ successful sales with 5-star ratings.', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50', earned: true },
  { id: 3, name: 'Eco Warrior', desc: 'Saved 50kg of CO2 by renting instead of buying new.', icon: Star, color: 'text-teal-600', bg: 'bg-teal-50', earned: true },
  { id: 4, name: 'Campus Hero', desc: 'Returned 5+ found items to their rightful owners.', icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50', earned: true },
  { id: 5, name: 'Power Renter', desc: 'Rent out items for a total of 100+ days.', icon: TrendingUp, color: 'text-rose-500', bg: 'bg-rose-50', earned: false },
  { id: 6, name: 'Uni Curator', desc: 'Review 20+ items in the marketplace.', icon: CheckCircle2, color: 'text-slate-400', bg: 'bg-slate-50', earned: false },
];

export default function Rewards() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#F3F1ED] font-dm-sans overflow-hidden">
      <div className="bg-[#1C3F6E] pt-12 pb-12 px-6 shadow-sm z-40 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="mt-2 flex items-center gap-4 mb-8">
          <ArrowLeft className="w-5 h-5 text-white cursor-pointer" onClick={() => navigate(-1)} />
          <h1 className="font-syne font-extrabold text-2xl text-white tracking-tight">Rewards & Trust</h1>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[32px] flex items-center justify-center mb-4 border border-white/20 shadow-2xl">
            <ShieldCheck size={48} className="text-teal-400" />
          </div>
          <h2 className="text-4xl font-syne font-extrabold text-white mb-1 tracking-tighter">890</h2>
          <p className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">Trust Level: Elite Curator</p>
          
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2 max-w-[200px]">
            <div className="h-full bg-teal-400 w-[87%] shadow-[0_0_12px_rgba(45,212,191,0.5)]"></div>
          </div>
          <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">110 pts to next level</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 -mt-8 pb-32 no-scrollbar overscroll-contain relative z-50">
        <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_24px_rgba(27,24,22,0.08)] mb-8">
          <h3 className="font-syne font-extrabold text-[#1B1916] text-base mb-6 tracking-tight flex items-center gap-2">
            <Award className="text-amber-500" size={18} />
            Achievement Badges
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((b) => (
              <div 
                key={b.id} 
                className={`p-4 rounded-3xl flex flex-col items-center text-center transition-all ${b.earned ? 'bg-white border border-slate-100 shadow-sm' : 'bg-slate-50 opacity-60 grayscale'}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${b.bg} flex items-center justify-center ${b.color} mb-3`}>
                  {b.earned ? <b.icon size={24} /> : <Lock size={20} className="text-slate-300" />}
                </div>
                <h4 className="font-bold text-[11px] text-[#1B1916] mb-1">{b.name}</h4>
                <p className="text-[9px] text-slate-400 leading-tight font-medium px-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1C3F6E] rounded-[32px] p-6 text-white mb-8 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-syne font-bold">Trust Perks</h3>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest">Unlocked</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-teal-400">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold">Zero Security Deposit</p>
                <p className="text-[9px] opacity-60">Rent high-value items without upfront costs.</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-teal-400">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold">Instant Payouts</p>
                <p className="text-[9px] opacity-60">Receive funds immediately after item collection.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
