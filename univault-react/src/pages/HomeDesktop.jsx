import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from home-desktop.html */}
      
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 border-r-0 rounded-r-2xl shadow-sm dark:shadow-none flex flex-col p-6 z-50">
<div className="mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="inventory_2">inventory_2</span>
</div>
<div>
<h1 className="text-2xl font-bold tracking-wider text-[#1C3F6E] dark:text-blue-400 font-syne">UniVault</h1>
<p className="font-dm-sans medium text-[10px] uppercase tracking-widest text-slate-400">Campus Asset Management</p>
</div>
</div>
<nav className="flex-1 space-y-2">
{/* Home is Active */}
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1A7A6A] dark:text-teal-400 font-bold border-r-4 border-[#1A7A6A] dark:border-teal-400 bg-[#F3F1ED]/50 dark:bg-slate-800 transition-all duration-350" to="/">
<span className="material-symbols-outlined" data-icon="home" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
<span className="text-sm font-dm-sans">Home</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 hover:bg-[#F3F1ED] dark:hover:bg-slate-800 transition-all duration-350" to="/lost-found">
<span className="material-symbols-outlined" data-icon="search_check">search_check</span>
<span className="text-sm font-dm-sans">Lost &amp; Found</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 hover:bg-[#F3F1ED] dark:hover:bg-slate-800 transition-all duration-350" to="/rent">
<span className="material-symbols-outlined" data-icon="key">key</span>
<span className="text-sm font-dm-sans">Rent</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 hover:bg-[#F3F1ED] dark:hover:bg-slate-800 transition-all duration-350" to="/marketplace">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="text-sm font-dm-sans">Marketplace</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 hover:bg-[#F3F1ED] dark:hover:bg-slate-800 transition-all duration-350" to="/profile">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-sm font-dm-sans">Profile</span>
</Link>
</nav>
<div className="mt-auto">
<button className="w-full py-4 bg-primary text-white rounded-xl font-bold font-syne tracking-wide flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
        New Listing
      </button>
</div>
</aside>
{/* TopNavBar */}
<header className="fixed top-0 right-0 left-72 h-20 bg-[#F3F1ED]/80 backdrop-blur-md flex justify-between items-center px-12 z-40 transition-all duration-300">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
<input className="w-full bg-white border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#1A7A6A] transition-all" placeholder="Search campus assets..." type="text"/>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4 border-r border-slate-200 pr-6">
<button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
<div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/marketplace')}>
<div className="text-right">
<p className="text-sm font-bold text-[#1C3F6E] font-syne">Julian Pearce</p>
<p className="text-[10px] text-slate-500 font-dm-sans">Premium Curator</p>
</div>
<img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Close-up professional portrait of a stylish young man with a friendly expression in a modern sunlit campus setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcdbOSjsH7YQWyBzTIRm2khFOea1xYY-8rtEImMuYe2FzxNnPRs66iBi5yWgx7KrVPssOYtRaFRlOPrT81VCjDdRjHWFCbxXZd4yi6nINHQcb9zhvTFB04b99JEepeA3OXfBPLiQGbrv-ZeFa_S4ay7hWtxfhUX7yzkxraGhnOVh0A1Z_KCZ97Y1wnuTRZMXH9p3qq0nQfj8cxLb7rUVCGFW_FxmwQvF0Kjd95DWcQJDk6cPaEzy_H8WsOnOmuvLQJEuil6Uu1CI1"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="ml-72 pt-28 pb-12 px-12 min-h-screen">
{/* Hero Section with Overlapping Stats */}
<section className="relative mb-16">
<div className="bg-primary rounded-3xl p-12 text-white overflow-hidden relative">
<div className="relative z-10 max-w-2xl">
<h2 className="text-5xl font-syne font-extrabold tracking-tight mb-4 leading-tight">Good morning,<br/>Julian.</h2>
<p className="text-blue-100 font-dm-sans text-lg mb-8 opacity-90">The campus ecosystem is thriving today. You have 3 items awaiting pickup and 2 new marketplace offers.</p>
<div className="flex gap-4">
<button className="bg-[#C07828] text-white px-6 py-3 rounded-xl font-bold font-syne text-sm transition-transform hover:scale-105 active:scale-95" onClick={() => navigate('/marketplace')}>View Active Tasks</button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-bold font-syne text-sm transition-colors hover:bg-white/20" onClick={() => navigate('/marketplace')}>Market Analytics</button>
</div>
</div>
{/* Abstract Decoration */}
<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<svg className="w-full h-full" viewBox="0 0 400 400">
<circle cx="300" cy="100" fill="white" fillOpacity="0.1" r="150"></circle>
<path d="M200 400C200 289.543 289.543 200 400 200" stroke="white" strokeWidth="2"></path>
</svg>
</div>
{/* Quick Stats Bento-Overlay */}
<div className="absolute -bottom-8 right-12 grid grid-cols-4 gap-4 w-[600px]">
<div className="bg-white p-6 rounded-2xl custom-shadow text-on-surface">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Rentals</p>
<h3 className="text-2xl font-syne font-bold text-[#1C3F6E]">142</h3>
</div>
<div className="bg-white p-6 rounded-2xl custom-shadow text-on-surface">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Listed</p>
<h3 className="text-2xl font-syne font-bold text-[#1C3F6E]">38</h3>
</div>
<div className="bg-[#FBF9F5] p-6 rounded-2xl custom-shadow text-on-surface">
<p className="text-[10px] font-bold text-[#B83A3A] uppercase tracking-widest mb-1">Lost</p>
<h3 className="text-2xl font-syne font-bold text-[#1C3F6E]">7</h3>
</div>
<div className="bg-[#FBF9F5] p-6 rounded-2xl custom-shadow text-on-surface">
<p className="text-[10px] font-bold text-[#1A7A6A] uppercase tracking-widest mb-1">Sales</p>
<h3 className="text-2xl font-syne font-bold text-[#1C3F6E]">218</h3>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-12 gap-8">
{/* Main Feed Column */}
<div className="col-span-8 space-y-12">
{/* Quick Action Cards */}
<section>
<h3 className="text-xl font-syne font-bold text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[#1A7A6A]" data-icon="auto_awesome">auto_awesome</span>
            Quick Commands
          </h3>
<div className="grid grid-cols-4 gap-4">
<div className="group bg-white p-6 rounded-3xl hover:bg-[#1C3F6E] transition-all duration-300 cursor-pointer" onClick={() => navigate('/marketplace')}>
<div className="w-12 h-12 bg-[#F3F1ED] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-[#1C3F6E] group-hover:text-white" data-icon="manage_search">manage_search</span>
</div>
<p className="font-syne font-bold text-sm text-[#1C3F6E] group-hover:text-white transition-colors">Lost &amp; Found</p>
</div>
<div className="group bg-white p-6 rounded-3xl hover:bg-[#1A7A6A] transition-all duration-300 cursor-pointer" onClick={() => navigate('/marketplace')}>
<div className="w-12 h-12 bg-[#F3F1ED] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-[#1A7A6A] group-hover:text-white" data-icon="vpn_key">vpn_key</span>
</div>
<p className="font-syne font-bold text-sm text-[#1C3F6E] group-hover:text-white transition-colors">Rent Items</p>
</div>
<div className="group bg-white p-6 rounded-3xl hover:bg-[#C07828] transition-all duration-300 cursor-pointer" onClick={() => navigate('/marketplace')}>
<div className="w-12 h-12 bg-[#F3F1ED] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-[#C07828] group-hover:text-white" data-icon="storefront">storefront</span>
</div>
<p className="font-syne font-bold text-sm text-[#1C3F6E] group-hover:text-white transition-colors">Marketplace</p>
</div>
<div className="group bg-white p-6 rounded-3xl hover:bg-slate-900 transition-all duration-300 cursor-pointer" onClick={() => navigate('/marketplace')}>
<div className="w-12 h-12 bg-[#F3F1ED] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-slate-600 group-hover:text-white" data-icon="post_add">post_add</span>
</div>
<p className="font-syne font-bold text-sm text-[#1C3F6E] group-hover:text-white transition-colors">Add Item</p>
</div>
</div>
</section>
{/* Marketplace Picks (Horizontal Scroll) */}
<section>
<div className="flex justify-between items-end mb-6">
<h3 className="text-xl font-syne font-bold text-primary">Marketplace Picks</h3>
<Link className="text-xs font-bold text-[#1A7A6A] hover:underline" to="/">View All Curator Favorites</Link>
</div>
<div className="flex gap-6 overflow-x-auto tiny-scrollbar pb-4 -mx-2 px-2">
{/* Item Card 1 */}
<div className="min-w-[280px] bg-white rounded-3xl overflow-hidden custom-shadow group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Minimalist hardback books stacked on a wooden desk with warm soft light and a plant in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYe-4LCEGqk1EajbjYkwyWDEWTtmaHjKOxf_i99fhZHpk9PppsIz1OJ6iHpwFl78fzL3uJjZ0ChAe8sRy3_ByiLDDkqI3FK9J5n4NwnuO7LnwVH1LluvMwJEk7wFIthAS0aNrDudQZa3-cWLipCOhWPSpxG0loVig_R4bT2sbATgnOVGR-HV1rRRO6IerNOwLoeKBllWxSZEK7OeulyY84z1UAh-fIa2YEfhVk1uhV1rsTKfrXv-8L8OwWFG2IqpcSUaAx9gcmNau"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
<span className="text-[10px] font-bold text-[#1C3F6E]">Textbooks</span>
</div>
</div>
<div className="p-6">
<h4 className="font-syne font-bold text-lg mb-1">Modern Architecture II</h4>
<p className="text-xs text-slate-500 mb-4">Hardcover, Minimal wear.</p>
<div className="flex justify-between items-center">
<span className="text-xl font-bold text-[#C07828] font-syne">$45.00</span>
<button className="w-10 h-10 bg-[#F3F1ED] rounded-full flex items-center justify-center text-primary hover:bg-[#1C3F6E] hover:text-white transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-sm" data-icon="shopping_cart">shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Item Card 2 */}
<div className="min-w-[280px] bg-white rounded-3xl overflow-hidden custom-shadow group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sleek silver smartphone on a neutral workspace with minimalist aesthetic and clean studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOs9IbiafkeQg6a-XkBoNthHByBPP8AisUKSUFSQXx_l33r5fTWBm-Ekweo8dWNyUlRGWMQJUdfTksoWYPLQX-R9o4bdoNqnp0QnReU-MHXthDfxGN_Vdznxj9WDazxPqbXoYbVokEoXw1c0I5gHPIPlU3zr8cZSFCt0rne_b_uin1fn3OvcckAaro5d6VWhHWC2JsADMIvRpUl4ac4-tGP29t7qaxKCMkCzJdNzZfnexiqIQU2MNxviD6Qm4Ioi2ct0fNZJZ1KrWH"/>
<div className="absolute top-4 left-4 bg-[#1A7A6A] px-3 py-1 rounded-full">
<span className="text-[10px] font-bold text-white uppercase">Tech</span>
</div>
</div>
<div className="p-6">
<h4 className="font-syne font-bold text-lg mb-1">Graphing Calculator</h4>
<p className="text-xs text-slate-500 mb-4">TI-84 Plus, Battery inc.</p>
<div className="flex justify-between items-center">
<span className="text-xl font-bold text-[#C07828] font-syne">$82.50</span>
<button className="w-10 h-10 bg-[#F3F1ED] rounded-full flex items-center justify-center text-primary hover:bg-[#1C3F6E] hover:text-white transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-sm" data-icon="shopping_cart">shopping_cart</span>
</button>
</div>
</div>
</div>
{/* Item Card 3 */}
<div className="min-w-[280px] bg-white rounded-3xl overflow-hidden custom-shadow group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Durable mountain bike leaned against a campus brick wall in soft overcast morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_mi7r2lXHdzpE1h-natCuQiXp-HlIKJLnpKNzZNx6Wp7ZqTVLd1U5EPrHr3cmf0HDSuBPgrOybj20Adl4TS3yemlaB3k4NW94hJgu54jGinvdTfbGDNkJADb8OUj70XvEoppDIA4pAMrCv3w-AdAIBVsLx_wczM848HL5ei95gBZLxStx_0RhkHdv33LLisB3RYVP0Ur2GTacgEePH4qQjAtixLyDekasJUQXJH4Qj1NAW9ZLWkbDpI5F3ulmcZopfpQk2JU79gCx"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
<span className="text-[10px] font-bold text-[#1C3F6E]">Transport</span>
</div>
</div>
<div className="p-6">
<h4 className="font-syne font-bold text-lg mb-1">Cannondale Bike</h4>
<p className="text-xs text-slate-500 mb-4">Mountain Series, 24 speed.</p>
<div className="flex justify-between items-center">
<span className="text-xl font-bold text-[#C07828] font-syne">$310.00</span>
<button className="w-10 h-10 bg-[#F3F1ED] rounded-full flex items-center justify-center text-primary hover:bg-[#1C3F6E] hover:text-white transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-sm" data-icon="shopping_cart">shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Available to Rent */}
<section>
<div className="flex justify-between items-end mb-6">
<h3 className="text-xl font-syne font-bold text-primary">Available to Rent</h3>
<Link className="text-xs font-bold text-[#1A7A6A] hover:underline" to="/">See Leasing Schedule</Link>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container-low rounded-3xl p-6 flex gap-6 items-center">
<img className="w-32 h-32 object-cover rounded-2xl" data-alt="Professional camera gear with lenses laid out on a dark leather surface with dramatic accent lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg3KlQrl8JpmJnIjC_zZGUW1tvZf3HsTKWTAeQ-M1FGRQ4RvUIkUJsuorRmuknhOqMf7qtpCkI3oVXZVI_lcnFRXYcoounPxvSVhRiVGbxiDJh0pr3slzvkAh6U6YA4W6EPBTKd8X-DE_fX0IcrPthP2Sh9okyLpL5RwCDKrQ3goTzXEQ3yQqKJDvQaqEFz6sbUmJ89ZHbLoAPfCuaXIUOOFNkpmyLvlWxzrNOhbWjmCGIIGBEAYM5pUqBEJLWRgzHSsL7tCAOQSl8"/>
<div>
<h4 className="font-syne font-bold text-lg">Sony Alpha kit</h4>
<p className="text-xs text-slate-500 mb-3">Daily rental • $15/day</p>
<button className="bg-[#1C3F6E] text-white text-[10px] font-bold py-2 px-4 rounded-lg uppercase tracking-widest hover:opacity-90" onClick={() => navigate('/marketplace')}>Reserve Now</button>
</div>
</div>
<div className="bg-surface-container-low rounded-3xl p-6 flex gap-6 items-center">
<img className="w-32 h-32 object-cover rounded-2xl" data-alt="MacBook Pro and notebook on a clean white desk with soft daylight coming from a nearby window." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC80ec4pFlqd7Xb4Ti12Cy9YRGpSWYirTTQjSOx31sseC1O2S13PnD5kBOYnVbjSosVi8ZkIm42emnyVTykRK2HkEOxlxH__dOYBGz6_fJ-vW7lq7ch3JBMTLATFAM1Q3-kQMMVAf6UXkqxc7Qj7epl2u4U8SETKA8uU-3PysmA04NUwSoElVTJcQ6SGI3fjT6lB5pkpH6IPKB5iWDJmi7iVdBJORQej-EWQBgec-NKfdxQ93Trk_mzxn_fsmNih265DTsTrgSK9GUx"/>
<div>
<h4 className="font-syne font-bold text-lg">Projector Pro X</h4>
<p className="text-xs text-slate-500 mb-3">Hourly rental • $4/hr</p>
<button className="bg-[#1C3F6E] text-white text-[10px] font-bold py-2 px-4 rounded-lg uppercase tracking-widest hover:opacity-90" onClick={() => navigate('/marketplace')}>Check Availability</button>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Activity Feed & Curator Insights */}
<aside className="col-span-4 space-y-8">
{/* Activity Feed */}
<div className="bg-white rounded-3xl p-8 custom-shadow">
<h3 className="text-lg font-syne font-bold text-primary mb-6">Recent Activity</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#E79846]/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#C07828] text-lg" data-icon="paid">paid</span>
</div>
<div>
<p className="text-sm font-dm-sans leading-relaxed">
<span className="font-bold text-primary">Sold:</span> Physics Notes (v1.2) for <span className="font-bold">$12.00</span>
</p>
<p className="text-[10px] text-slate-400 mt-1">2 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#1A7A6A]/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#1A7A6A] text-lg" data-icon="sync_alt">sync_alt</span>
</div>
<div>
<p className="text-sm font-dm-sans leading-relaxed">
<span className="font-bold text-primary">Rental Returned:</span> Canon DSLR by <span className="font-bold">Leo K.</span>
</p>
<p className="text-[10px] text-slate-400 mt-1">5 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#B83A3A]/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#B83A3A] text-lg" data-icon="report">report</span>
</div>
<div>
<p className="text-sm font-dm-sans leading-relaxed">
<span className="font-bold text-primary">Claim:</span> Item "Blue Keys" matched your listing.
                </p>
<p className="text-[10px] text-slate-400 mt-1">Yesterday</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-lg" data-icon="add_circle">add_circle</span>
</div>
<div>
<p className="text-sm font-dm-sans leading-relaxed">
<span className="font-bold text-primary">New Listing:</span> Lab goggles (x2) added to Marketplace.
                </p>
<p className="text-[10px] text-slate-400 mt-1">2 days ago</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 bg-[#F3F1ED] text-[#1C3F6E] rounded-xl font-bold text-xs hover:bg-[#1C3F6E] hover:text-white transition-all" onClick={() => navigate('/marketplace')}>View History Report</button>
</div>
{/* Curator Insights (Amber / Tertiary Variant) */}
<div className="bg-[#C07828] rounded-3xl p-8 text-white relative overflow-hidden group">
<div className="relative z-10">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Curator Insights</p>
<h4 className="text-xl font-syne font-bold mb-4">Optimize your assets</h4>
<p className="text-sm font-dm-sans leading-relaxed opacity-90 mb-6">Calculators are in high demand this week due to upcoming midterms. Consider listing yours for rental.</p>
<button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 rounded-xl text-xs font-bold font-syne hover:bg-white/30 transition-all" onClick={() => navigate('/marketplace')}>Check Demand</button>
</div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
{/* Map of Active Rentals */}
<div className="bg-white rounded-3xl p-6 custom-shadow overflow-hidden">
<div className="flex justify-between items-center mb-4">
<h3 className="font-syne font-bold text-primary">Asset Locations</h3>
<span className="material-symbols-outlined text-slate-300" data-icon="map">map</span>
</div>
<div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-50">
{/* Simulated Map with data-location */}
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="Clean architectural aerial view of a university campus layout with red-tiled roofs and green courtyards." data-location="Stanford Campus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDagST-fBq3VHXAAb_Zxlw2kkXPJFwZpKG1lqU4I4ehKNyvX7GuNwTqk-DYOPj5S6YY_bk6fei0h0HrE8g3AzkumyfkjcgVoWHGL-uU0R4OuUWl3uMvvI0j5-AzFyNukSJYVJTTuAuTfhrhFQ6IWamQpt7-_vWSdLaFXcoEgRETV2M3I_jYhckLc7zPuHVZvdoWsypqr9S01kQoZbx2zTJg0V6v1wPGPr_RtujaFv8Hec0Hs3rn3oRf-OJMbYJmSmAWjiVtbgmv4wf4"/>
{/* Map Pins */}
<div className="absolute top-1/4 left-1/3">
<span className="material-symbols-outlined text-[#1A7A6A] animate-bounce" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
</div>
<div className="absolute bottom-1/2 right-1/4">
<span className="material-symbols-outlined text-[#C07828]" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
</div>
</div>
</div>
</aside>
</div>
</main>
{/* Contextual Floating Button (Only for specific pages, but relevant for Home Quick Listing) */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-[#1A7A6A] transition-all duration-300 group z-40" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300" data-icon="add">add</span>
</button>

    </div>
  );
};

export default HomeDesktop;
