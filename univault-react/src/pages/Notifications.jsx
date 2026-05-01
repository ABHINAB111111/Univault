import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bell, 
  ShoppingBag, 
  Key, 
  Search, 
  Info, 
  CheckCircle2, 
  X,
  MoreVertical
} from 'lucide-react';
import { StatusBar, BottomNav } from '../components/Layout';
import { useSettings } from '../contexts/SettingsContext';

const notifRoutes = {
  sale: '/marketplace',
  rental: '/vault',
  found: '/lost-found',
  system: '/settings',
  award: '/rewards',
};

const initialNotifications = [
  { id: 1, type: 'sale', title: 'Item Sold!', desc: '"Physics Vol. 2" was purchased by Rohan M.', time: '2m ago', unread: true, icon: ShoppingBag, color: 'text-teal-600', bg: 'bg-teal-50' },
  { id: 2, type: 'rental', title: 'Due Soon', desc: 'Camera Kit is due for return by 4 PM tomorrow.', time: '1h ago', unread: true, icon: Key, color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 3, type: 'found', title: 'Match Found!', desc: 'Someone reported finding "Blue Keys" in Library.', time: '3h ago', unread: false, icon: Search, color: 'text-[#1C3F6E]', bg: 'bg-[#1C3F6E]/5' },
  { id: 4, type: 'system', title: 'Security Alert', desc: 'New login detected from a Chrome browser.', time: 'Yesterday', unread: false, icon: Info, color: 'text-slate-500', bg: 'bg-slate-50' },
  { id: 5, type: 'award', title: 'Badge Earned!', desc: 'You received the "Trusted Seller" badge.', time: '2 days ago', unread: false, icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const navigate = useNavigate();

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const removeNotif = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const { settings } = useSettings();

  return (
    <div className={`flex flex-col h-full font-dm-sans overflow-hidden ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F3F1ED]'}`} style={{ fontFamily: 'var(--font-body)' }}>
      <div className={`pt-2 pb-5 px-6 shadow-sm border-b z-40 ${settings.darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
        <StatusBar />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-5 h-5 cursor-pointer" style={{ color: 'var(--color-primary)' }} onClick={() => navigate(-1)} />
            <h1 className={`font-syne font-extrabold text-2xl tracking-tight ${settings.darkMode ? 'text-white' : 'text-[#1B1916]'}`}>Activity Feed</h1>
          </div>
          <button 
            onClick={markAllRead}
            className="text-[10px] font-bold uppercase tracking-widest hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Mark all read
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32 no-scrollbar overscroll-contain">
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div 
                  key={n.id}
                  className={`relative rounded-3xl p-4 flex gap-4 shadow-[0_2px_12px_rgba(27,24,22,0.04)] transition-all transform hover:scale-[1.01] animate-fade ${settings.darkMode ? 'bg-slate-900' : 'bg-white'} ${n.unread ? 'ring-2' : ''}`}
                  style={n.unread ? { '--tw-ring-color': 'var(--color-primary)' } : {}}
                >
                  {n.unread && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(192,120,40,0.5)]" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-2xl ${n.bg} flex items-center justify-center ${n.color} shrink-0`}>
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex justify-between items-start mb-0.5">
                      <h3 className="font-syne font-bold text-sm text-[#1B1916]">{n.title}</h3>
                      <span className="text-[9px] font-bold text-slate-300 uppercase">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-3">
                      {n.desc}
                    </p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigate(notifRoutes[n.type] || '/')}
                        className={`px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-colors active:scale-95 ${settings.darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'}`}
                        style={{ color: 'var(--color-primary)' }}
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => removeNotif(n.id)}
                        className="p-1 px-2 bg-slate-50 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20 text-center animate-fade">
            <div className="w-20 h-20 bg-white rounded-[32px] flex items-center justify-center text-slate-100 mb-6 shadow-sm">
              <Bell size={40} strokeWidth={1} />
            </div>
            <h3 className="font-syne font-extrabold text-lg text-[#1B1916] mb-1 tracking-tight">Inbox Empty</h3>
            <p className="text-xs font-medium text-slate-400 px-12 leading-relaxed italic">
              When there's campus activity, you'll see your alerts here.
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
