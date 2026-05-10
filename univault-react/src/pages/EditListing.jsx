import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Camera, Plus, Check, Globe, EyeOff, Save } from 'lucide-react';

const EditListing = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('DS Algorithms Textbook (4th Ed)');
  const [price, setPrice] = useState(220);
  const [negotiable, setNegotiable] = useState(true);
  const [condition, setCondition] = useState('like-new');
  const [description, setDescription] = useState('4th Edition CLRS. Minor highlights in chapters 1–3 only. All pages intact, no torn pages. Used for one semester.');
  const [visible, setVisible] = useState(true);

  const handleSave = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased h-full flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Edit Listing</h1>
          </div>
          <button className="p-2 text-rose-500 bg-rose-50 dark:bg-rose-900/20 rounded-xl shadow-sm active:scale-90 transition-all">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-28 px-6 overflow-y-auto">
        {/* Photo Section */}
        <div className="flex gap-4 mb-8 overflow-x-auto tiny-scrollbar pb-2">
          <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex flex-col items-center justify-center relative shadow-inner border border-blue-100 dark:border-blue-800 flex-shrink-0">
            <span className="text-3xl italic mb-1">📚</span>
            <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-1 text-[8px] font-bold text-white text-center rounded-b-2xl uppercase tracking-widest">Edit</div>
          </div>
          <button className="w-24 h-24 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-[#1C3F6E] hover:text-[#1C3F6E] transition-all flex-shrink-0">
            <Plus className="w-6 h-6" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Add Photo</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] block mb-2 px-1">Item Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm font-dm-sans focus:ring-2 focus:ring-[#1C3F6E] outline-none shadow-sm dark:text-slate-300"
            />
          </div>

          <div>
            <label className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] block mb-2 px-1">Price (₹)</label>
            <div className="flex gap-3">
              <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm font-syne font-extrabold text-[#C07828] focus:ring-2 focus:ring-[#1C3F6E] outline-none shadow-sm"
              />
              <button 
                onClick={() => setNegotiable(!negotiable)}
                className={`px-4 rounded-2xl flex items-center gap-2 transition-all border ${negotiable ? 'bg-teal-50 border-teal-100 text-teal-600 shadow-inner' : 'bg-white border-slate-100 text-slate-400'}`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center ${negotiable ? 'bg-teal-600 text-white' : 'border-2 border-slate-200'}`}>
                  {negotiable && <Check className="w-3 h-3" />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Negotiable</span>
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] block mb-4 px-1">Condition</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'new', label: 'New', icon: '✨', color: 'bg-teal-50 text-teal-600 border-teal-100' },
                { id: 'like-new', label: 'Like New', icon: '👌', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                { id: 'used', label: 'Used', icon: '🔄', color: 'bg-orange-50 text-orange-600 border-orange-100' },
                { id: 'heavy', label: 'Heavy', icon: '🔧', color: 'bg-slate-100 text-slate-600 border-slate-200' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCondition(c.id)}
                  className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                    condition === c.id ? `${c.color} scale-105 shadow-md` : 'bg-white border-slate-50 text-slate-400'
                  }`}
                >
                  <span className="text-xl italic">{c.icon}</span>
                  <span className={`text-[11px] font-bold font-syne uppercase tracking-tight ${condition === c.id ? '' : 'font-medium opacity-60'}`}>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-syne font-bold text-slate-400 uppercase tracking-[0.2em] block mb-2 px-1">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 text-sm font-dm-sans focus:ring-2 focus:ring-[#1C3F6E] outline-none shadow-sm dark:text-slate-300 leading-relaxed font-medium italic"
            />
          </div>

          {/* Visibility Section */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${visible ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
                {visible ? <Globe className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">Listing Visible</h4>
                <p className="text-[10px] text-slate-400 font-medium">Temporarily hide from campus search</p>
              </div>
            </div>
            <button 
              onClick={() => setVisible(!visible)}
              className={`w-14 h-8 rounded-full relative transition-colors duration-300 shadow-inner ${visible ? 'bg-[#1C3F6E]' : 'bg-slate-200'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${visible ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Save Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#F3F1ED] dark:from-slate-950 via-[#F3F1ED] dark:via-slate-950 to-transparent">
        <button
          onClick={handleSave}
          className="w-full py-4 bg-[#1C3F6E] text-white rounded-2xl font-syne font-extrabold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditListing;
