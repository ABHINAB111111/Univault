import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from profile-desktop.html */}
      
{/* SideNavBar Anchor */}
<aside className="fixed left-0 top-0 h-full w-72 flex flex-col p-6 bg-white z-50 rounded-r-3xl editorial-shadow">
<div className="mb-12">
<h1 className="text-2xl font-bold tracking-wider text-[#1C3F6E] font-headline">UniVault</h1>
<p className="font-label text-xs tracking-tight text-slate-500 uppercase mt-1">Campus Asset Management</p>
</div>
<nav className="flex-1 space-y-2">
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 hover:bg-surface-container-low transition-all" to="/">
<span className="material-symbols-outlined">home</span>
<span className="font-label text-sm font-medium">Home</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 hover:bg-surface-container-low transition-all" to="/lost-found">
<span className="material-symbols-outlined">search_check</span>
<span className="font-label text-sm font-medium">Lost &amp; Found</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 hover:bg-surface-container-low transition-all" to="/rent">
<span className="material-symbols-outlined">key</span>
<span className="font-label text-sm font-medium">Rent</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 hover:bg-surface-container-low transition-all" to="/marketplace">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-label text-sm font-medium">Marketplace</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-[#1A7A6A] font-bold border-r-4 border-[#1A7A6A] bg-[#F3F1ED]/50 transition-all" to="/profile">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
<span className="font-label text-sm font-medium">Profile</span>
</Link>
</nav>
<div className="mt-auto">
<button className="w-full py-4 bg-[#1C3F6E] text-white font-label font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">add_circle</span>
                New Listing
            </button>
</div>
</aside>
{/* TopNavBar Anchor */}
<header className="fixed top-0 right-0 left-72 h-20 glass-header flex justify-between items-center px-12 z-40">
<div className="flex items-center gap-6 w-1/2">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary-container/20 font-label text-sm" placeholder="Search the campus vault..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-slate-500 hover:text-primary transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-slate-500 hover:text-primary transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-10 w-10 rounded-full overflow-hidden border-2 border-surface-container-highest">
<img alt="User Profile" className="h-full w-full object-cover" data-alt="professional portrait of a young academic male with glasses in a library setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsfcp-XrubM9xQgR9cWK4aQsDulkGmWvw2dA_iZmn1qaBDmWXOHw1ctWBDrkTmQ0C_A5B7NDil47HmPZUbMXUHfWdtY0hBXCbCATEB1ux2bB_D-vmvfPxNI4fuXX2xzi24mkCdRBKnnLEw5E_lmAqhutwAl43AOoed4qkZkTCDL6fKGsDnWNOWROAHdqzXat4aKrXzT_q55wkASWduiDJjOH-hRgYkeieHJVId7nZ7B_DaLxDWPrO2J7-aWCNNwrllJzwNfLqrU6w1"/>
</div>
</div>
</header>
{/* Main Canvas */}
<main className="ml-72 mt-20 p-12 min-h-screen">
{/* Profile Header Section (Asymmetric Editorial Style) */}
<section className="relative mb-16">
<div className="flex flex-col md:flex-row gap-12 items-end">
<div className="relative z-10 -mb-8">
<div className="w-48 h-64 rounded-2xl overflow-hidden editorial-shadow border-[6px] border-white">
<img alt="Julian Reed" className="w-full h-full object-cover" data-alt="close up portrait of a young male student in a scholarly environment, warm academic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3njMZ18LKjYYShW14I1HA2BoPthA96_A9p2ri1MUDfvhqKEREcDaXKpLJkDyWF5zGzQacUqsV0jg0_zZTi0kgj526TxC_wJHXhj1fd7KqqT1ycAy21I0LKkmDN6FHegva5zz2o9CZGOJ_87Wl-emwQsB92dXbM6_QeQA7p_YYA6y6RS9XiCsyRnT0khM8qqBNICe59_Jhua-1olv0YQAsG5Pa57Pz9R9ux0efwfEeRTK-Fg9f8ii0FcZkfortj4qdZZlipz-4QXYl"/>
</div>
</div>
<div className="flex-1 pb-4">
<div className="flex items-center gap-3 mb-2">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-wider">Top Contributor</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-wider">Lender Pro</span>
</div>
<h1 className="text-5xl font-headline font-extrabold text-primary mb-2">Julian Reed</h1>
<p className="text-xl text-slate-600 font-label italic mb-6">M.Arch Candidate · School of Architecture</p>
<div className="flex gap-4">
<button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold font-label hover:scale-[0.98] transition-transform" onClick={() => navigate('/marketplace')}>Edit Profile</button>
<button className="px-6 py-2.5 border-2 border-primary/10 text-primary rounded-xl font-bold font-label hover:bg-surface-container-low transition-colors" onClick={() => navigate('/marketplace')}>Public View</button>
</div>
</div>
<div className="hidden lg:block w-64 p-6 bg-white rounded-2xl editorial-shadow mb-4">
<p className="text-xs uppercase font-bold text-slate-400 mb-4 tracking-widest">Campus Identity</p>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-[#C07828]">verified</span>
<span className="text-sm font-medium">Student ID Verified</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1A7A6A]">account_balance</span>
<span className="text-sm font-medium">Main Campus Vault</span>
</div>
</div>
</div>
<div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl -z-10"></div>
</section>
{/* Stats Grid (Bento Style) */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div className="bg-white p-8 rounded-[18px] editorial-shadow flex flex-col items-center justify-center text-center">
<span className="text-4xl font-headline font-bold text-primary mb-1">42</span>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Items Listed</span>
</div>
<div className="bg-white p-8 rounded-[18px] editorial-shadow flex flex-col items-center justify-center text-center">
<span className="text-4xl font-headline font-bold text-[#1A7A6A] mb-1">98%</span>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trust Score</span>
</div>
<div className="bg-white p-8 rounded-[18px] editorial-shadow flex flex-col items-center justify-center text-center">
<span className="text-4xl font-headline font-bold text-[#C07828] mb-1">12</span>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Rents</span>
</div>
<div className="bg-white p-8 rounded-[18px] editorial-shadow flex flex-col items-center justify-center text-center">
<div className="flex items-center gap-1 mb-1">
<span className="text-4xl font-headline font-bold text-primary">4.9</span>
<span className="material-symbols-outlined text-[#C07828]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
</div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Rating</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
{/* Left Column: Trust & Portfolio */}
<div className="lg:col-span-2 space-y-12">
{/* Trust Card */}
<div className="bg-primary p-10 rounded-[24px] text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl font-headline mb-2">Vault Reliability Index</h3>
<p className="text-on-primary-container mb-8 max-w-md">Your standing is exceptional. Keep maintaining your response time to earn the 'Curator' badge.</p>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2 text-sm font-bold font-label">
<span>Reliability Score</span>
<span>98/100</span>
</div>
<div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
<div className="bg-secondary-fixed h-full w-[98%] rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex gap-4 items-center">
<div className="p-3 bg-white/10 rounded-xl">
<span className="material-symbols-outlined text-secondary-fixed">timer</span>
</div>
<div>
<p className="text-xs text-white/60">Avg. Response</p>
<p className="font-bold">14 mins</p>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="p-3 bg-white/10 rounded-xl">
<span className="material-symbols-outlined text-secondary-fixed">handshake</span>
</div>
<div>
<p className="text-xs text-white/60">Success Rate</p>
<p className="font-bold">100%</p>
</div>
</div>
</div>
</div>
</div>
{/* Decorative Element */}
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rotate-12 opacity-20 rounded-3xl"></div>
</div>
{/* Academic Portfolio Menu */}
<div>
<h3 className="text-xl font-headline text-primary mb-8 flex items-center gap-3">
<span className="material-symbols-outlined">library_books</span>
                        Academic Portfolio
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group bg-white p-6 rounded-2xl editorial-shadow hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-[#1A7A6A]" onClick={() => navigate('/marketplace')}>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-[#1A7A6A] text-3xl">inventory_2</span>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<h4 className="font-headline text-lg text-primary mb-1">My Vaulted Items</h4>
<p className="text-sm text-slate-500">Manage your cameras, textbooks, and lab gear.</p>
</div>
<div className="group bg-white p-6 rounded-2xl editorial-shadow hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-[#C07828]" onClick={() => navigate('/marketplace')}>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-[#C07828] text-3xl">key</span>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<h4 className="font-headline text-lg text-primary mb-1">Active Rentals</h4>
<p className="text-sm text-slate-500">Track returns and extend current bookings.</p>
</div>
<div className="group bg-white p-6 rounded-2xl editorial-shadow hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-[#B83A3A]" onClick={() => navigate('/marketplace')}>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-[#B83A3A] text-3xl">report</span>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<h4 className="font-headline text-lg text-primary mb-1">Lost Reports</h4>
<p className="text-sm text-slate-500">View status of items you've found or lost.</p>
</div>
<div className="group bg-white p-6 rounded-2xl editorial-shadow hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-primary" onClick={() => navigate('/marketplace')}>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">history</span>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<h4 className="font-headline text-lg text-primary mb-1">Transaction History</h4>
<p className="text-sm text-slate-500">Review your past rentals and marketplace activity.</p>
</div>
</div>
</div>
</div>
{/* Right Column: Settings & Identity */}
<div className="space-y-12">
{/* Account Settings Menu */}
<div className="bg-surface-container-low p-8 rounded-[24px]">
<h3 className="text-xl font-headline text-primary mb-6">Account Settings</h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white transition-all group" onClick={() => navigate('/marketplace')}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">person_outline</span>
<span className="font-medium text-sm">Personal Information</span>
</div>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white transition-all group" onClick={() => navigate('/marketplace')}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">lock_open</span>
<span className="font-medium text-sm">Security &amp; Privacy</span>
</div>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white transition-all group" onClick={() => navigate('/marketplace')}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">payments</span>
<span className="font-medium text-sm">Payment Methods</span>
</div>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white transition-all group" onClick={() => navigate('/marketplace')}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">notifications_active</span>
<span className="font-medium text-sm">Notification Preferences</span>
</div>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</button>
</div>
<hr className="my-6 border-white/40"/>
<button className="w-full flex items-center gap-3 p-4 rounded-xl text-error hover:bg-error-container transition-all" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">logout</span>
<span className="font-bold text-sm">Sign Out</span>
</button>
</div>
{/* Curator Note (Amber Accent) */}
<div className="bg-tertiary-fixed p-8 rounded-[24px] relative">
<span className="material-symbols-outlined text-[#C07828] absolute top-6 right-6 opacity-30 text-5xl">auto_awesome</span>
<h4 className="font-headline text-[#C07828] mb-2 uppercase text-xs tracking-widest font-bold">Curator Tip</h4>
<p className="text-tertiary font-label text-sm leading-relaxed">Users with higher trust scores get early access to textbook listings. Your current score of 98 puts you in the top 5% of your department.</p>
</div>
{/* Quick Activity */}
<div className="bg-white p-8 rounded-[24px] editorial-shadow">
<h3 className="text-lg font-headline text-primary mb-6">Recent Activity</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary text-xl">check</span>
</div>
<div>
<p className="text-sm font-bold">Rental Returned</p>
<p className="text-xs text-slate-500">Sony A7R IV · Oct 24</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#C07828] text-xl">star</span>
</div>
<div>
<p className="text-sm font-bold">New Review</p>
<p className="text-xs text-slate-500">From Sarah M. · Oct 22</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-slate-600 text-xl">edit</span>
</div>
<div>
<p className="text-sm font-bold">Listing Updated</p>
<p className="text-xs text-slate-500">Organic Chemistry Vol II</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Contextual FAB (Only on relevant screens) */}
<button className="fixed bottom-12 right-12 w-16 h-16 bg-[#1A7A6A] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </div>
  );
};

export default ProfileDesktop;
