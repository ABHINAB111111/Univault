import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCheck, Search, Filter, MessageSquare, Bell } from 'lucide-react';

const CONTACTS = {
  riya:  { id:'riya',  name:'Riya Mehta',   ini:'RM', color:'#1A7A6A', item:'📚 DS Algorithms ₹220',    type:'sell', rating:'4.9', online: true, time: '9:16 AM', preview: '💰 Price offer: ₹180', unread: 1 },
  karan: { id:'karan', name:'Karan Mehta',  ini:'KM', color:'#1C3F6E', item:'🔧 Soldering Kit ₹40/day', type:'buy',  rating:'4.7', online: true, time: '9:03 AM', preview: 'Also — do you have a desol...', unread: 2 },
  priya: { id:'priya', name:'Priya Kumar',  ini:'PK', color:'#5A489A', item:'🎧 Sony Headphones ₹650',  type:'sell', rating:'4.8', online: false, time: 'Mar 20', preview: 'Sure! I\'ll hold it for you...', unread: 0 },
  rohan: { id:'rohan', name:'Rohan Kumar',  ini:'RK', color:'#4A7A5A', item:'🔑 Room Keys (Found)',      type:'lf',   rating:'5.0', online: false, time: '9:11 AM', preview: 'Almost there — 5 mins! ⏰', unread: 0 },
  vikram:{ id:'vikram',name:'Vikram Singh', ini:'VS', color:'#C07828', item:'🎒 Backpack Lost',           type:'lf',   rating:'4.6', online: false, time: '9:44 AM', preview: 'Thanks bhai 🙏 Also informed...', unread: 1 }
};

const ChatInbox = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredContacts = Object.values(CONTACTS).filter(c => {
    if (filter === 'all') return true;
    if (filter === 'unread') return c.unread > 0;
    return c.type === filter;
  });

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400 italic">Messages</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-teal-600 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
              <CheckCheck className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="pt-20 px-6 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
        {['all', 'unread', 'sell', 'buy', 'lf'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full font-syne font-bold text-[11px] uppercase tracking-widest transition-all whitespace-nowrap ${
              filter === f 
              ? 'bg-[#1C3F6E] text-white shadow-lg scale-105' 
              : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'
            }`}
          >
            {f === 'lf' ? 'Lost & Found' : f}
          </button>
        ))}
      </div>

      {/* Inbox List */}
      <main className="flex-1 px-4 overflow-y-auto pb-32 no-scrollbar overscroll-contain">
        <div className="space-y-1">
          {filteredContacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => navigate(`/chat/${contact.id}`)}
              className="bg-white dark:bg-slate-900 p-4 rounded-[24px] flex gap-4 border border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group relative overflow-hidden"
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-syne font-extrabold text-lg shadow-lg border-2 border-white dark:border-slate-900"
                  style={{ backgroundColor: contact.color }}
                >
                  {contact.ini}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm"></div>
                )}
              </div>

              <div className="flex-1 min-width-0 pt-0.5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`font-syne font-bold text-sm tracking-tight ${contact.unread > 0 ? 'text-[#1C3F6E] dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                    {contact.name}
                  </h3>
                  <span className={`text-[10px] font-bold ${contact.unread > 0 ? 'text-[#1C3F6E] dark:text-blue-400' : 'text-slate-400'}`}>
                    {contact.time}
                  </span>
                </div>
                
                <p className={`text-[12px] truncate pr-4 ${contact.unread > 0 ? 'text-slate-900 dark:text-white font-extrabold italic' : 'text-slate-500 dark:text-slate-400 font-medium'}`}>
                  {contact.preview}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <div className="bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-slate-100 dark:border-slate-700">
                    <div className={`w-1 h-1 rounded-full ${contact.type === 'sell' ? 'bg-teal-500' : contact.type === 'buy' ? 'bg-[#1C3F6E]' : 'bg-violet-500'}`}></div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter truncate max-w-[120px]">{contact.item}</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#C07828] uppercase tracking-tighter">⭐ {contact.rating}</span>
                </div>
              </div>

              {contact.unread > 0 && (
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#1C3F6E] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {contact.unread}
                  </div>
                </div>
              )}

              {/* Action decoration */}
              <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-40 h-40 bg-teal-50/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:right-[-20px] transition-all"></div>
            </div>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
            <MessageSquare className="w-16 h-16 text-slate-300 mb-4" />
            <h4 className="font-syne font-bold text-slate-400 uppercase tracking-widest text-xs">No conversations found</h4>
          </div>
        )}
      </main>
    </div>
  );
};

export default ChatInbox;
