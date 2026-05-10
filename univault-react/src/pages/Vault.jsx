import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Package, 
  Clock, 
  ChevronRight, 
  MoreVertical, 
  CheckCircle2, 
  AlertCircle,
  Tag,
  Key,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { BottomNav, Toast } from '../components/Layout';

const initialListings = [
  { id: 101, title: 'Organic Chemistry II Notes', status: 'Active', price: '₹120', type: 'Sale', buyers: 3, img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80' },
  { id: 102, title: 'Drafting Compass Set', status: 'Pending', price: '₹350', type: 'Sale', buyers: 1, img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80' },
  { id: 103, title: 'Lab Coat (L)', status: 'Sold', price: '₹200', type: 'Sale', date: '2 days ago', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
];

const initialRentals = [
  { id: 201, title: 'Canon DSLR 700D', status: 'Ongoing', due: 'Tomorrow, 4 PM', price: '₹40/day', provider: 'Media Lab', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 202, title: 'TI-84 Plus CE', status: 'Ongoing', due: 'Apr 10', price: '₹15/day', provider: 'Julian P.', img: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=400&q=80' },
  { id: 203, title: 'HDMI Adapter', status: 'Returned', price: '₹5/day', provider: 'CS Dept', date: 'Mar 30', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80' },
];

const statusColors = {
  Active: 'bg-teal-50 text-teal-600',
  Pending: 'bg-amber-50 text-amber-600',
  Sold: 'bg-slate-100 text-slate-400',
  Ongoing: 'bg-blue-50 text-blue-600',
  Returned: 'bg-slate-100 text-slate-400',
};

export default function Vault() {
  const [activeTab, setActiveTab] = useState('listings');
  const [toast, setToast] = useState(null);
  const [rentals, setRentals] = useState(initialRentals);
  const navigate = useNavigate();

  const handleMarkReturned = (id) => {
    setRentals(prev => prev.map(r => 
      r.id === id ? { ...r, status: 'Returned', due: null, date: 'Just now' } : r
    ));
    setToast('Item marked as returned! ✅');
  };

  const handlePromote = (title) => {
    setToast(`"${title}" promoted to featured! 🚀`);
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F1ED] font-dm-sans overflow-hidden">
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      
      <div className="bg-white pt-12 pb-1 px-6 shadow-sm border-b border-slate-100 z-40">
        <div className="mt-2 flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-5 h-5 text-[#1C3F6E] cursor-pointer active:scale-90 transition-transform" onClick={() => navigate(-1)} />
            <h1 className="font-extrabold text-2xl text-[#1B1916] tracking-tight">My Vault</h1>
          </div>
          <MoreVertical className="w-5 h-5 text-slate-300" />
        </div>

        <div className="flex bg-slate-50 p-1 rounded-2xl mb-4">
          <button 
            onClick={() => setActiveTab('listings')}
            className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'listings' ? 'bg-white text-[#1C3F6E] shadow-sm' : 'text-slate-400'}`}
          >
            My Listings
          </button>
          <button 
            onClick={() => setActiveTab('rentals')}
            className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'rentals' ? 'bg-white text-[#1C3F6E] shadow-sm' : 'text-slate-400'}`}
          >
            My Rentals
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 no-scrollbar overscroll-contain">
        {activeTab === 'listings' ? (
          <div className="space-y-4">
            {initialListings.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-4 flex gap-4 shadow-[0_2px_12px_rgba(27,25,22,0.04)] animate-fade"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm text-[#1B1916] truncate pr-2">{item.title}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                        <Tag size={10} /> {item.price}
                      </div>
                      {item.buyers > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-teal-600 font-bold">
                          <ShoppingBag size={10} /> {item.buyers} {item.buyers === 1 ? 'offer' : 'offers'}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button 
                      onClick={() => navigate('/edit-listing')}
                      className="flex-1 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider hover:bg-slate-100 transition-colors active:scale-95"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handlePromote(item.title)}
                      className="flex-[1.5] py-1.5 rounded-lg bg-[#1B1916] text-[10px] font-bold text-white uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1"
                    >
                      <Sparkles size={10} /> Promote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {rentals.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-4 flex gap-4 shadow-[0_2px_12px_rgba(27,25,22,0.04)] animate-fade"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm text-[#1B1916] truncate pr-2">{item.title}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                        <Key size={10} /> {item.due ? `Due ${item.due}` : `Returned ${item.date}`}
                      </div>
                      <p className="text-[10px] font-medium text-slate-400">by <span className="text-[#1C3F6E] font-bold">{item.provider}</span></p>
                    </div>
                  </div>
                  {item.status === 'Ongoing' ? (
                    <button 
                      onClick={() => handleMarkReturned(item.id)}
                      className="w-full mt-2 py-1.5 rounded-lg bg-[#1C3F6E] text-[10px] font-bold text-white uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={12} /> Mark as Returned
                    </button>
                  ) : (
                    <button 
                      onClick={() => setToast('Receipt saved to your email 📧')}
                      className="w-full mt-2 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-slate-100 transition-colors active:scale-95"
                    >
                      View Receipt
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-blue-50/50 rounded-[32px] border border-blue-100/50 text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#1C3F6E] shadow-sm">
                <AlertCircle size={24} />
              </div>
              <h4 className="font-extrabold text-[#1B1916] text-sm mb-1 tracking-tight">Need help with a pickup?</h4>
              <p className="text-[11px] text-slate-500 font-medium px-4 mb-4 leading-relaxed italic">Contact the Media Lab or the item owner directly via chat.</p>
              <button 
                onClick={() => navigate('/help')}
                className="text-[#1C3F6E] font-bold text-[10px] uppercase tracking-widest hover:underline active:scale-95 transition-transform"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
