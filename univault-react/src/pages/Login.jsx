import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  User, 
  AlertCircle, 
  ArrowRight, 
  Rocket,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !pass) { setError('Please fill in all fields.'); return; }
    if (tab === 'register' && !name.trim()) { setError('Please enter your name.'); return; }
    if (tab === 'register' && pass !== confirm) { setError('Passwords do not match.'); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/onboarding');
    }, 1200);
  };

  const handleDemo = () => {
    setLoading(true);
    setTimeout(() => navigate('/'), 800);
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#1C3F6E] via-[#0E2244] to-[#0A1A34] flex flex-col items-center p-6 relative overflow-y-auto no-scrollbar font-dm-sans">
      {/* Dynamic Blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-[220px] h-[220px] bg-emerald-500/20 rounded-full blur-[60px] animate-pulse" />
      <div className="absolute top-[40%] right-[-80px] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[60px] animate-pulse [animation-delay:1s]" />
      <div className="absolute bottom-[-60px] left-[20%] w-[180px] h-[180px] bg-indigo-500/10 rounded-full blur-[50px]" />

      {/* Main Container */}
      <div className="w-full maxWidth-[360px] z-10 flex flex-col items-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-[22px] border border-white/20 flex items-center justify-center mb-6 shadow-2xl shadow-black/20 animate-scaleIn">
          <ShieldCheck size={32} className="text-white" strokeWidth={2} />
        </div>

        <h1 className="font-syne font-extrabold text-4xl text-white mb-1 tracking-tighter animate-fadeUp">UniVault</h1>
        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-10 animate-fadeUp [animation-delay:0.1s]">Campus Asset Network</p>

        {/* Tab Switcher */}
        <div className="w-full max-w-[320px] bg-white/5 backdrop-blur-md rounded-2xl p-1.5 flex mb-8 border border-white/10 animate-fadeUp [animation-delay:0.2s]">
          {['signin', 'register'].map(t => (
            <button 
              key={t} 
              onClick={() => { setTab(t); setError(''); }} 
              className={`flex-1 py-3 px-4 rounded-xl font-syne font-extrabold text-xs transition-all duration-300
                ${tab === t ? 'bg-white text-[#1C3F6E] shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              {t === 'signin' ? 'Sign In' : 'Join Now'}
            </button>
          ))}
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[320px] flex flex-col gap-4 animate-fadeUp [animation-delay:0.3s]">
          {tab === 'register' && (
            <div className="group">
              <label className="block text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 px-1 group-focus-within:text-white/60 transition-colors">Full Name</label>
              <div className="relative">
                <input 
                  className="w-full bg-white/[0.08] border border-white/10 rounded-2xl py-3.5 px-12 text-sm text-white placeholder-white/20 outline-none focus:bg-white/10 focus:border-white/30 transition-all font-medium"
                  placeholder="e.g. Julian Pearce"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              </div>
            </div>
          )}

          <div className="group">
            <label className="block text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 px-1 group-focus-within:text-white/60 transition-colors">University Email</label>
            <div className="relative">
              <input 
                className="w-full bg-white/[0.08] border border-white/10 rounded-2xl py-3.5 px-12 text-sm text-white placeholder-white/20 outline-none focus:bg-white/10 focus:border-white/30 transition-all font-medium"
                type="email"
                placeholder="you@university.edu"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            </div>
          </div>

          <div className="group">
            <label className="block text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 px-1 group-focus-within:text-white/60 transition-colors">Security Key</label>
            <div className="relative">
              <input 
                className="w-full bg-white/[0.08] border border-white/10 rounded-2xl py-3.5 px-12 text-sm text-white placeholder-white/20 outline-none focus:bg-white/10 focus:border-white/30 transition-all font-medium"
                type="password"
                placeholder="••••••••"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            </div>
          </div>

          {tab === 'register' && (
            <div className="group">
              <label className="block text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 px-1 group-focus-within:text-white/60 transition-colors">Confirm Key</label>
              <div className="relative">
                <input 
                  className="w-full bg-white/[0.08] border border-white/10 rounded-2xl py-3.5 px-12 text-sm text-white placeholder-white/20 outline-none focus:bg-white/10 focus:border-white/30 transition-all font-medium"
                  type="password"
                  placeholder="••••••••"
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                />
                <ShieldCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              </div>
            </div>
          )}

          {tab === 'signin' && (
            <div className="flex justify-end mt-[-4px]">
              <button 
                type="button"
                onClick={() => alert('Access reset link sent to your university address!')}
                className="text-[11px] font-medium text-white/40 hover:text-white/80 transition-colors"
              >
                Restore access?
              </button>
            </div>
          )}

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3.5 flex items-center gap-3 text-rose-300 text-xs font-semibold animate-shake">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-[18px] font-syne font-black text-sm uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-black/10
              ${loading ? 'bg-white/20 text-white/40 cursor-default' : 'bg-white text-[#1C3F6E] hover:bg-slate-50'}`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-[#1C3F6E]/30 border-t-[#1C3F6E] rounded-full animate-spin" />
            ) : (
              <>
                {tab === 'signin' ? 'Unlock Vault' : 'Initialize Account'}
                <ArrowRight size={18} strokeWidth={2.5} />
              </>
            )}
          </button>
        </form>

        <div className="w-full max-w-[320px] flex items-center gap-4 my-8 animate-fadeUp [animation-delay:0.4s]">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-[10px] font-black text-white/25 uppercase tracking-widest">Trust Network</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        <button 
          onClick={handleDemo}
          disabled={loading}
          className="w-full max-w-[320px] bg-white/[0.04] border border-white/10 rounded-2xl py-3.5 flex items-center justify-center gap-2.5 font-syne font-extrabold text-[13px] text-white/80 hover:bg-white/[0.08] hover:text-white transition-all active:scale-[0.98] animate-fadeUp [animation-delay:0.5s]"
        >
          <Rocket size={16} className="text-blue-400" />
          Quick Access Mode
        </button>

        <p className="mt-10 text-[10px] text-center text-white/20 max-w-[240px] leading-relaxed font-medium animate-fadeUp [animation-delay:0.6s]">
          By proceeding, you verify your student identity in our decentralized vault system.
        </p>
      </div>
    </div>
  );
}
