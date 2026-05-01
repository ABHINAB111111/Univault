import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, ShieldCheck, Map as MapIcon, Info, ExternalLink } from 'lucide-react';

const SPOTS = [
  { name: 'LNB Central Library', icon: '📚', desc: 'Main entrance area — High CCTV coverage', type: 'safe', x: '25%', y: '30%' },
  { name: 'Administrative Building', icon: '🏛️', desc: 'Central hub, well-lit with active security', type: 'secure', x: '45%', y: '50%' },
  { name: 'Central Cafeteria', icon: '🍽️', desc: 'Busy public area, safe for meetings', type: 'public', x: '60%', y: '40%' },
  { name: 'DUIET Main Entrance', icon: '🏢', desc: 'Engineering block entrance, security nearby', type: 'secure', x: '20%', y: '70%' },
  { name: 'Indoor Stadium', icon: '🏟️', desc: 'Open public space, usually populated', type: 'public', x: '75%', y: '20%' },
  { name: 'Health Centre', icon: '🏥', desc: 'Near main gate, 24/7 staff present', type: 'secure', x: '80%', y: '60%' },
  { name: 'Post Office (DU)', icon: '✉️', desc: 'Quiet but central, safe daytime spot', type: 'public', x: '40%', y: '20%' },
];

const TYPE_COLORS = {
  safe: 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]',
  public: 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]',
  secure: 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]',
};

const CampusMap = () => {
  const navigate = useNavigate();
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased h-full flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Safe Meetup Spots</h1>
          </div>
          <button className="p-2 text-[#1C3F6E] dark:text-blue-400 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content - Fixed Scrolling */}
      <main className="flex-1 overflow-y-auto no-scrollbar overscroll-contain pb-32 pt-14">
        <div className="px-6 py-6">
          {/* Map Section - Stylized with Markers */}
          <div className="relative bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 mb-8 group h-[400px] flex-shrink-0">
            <img 
              src={`${import.meta.env.BASE_URL}assets/campus_map_stylized.png`} 
              className="w-full h-full object-cover opacity-90 scale-110 group-hover:scale-100 transition-transform duration-1000"
              alt="Campus Map"
            />
            
            {/* Markers Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {SPOTS.map((s, idx) => (
                <div 
                  key={idx}
                  className={`absolute w-9 h-9 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500 pointer-events-auto cursor-pointer ${selectedSpot === s ? 'scale-150 z-50' : 'hover:scale-125 z-10'}`}
                  style={{ top: s.y, left: s.x, animation: `float ${3 + idx}s infinite ease-in-out` }}
                  onClick={() => setSelectedSpot(s)}
                >
                  <div className={`w-full h-full rounded-full glass-liquid flex items-center justify-center border-2 bg-white/40 dark:bg-slate-900/40 ${selectedSpot === s ? 'ring-4 ring-white/30' : ''} ${TYPE_COLORS[s.type]}`}>
                    <span className="text-sm">{s.icon}</span>
                  </div>
                  {/* Pulse Effect for selected */}
                  {selectedSpot === s && (
                    <div className={`absolute inset-0 rounded-full animate-ping ${s.type === 'safe' ? 'bg-green-500/30' : s.type === 'public' ? 'bg-blue-500/30' : 'bg-orange-500/30'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Map Interaction Hint */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[9px] font-bold text-white/80 uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              Tap markers to explore zones
            </div>

            {/* Campus Label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 text-[10px] font-bold text-[#1C3F6E] uppercase tracking-widest font-syne flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Dibrugarh University Campus
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 px-1">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap">
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Safe Zones</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C3F6E]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Public Areas</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C07828]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Security Posts</span>
            </div>
          </div>

          {/* List of Spots */}
          <h2 className="text-sm font-syne font-bold text-[#1C3F6E] dark:text-blue-400 mb-4 px-2 uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            Verified Safe Meetup Points
          </h2>
          <div className="space-y-3">
            {SPOTS.map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedSpot(s)}
                className={`bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95 cursor-pointer ${selectedSpot === s ? 'ring-2 ring-teal-500' : ''}`}
              >
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center text-2xl shadow-inner italic">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">{s.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] font-bold text-teal-600 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded uppercase tracking-tighter shadow-sm border border-teal-100 dark:border-teal-800">
                    Verified Safe
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-[#1C3F6E] p-5 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-orange-400" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-syne">Exchange Safety Tips</h4>
              </div>
              <p className="text-xs text-blue-100/80 leading-relaxed mb-4">Always prefer well-lit, public areas with CCTV and active security presence for safe campus transactions at Dibrugarh University.</p>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/20">Learn More</button>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampusMap;

