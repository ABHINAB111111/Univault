

const ProfileMobile = () => {
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from profile-mobile.html */}
      
{/* Top Navigation Anchor */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-12 bg-[#F3F1ED] dark:bg-slate-950 transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#1C3F6E] dark:text-blue-400">arrow_back</span>
<h1 className="text-xl font-bold font-syne tracking-wider text-[#1C3F6E] dark:text-blue-400">UniVault</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#1C3F6E] dark:text-blue-400">more_vert</span>
</div>
</header>
{/* Main Content Canvas */}
<main className="pt-12">
{/* Navy Hero Section */}
<section className="relative w-full bg-gradient-to-br from-[#002954] to-[#163466] pt-12 pb-20 px-6 overflow-hidden">
{/* Decorative Curator Element */}
<div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col items-center text-center">
{/* Avatar with Frosted Glass Border */}
<div className="w-[78px] h-[78px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md mb-4 shadow-xl border border-white/20">
<img alt="User Avatar" className="w-[62px] h-[62px] rounded-full object-cover border-2 border-white/30" data-alt="Portrait of a young male university student with a friendly expression, soft natural lighting, academic background style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTFITiHO7K6paUdU4X_Zgm-ETGNcM-4GjQyIic9VhvgFqzhWxQM4GNsEi-ks6zZVJjIq4iH-MRd-fqRl9cVLScPoWjAiHt_31JD62GnQGAxBBmAAYleNc_jXVOwR2uhl3LNnZLHLQ-Fk4bjPK5NIG0KdgSlBtrIlW-WuPJa7zvyXp-4F6EU6EXWSRSG1nRS9dBOxt52H1oIqEkOvJqF4kUyRe96fc7JOmWnleR23B6VeG6Z_TQcMH1nIptzkZni14iijsmGtfw2I3F"/>
</div>
<h2 className="text-2xl font-syne font-bold text-white tracking-wide mb-2">Alexander Thorne</h2>
{/* Badges */}
<div className="flex gap-2 mb-8">
<span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-[10px] font-bold text-white tracking-widest uppercase">Verified Senior</span>
<span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-[10px] font-bold text-white tracking-widest uppercase">Top Curator</span>
</div>
{/* 4-Stat Grid */}
<div className="grid grid-cols-4 w-full max-w-md mx-auto relative">
<div className="flex flex-col items-center">
<span className="text-white font-syne font-bold text-lg">142</span>
<span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">Items</span>
</div>
<div className="absolute left-1/4 top-1/4 bottom-1/4 w-[1px] bg-white/20"></div>
<div className="flex flex-col items-center">
<span className="text-white font-syne font-bold text-lg">890</span>
<span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">Trust</span>
</div>
<div className="absolute left-2/4 top-1/4 bottom-1/4 w-[1px] bg-white/20"></div>
<div className="flex flex-col items-center">
<span className="text-white font-syne font-bold text-lg">12</span>
<span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">Rents</span>
</div>
<div className="absolute left-3/4 top-1/4 bottom-1/4 w-[1px] bg-white/20"></div>
<div className="flex flex-col items-center">
<span className="text-white font-syne font-bold text-lg">4.9</span>
<span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">Rating</span>
</div>
</div>
</div>
</section>
{/* Trust Card & Content */}
<section className="px-6 -mt-10 relative z-20">
{/* Trust Card */}
<div className="bg-surface-container-lowest rounded-[18px] p-6 shadow-[0_2px_16px_rgba(27,25,22,0.07)] mb-8">
<div className="flex justify-between items-center mb-4">
<div>
<h3 className="text-primary font-syne font-bold text-base leading-tight">Curator Trust Score</h3>
<p className="text-outline text-xs mt-1">Excellent standing in UniVault community</p>
</div>
<div className="text-tertiary-container bg-tertiary-fixed-dim/20 px-2 py-1 rounded text-[11px] font-bold">LVL 4</div>
</div>
{/* Progress Bar */}
<div className="w-full bg-surface-container-high h-[3px] rounded-full overflow-hidden">
<div className="h-full bg-tertiary-container w-[87%] transition-all duration-1000 ease-out"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] font-bold text-outline-variant uppercase tracking-tighter">Newbie</span>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">87% toward elite</span>
</div>
</div>
{/* Menu Sections */}
<div className="space-y-8">
{/* Academic Portfolio */}
<div>
<h4 className="text-[10px] font-syne font-bold text-outline uppercase tracking-[0.2em] mb-4 px-2">Academic Portfolio</h4>
<div className="bg-surface-container-low rounded-[18px] overflow-hidden">
{/* Menu Item 1 */}
<div className="flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-[10px] bg-primary/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">inventory_2</span>
</div>
<span className="font-dm-sans font-medium text-on-surface text-sm">My Vaulted Items</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
{/* Menu Item 2 */}
<div className="flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-[10px] bg-secondary/5 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
</div>
<span className="font-dm-sans font-medium text-on-surface text-sm">Active Rentals</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
</div>
</div>
{/* Account Settings */}
<div>
<h4 className="text-[10px] font-syne font-bold text-outline uppercase tracking-[0.2em] mb-4 px-2">Account Settings</h4>
<div className="bg-surface-container-low rounded-[18px] overflow-hidden">
<div className="flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-[10px] bg-tertiary/5 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<span className="font-dm-sans font-medium text-on-surface text-sm">Payment Methods</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-[10px] bg-primary/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<span className="font-dm-sans font-medium text-on-surface text-sm">Security &amp; Campus ID</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-[10px] bg-error/5 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[20px]">logout</span>
</div>
<span className="font-dm-sans font-medium text-error text-sm">Sign Out</span>
</div>
<span className="material-symbols-outlined text-outline-variant opacity-0">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/* Bottom Navigation Shell */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-[70px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-t-2xl shadow-[0_-2px_16px_rgba(27,25,22,0.07)]">
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300">
<span className="material-symbols-outlined">home</span>
<span className="text-[11px] font-bold font-dm-sans uppercase tracking-tight">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300">
<span className="material-symbols-outlined">search_check</span>
<span className="text-[11px] font-bold font-dm-sans uppercase tracking-tight">Lost &amp; Found</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300">
<span className="material-symbols-outlined">key</span>
<span className="text-[11px] font-bold font-dm-sans uppercase tracking-tight">Rent</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 pb-1 hover:text-[#1A7A6A] transition-all duration-300">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="text-[11px] font-bold font-dm-sans uppercase tracking-tight">Marketplace</span>
</div>
<div className="flex flex-col items-center justify-center text-[#1C3F6E] dark:text-blue-300 border-b-2 border-[#C07828] pb-1 animate-[navSlide_0.35s_ease-out]">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
<span className="text-[11px] font-bold font-dm-sans uppercase tracking-tight">Profile</span>
</div>
</nav>

    </div>
  );
};

export default ProfileMobile;
