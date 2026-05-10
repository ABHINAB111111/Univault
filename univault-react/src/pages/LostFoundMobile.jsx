import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LostFoundMobile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from lost-found-mobile.html */}
      
{/* TopAppBar */}
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-12 bg-[#F3F1ED] dark:bg-slate-950">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#1C3F6E] dark:text-blue-400 cursor-pointer">arrow_back</span>
<h1 className="text-xl font-bold font-[Inter] tracking-wider text-[#1C3F6E] dark:text-blue-400">UniVault</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#1C3F6E] dark:text-blue-400 cursor-pointer">more_vert</span>
</div>
</nav>
<main className="pt-16 pb-24 px-6 max-w-2xl mx-auto min-h-screen">
{/* Hero Section */}
<header className="mb-8 animate-fadeUp">
<h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary leading-tight">Lost &amp; Found</h2>
<p className="text-on-surface-variant mt-2 text-sm max-w-[85%]">The campus repository for misplaced treasures and shared community trust.</p>
</header>
{/* Segmented Control */}
<div className="bg-surface-container-low p-1.5 rounded-full flex gap-1 mb-8 animate-fadeUp stagger-1">
<button className="flex-1 py-2 px-4 rounded-full text-xs font-bold font-label bg-white text-primary custom-shadow transition-all" onClick={() => navigate('/marketplace')}>Lost</button>
<button className="flex-1 py-2 px-4 rounded-full text-xs font-bold font-label text-on-surface-variant hover:bg-surface-variant transition-all" onClick={() => navigate('/marketplace')}>Found</button>
<button className="flex-1 py-2 px-4 rounded-full text-xs font-bold font-label text-on-surface-variant hover:bg-surface-variant transition-all" onClick={() => navigate('/marketplace')}>My Reports</button>
</div>
{/* Category Chips */}
<div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 tiny-scrollbar animate-fadeUp stagger-2">
<button className="flex-none px-5 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-primary text-xs font-bold whitespace-nowrap" onClick={() => navigate('/marketplace')}>All Items</button>
<button className="flex-none px-5 py-2 rounded-full border border-transparent bg-surface-container-low text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-surface-variant" onClick={() => navigate('/rent')}>Electronics</button>
<button className="flex-none px-5 py-2 rounded-full border border-transparent bg-surface-container-low text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-surface-variant" onClick={() => navigate('/rent')}>Stationery</button>
<button className="flex-none px-5 py-2 rounded-full border border-transparent bg-surface-container-low text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-surface-variant" onClick={() => navigate('/rent')}>Clothing</button>
<button className="flex-none px-5 py-2 rounded-full border border-transparent bg-surface-container-low text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-surface-variant" onClick={() => navigate('/rent')}>IDs &amp; Keys</button>
</div>
{/* Content Grid */}
<section className="space-y-6 mt-4">
{/* Item Card 1 */}
<article className="bg-surface-container-lowest rounded-xl p-5 custom-shadow animate-fadeUp stagger-3 relative overflow-hidden group">
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-fixed to-secondary-fixed shrink-0">
<span className="material-symbols-outlined text-primary text-xl">laptop_mac</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-bold text-primary text-lg">MacBook Air M2</h3>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">₹100 REWARD</span>
</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-sm">location_on</span>
<span>Central Library - Floor 3</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[11px] font-medium text-outline">Reported 2h ago</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" onClick={() => navigate('/marketplace')}>
                Claim <span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
{/* Item Card 2 */}
<article className="bg-surface-container-lowest rounded-xl p-5 custom-shadow animate-fadeUp stagger-4 relative overflow-hidden group">
<div className="flex items-start gap-4">
<div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-tertiary-fixed to-primary-fixed-dim shrink-0">
<span className="material-symbols-outlined text-primary text-xl">key</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-bold text-primary text-lg">Honda Bike Keys</h3>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">VERIFIED</span>
</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-sm">location_on</span>
<span>Campus Cafe Entrance</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[11px] font-medium text-outline">Reported 5h ago</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" onClick={() => navigate('/marketplace')}>
                Claim <span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>
{/* Featured "Curator" Section (Asymmetric layout) */}
<div className="grid grid-cols-2 gap-4 animate-fadeUp" style={{animationDelay: '250ms'}}>
<div className="col-span-1 bg-primary text-white p-6 rounded-[18px] flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-3xl">info</span>
<div>
<h4 className="font-headline text-lg leading-tight">Help the community</h4>
<p className="text-primary-fixed text-xs mt-2 font-body">Reporting a found item increases your trust score.</p>
</div>
</div>
<div className="col-span-1 flex flex-col gap-4">
<div className="bg-[#C07828]/10 p-4 rounded-[18px] border border-[#C07828]/20 flex-1">
<p className="text-[#C07828] text-xs font-bold mb-2">MOST ACTIVE ZONE</p>
<div className="text-primary font-headline text-xl">Gym Khana</div>
<p className="text-on-surface-variant text-[11px] mt-1 italic">4 items found today</p>
</div>
<div className="bg-surface-container p-4 rounded-[18px] flex flex-col justify-center">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="Portrait of a smiling young student in a campus setting with soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4RzpRbbXYJET8VIp056-5pFCGs8VEUESej4jq83kQCwejQcx798opnXytRxLJSqZtZ0ErvAgRJ5g_2bnIYxc_iPHsT8fss-bKxYUZxsMeY_lDtqBg8ruMaCptji1W0reTmMsZ58zmupDgF6a3Hi9Nq9iajgA5RwN4mcAjkO6hbhjI7eWDnkNPMX6mdnBJCrJHKPSnsQNmfb76u-Sjbx4v5KdKMaQj5H4fJLVHYW0Fi_AToZgwfBX0q60Zt977O4NNHOXeX1Nowitw"/>
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="Candid photo of a male student wearing glasses in a university hallway with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzrm_5j3vv-AflCLKjyDP9b3tZlhj3XEvP2UCQ81zYNOm90hlJGTcELFFwjJxEaF9vKFaOoF6bu16ck35Ty_90cUDQbr_AM9Zfbtg8c_d5RNA2tx6XqIYt8LilIzKJYVz2qQHW0sFTpesAcULQhwVkzO3K_L_-k2Bk2tYhhYnJhze6LkGnkqSInM9QpFWUMHrK8VRWzY2wupkPzBoAeiid2jcaDbHwbHPCKtVNePxw1IcK4d6k5KI0os4ZhQsXLNZxSqVGOUlGscAt"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold text-white">+12</div>
</div>
<p className="text-[10px] mt-2 text-on-surface-variant font-medium">Curators active now</p>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-[70px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-t-2xl shadow-[0_-2px_16px_rgba(27,25,22,0.07)]">
<Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300" to="/">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[11px] font-bold font-[DM Sans] uppercase tracking-tight">Home</span>
</Link>
<Link className="flex flex-col items-center justify-center text-[#1C3F6E] dark:text-blue-300 border-b-2 border-[#C07828] pb-1 animate-[navSlide_0.35s_ease-out] hover:text-[#1A7A6A] transition-all duration-300" to="/lost-found">
<span className="material-symbols-outlined" data-icon="search_check">search_check</span>
<span className="text-[11px] font-bold font-[DM Sans] uppercase tracking-tight">Lost &amp; Found</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300" to="/rent">
<span className="material-symbols-outlined" data-icon="key">key</span>
<span className="text-[11px] font-bold font-[DM Sans] uppercase tracking-tight">Rent</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300" to="/marketplace">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="text-[11px] font-bold font-[DM Sans] uppercase tracking-tight">Marketplace</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300" to="/profile">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[11px] font-bold font-[DM Sans] uppercase tracking-tight">Profile</span>
</Link>
</nav>
{/* FAB for Reporting */}
<button className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl bg-primary text-white custom-shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40 group" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300">add</span>
</button>

    </div>
  );
};

export default LostFoundMobile;
