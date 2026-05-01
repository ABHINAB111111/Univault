import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, Send, Camera, IndianRupee, ShieldAlert, Check } from 'lucide-react';

const CONTACTS = {
  riya:  { name:'Riya Mehta',   ini:'RM', color:'#1A7A6A', item:'📚 DS Algorithms ₹220', rating:'4.9', online: true },
  karan: { name:'Karan Mehta',  ini:'KM', color:'#1C3F6E', item:'🔧 Soldering Kit ₹40/day', rating:'4.7', online: true },
  priya: { name:'Priya Kumar',  ini:'PK', color:'#5A489A', item:'🎧 Sony Headphones ₹650', rating:'4.8', online: false },
  rohan: { name:'Rohan Kumar',  ini:'RK', color:'#4A7A5A', item:'🔑 Room Keys (Found)', rating:'5.0', online: false },
  vikram:{ name:'Vikram Singh', ini:'VS', color:'#C07828', item:'🎒 Backpack Lost', rating:'4.6', online: false }
};

const CONVOS = {
  riya: [
    { from:'them', text:"Hi Arjun! Is the CLRS Algorithms book still available? I'm 2nd year CSE 😊", time:'9:12 AM' },
    { from:'me',   text:"Yes it's available! Clean copy — only minor highlights in ch.1–3. You can inspect before buying 📚", time:'9:13 AM' },
    { from:'them', text:"Great! What edition is it?", time:'9:14 AM' },
    { from:'me',   text:"4th Edition (CLRS) — perfect for DSA and CS201 courses 👍", time:'9:14 AM' },
    { from:'them', text:"Amazing. Could you do ₹180? That's honestly my max budget right now 🙏", time:'9:15 AM' },
    { type:'offer', from:'them', amount:180, status:'pending', time:'9:16 AM', note:"I'll pick it up today itself if you agree!" }
  ],
  karan: [
    { from:'them', text:"Hi! Saw your Soldering Kit listing. Is it available this weekend?", time:'Yesterday' },
    { from:'me',   text:"Hey Karan! Yes, free this weekend. What are you working on?", time:'Yesterday' },
    { from:'them', text:"Final year project — PCB for an IoT sensor array. Need it Friday to Sunday.", time:'Yesterday' },
    { from:'me',   text:"That sounds cool! 3 days = ₹120 total (₹40/day). Does that work?", time:'Yesterday' },
    { from:'them', text:"Perfect! Sending the rental request right now.", time:'Yesterday' },
    { type:'system', sub:'rental_req', from:'them', time:'9:00 AM', 
      item:'🔧 Soldering Iron Kit', duration:'3 days (Fri–Sun)', cost:'₹120', pickup:'Block B Electronics Lab',
      note:'Need for PCB project. Will return in perfect condition!' }
  ]
};

const Chat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = CONTACTS[id] || CONTACTS.riya;
  const [messages, setMessages] = useState(CONVOS[id] || []);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { from: 'me', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setInput('');
    
    // Simulate auto-reply
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = { from: 'them', text: "Got it! Thanks for the update 👍", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, reply]);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans antialiased h-full flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="bg-[#F3F1ED]/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-3 z-50">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-slate-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-syne font-extrabold text-sm shadow-md"
          style={{ backgroundColor: contact.color || '#1C3F6E' }}
        >
          {contact.ini}
        </div>
        <div className="flex-1 min-width-0">
          <h2 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 truncate tracking-tight">{contact.name}</h2>
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${contact.online ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{contact.online ? 'Online now' : 'Away'}</span>
          </div>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full border border-teal-100 dark:border-teal-800/50 flex items-center gap-2 max-w-[140px]">
          <span className="text-[10px] font-bold text-teal-600 truncate uppercase tracking-tighter italic">{contact.item.split(' ₹')[0]}</span>
        </div>
        <button className="p-2 text-slate-400">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </header>

      {/* Message List */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.from === 'me' ? 'items-end' : 'items-start'}`}>
            {msg.type === 'offer' ? (
              <div className="bg-white dark:bg-slate-900 border-2 border-amber-500 rounded-[28px] p-5 w-full max-w-[280px] shadow-xl animate-[popIn_0.4s_ease-out]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-xl shadow-inner">💰</div>
                  <div>
                    <h4 className="text-[10px] font-syne font-bold text-amber-600 uppercase tracking-widest">Price Offer</h4>
                    <p className="text-xl font-syne font-extrabold text-[#1C3F6E] dark:text-blue-400 italic">₹{msg.amount}</p>
                  </div>
                </div>
                {msg.note && <p className="text-[11px] text-slate-500 italic mb-4 font-medium">"{msg.note}"</p>}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-teal-600 text-white rounded-xl text-[10px] font-syne font-extrabold uppercase tracking-widest shadow-lg">Accept</button>
                  <button className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-syne font-extrabold uppercase tracking-widest">Decline</button>
                </div>
              </div>
            ) : msg.sub === 'rental_req' ? (
               <div className="bg-[#1C3F6E] rounded-[28px] p-5 w-full text-white shadow-2xl relative overflow-hidden group border-b-4 border-amber-600">
                  <h4 className="text-[10px] font-syne font-extrabold text-amber-400 uppercase tracking-[0.2em] mb-3 italic">Rental Request</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[11px] font-bold"><span className="opacity-60">Duration:</span><span>{msg.duration}</span></div>
                    <div className="flex justify-between text-[11px] font-bold"><span className="opacity-60">Total Cost:</span><span>{msg.cost}</span></div>
                    <div className="flex justify-between text-[11px] font-bold"><span className="opacity-60">Location:</span><span>{msg.pickup}</span></div>
                  </div>
                  <button onClick={() => navigate('/condition')} className="w-full py-3 bg-white text-[#1C3F6E] rounded-xl font-syne font-extrabold text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2">
                    <Check className="w-3.5 h-3.5" /> Approve Request
                  </button>
               </div>
            ) : (
              <div className="flex flex-col gap-1 max-w-[80%]">
                <div className={`px-4 py-3 rounded-[24px] text-[13px] font-medium leading-relaxed shadow-sm ${
                  msg.from === 'me' 
                  ? 'bg-[#1C3F6E] text-white rounded-br-none' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-bl-none border border-slate-100 dark:border-slate-800'
                }`}>
                  {msg.text}
                </div>
                <span className={`text-[9px] font-bold text-slate-400 uppercase px-2 ${msg.from === 'me' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </span>
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full rounded-bl-none w-fit border border-slate-100 dark:border-slate-800 shadow-sm animate-pulse">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typing...</span>
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-8">
        <div className="flex gap-3 mb-3 overflow-x-auto no-scrollbar py-1">
          {['Meet today? 📅', '₹150 deal? 💰', 'Location? 📍', 'Thanks! 🙏'].map((chip, idx) => (
            <button 
              key={idx}
              onClick={() => setInput(chip)}
              className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 rounded-full border border-slate-100 dark:border-slate-700 text-[10px] font-bold uppercase tracking-widest shadow-sm hover:scale-105 active:scale-95 transition-all whitespace-nowrap italic"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-[#1C3F6E] outline-none dark:text-slate-300 italic"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button className="p-1.5 text-slate-400"><Camera className="w-5 h-5" /></button>
              <button className="p-1.5 text-slate-400"><IndianRupee className="w-5 h-5" /></button>
            </div>
          </div>
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xl ${
              input.trim() ? 'bg-[#1C3F6E] text-white scale-110 rotate-[-12deg]' : 'bg-slate-100 text-slate-300 scale-100 rotate-0'
            }`}
          >
            <Send className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
