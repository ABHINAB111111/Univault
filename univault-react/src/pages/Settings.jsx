import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Moon, Sun, Type, Bell, Mail, MessageSquare, Eye, Shield, Trash2,
  ChevronRight, ChevronLeft, Info, Palette, Globe, Lock,
  Volume2, Vibrate, Download, Upload, Database, WifiOff,
  Accessibility, ZoomIn, Hand, Contrast,
  RefreshCcw, FileText, ExternalLink,
  Star, Flag, Bug, RotateCcw, Fingerprint, KeyRound,
  MapPin, Clock, BellRing,
  CircleDot, Square, RectangleHorizontal, Sparkles
} from 'lucide-react';
import { StatusBar, Toast } from '../components/Layout';
import { useSettings, THEMES } from '../contexts/SettingsContext';

const FONTS = ['DM Sans', 'Inter', 'Roboto', 'Syne', 'Poppins', 'Outfit'];
const LANGUAGES = ['English', 'Hindi', 'Assamese', 'Bengali', 'Tamil'];
const ICON_SHAPES = ['Rounded', 'Circle', 'Square'];
const FONT_SIZES = ['Small', 'Medium', 'Large', 'Extra Large'];
const THEME_LIST = Object.entries(THEMES).map(([name, val]) => ({ name, ...val }));

function Toggle({ on, onChange }) {
  return (
    <div onClick={e => { e.stopPropagation(); onChange(!on); }}
      className={`w-11 h-6 rounded-full relative transition-colors duration-300 cursor-pointer flex-shrink-0 ${on ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${on ? 'left-6' : 'left-1'}`} />
    </div>
  );
}

function SettingRow({ icon: Icon, label, sub, isToggle, toggleKey, onClick, danger, chevron = true, right }) {
  const { settings, toggleSetting } = useSettings();
  const isOn = isToggle ? settings[toggleKey] : false;

  return (
    <div onClick={() => isToggle ? toggleSetting(toggleKey) : onClick?.()}
      className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 transition-all border-b border-slate-50 dark:border-slate-800 last:border-0">
      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${danger ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-500' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500'}`}
        style={{ borderRadius: 'var(--icon-radius, 12px)' }}>
        <Icon size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-syne font-extrabold text-[13px] ${danger ? 'text-rose-500' : 'text-[#1B1916] dark:text-white'}`}>{label}</div>
        <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500 truncate tracking-tight">{sub}</div>
      </div>
      {right ? right : isToggle ? (
        <Toggle on={isOn} onChange={() => toggleSetting(toggleKey)} />
      ) : chevron ? (
        <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
      ) : null}
    </div>
  );
}

