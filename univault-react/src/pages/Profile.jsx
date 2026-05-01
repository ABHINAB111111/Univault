import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  ShieldCheck, 
  FileText, 
  Package, 
  CreditCard, 
  LogOut, 
  ChevronRight,
  Settings as SettingsIcon,
  MoreVertical,
  ArrowLeft,
  Award,
  Zap,
  TrendingUp,
  Star,
  Heart,
  MapPin,
  LifeBuoy,
  Bell,
  Gavel,
  QrCode,
  HelpCircle,
  Edit2,
  Inbox,
  Camera,
  Trophy,
  CheckCircle2,
  Flame,
  Award as BadgeIcon
} from 'lucide-react';
import { StatusBar, BottomNav, Toast } from '../components/Layout';
import { ConfirmDialog, FormSheet } from '../components/Sheets';
import { useSettings } from '../contexts/SettingsContext';

const menuGroups = [
  {
    section: 'Academic Portfolio',
    items: [
      { icon: Package, label: 'My Vaulted Items', sub: '142 items listed', color: 'text-[#1C3F6E]', bg: 'bg-[#1C3F6E]/5', path: '/vault' },
      { icon: FileText, label: 'Active Rentals', sub: '3 items rented out', color: 'text-amber-600', bg: 'bg-amber-50', path: '/vault' },
      { icon: Award, label: 'Rewards & Badges', sub: '4 premium badges earned', color: 'text-teal-600', bg: 'bg-teal-50', path: '/rewards' },
    ],
  },
  {
    section: 'Account Settings',
    items: [
      { icon: SettingsIcon, label: 'App Settings', sub: 'Theme, font, privacy & more', color: 'text-slate-600', bg: 'bg-slate-100', path: '/settings' },
      { icon: CreditCard, label: 'Payment Methods', sub: 'UPI, Card, Cash', color: 'text-violet-600', bg: 'bg-violet-50' },
      { icon: ShieldCheck, label: 'Security & Campus ID', sub: 'Verified Senior status', color: 'text-blue-600', bg: 'bg-blue-50' },
      { icon: LogOut, label: 'Sign Out', sub: 'Securely end session', color: 'text-rose-600', bg: 'bg-rose-50', action: 'signout' },
    ],
  },
  {
    section: 'Campus Discovery',
    items: [
      { icon: Heart, label: 'Saved Wishlist', sub: '6 items saved', color: 'text-rose-500', bg: 'bg-rose-50', path: '/wishlist' },
      { icon: MapPin, label: 'Safe Meetup Map', sub: 'Campus safety zones', color: 'text-emerald-600', bg: 'bg-emerald-50', path: '/map' },
      { icon: Star, label: 'My Reviews', sub: '4.9 average rating', color: 'text-amber-500', bg: 'bg-amber-50', path: '/reviews' },
    ],
  },
  {
    section: 'Support & System',
    items: [
      { icon: HelpCircle, label: 'Help & Support', sub: 'FAQs & Live Chat', color: 'text-[#1C3F6E]', bg: 'bg-[#1C3F6E]/5', path: '/help' },
      { icon: Bell, label: 'Notification Settings', sub: 'Manage alerts', color: 'text-amber-600', bg: 'bg-amber-50', path: '/notification-settings' },
      { icon: Gavel, label: 'Dispute Center', sub: 'Report transaction issues', color: 'text-rose-600', bg: 'bg-rose-50', path: '/dispute' },
      { icon: QrCode, label: 'Share Profile / ID', sub: 'Your unique campus QR', color: 'text-teal-600', bg: 'bg-teal-50', path: '/share-profile' },
      { icon: Inbox, label: 'Messages / Inbox', sub: 'Active conversations', color: 'text-indigo-600', bg: 'bg-indigo-50', path: '/inbox' },
    ],
  },
  {
    section: 'Administrative',
    items: [
      { icon: ShieldCheck, label: 'Admin Panel', sub: 'Campus moderation tools', color: 'text-rose-700', bg: 'bg-rose-100', path: '/admin' },
    ],
  },
];

const achievements = [
  { icon: Trophy, label: 'Campus Legend', desc: '100+ items shared', color: 'text-amber-500' },
  { icon: CheckCircle2, label: 'Quick Responder', desc: 'Avg 5min reply', color: 'text-sky-500' },
  { icon: Flame, label: '7 Day Streak', desc: 'Active every day', color: 'text-rose-500' },
  { icon: BadgeIcon, label: 'Safe Trader', desc: 'No disputes', color: 'text-emerald-500' },
];

