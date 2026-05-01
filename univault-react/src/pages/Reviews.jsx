import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

const REVIEWS_DATA = [
  { id: 1, text: 'Arrived on time', icon: '⏰' },
  { id: 2, text: 'Item as described', icon: '📦' },
  { id: 3, text: 'Polite & Friendly', icon: '🤝' },
  { id: 4, text: 'Fast response', icon: '⚡' },
];

const Reviews = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [comment, setComment] = useState('');

  const toggleTag = (id) => {
    setSelectedTags(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const handleFinish = () => {
    if (rating === 0) return;
    navigate('/reward-sent');
  };

  return (
    <div className="bg-[#F3F1ED] dark:bg-slate-950 font-dm-sans text-on-surface antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F1ED]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold font-syne tracking-tight text-[#1C3F6E] dark:text-blue-400">Rate Experience</h1>
          </div>
          <CheckCircle2 className="w-5 h-5 text-teal-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-28 px-6 overflow-y-auto">
        {/* Transaction Summary Card */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex gap-4 mb-8">
          <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-3xl shadow-inner">📚</div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-sm text-[#1C3F6E] dark:text-blue-400 uppercase tracking-tight">DS Algorithms Textbook</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Rented from Arjun M. • 3 days</p>
            <div className="flex items-center gap-1.5 mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">Transaction Complete</span>
            </div>
          </div>
        </div>

        {/* Curator Profile */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 bg-[#1C3F6E] rounded-full border-[4px] border-white dark:border-slate-900 shadow-xl flex items-center justify-center text-2xl font-syne font-extrabold text-white mb-4 italic">
            AM
          </div>
          <h2 className="text-xl font-syne font-bold text-[#1C3F6E] dark:text-blue-400">How was Arjun Mehta?</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Your rating helps build a trusted campus community</p>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setRating(s)}
              className={`text-4xl transition-all duration-300 transform ${rating >= s ? 'scale-125 opacity-100 grayscale-0' : 'scale-100 opacity-40 grayscale blur-[1px]'}`}
            >
              ⭐
            </button>
          ))}
        </div>

        {/* Review Tags */}
        <div className="mb-8">
          <h4 className="text-[10px] font-syne font-bold text-outline uppercase tracking-[0.2em] mb-4 text-center">Quick Feedback</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {REVIEWS_DATA.map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-syne flex items-center gap-2 transition-all ${
                  selectedTags.includes(tag.id)
                  ? 'bg-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800'
                }`}
              >
                <span>{tag.icon}</span>
                {tag.text}
              </button>
            ))}
          </div>
        </div>

        {/* Comment field */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 px-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#C07828]" />
            <h4 className="text-[10px] font-syne font-bold text-[#C07828] uppercase tracking-[0.2em]">Add a note (Optional)</h4>
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell others about your experience..."
            className="w-full h-24 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 text-sm font-dm-sans focus:ring-2 focus:ring-[#1C3F6E] transition-all outline-none shadow-inner dark:text-slate-300"
          />
        </div>
      </main>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#F3F1ED] dark:from-slate-950 via-[#F3F1ED] dark:via-slate-950 to-transparent">
        <button
          onClick={handleFinish}
          disabled={rating === 0}
          className={`w-full py-4 rounded-2xl font-syne font-extrabold tracking-widest uppercase transition-all duration-300 shadow-xl ${
            rating > 0 
            ? 'bg-[#1C3F6E] text-white active:scale-95' 
            : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
          }`}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
