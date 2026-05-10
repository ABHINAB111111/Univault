import React, { useState, useMemo } from 'react';
import { 
  Key, 
  Plus, 
  Search, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  Camera,
  Smartphone,
  Trophy,
  Music,
  Truck,
  Box,
  Clock,
  ShieldCheck,
  CalendarDays,
  Filter,
  ArrowUpDown,
  X
} from 'lucide-react';
import { BottomNav } from '../components/Layout';
import { FormSheet } from '../components/Sheets';
import { useSettings } from '../contexts/SettingsContext';

const categories = [
  { name: 'All', icon: Box },
  { name: 'Cameras', icon: Camera },
  { name: 'Electronics', icon: Smartphone },
  { name: 'Sports', icon: Trophy },
  { name: 'Music', icon: Music },
  { name: 'Transport', icon: Truck },
];

const rentItems = [
  { id:1, name:'Sony Alpha A7 III Kit', category:'Cameras', price:250, priceType:'day', badge:'available', img: import.meta.env.BASE_URL + 'assets/camera.png', owner:'Rohit S.', rating:4.9, reviews:28, desc:'Full-frame mirrorless kit with 28-70mm lens. Comes with 2 batteries and a camera bag. Perfect for shoots and events.', date: '2024-03-25' },
  { id:2, name:'Epson Projector X3', category:'Electronics', price:80, priceType:'hr', badge:'available', img: import.meta.env.BASE_URL + 'assets/projector.png', owner:'Ananya M.', rating:4.7, reviews:15, desc:'3100 lumen brightness, HDMI + USB. Great for presentations or movie nights in the hostel.', date: '2024-03-26' },
  { id:3, name:'Trek Mountain Bike', category:'Sports', price:120, priceType:'day', badge:'rented', img:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80', owner:'Vikram P.', rating:4.8, reviews:42, desc:'21-speed mountain bike, recently serviced. Minor wear on handlebar grips. Returns on 5th April.', date: '2024-03-20' },
  { id:4, name:'DJI Mini 3 Drone', category:'Electronics', price:400, priceType:'day', badge:'available', img: import.meta.env.BASE_URL + 'assets/drone.png', owner:'Leena K.', rating:5.0, reviews:19, desc:'Lightweight 249g drone with 4K video. Requires campus permission to fly. Comes with 2 extra batteries.', date: '2024-03-28' },
  { id:5, name:'Yamaha Acoustic Guitar', category:'Music', price:60, priceType:'day', badge:'available', img:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80', owner:'Arjun D.', rating:4.6, reviews:11, desc:'Yamaha F280 with a strap and carry bag. Cleaned and freshly strung. Great for beginners.', date: '2024-03-22' },
  { id:6, name:'Canon EOS R50 Body', category:'Cameras', price:300, priceType:'day', badge:'rented', img: import.meta.env.BASE_URL + 'assets/camera.png', owner:'Priya S.', rating:4.9, reviews:33, desc:'Compact mirrorless body with 24.2MP sensor. Returns on 4th April. No lens included.', date: '2024-03-27' },
];

// badgeColors unused, removed to satisfy lint

function FilterSheet({ activeCat, setActiveCat, priceRange, setPriceRange, sortBy, setSortBy, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[400] flex items-end animate-fade" onClick={onClose}>
      <div 
        className="bg-white w-full rounded-t-[40px] animate-slideUp max-h-[90%] overflow-y-auto no-scrollbar shadow-2xl p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-syne font-extrabold text-2xl text-[#1B1916]">Filters & Sort</h2>
          <button onClick={onClose} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
            <X size={20} />
          </button>
        </div>

        <section className="mb-10">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Sort By</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'newest', label: 'Newest First' },
              { id: 'price-low', label: 'Price: Low to High' },
              { id: 'price-high', label: 'Price: High to Low' },
              { id: 'rating', label: 'Top Rated' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setSortBy(opt.id)}
                className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all border ${
                  sortBy === opt.id 
                  ? 'bg-[#1C3F6E] text-white border-[#1C3F6E] shadow-lg shadow-blue-900/10' 
                  : 'bg-slate-50 text-slate-500 border-transparent hover:border-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Max Price (₹/day)</label>
          <div className="px-2">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              step="50"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1C3F6E]"
            />
            <div className="flex justify-between mt-3 text-[11px] font-bold text-slate-400">
              <span>₹0</span>
              <span className="text-[#1C3F6E] bg-blue-50 px-2 py-0.5 rounded-lg">Up to ₹{priceRange}</span>
              <span>₹1000+</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c.name}
                onClick={() => setActiveCat(c.name)}
                className={`py-2 px-5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                  activeCat === c.name 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-50 text-slate-400 border border-transparent hover:border-slate-200'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </section>

        <button 
          onClick={onClose}
          className="w-full py-5 rounded-2xl bg-[#1B1916] text-white font-syne font-bold text-sm shadow-xl active:scale-95 transition-all"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

const DetailSheet = React.memo(({ item, onClose }) => {
  const [step, setStep] = useState('view');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [dateOptions] = useState(() => [
    { label: 'Today', from: new Date().toISOString().split('T')[0], to: new Date().toISOString().split('T')[0] },
    { label: '3 Days', from: new Date().toISOString().split('T')[0], to: new Date(Date.now() + 3*86400000).toISOString().split('T')[0] },
    { label: '1 Week', from: new Date().toISOString().split('T')[0], to: new Date(Date.now() + 7*86400000).toISOString().split('T')[0] },
  ]);

  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[300] flex items-center justify-center p-6 animate-fade">
        <div className="bg-white w-full max-w-sm rounded-[32px] p-8 text-center shadow-2xl animate-pop">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarDays className="text-[#1C3F6E]" size={40} />
          </div>
          <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] mb-3 leading-tight tracking-tight">Reservation Sent!</h2>
          <p className="font-dm-sans text-sm text-slate-500 leading-relaxed mb-6 px-2">
            Your request for <span className="font-bold text-[#1B1916]">{item.name}</span> was sent to <span className="font-bold text-[#1C3F6E]">{item.owner}</span>.
          </p>
          {fromDate && toDate && (
            <div className="bg-slate-50 rounded-xl px-4 py-3 mb-8 flex items-center justify-center gap-3 text-xs font-bold text-[#1C3F6E]">
              <Calendar size={14} /> {fromDate} — {toDate}
            </div>
          )}
          <button 
            onClick={onClose} 
            className="w-full py-4 rounded-2xl bg-[#1B1916] text-white font-syne font-bold text-sm shadow-xl active:scale-95 transition-all"
          >
            Go to My Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[300] flex items-end animate-fade" onClick={onClose}>
      <div 
        className="bg-white w-full rounded-t-[32px] animate-slideUp max-h-[95%] overflow-y-auto no-scrollbar shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto my-4" />

        {step === 'confirm' ? (
          <div className="px-6 pt-12 pb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C3F6E]">
                <CalendarDays size={24} />
              </div>
              <h2 className="font-syne font-extrabold text-xl text-[#1B1916] tracking-tight">Booking Details</h2>
            </div>
            
            <div className="flex gap-2 mb-5">
              {dateOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => { setFromDate(opt.from); setToDate(opt.to); }}
                  className={`flex-1 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 border ${
                    fromDate === opt.from && toDate === opt.to
                    ? 'bg-[#1C3F6E] text-white border-[#1C3F6E]'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#1C3F6E]/30'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">From</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1B1916] outline-none focus:ring-2 focus:ring-blue-100 transition-all" 
                  value={fromDate} 
                  onChange={e => setFromDate(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">To</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1B1916] outline-none focus:ring-2 focus:ring-blue-100 transition-all" 
                  value={toDate} 
                  onChange={e => setToDate(e.target.value)} 
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 mb-10 border border-slate-100/50">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200/50">
                <span className="text-sm font-bold text-[#1B1916]">Rate</span>
                <span className="text-sm font-extrabold text-[#C07828]">₹{item.price}/{item.priceType}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[#1A7A6A] opacity-50 flex-shrink-0" />
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic">
                  Security deposit of <span className="font-bold text-slate-600">₹500</span> is required on handover.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setStep('view')} 
                className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-500 active:scale-95 transition-all"
              >
                Back
              </button>
              <button 
                disabled={!fromDate || !toDate}
                onClick={() => setStep('success')} 
                className={`flex-[1.5] py-4 rounded-xl font-syne font-bold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-white ${!fromDate || !toDate ? 'bg-slate-200 text-slate-400 shadow-none pointer-events-none' : ''}`}
                style={fromDate && toDate ? { backgroundColor: 'var(--color-primary)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } : {}}
              >
                Confirm Request <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-5 pt-2 pb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 shadow-sm group">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${item.badge === 'available' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {item.badge}
              </div>
            </div>

            <div className="flex justify-between items-start mb-6 gap-4">
              <div className="flex-1">
                <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] leading-tight mb-2 tracking-tight">{item.name}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                    <Star className="text-amber-400 fill-amber-400" size={14} />
                    <span className="text-xs font-bold text-[#1B1916]">{item.rating}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <p className="text-xs font-medium text-slate-400">{item.reviews} Reviews</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Owner</p>
                <div className="font-bold text-sm text-[#1C3F6E]">{item.owner}</div>
              </div>
            </div>

            <div className="bg-[#F3F1ED] rounded-2xl p-5 mb-8">
              <p className="text-sm text-[#1B1916] font-medium leading-relaxed opacity-70 italic">{item.desc}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Price', val: `₹${item.price}/${item.priceType}`, icon: Clock },
                { label: 'Min Period', val: '1 Day', icon: Calendar },
                { label: 'Deposit', val: '₹500', icon: ShieldCheck }
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-100 rounded-xl p-3 text-center shadow-sm">
                  <stat.icon size={16} className="mx-auto mb-2 text-slate-300" />
                  <div className="font-bold text-xs text-[#1B1916] mb-0.5">{stat.val}</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={onClose} 
                className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
              >
                <MessageSquare size={18} className="text-[#1A7A6A]" /> Message
              </button>
              <button 
                disabled={item.badge !== 'available'}
                onClick={() => item.badge === 'available' && setStep('confirm')}
                className={`flex-[1.5] py-4 rounded-xl font-syne font-bold text-sm shadow-xl active:scale-95 transition-all text-white ${item.badge !== 'available' ? 'bg-slate-200 text-slate-400 shadow-none pointer-events-none' : ''}`}
                style={item.badge === 'available' ? { backgroundColor: 'var(--color-primary)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } : {}}
              >
                {item.badge === 'rented' ? '🔒 Unavailable' : '📅 Reserve Now'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default function Rent() {
  const [activeCat, setActiveCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  
  const [selected, setSelected] = useState(null);
  const [showList, setShowList] = useState(false);

  const filteredItems = useMemo(() => {
    let result = rentItems.filter(item => {
      const matchesCat = activeCat === 'All' || item.category === activeCat;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = item.price <= priceRange;
      return matchesCat && matchesSearch && matchesPrice;
    });

    if (sortBy === 'newest') result.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCat, searchQuery, priceRange, sortBy]);

  const { settings, getTheme } = useSettings();
  const theme = getTheme();

  return (
    <div className={`flex flex-col h-full font-dm-sans overflow-hidden ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F9F9F9]'}`} style={{ fontFamily: 'var(--font-body)' }}>
      {/* ── Liquid Glass Header ──────────────────────────────────── */}
      <div className="relative overflow-hidden flex-shrink-0 pt-16 pb-6 px-6" style={{
        background: `linear-gradient(165deg, ${theme.headerFrom} 0%, ${theme.primaryDark} 40%, ${theme.primary} 70%, ${theme.primaryDark} 100%)`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
      }}>
        {/* Optimized Header Ambient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(232,121,249,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }} />
          <div className="absolute bottom-0 -left-10 w-44 h-44 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(120,255,200,0.2) 0%, transparent 70%)',
            filter: 'blur(45px)',
          }} />
        </div>

        <div className="relative z-10 mt-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-syne font-extrabold text-[28px] text-white leading-none tracking-tight">Rentals</h1>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 ml-0.5">Shared Economy</p>
            </div>
            <button 
              onClick={() => setShowList(true)} 
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all shadow-xl"
            >
              <Plus size={24} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search rentals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:bg-white/15 focus:border-white/20 transition-all"
              />
            </div>
            <button 
              onClick={() => setShowFilters(true)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-xl ${showFilters || sortBy !== 'newest' || priceRange < 1000 ? 'bg-white text-[#1C3F6E]' : 'bg-white/10 text-white border border-white/10'}`}
            >
              <Filter size={20} />
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto tiny-scrollbar pb-1">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <button 
                  key={c.name} 
                  onClick={() => setActiveCat(c.name)} 
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all whitespace-nowrap border ${
                    activeCat===c.name 
                    ? 'bg-white text-[#0F1D35] border-white shadow-xl scale-105' 
                    : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon size={12} /> {c.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 no-scrollbar overscroll-contain">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
          </h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#1C3F6E] bg-blue-50/50 px-2.5 py-1 rounded-lg">
            <ArrowUpDown size={10} />
            {sortBy.replace('-', ' ')}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelected(item)}
              className="bg-white rounded-[24px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex items-stretch gap-4 cursor-pointer group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <div className="w-28 h-28 flex-shrink-0 overflow-hidden relative rounded-[20px]">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-lg text-[7px] font-black uppercase tracking-widest backdrop-blur-md ${item.badge === 'available' ? 'bg-emerald-50/80 text-emerald-700' : 'bg-amber-50/80 text-amber-700'}`}>
                  {item.badge}
                </div>
              </div>
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C07828] bg-amber-50 px-1.5 py-0.5 rounded">{item.category}</span>
                  </div>
                  <h3 className="font-syne font-bold text-[15px] text-[#111111] leading-tight line-clamp-1 group-hover:text-[#1C3F6E] transition-colors">{item.name}</h3>
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-slate-100 border border-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${item.owner}`} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold">{item.owner}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-md">
                      <Star className="text-amber-400 fill-amber-400" size={10} />
                      <span className="text-[10px] font-black text-[#1B1916]">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[18px] font-extrabold text-[#1B1916]">₹{item.price}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">/{item.priceType}</span>
                  </div>
                  <div className="w-8 h-8 bg-[#1C3F6E]/5 rounded-xl flex items-center justify-center text-[#1C3F6E] group-hover:bg-[#1C3F6E] group-hover:text-white transition-all">
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-slate-100 rounded-[32px] flex items-center justify-center text-slate-300">
                <Search size={44} strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white shadow-lg rounded-2xl flex items-center justify-center text-rose-500">
                <X size={20} strokeWidth={3} />
              </div>
            </div>
            <h3 className="font-syne font-extrabold text-xl text-[#1B1916] mb-2 tracking-tight">No Results Found</h3>
            <p className="text-xs font-medium text-slate-400 px-12 leading-relaxed italic">
              Try adjusting the filters to see more items!
            </p>
            <button 
              onClick={() => { setActiveCat('All'); setSearchQuery(''); setPriceRange(1000); }}
              className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#1C3F6E] bg-blue-50 px-6 py-3 rounded-xl active:scale-95 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selected && <DetailSheet item={selected} onClose={() => setSelected(null)} />}
      
      {showFilters && (
        <FilterSheet 
          activeCat={activeCat} 
          setActiveCat={setActiveCat} 
          priceRange={priceRange} 
          setPriceRange={setPriceRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onClose={() => setShowFilters(false)} 
        />
      )}

      {showList && (
        <FormSheet 
          title="🔑 List Item for Rent" 
          fields={[
            { key:'title', label:'Item Name', placeholder:'e.g. Sony Alpha A7 Kit', required:true },
            { key:'category', label:'Category', type:'select', options:['Cameras', 'Electronics', 'Sports', 'Music', 'Transport', 'Other'], required:true },
            { key:'price', label:'Your Price (e.g. ₹250/day)', placeholder:'₹ per hour or per day', required:true },
            { key:'deposit', label:'Security Deposit', placeholder:'e.g. ₹500', required:false },
            { key:'description', label:'Condition & Details', type:'textarea', placeholder:'Describe condition, accessories included…', required:true },
            { key:'contact', label:'Contact Number', placeholder:'+91 99999 99999', required:true },
          ]} 
          submitLabel="Publish Listing" 
          onClose={() => setShowList(false)} 
        />
      )}

      <BottomNav />
    </div>
  );
}