export default function Profile() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [trust, setTrust] = useState(0);

  // User State with LocalStorage Persistence
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('univault_user');
    return saved ? JSON.parse(saved) : {
      name: 'Arjun Mehta',
      id: '21BCE1892',
      dept: 'Computer Science',
      avatar: '/assets/avatar.png',
      stats: {
        items: '142',
        trust: '890',
        rents: '12',
        rating: '4.9'
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('univault_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    // Animate trust score
    const target = 87;
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= target) {
        setTrust(target);
        clearInterval(interval);
      } else {
        setTrust(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (item) => {
    if (item.action === 'signout') {
      setConfirmSignOut(true);
    } else if (item.path && item.path !== '/profile') {
      navigate(item.path);
    } else {
      setToast(`${item.label} functionality coming soon!`);
    }
  };

  const handleUpdateProfile = (values) => {
    setUser(prev => ({
      ...prev,
      name: values.name || prev.name,
      id: values.id || prev.id,
      dept: values.dept || prev.dept
    }));
    setToast('Profile updated successfully!');
  };

  const { settings, getTheme } = useSettings();
  const theme = getTheme();

  return (
    <div className={`flex flex-col h-full relative overflow-hidden font-dm-sans ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F3F1ED]'}`} style={{ fontFamily: 'var(--font-body)' }}>
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}

      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar overscroll-contain">
        {/* Header Anchor */}
        <header className={`sticky top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-12 backdrop-blur-md transition-colors ${settings.darkMode ? 'bg-slate-950/80' : 'bg-[#F3F1ED]/80'}`}>
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-5 h-5 cursor-pointer" style={{ color: 'var(--color-primary)' }} onClick={() => navigate(-1)} />
            <h1 className="text-xl font-bold font-syne tracking-wider" style={{ color: 'var(--color-primary)' }}>UniVault</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowEdit(true)}
              className="p-2 bg-white/50 rounded-lg hover:bg-white transition-colors"
            >
              <Edit2 className="w-4 h-4 text-[#1C3F6E]" />
            </button>
            <MoreVertical className="w-5 h-5 text-[#1C3F6E] cursor-pointer" />
          </div>
        </header>

        {/* Navy Hero Section */}
        <section className="relative w-full pt-8 pb-16 px-6 overflow-hidden" style={{ background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})` }}>
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full blur-3xl" style={{ background: `${theme.accent}15` }}></div>
          <div className="relative z-10 flex flex-col items-center text-center mt-4">
            <div className="relative group">
              <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={() => {
                  const newAvatar = user.avatar.includes('avatar.png') ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80' : '/assets/avatar.png';
                  setUser(prev => ({ ...prev, avatar: newAvatar }));
                  setToast('Avatar updated!');
                }}
                className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#1B1916] rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg active:scale-90 transition-all hover:bg-black"
              >
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-[24px] syne-ultra-wide text-white mb-2 leading-none mt-5">{user.name}</h2>
            <p className="text-[12px] text-white/60 mb-4 font-medium uppercase tracking-widest">{user.dept} • {user.id}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-3 py-1 bg-[#C07828] border border-white/20 rounded-full text-[9px] font-bold text-white tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                <Trophy size={10} /> Gold Member
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-bold text-white tracking-widest uppercase">Verified Student</span>
            </div>

            {/* 4-Stat Grid */}
            <div className="grid grid-cols-4 w-full max-w-sm mx-auto relative border-t border-white/10 pt-6 mt-2">
              <div className="flex flex-col items-center cursor-pointer active:opacity-60 transition-opacity" onClick={() => navigate('/vault')}>
                <span className="text-white syne-wide text-xl leading-none">{user.stats.items}</span>
                <span className="text-white/50 text-[9px] uppercase font-bold tracking-widest mt-2 font-syne">Items</span>
              </div>
              <div className="w-px h-6 bg-white/15 self-center"></div>
              <div className="flex flex-col items-center cursor-pointer active:opacity-60 transition-opacity">
                <span className="text-white syne-wide text-xl leading-none">{user.stats.trust}</span>
                <span className="text-white/50 text-[9px] uppercase font-bold tracking-widest mt-2 font-syne">Trust</span>
              </div>
              <div className="w-px h-6 bg-white/15 self-center"></div>
              <div className="flex flex-col items-center cursor-pointer active:opacity-60 transition-opacity" onClick={() => navigate('/vault')}>
                <span className="text-white syne-wide text-xl leading-none">{user.stats.rents}</span>
                <span className="text-white/50 text-[9px] uppercase font-bold tracking-widest mt-2 font-syne">Rents</span>
              </div>
              <div className="w-px h-6 bg-white/15 self-center"></div>
              <div className="flex flex-col items-center cursor-pointer active:opacity-60 transition-opacity" onClick={() => navigate('/reviews')}>
                <span className="text-white syne-wide text-xl leading-none">{user.stats.rating}</span>
                <span className="text-white/50 text-[9px] uppercase font-bold tracking-widest mt-2 font-syne">Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="px-6 -mt-8 relative z-20">
          {/* Trust Card */}
          <div 
            className="bg-white rounded-2xl p-5 shadow-[0_2px_14px_rgba(27,25,22,0.06)] mb-8 transition-all active:scale-[0.98] cursor-pointer hover:shadow-xl group"
            onClick={() => navigate('/profile-stats')}
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="section-label mb-1">CAMPUS TRUST SCORE</h3>
                <p className="text-[11px] text-slate-400 font-medium">Top 5% of active users this month</p>
              </div>
              <div className="text-teal-600 syne-ultra-wide text-3xl group-hover:scale-110 transition-transform">{trust}/100</div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-[#EEEEEC] h-2 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-1000 ease-out"
                style={{ width: `${trust}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Activity Level</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-teal-600 uppercase">LVL 4 CAMPUS LEGEND</span>
                <ChevronRight className="w-3 h-3 text-teal-600" />
              </div>
            </div>
          </div>

          {/* Achievement Showcase */}
          <div className="mb-8">
            <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 flex justify-between">
              Achievements
              <span className="text-[#1C3F6E] lowercase font-normal cursor-pointer" onClick={() => navigate('/rewards')}>view all</span>
            </h4>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-2">
              {achievements.map((ach) => (
                <div 
                  key={ach.label}
                  className="min-w-[120px] bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center animate-fade-in"
                >
                  <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2 ${ach.color}`}>
                    <ach.icon size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#1B1916] whitespace-nowrap">{ach.label}</span>
                  <span className="text-[9px] text-slate-400 mt-1 whitespace-nowrap">{ach.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Sections */}
          <div className="space-y-8 pb-12">
            {menuGroups.map((group) => (
              <div key={group.section} className="animate-fade">
                <h4 className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">{group.section}</h4>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(27,25,22,0.06)]">
                  {group.items.map((item, i) => (
                    <div 
                      key={item.label} 
                      onClick={() => handleAction(item)}
                      className={`flex items-center justify-between p-4 hover:bg-slate-50 transition-all duration-300 cursor-pointer ${i < group.items.length - 1 ? 'border-b border-[#ECEAE5]/30' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-dm-sans font-bold text-[#1B1916] text-[15px]">{item.label}</span>
                          <span className="text-[11px] text-slate-400 font-medium tracking-tight">{item.sub}</span>
                        </div>
                      </div>
                      {item.action === 'signout' ? null : <ChevronRight className="w-4 h-4 text-slate-300" />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showEdit && (
        <FormSheet
          title="Edit Profile"
          onClose={() => setShowEdit(false)}
          onSubmit={handleUpdateProfile}
          fields={[
            { key: 'name', label: 'Full Name', placeholder: user.name, required: true },
            { key: 'id', label: 'Campus Registration ID', placeholder: user.id, required: true },
            { key: 'dept', label: 'Department / Major', placeholder: user.dept, required: true, type: 'select', options: ['Computer Science', 'Electronic Engineering', 'Mechanical', 'Design', 'Business', 'Arts'] },
          ]}
        />
      )}

      {confirmSignOut && (
        <ConfirmDialog
          icon={<LogOut className="w-12 h-12 text-rose-500" />}
          title="Sign Out?"
          body="You'll need to sign in again to access campus services. Are you sure?"
          confirmLabel="Sign Out"
          confirmStyle="danger"
          onConfirm={() => { setConfirmSignOut(false); navigate('/login'); }}
          onCancel={() => setConfirmSignOut(false)}
        />
      )}

      <BottomNav />
    </div>
  );
}
