import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Key, 
  ShoppingBag, 
  Package, 
  IndianRupee, 
  RefreshCcw, 
  AlertCircle, 
  Plus, 
  MapPin,
  ChevronRight,
  Sparkles,
  Bell,
  Gift,
  Megaphone
} from 'lucide-react';
import { StatusBar, BottomNav } from '../components/Layout';
import { useSettings } from '../contexts/SettingsContext';

const stats = [
  { label: 'Listed', value: 142 },
  { label: 'Rented', value: 38 },
  { label: 'Lost', value: 7 },
  { label: 'Sales', value: 218 },
];

const quickActions = [
  { icon: Search, label: 'LOST &\nFOUND', to: '/lost-found', hasDot: true },
  { icon: RefreshCcw, label: 'RENT\nITEMS', to: '/rent' },
  { icon: ShoppingBag, label: 'MARKETPLACE', to: '/marketplace', tight: true },
  { icon: Plus, label: 'ADD\nITEM', to: '/marketplace?list=1' },
];

const marketItems = [
  { name: 'Architecture II', cat: 'Textbooks', price: '₹450', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80' },
  { name: 'Graphing Calc', cat: 'Tech', price: '₹820', img: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=300&q=80' },
  { name: 'Mountain Bike', cat: 'Transport', price: '₹3,100', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&q=80' },
];

const marketplacePicks = [
  { name: 'MacBook Charger', price: '₹350', sub: 'Like New', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80' },
  { name: 'Drawing Kit', price: '₹150', sub: 'New', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80' },
  { name: 'Casio FX-991', price: '₹380', sub: 'Good', img: 'https://images.unsplash.com/photo-1574607407062-8e7c1f855e90?auto=format&fit=crop&w=400&q=80' },
];

const recentActivity = [
  { icon: Gift, bg: 'bg-[#EAF4EE]', color: 'text-[#4A7A5A]', text: 'Goodwill Sent: Thank you for the', bold: 'Lost Keys', time: 'Just now', to: '/rewards' },
  { icon: IndianRupee, bg: 'bg-[#FBF2E4]', color: 'text-[#C07828]', text: 'Sold: Physics Notes for', bold: '₹120', time: '2h ago', to: '/marketplace' },
  { icon: RefreshCcw, bg: 'bg-[#E4F4F1]', color: 'text-[#1A7A6A]', text: 'Rental Returned: Canon DSLR by', bold: 'Leo K.', time: '5h ago', to: '/chat' },
  { icon: AlertCircle, bg: 'bg-[#FAEAEA]', color: 'text-[#B83A3A]', text: '"Blue Keys" matched your lost listing.', bold: '', time: 'Yesterday', to: '/lost-found' },
];

function AnimatedStat({ label, value, delay }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(value / 20);
      const id = setInterval(() => {
        start = Math.min(start + step, value);
        setCurrent(start);
        if (start >= value) clearInterval(id);
      }, 40);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <div className={`relative px-2 py-3 text-center flex-1 animate-fade d${Math.floor(delay/70)+1} transition-all hover:scale-105 group`}>
      <div className="absolute inset-0 rounded-2xl glass-liquid opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 font-bold text-xl text-white leading-tight drop-shadow-md">{current}</div>
      <div className="relative z-10 text-white/50 text-[8px] font-bold uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}

export default function Home() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
    else navigate('/search');
  };

  const { settings, getTheme } = useSettings();
  const theme = getTheme();

  return (
    <div className={`flex flex-col h-full font-dm-sans overflow-hidden ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F4F3EF]'}`} style={{ fontFamily: 'var(--font-body)' }}>
      {/* ── Liquid Glass Header ──────────────────────────────────── */}
      <div className="relative overflow-hidden flex-shrink-0 pt-2 pb-6 px-6" style={{
        background: `linear-gradient(165deg, ${theme.headerFrom} 0%, ${theme.primaryDark} 40%, ${theme.primary} 70%, ${theme.primaryDark} 100%)`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
      }}>
        {/* Liquid glass ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-40" style={{
            background: 'radial-gradient(circle, rgba(120,180,255,0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'liquidFloat 8s ease-in-out infinite',
          }} />
          <div className="absolute top-20 -left-16 w-48 h-48 rounded-full opacity-30" style={{
            background: 'radial-gradient(circle, rgba(120,255,200,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'liquidFloat 10s ease-in-out infinite reverse',
          }} />
          {/* Edge gloss */}
          <div className="absolute top-0 left-0 right-0 glass-rim-light opacity-40" />
        </div>

        <StatusBar white />
        
        <div className="relative z-10 mt-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                {greeting}
              </p>
              <h1 className="font-bold text-2xl text-white leading-tight tracking-tight drop-shadow-lg">
                Arjun Mehta
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <button 
                onClick={() => navigate('/profile')}
                className="relative w-11 h-11 rounded-2xl glass-liquid text-white hover:bg-white/20 transition-all active:scale-95 overflow-hidden"
              >
                <img 
                  src="/assets/avatar.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover border border-white/20"
                />
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </button>
            </div>
          </div>

          {/* Liquid Glass Search Bar - Premium Refraction */}
          <div 
            className="relative mb-8 group cursor-pointer" 
            onClick={() => navigate('/search')}
          >
            <div className="absolute inset-0 rounded-2xl glass-liquid glass-inner-shadow" />
            {/* Top Gloss Arc */}
            <div className="absolute -top-[1px] left-8 right-8 glass-rim-light opacity-50 blur-[1px] rounded-full" />
            
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-white/70 transition-colors z-10" size={18} />
            <div className="relative w-full py-4 pl-14 pr-4 text-sm text-white/50 font-medium z-10">
              Search campus assets...
            </div>
          </div>

          {/* Glass Stats Grid */}
          <div className="grid grid-cols-4 gap-2 mt-4 relative">
             <AnimatedStat label="Listed" value={142} delay={0} />
             <AnimatedStat label="Lost" value={7} delay={80} />
             <AnimatedStat label="Rented" value={38} delay={160} />
             <AnimatedStat label="Sales" value={218} delay={240} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32 no-scrollbar overscroll-contain">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="section-label mb-0 text-ink">QUICK ACTIONS</h2>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-8">
          {quickActions.map((q, i) => (
            <Link key={q.label} to={q.to}
              className={`bg-white rounded-2xl p-2.5 pt-3.5 pb-2.5 flex flex-col items-center justify-between shadow-[0_4px_16px_rgba(27,25,22,0.06)] border border-[#EEEEEC]/50 transition-all hover:-translate-y-1 hover:shadow-lg animate-scale d${i+1} relative h-20`}
            >
              {q.hasDot && <div className="absolute top-[2px] right-[2px] w-[6px] h-[6px] bg-rose-500 rounded-full"></div>}
              <div className="text-[#111111] shrink-0">
                <q.icon strokeWidth={1} size={22} />
              </div>
              <span className={`font-syne font-bold text-[7px] text-[#1C335A] uppercase text-center leading-[1.3] whitespace-pre-line ${q.tight ? 'tracking-[0.1em]' : 'tracking-widest'}`}>
                {q.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="section-label mb-0 text-ink">SAFETY FIRST</h2>
          </div>
          <div 
            onClick={() => navigate('/map')}
            className="bg-[#EAF4EE] rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-teal-500/10 group cursor-pointer hover:bg-[#E2F0E7] transition-all"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0 shadow-sm">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-bold text-[#1C335A] leading-snug">Safe Meetup Zones</p>
              <p className="text-[11px] text-teal-600/70 font-medium mt-0.5">Verified spots for secure campus exchanges</p>
            </div>
            <ChevronRight size={18} className="text-teal-600/30 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="section-label mb-0 text-ink">CAMPUS ALERTS</h2>
            <Link to="/notifications" className="text-xs font-bold hover:underline flex items-center" style={{ color: 'var(--color-primary)' }}>View all <ChevronRight size={14}/></Link>
          </div>
          <div 
            onClick={() => navigate('/notifications')}
            className="bg-[#EEF4FF] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-[#1C335A]/20 group cursor-pointer hover:bg-[#E5EDF8] transition-all"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1C335A] flex-shrink-0 shadow-sm border border-[#1C335A]/10">
              <Megaphone size={18} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-bold text-[#1C335A] leading-snug">Room Keys found near Hostel C Gate</p>
              <p className="text-[11px] text-[#1C335A]/60 font-medium mt-1">Tap to claim • 12m ago</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 mt-8">
          <h2 className="section-label mb-0 text-ink">AVAILABLE TO RENT</h2>
          <Link to="/rent" className="text-xs font-bold hover:underline flex items-center" style={{ color: 'var(--color-primary)' }}>See all <ChevronRight size={14}/></Link>
        </div>
        <div className="flex gap-3 overflow-x-auto -mx-5 px-5 pb-3 mb-8 no-scrollbar">
          {marketItems.map((item) => (
            <Link to="/rent" key={item.name}
              className="bg-white rounded-2xl overflow-hidden min-w-[156px] shadow-[0_2px_12px_rgba(27,25,22,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="h-28 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-3.5">
                <div className="font-bold text-sm text-[#1B1916] mb-1 leading-tight">{item.name}</div>
                <div className="flex justify-between items-center">
                  <span className="font-syne font-extrabold text-base text-[#C07828]">{item.price}</span>
                  <span className="text-[9px] font-bold bg-[#E5EDF8] text-[#1C3F6E] px-2 py-0.5 rounded-md uppercase tracking-wider">{item.cat}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4 mt-8">
          <h2 className="section-label mb-0 text-ink">MARKETPLACE PICKS</h2>
          <Link to="/marketplace" className="text-xs font-bold hover:underline flex items-center" style={{ color: 'var(--color-primary)' }}>See all <ChevronRight size={14}/></Link>
        </div>
        <div className="flex gap-3 overflow-x-auto -mx-5 px-5 pb-3 mb-8 no-scrollbar">
          {marketplacePicks.map((item) => (
            <Link to="/marketplace" key={item.name}
              className="bg-white rounded-2xl overflow-hidden min-w-[156px] shadow-[0_2px_12px_rgba(27,25,22,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="h-28 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-3.5">
                <div className="font-bold text-sm text-[#1B1916] mb-1 leading-tight">{item.name}</div>
                <div className="flex justify-between items-center">
                  <span className="font-syne font-extrabold text-base text-[#1B1916]">{item.price}</span>
                  <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md uppercase tracking-wider">{item.sub}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4 mt-8">
          <h2 className="section-label mb-0 text-ink">RECENT ACTIVITY</h2>
          <span 
            onClick={() => navigate('/notifications')}
            className="text-xs font-bold text-[#1C335A] hover:underline flex items-center cursor-pointer delay-action"
          >
            All activity <ChevronRight size={14}/>
          </span>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(27,25,22,0.04)] overflow-hidden">
          {recentActivity.map((a, i) => (
            <div key={i} onClick={() => navigate(a.to)}
              className="flex items-start gap-4 p-4 border-b border-[#ECEAE5]/30 hover:bg-slate-50 transition-colors cursor-pointer last:border-0 group"
            >
              <div className={`w-9 h-9 ${a.bg} ${a.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                <a.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] leading-snug text-[#1B1916] font-medium">
                  {a.text} {a.bold && <strong className="text-[#1C3F6E] font-bold">{a.bold}</strong>}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-medium italic">{a.time}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 mt-1" />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
