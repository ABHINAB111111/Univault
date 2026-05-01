import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, ShieldCheck, Map as MapIcon, Info, ExternalLink } from 'lucide-react';

const SPOTS = [
  { name: 'LNB Central Library', icon: '📚', desc: 'Main entrance area — High CCTV coverage', safe: true },
  { name: 'Administrative Building', icon: '🏛️', desc: 'Central hub, well-lit with active security', safe: true },
  { name: 'Central Cafeteria', icon: '🍽️', desc: 'Busy public area, safe for meetings', safe: true },
  { name: 'DUIET Main Entrance', icon: '🏢', desc: 'Engineering block entrance, security nearby', safe: true },
  { name: 'Indoor Stadium', icon: '🏟️', desc: 'Open public space, usually populated', safe: true },
  { name: 'Health Centre', icon: '🏥', desc: 'Near main gate, 24/7 staff present', safe: true },
  { name: 'Post Office (DU)', icon: '✉️', desc: 'Quiet but central, safe daytime spot', safe: true },
];

const CampusMap = () => {
  const navigate = useNavigate();
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased h-screen flex flex-col overflow-hidden">
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
          {/* Map Section - Real Google Map */}
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-white dark:border-slate-800 mb-6 group h-80">
            <iframe
              title="Dibrugarh University Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14175.405541620005!2d94.8943!3d27.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37409890f5451977%3A0x67303f8a4f910403!2sDibrugarh%20University!5e0!3m2!1sen!2sin!4v1714500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Campus Label */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg shadow-sm border border-white/50 text-[10px] font-bold text-[#1C3F6E] uppercase tracking-widest font-syne flex items-center gap-2">
              <MapIcon className="w-3 h-3 text-teal-600" />
              Dibrugarh University Campus
            </div>

            {/* Open in Google Maps Link */}
            <a 
              href="https://www.google.com/maps/place/Dibrugarh+University/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center text-[#1C3F6E] hover:bg-white active:scale-95 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
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

