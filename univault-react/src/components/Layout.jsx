import React, { useEffect } from 'react';
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


export function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2700);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="toast">{message}</div>;
}
