import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import LostFound from './pages/LostFound';
import Rent from './pages/Rent';
import Marketplace from './pages/Marketplace';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Vault from './pages/Vault';
import Notifications from './pages/Notifications';
import Rewards from './pages/Rewards';
import Search from './pages/Search';
import ReportConfirm from './pages/ReportConfirm';
import SendReward from './pages/SendReward';
import RewardSent from './pages/RewardSent';
import Wishlist from './pages/Wishlist';
import CampusMap from './pages/CampusMap';
import Reviews from './pages/Reviews';
import HelpSupport from './pages/HelpSupport';
import ItemStats from './pages/ItemStats';
import DisputeCenter from './pages/DisputeCenter';
import EditListing from './pages/EditListing';
import NotificationSettings from './pages/NotificationSettings';
import ShareProfile from './pages/ShareProfile';
import ChatInbox from './pages/ChatInbox';


import ConditionReport from './pages/ConditionReport';
import AdminPanel from './pages/AdminPanel';
import ProfileStatsDetail from './pages/ProfileStatsDetail';



// Phone design dimensions
const PHONE_W = 393;
const PHONE_H = 852;

function usePhoneScale() {
  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Only applies on desktop (≥600px wide)
      if (vw < 600) {
        document.documentElement.style.setProperty('--phone-scale', '1');
        return;
      }
      // Give 40px padding top+bottom and 40px left+right for the bezel shadow
      const scaleH = (vh - 80) / PHONE_H;
      const scaleW = (vw - 80) / PHONE_W;
      const scale = Math.min(scaleH, scaleW, 1); // never scale UP beyond 1
      document.documentElement.style.setProperty('--phone-scale', scale.toFixed(4));
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
}

function PhoneShell({ children }) {
  usePhoneScale();
  return (
    <div className="page-wrapper">
      {/* Decorative Blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
      
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
    <Router>
      <PhoneShell>
        <Routes>
          {/* Auth & Onboarding */}
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Core Navigation */}
          <Route path="/" element={<Home />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />

          {/* Sub-Pages & Features */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/search" element={<Search />} />
          <Route path="/report-confirm" element={<ReportConfirm />} />
          <Route path="/send-reward" element={<SendReward />} />
          <Route path="/reward-sent" element={<RewardSent />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/map" element={<CampusMap />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/item-stats" element={<ItemStats />} />
          <Route path="/dispute" element={<DisputeCenter />} />
          <Route path="/edit-listing" element={<EditListing />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/share-profile" element={<ShareProfile />} />
          <Route path="/inbox" element={<ChatInbox />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/profile-stats" element={<ProfileStatsDetail />} />

          {/* Special Tools */}
          <Route path="/condition" element={<ConditionReport />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PhoneShell>
    </Router>
    </SettingsProvider>
  );
}

export default App;
