import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DEFAULTS = {
  // Appearance
  darkMode: false,
  theme: 'Navy',
  font: 'DM Sans',
  fontSize: 'Medium',
  iconShape: 'Rounded',
  animations: true,
  compactMode: false,
  // Accessibility
  largeText: false,
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  // Notifications
  push: true,
  email: true,
  chat: true,
  sound: true,
  haptics: true,
  // Privacy
  '2fa': false,
  biometric: false,
  readReceipts: true,
  onlineStatus: true,
  locationSharing: false,
  // Data
  autoSave: true,
  offlineMode: false,
  autoUpdate: true,
  // Language
  language: 'English',
  // Analytics
  analytics: false,
};

const THEMES = {
  Navy:     { primary: '#1C3F6E', primaryDark: '#162B50', accent: '#C07828', headerFrom: '#162B50', headerTo: '#0F1D35' },
  Emerald:  { primary: '#065F46', primaryDark: '#064E3B', accent: '#D97706', headerFrom: '#064E3B', headerTo: '#022C22' },
  Purple:   { primary: '#5B21B6', primaryDark: '#4C1D95', accent: '#EC4899', headerFrom: '#4C1D95', headerTo: '#2E1065' },
  Crimson:  { primary: '#991B1B', primaryDark: '#7F1D1D', accent: '#F59E0B', headerFrom: '#7F1D1D', headerTo: '#450A0A' },
  Midnight: { primary: '#1E1B4B', primaryDark: '#312E81', accent: '#06B6D4', headerFrom: '#1E1B4B', headerTo: '#0F0D2E' },
  Ocean:    { primary: '#164E63', primaryDark: '#155E75', accent: '#34D399', headerFrom: '#164E63', headerTo: '#0C2D3A' },
};

const FONT_MAP = {
  'DM Sans': "'DM Sans', sans-serif",
  'Inter': "'Inter', sans-serif",
  'Roboto': "'Roboto', sans-serif",
  'Syne': "'Syne', sans-serif",
  'Poppins': "'Poppins', sans-serif",
  'Outfit': "'Outfit', sans-serif",
};

const FONT_SIZE_SCALE = {
  Small: 0.875,
  Medium: 1,
  Large: 1.125,
  'Extra Large': 1.25,
};

const ICON_RADIUS = {
  Rounded: '12px',
  Circle: '50%',
  Square: '4px',
};

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('univault_settings_v2');
      return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
    } catch { return DEFAULTS; }
  });

  // Persist on every change
  useEffect(() => {
    localStorage.setItem('univault_settings_v2', JSON.stringify(settings));
  }, [settings]);

  // Apply settings to DOM as CSS variables + classes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }

    // Theme colors
    const theme = THEMES[settings.theme] || THEMES.Navy;
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-dark', theme.primaryDark);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-header-from', theme.headerFrom);
    root.style.setProperty('--color-header-to', theme.headerTo);

    // Font
    const fontFamily = FONT_MAP[settings.font] || FONT_MAP['DM Sans'];
    root.style.setProperty('--font-body', fontFamily);

    // Font size
    const scale = FONT_SIZE_SCALE[settings.fontSize] || 1;
    root.style.setProperty('--font-scale', scale);
    root.style.fontSize = `${scale * 16}px`;

    // Icon shape
    const iconRadius = ICON_RADIUS[settings.iconShape] || '12px';
    root.style.setProperty('--icon-radius', iconRadius);

    // Animations / reduced motion
    if (!settings.animations || settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Compact mode
    if (settings.compactMode) {
      root.classList.add('compact');
    } else {
      root.classList.remove('compact');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

  }, [settings]);

  // Load external Google Fonts dynamically
  useEffect(() => {
    const fontName = settings.font.replace(/\s+/g, '+');
    const existing = document.getElementById('dynamic-font-link');
    if (existing) existing.remove();

    if (settings.font !== 'DM Sans' && settings.font !== 'Syne') {
      const link = document.createElement('link');
      link.id = 'dynamic-font-link';
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@400;500;600;700;800;900&display=swap`;
      document.head.appendChild(link);
    }
  }, [settings.font]);

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleSetting = useCallback((key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const resetAll = useCallback(() => {
    setSettings(DEFAULTS);
    localStorage.removeItem('univault_settings');
  }, []);

  const getTheme = useCallback(() => {
    return THEMES[settings.theme] || THEMES.Navy;
  }, [settings.theme]);

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, toggleSetting, resetAll, getTheme, THEMES }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}

export { THEMES, FONT_MAP, FONT_SIZE_SCALE, ICON_RADIUS, DEFAULTS };