function OptionSheet({ title, options, selected, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-[500] flex items-end animate-fade" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 w-full rounded-t-[32px] p-6 pb-10 animate-slideUp max-h-[70%] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mx-auto mb-6" />
        <h3 className="font-syne font-extrabold text-lg text-[#1B1916] dark:text-white mb-6 tracking-tight">{title}</h3>
        <div className="space-y-2">
          {options.map(opt => {
            const val = typeof opt === 'string' ? opt : opt.name;
            const isActive = selected === val;
            return (
              <div key={val} onClick={() => { onSelect(val); onClose(); }}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${isActive ? 'bg-[var(--color-primary)]/5 ring-2 ring-[var(--color-primary)]/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                {typeof opt !== 'string' && opt.primary && (
                  <div className="flex gap-1.5">
                    <div className="w-6 h-6 rounded-full shadow-inner border border-white/20" style={{ background: opt.primary }} />
                    <div className="w-6 h-6 rounded-full shadow-inner border border-white/20" style={{ background: opt.accent }} />
                  </div>
                )}
                <span className={`font-bold text-sm ${isActive ? 'text-[#1B1916] dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                  style={typeof opt === 'string' && title.includes('Font') ? { fontFamily: opt } : {}}>
                  {val}
                </span>
                {isActive && <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--color-primary)' }}><div className="w-2 h-2 bg-white rounded-full" /></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8 animate-fadeUp">
      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-1">{title}</p>
      <div className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
        {children}
      </div>
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const { settings, updateSetting, toggleSetting, resetAll, getTheme } = useSettings();
  const [toast, setToast] = useState(null);
  const [activeSheet, setActiveSheet] = useState(null);
  const [cacheSize, setCacheSize] = useState('48 MB');

  const theme = getTheme();

  const handleToggleWithToast = (key) => {
    toggleSetting(key);
    const labels = { darkMode: 'Dark Mode', push: 'Push Notifications', email: 'Email Digest', chat: 'Chat Alerts', '2fa': 'Two-Factor Auth', biometric: 'Biometric Login', sound: 'Sound Effects', haptics: 'Haptic Feedback', autoSave: 'Auto-Save', offlineMode: 'Offline Mode', animations: 'Animations', compactMode: 'Compact Mode', largeText: 'Large Text', highContrast: 'High Contrast', reducedMotion: 'Reduced Motion', screenReader: 'Screen Reader', readReceipts: 'Read Receipts', onlineStatus: 'Online Status', locationSharing: 'Location Sharing', analytics: 'Analytics', autoUpdate: 'Auto-Update' };
    setToast(`${labels[key] || key} ${settings[key] ? 'disabled' : 'enabled'}`);
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 flex-shrink-0 border-b border-slate-100 dark:border-slate-800 shadow-sm z-40">
        <StatusBar />
        <div className="flex items-center px-4 pt-1 pb-4">
          <button onClick={() => navigate('/profile')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-90 transition-all text-slate-400">
            <ChevronLeft size={24} />
          </button>
          <h1 className="flex-1 text-center font-syne font-extrabold text-lg text-[#1B1916] dark:text-white tracking-tight mr-10">Settings</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar pb-32 overscroll-contain">

        {/* Dark Mode Hero Card */}
        <div className="rounded-[24px] p-5 mb-8 flex items-center justify-between shadow-xl transition-all active:scale-[0.98] cursor-pointer"
          style={{ background: settings.darkMode ? 'linear-gradient(135deg, #1a1a2e, #16213e)' : '#1B1916' }}
          onClick={() => handleToggleWithToast('darkMode')}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              {settings.darkMode ? <Moon size={24} className="text-blue-400" /> : <Sun size={24} className="text-amber-400" />}
            </div>
            <div>
              <div className="font-syne font-extrabold text-white text-lg mb-0.5 tracking-tight">{settings.darkMode ? 'Dark Mode' : 'Light Mode'}</div>
              <div className="text-[11px] text-slate-400 font-medium">{settings.darkMode ? 'Easy on the eyes' : 'Bright & clean'}</div>
            </div>
          </div>
          <Toggle on={settings.darkMode} onChange={() => handleToggleWithToast('darkMode')} />
        </div>

        {/* ─── APPEARANCE ─── */}
        <Section title="Appearance">
          <SettingRow icon={Palette} label="Color Theme" sub={settings.theme} onClick={() => setActiveSheet('theme')} />
          <SettingRow icon={Type} label="Font Family" sub={settings.font} onClick={() => setActiveSheet('font')} />
          <SettingRow icon={ZoomIn} label="Font Size" sub={settings.fontSize} onClick={() => setActiveSheet('fontSize')} />
          <SettingRow icon={Square} label="Icon Shape" sub={settings.iconShape} onClick={() => setActiveSheet('iconShape')} />
          <SettingRow icon={Sparkles} label="Animations" sub="Smooth transitions & effects" isToggle toggleKey="animations" />
          <SettingRow icon={RectangleHorizontal} label="Compact Mode" sub="Denser UI with smaller cards" isToggle toggleKey="compactMode" />
        </Section>

        {/* ─── ACCESSIBILITY ─── */}
        <Section title="Accessibility">
          <SettingRow icon={Type} label="Large Text" sub="Increase text size globally" isToggle toggleKey="largeText" />
          <SettingRow icon={Contrast} label="High Contrast" sub="Enhanced color contrast" isToggle toggleKey="highContrast" />
          <SettingRow icon={Hand} label="Reduced Motion" sub="Minimize animations" isToggle toggleKey="reducedMotion" />
          <SettingRow icon={Accessibility} label="Screen Reader" sub="TalkBack / VoiceOver support" isToggle toggleKey="screenReader" />
        </Section>

        {/* ─── NOTIFICATIONS ─── */}
        <Section title="Notifications">
          <SettingRow icon={BellRing} label="Push Notifications" sub="Rental & lost item alerts" isToggle toggleKey="push" />
          <SettingRow icon={Mail} label="Email Digest" sub="Weekly summary" isToggle toggleKey="email" />
          <SettingRow icon={MessageSquare} label="Chat Alerts" sub="New message notifications" isToggle toggleKey="chat" />
          <SettingRow icon={Volume2} label="Sound Effects" sub="Notification and UI sounds" isToggle toggleKey="sound" />
          <SettingRow icon={Vibrate} label="Haptic Feedback" sub="Vibration on interactions" isToggle toggleKey="haptics" />
          <SettingRow icon={Bell} label="Advanced Settings" sub="Per-category notification control" onClick={() => navigate('/notification-settings')} />
        </Section>

        {/* ─── PRIVACY & SECURITY ─── */}
        <Section title="Privacy & Security">
          <SettingRow icon={Eye} label="Profile Visibility" sub="Campus-only" onClick={() => setToast('Profile is visible only to campus members')} />
          <SettingRow icon={Shield} label="Two-Factor Auth" sub={settings['2fa'] ? 'Enabled ✓' : 'Not enabled'} isToggle toggleKey="2fa" />
          <SettingRow icon={Fingerprint} label="Biometric Login" sub="Face ID / Fingerprint" isToggle toggleKey="biometric" />
          <SettingRow icon={KeyRound} label="Change Password" sub="Last changed 30 days ago" onClick={() => setToast('Password change email sent!')} />
          <SettingRow icon={Eye} label="Read Receipts" sub="Show when you've read messages" isToggle toggleKey="readReceipts" />
          <SettingRow icon={CircleDot} label="Online Status" sub="Show active status to others" isToggle toggleKey="onlineStatus" />
          <SettingRow icon={MapPin} label="Location Sharing" sub="Share during meetups only" isToggle toggleKey="locationSharing" />
          <SettingRow icon={Lock} label="Blocked Users" sub="0 users blocked" onClick={() => setToast('No blocked users')} />
        </Section>

        {/* ─── DATA & STORAGE ─── */}
        <Section title="Data & Storage">
          <SettingRow icon={Database} label="Cache Size" sub={cacheSize}
            onClick={() => { setCacheSize('0 MB'); setToast('Cache cleared!'); }}
            right={<span className="text-[10px] font-bold text-white px-3 py-1 rounded-lg uppercase tracking-wider" style={{ background: 'var(--color-primary)' }}>Clear</span>} />
          <SettingRow icon={Download} label="Auto-Save Media" sub="Save images to device" isToggle toggleKey="autoSave" />
          <SettingRow icon={WifiOff} label="Offline Mode" sub="Browse cached content" isToggle toggleKey="offlineMode" />
          <SettingRow icon={Upload} label="Export My Data" sub="Download all your data" onClick={() => setToast('Data export requested. Check email in 24h.')} />
          <SettingRow icon={RefreshCcw} label="Auto-Update" sub="Keep app updated automatically" isToggle toggleKey="autoUpdate" />
        </Section>

        {/* ─── LANGUAGE & REGION ─── */}
        <Section title="Language & Region">
          <SettingRow icon={Globe} label="App Language" sub={settings.language} onClick={() => setActiveSheet('language')} />
          <SettingRow icon={Clock} label="Time Zone" sub="Asia/Kolkata (IST)" onClick={() => setToast('Time zone synced with device')} />
          <SettingRow icon={Flag} label="Campus Region" sub="Dibrugarh University" onClick={() => setToast('Region is auto-detected')} />
        </Section>

        {/* ─── ANALYTICS ─── */}
        <Section title="Usage & Analytics">
          <SettingRow icon={FileText} label="Share Usage Data" sub="Help improve UniVault" isToggle toggleKey="analytics" />
          <SettingRow icon={Bug} label="Report a Bug" sub="Help us squash issues" onClick={() => setToast('Bug report form sent to your email!')} />
          <SettingRow icon={Star} label="Rate UniVault" sub="Leave a review" onClick={() => setToast('Thank you for your support! ⭐')} />
        </Section>

        {/* ─── DANGER ZONE ─── */}
        <Section title="Danger Zone">
          <SettingRow icon={RotateCcw} label="Reset All Settings" sub="Restore defaults" danger chevron={false}
            onClick={() => { resetAll(); setToast('All settings reset to defaults!'); }} />
          <SettingRow icon={Trash2} label="Delete Account" sub="This action is permanent" danger chevron={false}
            onClick={() => setToast('Account deletion requires email confirmation!')} />
        </Section>

        {/* ─── ABOUT ─── */}
        <div className="mt-4 mb-8">
          <div className="rounded-[24px] p-6 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})` }}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="font-syne font-extrabold text-xl text-white mb-1 tracking-tight">UniVault</h3>
              <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.2em] mb-4">Campus Commerce Platform</p>
              <div className="flex justify-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold text-white/70 uppercase tracking-wider">v2.4.1</span>
                <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Production</span>
              </div>
              <p className="text-[10px] text-white/30 font-medium leading-relaxed">
                Designed for secure campus transactions.<br />Built with ❤️ for Dibrugarh University.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Option Sheets */}
      {activeSheet === 'theme' && (
        <OptionSheet title="Choose Theme" options={THEME_LIST} selected={settings.theme}
          onSelect={v => { updateSetting('theme', v); setToast(`Theme set to ${v}`); }} onClose={() => setActiveSheet(null)} />
      )}
      {activeSheet === 'font' && (
        <OptionSheet title="Choose Font" options={FONTS} selected={settings.font}
          onSelect={v => { updateSetting('font', v); setToast(`Font set to ${v}`); }} onClose={() => setActiveSheet(null)} />
      )}
      {activeSheet === 'fontSize' && (
        <OptionSheet title="Font Size" options={FONT_SIZES} selected={settings.fontSize}
          onSelect={v => { updateSetting('fontSize', v); setToast(`Font size set to ${v}`); }} onClose={() => setActiveSheet(null)} />
      )}
      {activeSheet === 'language' && (
        <OptionSheet title="App Language" options={LANGUAGES} selected={settings.language}
          onSelect={v => { updateSetting('language', v); setToast(`Language set to ${v}`); }} onClose={() => setActiveSheet(null)} />
      )}
      {activeSheet === 'iconShape' && (
        <OptionSheet title="Icon Shape" options={ICON_SHAPES} selected={settings.iconShape}
          onSelect={v => { updateSetting('iconShape', v); setToast(`Icon shape set to ${v}`); }} onClose={() => setActiveSheet(null)} />
      )}
    </div>
  );
}
