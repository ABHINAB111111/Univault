import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  ChevronRight, 
  Package, 
  Smartphone, 
  Key, 
  CreditCard, 
  Glasses, 
  Headphones, 
  Book,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Heart,
  Gift,
  Sparkles,
  Trophy,
  ArrowRight,
  HandHelping,
  Phone
} from 'lucide-react';
import { BottomNav } from '../components/Layout';
import { FormSheet } from '../components/Sheets';
import { useSettings } from '../contexts/SettingsContext';

const segTabs = ['Lost', 'Found', 'My Reports'];
const categories = ['All', 'Electronics', 'Books', 'Clothing', 'Keys', 'ID Cards', 'Bags'];

const allItems = {
  Lost: [
    { id:1, img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80', name:'Blue Backpack', loc:'Library, 2nd Floor', time:'2h ago', badge:'lost', reward:null, desc:'Left near the study tables on 2nd floor. Has a red keychain attached. Contained laptop charger and notebooks.', contact:'Priya M.' },
    { id:2, img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=400&q=80', name:'iPhone 13 Pro', loc:'Science Block Canteen', time:'5h ago', badge:'lost', reward:'₹500 Reward', desc:'Space grey, has a cracked back cover. Lock screen shows a mountain wallpaper. Contains irreplaceable photos.', contact:'Arjun D.' },
    { id:3, img:'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=400&q=80', name:'Room Keys (B-204)', loc:'Hostel Block B', time:'1d ago', badge:'lost', reward:null, desc:'A set of 3 keys on a Captain America keychain. Lost near the staircase.', contact:'Sahil K.' },
    { id:4, img:'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=400&q=80', name:'Student ID Card', loc:'Main Gate', time:'3d ago', badge:'lost', reward:'₹100 Reward', desc:'ID card for Julian Pearce, CS Dept. Roll no. 21CS087. Very urgent — needed for exam hall.', contact:'Julian P.' },
  ],
  Found: [
    { id:5, img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80', name:'Black Spectacles', loc:'Cafeteria, Table 7', time:'1h ago', badge:'found', reward:null, desc:'Round black frame spectacles. No scratches. Power: approximately -2.5. Currently with Student Services.', contact:'Meera R.' },
    { id:6, img:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80', name:'Sony Headphones (WH-1000XM4)', loc:'Gymnasium', time:'3h ago', badge:'found', reward:null, desc:'Black Sony noise-cancelling headphones. Working perfectly. Found in the gym locker area.', contact:'Rohan V.' },
    { id:7, img:'https://images.unsplash.com/photo-1531346878377-a54456c683b7?auto=format&fit=crop&w=400&q=80', name:'Spiral Notebook', loc:'Room 301', time:'6h ago', badge:'found', reward:null, desc:'Blue spiral notebook with "Physics Lab — Sem 4" written on the cover. Has detailed notes inside.', contact:'Sana K.' },
  ],
  'My Reports': [
    { id:8, img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80', name:'Blue Backpack', loc:'Library, 2nd Floor', time:'2h ago', badge:'lost', reward:null, status:'Active', contact:'You' },
    { id:9, img:'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=400&q=80', name:'Student ID Card', loc:'Main Gate', time:'3d ago', badge:'lost', reward:'₹100 Reward', status:'1 match found', contact:'You' },
  ],
};

const badgeStyle = { 
  lost: 'bg-rose-50 text-rose-600', 
  found: 'bg-violet-50 text-violet-600' 
};

// reportFields removed to satisfy lint

function ItemDetail({ item, onClose }) {
  const [claimed, setClaimed] = useState(false);
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-[300] flex items-end animate-fade" onClick={onClose}>
      <div 
        className="bg-white w-full rounded-t-[32px] p-6 pb-12 animate-slideUp max-h-[90%] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-6" />
        
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-2xl flex-shrink-0 shadow-sm overflow-hidden border border-slate-100">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-syne font-extrabold text-xl text-[#1B1916] mb-1.5 leading-tight">{item.name}</h2>
            <div className="flex flex-wrap gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${badgeStyle[item.badge]}`}>
                {item.badge}
              </span>
              {item.reward && (
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-600 ring-1 ring-amber-200/50">
                  ⭐ {item.reward}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F1ED] rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs">
              <MapPin size={14} className="text-rose-500" /> {item.loc}
            </div>
            <span className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5 text-slate-400 font-medium text-xs">
              <Clock size={14} /> {item.time}
            </div>
          </div>
          <p className="text-sm text-[#1B1916] font-medium leading-relaxed opacity-80">{item.desc}</p>
        </div>

        <div className="flex items-center justify-between mb-8 px-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reporter</p>
              <p className="text-sm font-bold text-[#1C3F6E]">{item.contact}</p>
            </div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-teal-500 opacity-20" />
        </div>

        {claimed ? (
          <div className="bg-teal-50 rounded-2xl p-6 text-center animate-pop border border-teal-100">
            <div className="w-16 h-16 bg-teal-100/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="font-syne font-extrabold text-lg text-teal-700 mb-1">
              {item.badge === 'found' ? 'Claim Request Sent' : 'Message Sent'}
            </h4>
            <p className="text-sm text-teal-600/70 font-medium font-dm-sans">
              {item.badge === 'found' 
                ? "We've notified the finder. They'll reach out once they verify the details." 
                : "Your message was sent to the reporter. Check your inbox for updates."}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {item.reward && item.badge === 'found' && (
              <div className="bg-amber-50 rounded-2xl p-4 mb-2 border border-amber-100/50 flex items-center gap-4 animate-fade">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <Trophy size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest leading-none mb-1">Owner's Bounty</p>
                  <p className="text-[13px] font-bold text-amber-800 leading-tight">Return this to earn {item.reward}</p>
                </div>
              </div>
            )}
            
            <div className="flex gap-3">
              <button 
                onClick={onClose} 
                className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-600 hover:bg-slate-50 active:scale-95 transition-all"
              >
                Close
              </button>
              <button 
                onClick={() => setClaimed(true)} 
                className="flex-[2] py-4 rounded-xl bg-[#1C3F6E] text-white font-syne font-bold text-sm shadow-xl shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {item.badge === 'found' ? (
                  <>
                    <HandHelping className="w-4 h-4" /> Claim This Item
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" /> Contact Finder
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LostFound() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [activeCat, setActiveCat] = useState('All');
  const [reportType, setReportType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Goodwill Reward State
  const [rewardEnabled, setRewardEnabled] = useState(false);
  const [rewardValue, setRewardValue] = useState('₹100');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const items = allItems[segTabs[activeTab]] || [];

  const { settings, getTheme } = useSettings();
  const theme = getTheme();

  return (
    <div className={`flex flex-col h-full relative font-dm-sans overflow-hidden ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F3F1ED]'}`} style={{ fontFamily: 'var(--font-body)' }}>
      {/* ── Liquid Glass Header ──────────────────────────────────── */}
      <div className="relative overflow-hidden flex-shrink-0 pt-16 pb-5 px-6" style={{
        background: `linear-gradient(165deg, ${theme.headerFrom} 0%, ${theme.primaryDark} 40%, ${theme.primary} 70%, ${theme.primaryDark} 100%)`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
      }}>
        {/* Liquid glass ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-30" style={{
            background: 'radial-gradient(circle, rgba(120,180,255,0.4) 0%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'liquidFloat 7s ease-in-out infinite',
          }} />
          <div className="absolute bottom-0 -left-10 w-40 h-40 rounded-full opacity-20" style={{
            background: 'radial-gradient(circle, rgba(232,121,249,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'liquidFloat 9s ease-in-out infinite reverse',
          }} />
          <div className="absolute top-0 left-0 right-0 glass-rim-light opacity-30" />
        </div>

        <div className="relative z-10 mt-2">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-[26px] text-white leading-none tracking-tight drop-shadow-lg">
              Lost & Found
            </h1>
            <div className="flex gap-2">
              <button 
                onClick={() => navigate('/map')}
                className="w-9 h-9 rounded-xl glass-liquid text-white flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
              >
                <MapPin size={18} />
              </button>
              <button 
                onClick={() => navigate('/notifications')}
                className="w-9 h-9 rounded-xl glass-liquid text-white flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
              >
                <AlertCircle size={18} />
              </button>
            </div>
          </div>
          
          {/* Liquid Glass Segmented Control */}
          <div className="flex glass-liquid glass-inner-shadow rounded-2xl p-1 mb-5 gap-1">
            {segTabs.map((t, i) => (
              <button 
                key={t} 
                onClick={() => { setActiveTab(i); setActiveCat('All'); }} 
                className={`flex-1 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all duration-300 relative ${
                  activeTab === i 
                  ? 'bg-white/15 text-white shadow-sm ring-1 ring-white/10' 
                  : 'text-white/40 hover:text-white/70'
                }`}
              >
                {t}
                {t === 'Lost' && <span className="ml-1 opacity-60">(7)</span>}
                {t === 'Found' && <span className="ml-1 opacity-60">(5)</span>}
              </button>
            ))}
          </div>

          <div className="flex gap-2.5 overflow-x-auto tiny-scrollbar pb-1">
            {categories.map(c => (
              <button 
                key={c} 
                onClick={() => setActiveCat(c)} 
                className={`px-4 py-2 rounded-xl font-bold text-[10.5px] uppercase tracking-widest transition-all whitespace-nowrap border ${
                  activeCat===c 
                  ? 'bg-white text-[#0F1D35] border-white shadow-lg' 
                  : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 no-scrollbar overscroll-contain">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-12 text-center animate-fade">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6">
              <Search size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-syne font-extrabold text-lg text-[#1B1916] mb-2">No reports yet</h3>
            <p className="text-sm text-slate-400 font-medium px-8 leading-relaxed">
              Looks like everything is where it should be. Tap the + to report something lost or found.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item, i) => {
              return (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedItem(item)}
                  className="bg-white rounded-2xl p-4 shadow-[0_2px_14px_rgba(27,25,22,0.05)] border border-[#EEEEEC] flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer animate-fade"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-14 h-14 rounded-xl flex-shrink-0 shadow-sm overflow-hidden border border-slate-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-[14px] text-[#1B1916] truncate">{item.name}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider ${badgeStyle[item.badge]}`}>
                        {item.badge}
                      </span>
                      {item.reward && (
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-600 ring-1 ring-amber-200/50">
                          ⭐ {item.reward}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 font-medium text-[11px]">
                      <MapPin size={12} className="opacity-70" /> {item.loc}
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-300 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FAB Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 items-end z-50">
        <button 
          onClick={() => setReportType('found')} 
          className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-teal-600 text-white font-syne font-bold text-xs shadow-xl shadow-teal-900/30 hover:bg-teal-700 transition-all hover:-translate-y-1 active:scale-90 animate-fade d2"
        >
          <Package size={16} /> Report Found
        </button>
        <button 
          onClick={() => setReportType('lost')} 
          className="w-14 h-14 rounded-full bg-[#1C335A] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(28,51,90,0.3)] hover:scale-110 active:scale-90 transition-all animate-pop d3"
        >
          <Plus size={28} />
        </button>
      </div>

      {/* Modal Sheets */}
      {reportType && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[500] flex items-end animate-fade" onClick={() => setReportType(null)}>
          <div 
            className="bg-white w-full rounded-t-[32px] p-6 pb-12 animate-slideUp max-h-[95%] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-6" />
            
            <div className="mb-8">
              <h2 className="font-syne font-extrabold text-2xl text-[#1B1916] mb-2 tracking-tight">
                {reportType === 'lost' ? "🚨 Report Lost Item" : "📦 Report Found Item"}
              </h2>
              <p className="text-sm text-slate-400 font-medium leading-snug">
                {reportType === 'lost' 
                  ? "Help the campus help you. Provide clear details to find it faster." 
                  : "Thank you for being awesome! Let's get this back to its owner."}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Item Title</label>
                <input type="text" className="input bg-[#F3F1ED]/50 border-none h-14 font-medium" placeholder="e.g. Blue Backpack" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Location / Time</label>
                <div className="flex gap-3">
                  <input type="text" className="flex-1 input bg-[#F3F1ED]/50 border-none h-14 font-medium" placeholder="Location" />
                  <input type="text" className="w-1/3 input bg-[#F3F1ED]/50 border-none h-14 font-medium" placeholder="Time" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Description</label>
                <textarea className="input bg-[#F3F1ED]/50 border-none min-h-[100px] py-4 font-medium resize-none" placeholder="Add unique identifiers (broken zip, stickers, etc.)" />
              </div>

              {reportType === 'lost' && (
                <div className="bg-[#1C335A] p-5 rounded-2xl mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-amber-300">
                        <Heart className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-xs text-white uppercase tracking-wider">Goodwill Reward (Bounty)</h4>
                        <p className="text-[10px] text-white/50 font-medium">Optional: Motivate finders with a thank-you gift.</p>
                      </div>
                    </div>
                    <div 
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${rewardEnabled ? 'bg-teal-500' : 'bg-white/10'}`} 
                      onClick={() => setRewardEnabled(!rewardEnabled)}
                    >
                       <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${rewardEnabled ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                  
                  {rewardEnabled && (
                    <div className="animate-fade">
                      <div className="flex gap-2 mb-3">
                        {['₹50', '₹100', '₹200'].map(amt => (
                          <button 
                            key={amt} 
                            onClick={() => { setRewardValue(amt); setShowOtherInput(false); }}
                            className={`flex-1 py-2.5 rounded-xl border font-syne font-bold text-[11px] transition-all ${rewardValue === amt && !showOtherInput ? 'bg-amber-500 border-amber-400 text-[#1C335A]' : 'bg-white/5 border-white/10 text-white hover:bg-white/15'}`}
                          >
                            {amt}
                          </button>
                        ))}
                        <button 
                          onClick={() => setShowOtherInput(true)}
                          className={`flex-1 py-2.5 rounded-xl border font-syne font-bold text-[11px] transition-all ${showOtherInput ? 'bg-amber-500 border-amber-400 text-[#1C335A]' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}
                        >
                          Other
                        </button>
                      </div>
                      {showOtherInput && (
                        <input 
                          type="number" 
                          placeholder="Enter custom reward amount (₹)" 
                          className="w-full input bg-white/5 border border-white/10 text-white h-12 font-medium"
                          onChange={(e) => setRewardValue(`₹${e.target.value}`)}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-4">
                <button 
                  onClick={() => setReportType(null)}
                  className="flex-1 py-4 rounded-xl border border-slate-200 font-syne font-bold text-sm text-slate-600 active:scale-95 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => navigate('/report-confirm')}
                  className="flex-[2] py-4 rounded-xl bg-[#1C335A] text-white font-syne font-bold text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Post Report <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedItem && <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />}

      <BottomNav />
    </div>
  );
}
