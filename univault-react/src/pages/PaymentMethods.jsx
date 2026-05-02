import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  CheckCircle2, 
  MoreVertical, 
  Trash2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { StatusBar, BottomNav, Toast } from '../components/Layout';
import { useSettings } from '../contexts/SettingsContext';

const paymentMethods = [
  { id: 1, type: 'UPI', label: 'Google Pay / PhonePe', detail: 'arjun.mehta@okaxis', isDefault: true, icon: Smartphone, color: 'text-violet-600', bg: 'bg-violet-50' },
  { id: 2, type: 'Card', label: 'HDFC Bank Visa', detail: '•••• 4291', isDefault: false, icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 3, type: 'Cash', label: 'Cash on Handover', detail: 'Preferred for small trades', isDefault: false, icon: Banknote, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export default function PaymentMethods() {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const [methods, setMethods] = useState(paymentMethods);
  const [toast, setToast] = useState(null);

  const handleDelete = (id) => {
    setMethods(methods.filter(m => m.id !== id));
    setToast('Payment method removed');
  };

  const handleSetDefault = (id) => {
    setMethods(methods.map(m => ({ ...m, isDefault: m.id === id })));
    setToast('Default method updated');
  };

  return (
    <div className={`flex flex-col h-screen font-dm-sans ${settings.darkMode ? 'bg-slate-950' : 'bg-[#F3F1ED]'}`}>
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      <StatusBar />
      
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold font-syne text-[#1C3F6E] dark:text-blue-400">Payment Methods</h1>
        </div>
        <button className="w-10 h-10 bg-white dark:bg-slate-900 rounded-xl shadow-sm flex items-center justify-center text-[#1C3F6E] dark:text-blue-400 active:scale-90 transition-all">
          <Plus size={20} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
        <div className="mb-8">
          <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
            Manage your preferred ways to pay and receive money for campus trades. All digital payments are processed through secure external gateways.
          </p>

          <div className="space-y-4">
            {methods.map((method) => (
              <div 
                key={method.id}
                className={`bg-white dark:bg-slate-900 p-5 rounded-3xl border transition-all ${method.isDefault ? 'border-blue-200 ring-4 ring-blue-50/50 shadow-lg' : 'border-slate-100 dark:border-slate-800 shadow-sm'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${method.bg} flex items-center justify-center ${method.color}`}>
                      <method.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B1916] dark:text-white text-sm">{method.label}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{method.detail}</p>
                    </div>
                  </div>
                  <button className="text-slate-300 hover:text-slate-600">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    {method.isDefault ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-lg">
                        <CheckCircle2 size={10} /> Default
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleSetDefault(method.id)}
                        className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
                      >
                        Set as Default
                      </button>
                    )}
                  </div>
                  <button 
                    onClick={() => handleDelete(method.id)}
                    className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-slate-900 dark:bg-blue-900/20 p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <Lock size={20} className="text-blue-400" />
              <h3 className="font-syne font-bold text-sm uppercase tracking-widest">Campus Secure Pay</h3>
            </div>
            <p className="text-xs text-blue-100/60 leading-relaxed mb-6">
              UniVault doesn't store your full card details. We use bank-grade encryption to ensure your transactions are always safe.
            </p>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center gap-2">
              Privacy Policy <ChevronRight size={12} />
            </button>
          </div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
