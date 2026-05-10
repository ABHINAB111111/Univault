import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, BellOff, Settings, Moon, Clock, ChevronRight } from 'lucide-react';

const NOTIF_GROUPS = [
  {
    title: 'Lost & Found',
    items: [
      { id: 'near_you', label: 'Found Near You', sub: 'Items matching your reports', icon: '🔑', color: 'bg-violet-50 text-violet-600' },
      { id: 'lost_alerts', label: 'Campus Lost Alerts', sub: 'New lost reports nearby', icon: '📢', color: 'bg-rose-50 text-rose-600' },
      { id: 'reward_upd', label: 'Reward Updates', sub: 'When a reward is offered', icon: '🎁', color: 'bg-amber-50 text-amber-600' },
    ]
  },
  {
    title: 'Rentals',
    items: [
      { id: 'reminders', label: 'Return Reminders', sub: '48h and 24h before due date', icon: '⏰', color: 'bg-amber-50 text-amber-600' },
      { id: 'new_req', label: 'New Rental Requests', sub: 'When someone requests your item', icon: '📋', color: 'bg-blue-50 text-blue-600' },
      { id: 'status_upd', label: 'Request Approved', sub: 'Updates on your rent requests', icon: '✅', color: 'bg-teal-50 text-teal-600' },
    ]
  },
  {
    title: 'Marketplace',
    items: [
      { id: 'offers', label: 'New Offers', sub: 'Price offers on your listings', icon: '💰', color: 'bg-blue-50 text-blue-600' },
      { id: 'price_drop', label: 'Price Drops', sub: 'When saved items get cheaper', icon: '📉', color: 'bg-emerald-50 text-emerald-600' },
      { id: 'messages', label: 'New Messages', sub: 'Unread chat notifications', icon: '💬', color: 'bg-blue-50 text-blue-600' },
    ]
  }
];

const NotificationSettings = () => {
  const navigate = useNavigate();
  const [toggles, setToggles] = useState({
    near_you: true, lost_alerts: true, reward_upd: true,
    reminders: true, new_req: true, status_upd: true,
    offers: true, price_drop: false, messages: true,
    quiet_hours: false
  });

  const toggle = (id) => setToggles(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased h-full flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400 uppercase italic">Notifications</h1>
          </div>
          <Bell className="w-5 h-5 text-amber-600 shadow-inner" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-12 px-6 overflow-y-auto">
        {NOTIF_GROUPS.map((group) => (
          <div key={group.title} className="mb-8">
            <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">{group.title}</h4>
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800">
              {group.items.map((item, iIdx) => (
                <div 
                  key={item.id} 
                  onClick={() => toggle(item.id)}
                  className={`flex items-center justify-between p-4 ${iIdx < group.items.length - 1 ? 'border-b border-slate-50 dark:border-slate-800' : ''} hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl italic shadow-inner ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-syne font-bold text-[13px] text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">{item.label}</h5>
                      <p className="text-[10px] text-slate-400 font-medium">{item.sub}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${toggles[item.id] ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'}`}>
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${toggles[item.id] ? 'left-4.5' : 'left-0.5'}`} style={{ left: toggles[item.id] ? '18px' : '2px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quiet Hours */}
        <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">System Controls</h4>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-50 dark:border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${toggles.quiet_hours ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Quiet Hours</h4>
                <p className="text-[10px] text-slate-400 font-medium">Mute notifications at night</p>
              </div>
            </div>
            <button 
              onClick={() => toggle('quiet_hours')}
              className={`w-14 h-8 rounded-full relative transition-colors duration-300 shadow-inner ${toggles.quiet_hours ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${toggles.quiet_hours ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>
          
          {toggles.quiet_hours && (
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50 dark:border-slate-800 animate-[navSlide_0.3s_ease-out]">
              <div className="space-y-1.5 px-1">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> From
                </label>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-[#1C3F6E] dark:text-blue-400 italic">10:00 PM</div>
              </div>
              <div className="space-y-1.5 px-1">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> Until
                </label>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-[#1C3F6E] dark:text-blue-400 italic">07:00 AM</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationSettings;
