import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search as SearchIcon, 
  X, 
  Filter, 
  ChevronRight, 
  Star,
  LayoutGrid,
  List,
  Clock,
  MapPin,
  Key,
  ShoppingBag,
  AlertCircle
} from 'lucide-react';
import { StatusBar, BottomNav } from '../components/Layout';

const searchCategories = [
  'Everywhere', 'Marketplace', 'Rent', 'Lost & Found'
];

// Unified search dataset combining marketplace, rent, and lost/found items
const allSearchItems = [
  // Marketplace
  { id:'m1', name:'Modern Architecture Textbook', cat:'Books', price:'₹450', type:'Marketplace', img:'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80', route:'/marketplace' },
  { id:'m2', name:'TI-84 Plus Calculator', cat:'Tech', price:'₹820', type:'Marketplace', img:'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=400&q=80', route:'/marketplace' },
  { id:'m3', name:'Cannondale Mountain Bike', cat:'Transport', price:'₹3,100', type:'Marketplace', img:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80', route:'/marketplace' },
  { id:'m4', name:'Mechanical Keyboard (TKL)', cat:'Tech', price:'₹1,200', type:'Marketplace', img:'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80', route:'/marketplace' },
  { id:'m5', name:'IKEA Foldable Desk', cat:'Furniture', price:'₹600', type:'Marketplace', img:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80', route:'/marketplace' },
  { id:'m6', name:"Levi's Denim Jacket (M)", cat:'Clothing', price:'₹750', type:'Marketplace', img:'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80', route:'/marketplace' },
  // Rent
  { id:'r1', name:'Sony Alpha A7 III Kit', cat:'Cameras', price:'₹250/day', type:'Rent', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', route:'/rent' },
  { id:'r2', name:'Epson Projector X3', cat:'Electronics', price:'₹80/hr', type:'Rent', img:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80', route:'/rent' },
  { id:'r3', name:'DJI Mini 3 Drone', cat:'Electronics', price:'₹400/day', type:'Rent', img:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&q=80', route:'/rent' },
  { id:'r4', name:'Yamaha Acoustic Guitar', cat:'Music', price:'₹60/day', type:'Rent', img:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80', route:'/rent' },
  // Lost & Found
  { id:'l1', name:'Blue Backpack', cat:'Bags', price:null, type:'Lost & Found', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', route:'/lost-found', badge:'lost' },
  { id:'l2', name:'iPhone 13 Pro', cat:'Electronics', price:'₹500 Reward', type:'Lost & Found', img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&q=80', route:'/lost-found', badge:'lost' },
  { id:'l3', name:'Sony Headphones WH-1000XM4', cat:'Electronics', price:null, type:'Lost & Found', img:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80', route:'/lost-found', badge:'found' },
];

const typeIcon = {
  'Marketplace': ShoppingBag,
  'Rent': Key,
  'Lost & Found': AlertCircle,
};

const typeBg = {
  'Marketplace': 'bg-blue-50 text-blue-600',
  'Rent': 'bg-amber-50 text-amber-600',
  'Lost & Found': 'bg-rose-50 text-rose-600',
};

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('q') || '');
  const [activeCat, setActiveCat] = useState('Everywhere');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allSearchItems.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q);
      const matchesCat = activeCat === 'Everywhere' || item.type === activeCat;
      return matchesQuery && matchesCat;
    });
  }, [query, activeCat]);

  return (
    <div className="flex flex-col h-full bg-[#F4F3EF] font-dm-sans overflow-hidden">
      <div className="bg-white pt-2 pb-5 px-6 shadow-sm border-b border-slate-100 z-40">
        <StatusBar />
        <div className="mt-2 flex items-center gap-4 mb-5">
          <ArrowLeft className="w-5 h-5 text-[#1C3F6E] cursor-pointer active:scale-90 transition-transform" onClick={() => navigate(-1)} />
          <div className="flex-1 relative group">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1C3F6E] transition-colors" size={16} />
            <input 
              autoFocus
              placeholder="Search anything on campus…" 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              className="w-full py-3 pl-11 pr-12 text-sm bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-[#1C3F6E]/10 focus:border-[#1C3F6E]/20 transition-all font-medium"
            />
            {query && (
              <button 
                onClick={() => setQuery('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={14} className="text-slate-400" />
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {searchCategories.map((c) => (
            <button 
              key={c} 
              onClick={() => setActiveCat(c)} 
              className={`px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ring-1 ${
                activeCat===c 
                ? 'bg-[#1C3F6E] text-white ring-[#1C3F6E] shadow-md' 
                : 'bg-white text-slate-400 ring-slate-100 hover:ring-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-28 no-scrollbar">
        {query.trim() ? (
          <>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5 ml-1">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            {results.length > 0 ? (
              <div className="flex flex-col gap-3">
                {results.map((item, i) => {
                  const TypeIcon = typeIcon[item.type];
                  return (
                    <div 
                      key={item.id}
                      onClick={() => navigate(item.route)}
                      className="bg-white rounded-2xl p-3 shadow-[0_2px_14px_rgba(27,25,22,0.05)] border border-[#EEEEEC] flex items-stretch gap-4 cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 py-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-[14px] text-[#111111] leading-tight line-clamp-2">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider ${typeBg[item.type]}`}>
                              <TypeIcon size={10} /> {item.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          {item.price ? (
                            <p className="font-extrabold text-[14px] text-[#C07828] leading-none">{item.price}</p>
                          ) : (
                            <span className="text-[10px] font-bold text-rose-500 uppercase">{item.badge}</span>
                          )}
                          <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center mt-12 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-6">
                  <SearchIcon size={40} strokeWidth={1} />
                </div>
                <h3 className="font-extrabold text-lg text-[#1B1916] mb-2 tracking-tight">No results found</h3>
                <p className="text-sm font-medium text-slate-400 px-8 leading-relaxed">Try a different search term or category</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-extrabold text-[#1B1916] text-sm tracking-tight uppercase">Recent Searches</h3>
            </div>

            <div className="space-y-3">
              {['MacBook Air M1', 'Economics Book', 'Dorm Desk', 'Black Backpack', 'Guitar', 'Camera'].map(term => (
                <div 
                  key={term} 
                  onClick={() => setQuery(term)}
                  className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-slate-100/50 cursor-pointer hover:bg-slate-50 transition-colors group active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-[#1C3F6E] transition-colors">
                      <Clock size={16} />
                    </div>
                    <span className="text-sm font-medium text-[#1B1916]">{term}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-200 group-hover:text-[#1C3F6E] transition-colors" />
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-white rounded-[32px] shadow-[0_8px_32px_rgba(27,24,22,0.06)] border border-slate-100/50 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-[20px] flex items-center justify-center mx-auto mb-6 text-[#1C3F6E]">
                <Filter size={28} />
              </div>
              <h4 className="font-extrabold text-[#1B1916] text-base mb-2 tracking-tight">Need specific results?</h4>
              <p className="text-[11px] text-slate-500 font-medium px-4 mb-6 leading-relaxed italic">
                Use filters to narrow down by price range, item condition, or campus zone.
              </p>
              <button className="w-full py-3.5 rounded-2xl bg-[#1B1916] text-white font-bold text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                Open Advanced Filters
              </button>
            </div>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
