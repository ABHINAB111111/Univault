import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Plus, 
  Search, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Package, 
  Box,
  X,
  Smartphone,
  Book,
  Truck,
  Armchair,
  Shirt,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { BottomNav } from '../components/Layout';
import { FormSheet } from '../components/Sheets';
import { useSettings } from '../contexts/SettingsContext';

const products = [
  { id:1, name:'Modern Architecture Textbook', cat:'Books', price:450, badge:'available', img: import.meta.env.BASE_URL + 'assets/textbook.png', seller:'Meera R.', rating:4.8, reviews:12, desc:'Comprehensive architecture reference in perfect condition. No highlights or annotations. Ideal for 4th year students.', date: '2024-03-25' },
  { id:2, name:'TI-84 Plus Calculator', cat:'Tech', price:820, badge:'available', img:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80', seller:'Nikhil V.', rating:4.6, reviews:8, desc:'Scientific graphing calculator, comes with fresh batteries and the original manual.', date: '2024-03-26' },
  { id:3, name:'Cannondale Mountain Bike', cat:'Transport', price:3100, badge:'sold', img:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&q=80', seller:'Arav S.', rating:5.0, reviews:24, desc:'21-speed mountain bike, recently serviced. Minor scuffs on the frame.', date: '2024-03-20' },
  { id:4, name:'Mechanical Keyboard (TKL)', cat:'Tech', price:1200, badge:'available', img:'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&q=80', seller:'Sana K.', rating:4.7, reviews:15, desc:'Keychron K8 with brown switches. Comes with USB-C cable. Light use, excellent condition.', date: '2024-03-28' },
  { id:5, name:'IKEA Foldable Desk', cat:'Furniture', price:600, badge:'reserved', img:'https://images.unsplash.com/photo-1593060974411-fa0812920251?w=400&q=80', seller:'Yash D.', rating:4.5, reviews:10, desc:'Compact fold-up desk, ideal for dorm rooms. Easy assembly included.', date: '2024-03-22' },
  { id:6, name:"Levi's Denim Jacket (M)", cat:'Clothing', price:750, badge:'available', img:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80', seller:'Pooja N.', rating:4.9, reviews:19, desc:'Classic vintage look, worn 3-4 times. Dry cleaned and ready.', date: '2024-03-27' },
];

const categories = [
  { name: 'All', icon: Box },
  { name: 'Tech', icon: Smartphone },
  { name: 'Books', icon: Book },
  { name: 'Clothing', icon: Shirt },
  { name: 'Transport', icon: Truck },
  { name: 'Furniture', icon: Armchair },
];

const MARKETPLACE_COLOR = '#1C3F6E'; // Consistent Navy Blue

const badgeColors = {
  available: 'bg-blue-50 text-blue-600',
  sold: 'bg-slate-100 text-slate-400',
  reserved: 'bg-amber-50 text-amber-600',
};

function FilterSheet({ activeCat, setActiveCat, priceRange, setPriceRange, sortBy, setSortBy, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[400] flex items-end animate-fade" onClick={onClose}>
      <div 
        className="bg-white w-full rounded-t-[40px] animate-slideUp max-h-[90%] overflow-y-auto no-scrollbar shadow-2xl p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-syne font-extrabold text-2xl text-[#1B1916]">Market Filters</h2>
          <button onClick={onClose} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
            <X size={20} />
          </button>
        </div>

        <section className="mb-10">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Sort Products</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'newest', label: 'Recently Added' },
              { id: 'price-low', label: 'Price: Low to High' },
              { id: 'price-high', label: 'Price: High to Low' },
              { id: 'rating', label: 'Top Rated Sellers' }
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
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Budget (Up to ₹{priceRange})</label>
          <div className="px-2">
            <input 
              type="range" 
              min="0" 
              max="5000" 
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1C3F6E]"
            />
            <div className="flex justify-between mt-3 text-[11px] font-bold text-slate-400">
              <span>₹0</span>
              <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg font-black">₹{priceRange}</span>
              <span>₹5000+</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Categories</label>
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
          className="w-full py-5 rounded-2xl bg-[#1C3F6E] text-white font-syne font-bold text-sm shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
        >
          View Results
        </button>
      </div>
    </div>
  );
}

const DetailSheet = React.memo(({ item, onClose }) => {
  const [step, setStep] = useState('view');

  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[300] flex items-center justify-center p-6 animate-fade">
        <div className="bg-white w-full max-w-sm rounded-[32px] p-8 text-center shadow-2xl animate-pop">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-blue-500" size={40} />
          </div>
          <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] mb-3 leading-tight tracking-tight">Purchase Requested!</h2>
          <p className="font-dm-sans text-sm text-slate-500 leading-relaxed mb-8 px-2">
            Your request for <span className="font-bold text-[#1B1916]">{item.name}</span> has been sent to <span className="font-bold text-[#1C3F6E]">{item.seller}</span>. 
          </p>
          <button 
            onClick={onClose} 
            className="w-full py-4 rounded-2xl bg-[#1B1916] text-white font-syne font-bold text-sm shadow-xl active:scale-95 transition-all"
          >
            Back to Marketplace
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
          <div className="px-6 pt-12 pb-12 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
              <ShoppingBag size={32} />
            </div>
            <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] mb-2">Confirm Purchase?</h2>
            <p className="text-sm font-medium text-slate-400 mb-6">{item.name}</p>
            
            <div className="font-syne font-extrabold text-4xl text-blue-600 mb-8 tracking-tight">₹{item.price}</div>
            
            <div className="bg-slate-50 rounded-2xl p-5 mb-10 text-left">
              <p className="text-xs text-slate-500 font-medium leading-relaxed italic opacity-80">
                This sends a <span className="font-bold">direct purchase request</span> to {item.seller}. 
                Payment and inspection are handled in person during the campus meeting.
              </p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setStep('view')} 
                className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-500 active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setStep('success')} 
                className="flex-[1.5] py-4 rounded-xl bg-blue-600 text-white font-syne font-bold text-sm shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Confirm Purchase <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-5 pt-2 pb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-sm group">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${badgeColors[item.badge]}`}>
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
                  <p className="text-xs font-medium text-slate-400">Listed by <span className="text-blue-600 font-bold">{item.seller}</span></p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Price</p>
                <div className="font-syne font-extrabold text-2xl text-blue-600 tracking-tight">₹{item.price}</div>
              </div>
            </div>

            <div className="bg-[#F3F1ED] rounded-2xl p-5 mb-8">
              <p className="text-sm text-[#1B1916] font-medium leading-relaxed opacity-70 italic">{item.desc}</p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={onClose} 
                className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
              >
                <MessageSquare size={18} className="text-blue-600" /> Message
              </button>
              <button 
                disabled={item.badge !== 'available'}
                onClick={() => item.badge === 'available' && setStep('confirm')}
                className={`flex-[1.5] py-4 rounded-xl font-syne font-bold text-sm shadow-xl active:scale-95 transition-all text-white ${item.badge !== 'available' ? 'bg-slate-200 text-slate-400 shadow-none pointer-events-none' : 'bg-blue-600 shadow-blue-600/20'}`}
              >
                {item.badge === 'sold' ? 'Sold Out' : item.badge === 'reserved' ? 'Reserved' : 'Purchase Item'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default function Marketplace() {
  const location = useLocation();
  const urlParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialSearch = urlParams.get('q') || '';
  const shouldList = urlParams.get('list') === '1';

  const [activeCat, setActiveCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [priceRange, setPriceRange] = useState(5000);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  
  const [selected, setSelected] = useState(null);
  const [showList, setShowList] = useState(shouldList);

  const filteredItems = useMemo(() => {
    let result = products.filter(p => {
      const matchesCat = activeCat === 'All' || p.cat === activeCat;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price <= priceRange;
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
        </div>

        <div className="relative z-10 mt-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-syne font-extrabold text-[28px] text-white leading-none tracking-tight">Marketplace</h1>
              <p className="text-blue-100/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 ml-0.5">Campus Buy & Sell</p>
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-100 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:bg-white/15 focus:border-white/20 transition-all"
              />
            </div>
            <button 
              onClick={() => setShowFilters(true)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-xl ${showFilters || sortBy !== 'newest' || priceRange < 5000 ? 'bg-white text-blue-700' : 'bg-white/10 text-white border border-white/10'}`}
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
                    ? 'bg-white text-blue-900 border-white shadow-xl scale-105' 
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
            {filteredItems.length} {filteredItems.length === 1 ? 'Product' : 'Products'} Listed
          </h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
            <ArrowUpDown size={10} />
            {sortBy.replace('-', ' ')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelected(item)}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col cursor-pointer group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className={`absolute top-3 left-3 px-2 py-0.5 rounded-lg text-[7px] font-black uppercase tracking-widest backdrop-blur-md ${badgeColors[item.badge]}`}>
                  {item.badge}
                </div>
              </div>
              <div className="p-3 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{item.cat}</span>
                    <div className="flex items-center gap-0.5">
                      <Star className="text-amber-400 fill-amber-400" size={8} />
                      <span className="text-[8px] font-black text-slate-400">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-syne font-bold text-[13px] text-[#111111] leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-syne font-extrabold text-[16px] text-[#111111]">₹{item.price}</p>
                  <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight size={14} strokeWidth={3} />
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
                <ShoppingBag size={44} strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white shadow-lg rounded-2xl flex items-center justify-center text-rose-500">
                <X size={20} strokeWidth={3} />
              </div>
            </div>
            <h3 className="font-syne font-extrabold text-xl text-[#1B1916] mb-2 tracking-tight">No Items Matching</h3>
            <p className="text-xs font-medium text-slate-400 px-12 leading-relaxed italic">
              Try search for something else or reset your filters to see everything.
            </p>
            <button 
              onClick={() => { setActiveCat('All'); setSearchQuery(''); setPriceRange(5000); }}
              className="mt-8 text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-6 py-3 rounded-xl active:scale-95 transition-all"
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
          title="📦 List an Item" 
          fields={[
            { key:'title', label:'Item Name', placeholder:'e.g. Physics Textbook Vol. 2', required:true },
            { key:'category', label:'Category', type:'select', options:['Tech', 'Books', 'Clothing', 'Transport', 'Furniture', 'Sports', 'Other'], required:true },
            { key:'price', label:'Price (₹)', type:'number', placeholder:'e.g. 450', required:true },
            { key:'condition', label:'Condition', type:'select', options:['Like New', 'Good', 'Fair', 'Needs Repair'], required:true },
            { key:'description', label:'Description', type:'textarea', placeholder:'Describe the item, any defects…', required:true },
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
