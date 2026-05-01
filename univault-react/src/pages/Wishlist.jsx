import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpDown, Heart, ShoppingBag, Key, Laptop, LifeBuoy } from 'lucide-react';

const WISHLIST_DATA = [
  { id: 'wl1', emoji: '💻', icon: <Laptop className="w-8 h-8" />, name: 'MacBook Charger', price: '₹350', type: 'buy', bg: 'bg-blue-50 dark:bg-blue-900/20', badge: 'Like New', badgeColor: 'bg-blue-100 text-blue-600' },
  { id: 'wl2', emoji: '🚲', icon: <LifeBuoy className="w-8 h-8" />, name: 'Campus Cycle', price: '₹30/day', type: 'rent', bg: 'bg-orange-50 dark:bg-orange-900/20', badge: 'Available', badgeColor: 'bg-orange-100 text-orange-600' },
  { id: 'wl3', emoji: '🔬', icon: <LifeBuoy className="w-8 h-8" />, name: 'Lab Microscope', price: '₹60/day', type: 'rent', bg: 'bg-teal-50 dark:bg-teal-900/20', badge: 'Available', badgeColor: 'bg-teal-100 text-teal-600' },
  { id: 'wl4', emoji: '📐', icon: <ShoppingBag className="w-8 h-8" />, name: 'Drawing Kit', price: '₹150', type: 'buy', bg: 'bg-green-50 dark:bg-green-900/20', badge: 'New', badgeColor: 'bg-green-100 text-green-600' },
  { id: 'wl5', emoji: '🎧', icon: <ShoppingBag className="w-8 h-8" />, name: 'Sony Headphones', price: '₹650', type: 'buy', bg: 'bg-teal-50 dark:bg-teal-900/20', badge: 'Like New', badgeColor: 'bg-teal-100 text-teal-600' },
  { id: 'wl6', emoji: '🧮', icon: <ShoppingBag className="w-8 h-8" />, name: 'Casio FX-991', price: '₹380', type: 'buy', bg: 'bg-orange-50 dark:bg-orange-900/20', badge: 'Like New', badgeColor: 'bg-orange-100 text-orange-600' },
];

const Wishlist = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState(WISHLIST_DATA);

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  const removeItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Wishlist</h1>
          </div>
          <button className="p-2 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
            <ArrowUpDown className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 py-3 flex gap-2">
          {['all', 'rent', 'buy'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold font-syne uppercase tracking-wider transition-all ${
                filter === t 
                  ? 'bg-[#1C3F6E] text-white shadow-md' 
                  : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500'
              }`}
            >
              {t === 'all' ? `All (${items.length})` : t === 'rent' ? 'Rentals' : 'Buy'}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pt-32 pb-32 px-6 overflow-y-auto no-scrollbar overscroll-contain">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-[popIn_0.4s_ease-out]">
            <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-4xl mb-4 shadow-xl">🤍</div>
            <h2 className="text-lg font-syne font-bold text-[#1C3F6E] dark:text-blue-400">No saved items</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-[200px]">Tap on the heart icon on any item to save it here for later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-slate-900 rounded-[22px] overflow-hidden shadow-[0_2px_16px_rgba(27,25,22,0.05)] border border-slate-100 dark:border-slate-800 group animate-[popIn_0.3s_ease-out_forwards]"
                onClick={() => navigate('/marketplace')}
              >
                <div className={`h-28 ${item.bg} flex items-center justify-center relative`}>
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 shadow-sm active:scale-90 transition-all"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 truncate mb-1">{item.name}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-base font-extrabold text-[#C07828]">{item.price}</p>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
