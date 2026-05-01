import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Key, 
  ShoppingBag, 
  User 
} from 'lucide-react';

// SVG Icons Mapping for Nav
const icons = {
  home: <Home className="w-full h-full" />,
  search: <Search className="w-full h-full" />,
  rent: <Key className="w-full h-full" />,
  shop: <ShoppingBag className="w-full h-full" />,
  user: <User className="w-full h-full" />,
};

const tabs = [
  { to: '/',           icon: 'home',   label: 'Home' },
  { to: '/lost-found', icon: 'search', label: 'L & F', badge: 3 },
  { to: '/rent',       icon: 'rent',   label: 'Rent' },
  { to: '/marketplace',icon: 'shop',   label: 'Market' },
  { to: '/profile',    icon: 'user',   label: 'Profile' },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon" style={{ position: 'relative' }}>
            {icons[tab.icon]}
            {tab.badge && <span className="nav-badge">{tab.badge}</span>}
          </span>
          <span className="nav-label">{tab.label}</span>
          <span className="nav-indicator" />
        </NavLink>
      ))}
    </nav>
  );
}

function pad(n) { return String(n).padStart(2, '0'); }

export function StatusBar({ white }) {
  const [time, setTime] = useState(() => {
    const n = new Date();
    return `${pad(n.getHours())}:${pad(n.getMinutes())}`;
  });
  useEffect(() => {
    const id = setInterval(() => {
      const n = new Date();
      setTime(`${pad(n.getHours())}:${pad(n.getMinutes())}`);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`status-bar${white ? ' white' : ''}`}>
      <span className="clock">{time}</span>
      <span className="icons">
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" opacity=".4"/>
          <rect x="4.5" y="5" width="3" height="7" rx="1" opacity=".6"/>
          <rect x="9" y="2" width="3" height="10" rx="1" opacity=".8"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1"/>
        </svg>
        {/* Battery */}
        <svg width="22" height="12" viewBox="0 0 22 12" fill="currentColor">
          <rect x="0" y="1" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <rect x="18.5" y="4" width="2" height="4" rx="1"/>
          <rect x="1.5" y="2.5" width="11" height="7" rx="1" opacity=".85"/>
        </svg>
      </span>
    </div>
  );
}

export function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2700);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="toast">{message}</div>;
}
