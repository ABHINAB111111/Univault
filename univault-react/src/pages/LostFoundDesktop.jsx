import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LostFoundDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from lost-found-desktop.html */}
      
{/* SideNavBar Shell */}
<aside className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-sm dark:shadow-none flex flex-col p-6 z-50 rounded-r-2xl">
<div className="mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<div>
<h1 className="text-2xl font-bold tracking-wider text-[#1C3F6E] dark:text-blue-400 font-syne">UniVault</h1>
<p className="font-dm-sans medium text-xs tracking-tight text-slate-500">Campus Asset Management</p>
</div>
</div>
<nav className="flex-1 space-y-2">
{/* Home */}
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-colors hover:bg-[#F3F1ED] dark:hover:bg-slate-800 font-dm-sans medium text-sm tracking-tight" to="/">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span>Home</span>
</Link>
{/* Lost & Found (Active) */}
<Link className="relative flex items-center gap-4 px-4 py-3 rounded-xl text-[#1A7A6A] dark:text-teal-400 font-bold bg-[#F3F1ED]/50 dark:bg-slate-800 font-dm-sans text-sm tracking-tight overflow-hidden" to="/lost-found">
<span className="material-symbols-outlined" data-icon="search_check">search_check</span>
<span>Lost &amp; Found</span>
<div className="absolute right-0 top-0 h-full w-1 bg-[#1A7A6A]"></div>
</Link>
{/* Rent */}
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-colors hover:bg-[#F3F1ED] dark:hover:bg-slate-800 font-dm-sans medium text-sm tracking-tight" to="/rent">
<span className="material-symbols-outlined" data-icon="key">key</span>
<span>Rent</span>
</Link>
{/* Marketplace */}
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-colors hover:bg-[#F3F1ED] dark:hover:bg-slate-800 font-dm-sans medium text-sm tracking-tight" to="/marketplace">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span>Marketplace</span>
</Link>
{/* Profile */}
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-colors hover:bg-[#F3F1ED] dark:hover:bg-slate-800 font-dm-sans medium text-sm tracking-tight" to="/profile">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span>Profile</span>
</Link>
</nav>
<div className="mt-auto">
<button className="w-full py-4 px-6 bg-[#1C3F6E] text-white rounded-[11px] font-syne font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-xl" data-icon="add_circle">add_circle</span>
                New Listing
            </button>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-72 flex-1 min-h-screen">
{/* TopNavBar Shell */}
<header className="fixed top-0 right-0 left-72 h-20 bg-[#F3F1ED]/80 backdrop-blur-md flex justify-between items-center px-12 z-40">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" data-icon="search">search</span>
<input className="w-full bg-white/50 border-none rounded-[7px] py-2 pl-12 pr-4 focus:ring-2 focus:ring-[#1C3F6E] transition-all text-sm font-dm-sans" placeholder="Search for items, locations, or categories..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 ml-8">
<button className="text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden cursor-pointer border-2 border-white shadow-sm" onClick={() => navigate('/marketplace')}>
<img alt="User Profile" className="w-full h-full object-cover" data-alt="portrait of a young man with a friendly expression in soft natural lighting, collegiate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtGXmSmQjvQjiqxhE4MjVOmJNaTokw7bszHCE-BTJS5hm1aYjl1IkBpNaWoPQaaPsqechy6_59ePQhXtJlsRBp9wzx1iZkaaHaEq48sRUm1BWQvxWRZ3ZiX15VJMIpguLQp14o7EtFSg8JmJx5NDkCuklVwDRV99WHtk3Crc9AaURxliFLQJFoW8UBvxtlkVxSG2xVcExf_hh7xx3Xu-XYtSpulnXquIJbDkbTDrZruEsHI4PpmNv0jb58_0AMNvrtwt9tgChjKB2W"/>
</div>
</div>
</header>
{/* Content Canvas */}
<div className="pt-28 px-12 pb-12">
{/* Hero / Editorial Header */}
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="font-syne text-5xl font-extrabold text-[#1C3F6E] leading-tight tracking-tight mb-4">Reunite with your essentials.</h2>
<p className="font-dm-sans text-lg text-slate-600 max-w-lg">A curated registry for lost belongings across the campus ecosystem. Search, report, and recover.</p>
</div>
{/* Segmented Control */}
<div className="bg-surface-container-low p-1.5 rounded-xl flex gap-1 self-start">
<button className="px-6 py-2 rounded-lg bg-white text-[#1C3F6E] font-bold shadow-sm transition-all text-sm font-dm-sans" onClick={() => navigate('/marketplace')}>Lost</button>
<button className="px-6 py-2 rounded-lg text-slate-500 hover:text-[#1C3F6E] transition-all text-sm font-dm-sans" onClick={() => navigate('/marketplace')}>Found</button>
<button className="px-6 py-2 rounded-lg text-slate-500 hover:text-[#1C3F6E] transition-all text-sm font-dm-sans" onClick={() => navigate('/marketplace')}>My Reports</button>
</div>
</div>
{/* Category Filters */}
<div className="flex flex-wrap gap-3 mb-10">
<button className="px-5 py-2 rounded-full bg-[#1C3F6E] text-white text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="grid_view">grid_view</span> All Items
                </button>
<button className="px-5 py-2 rounded-full bg-white text-slate-600 hover:bg-[#F3F1ED] text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="devices">devices</span> Electronics
                </button>
<button className="px-5 py-2 rounded-full bg-white text-slate-600 hover:bg-[#F3F1ED] text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="auto_stories">auto_stories</span> Books
                </button>
<button className="px-5 py-2 rounded-full bg-white text-slate-600 hover:bg-[#F3F1ED] text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="vpn_key">vpn_key</span> Keys
                </button>
<button className="px-5 py-2 rounded-full bg-white text-slate-600 hover:bg-[#F3F1ED] text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="shopping_bag">shopping_bag</span> Bags
                </button>
<button className="px-5 py-2 rounded-full bg-white text-slate-600 hover:bg-[#F3F1ED] text-sm font-medium transition-all flex items-center gap-2" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-lg" data-icon="more_horiz">more_horiz</span> Others
                </button>
</div>
{/* Bento/Grid Layout for Items */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
{/* Card 1 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-slate-100">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#B83A3A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Lost</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">🎧</div>
<img alt="Noise cancelling headphones" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="professional photo of sleek dark noise-cancelling headphones resting on a wooden library table with warm bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn5S1ERp3exJAh2i0MJpPQZHVxAP3i6eg3rF08atnDy-InTP33vpQ6S3_o2dAqKNnjxV1_fMraIsaVDJLAdcyo0Mbd8_WvBN7peluzm9TPU8SMfKLQGtk83P5u047FNTEUb7vI29gHIAXILZO9wBAhM69FBDTY1Wc-Os6EfWNLh3AxS48hK-9T6VdtCe2X-HBrUa6NSAGzbYeYyXIcwB5DNKH-wPcR-LcykPlRC_COk13469-5TshrjtTWayYPhEK9_YrJ4BCwrm1x"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">Sony XM5 Headphones</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Electronics</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Main Library, 3rd Floor</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 24, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1A7A6A] text-white rounded-[11px] font-bold text-sm hover:bg-[#1C3F6E] transition-colors" onClick={() => navigate('/marketplace')}>Contact Owner</button>
</div>
</div>
{/* Card 2 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#1A7A6A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Found</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">📔</div>
<img alt="Leather notebook" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="vintage leather-bound journal sitting on a sun-drenched cafe table with a cup of coffee nearby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Ew0pyCIg-LwGozG3lP5YdHlOfUi1ps44JyVA3Pm4cM28bBVeANtsiYKitoOXQPMs48nczUpoJu7VYWn16yQFs6j9V7-mbasXprli2sURDi3pWIwiEzYRNQ9gZZBaEPsac19hViKTy5qfb-HAGKxmdVMSSlzRAcW51FDT9thrAU_vvmU9UJFj11QRumkSUxWsFnOtoU1rqN5qeZKcMoVSxqgDUajrl8kMWAS-4Op-eYz45DcQgYI8xD6Mwbf7qUteXXuwsPBzU0md"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">Leather Moleskine</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Books</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Campus Café</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 25, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1C3F6E] text-white rounded-[11px] font-bold text-sm hover:opacity-90 transition-opacity" onClick={() => navigate('/marketplace')}>Claim Item</button>
</div>
</div>
{/* Card 3 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#B83A3A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Lost</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">🔑</div>
<img alt="Keyring" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="a set of keys with a small colorful keychain lying on a grey stone pavement with bright sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8oA_YSS61dYm-QtWttaUKOxe9BTQdaElNWoEVO1er0-wM5UejQdc4fahLyneUUE-9AadykGpbXV4AZgYCMnQbj3o1Wnxs9JyRsVRDpCT16htQtWtslzBMT2a6gUGS4vDkw4CkvIhPZH5uStRtCsqVg85VBgDyGY8gg5z-gy69SrZt_Uw23fa34bonRQv7Dt7uKXL8G9F0EA6iBCTs3cMf4oFBnK7x8HgkiA3G4Z1rT0PT-PrFtum-cSDqSZhrQC9pZ7d06f728wHX"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">Dorm Room Keys</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Keys</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Student Union Gym</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 22, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1A7A6A] text-white rounded-[11px] font-bold text-sm hover:bg-[#1C3F6E] transition-colors" onClick={() => navigate('/marketplace')}>Contact Owner</button>
</div>
</div>
{/* Card 4 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#1A7A6A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Found</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">🎒</div>
<img alt="Brown backpack" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="stylish brown leather backpack placed against a white brick wall in a modern office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5g8q_1Z6se8Xebmzjl5OqNc8OOPhTCcvxEDtCQ2mgSV8c0ynCMg4eNWHgqvmRDnlngs1B13rZCSaasVlZJi-wPRug-osiJXxDpofXbJWYGk8JSRKFq-3mc8lIEDpYqsoJL_dpY_dHs8oPAoUWC4lCNXFcf5n8nB_UnERd2m1_hbLz6OeIrftAznInajlchdbP-o7S4lVBBurZl97ldE9R5dlBOTLgpVjfIsGN19na3EAd_Qx1y7bVLY2qaMcIUB7UEAprpxJSzsqs"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">Fjällräven Backpack</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Bags</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Engineering Hall</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 26, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1C3F6E] text-white rounded-[11px] font-bold text-sm hover:opacity-90 transition-opacity" onClick={() => navigate('/marketplace')}>Claim Item</button>
</div>
</div>
{/* Card 5 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#B83A3A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Lost</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">🖋️</div>
<img alt="Luxury pen" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="macro photograph of a silver fountain pen resting on a crisp white piece of paper with architectural sketches" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcAMGuaV-8A3Z8UQ2swMteKLsQ8V2r8X5_vasMDH1OVMB8oOdm--QBTUwO3iSMW2zkazt1MvPUMDLuFxvMKEX91JbkrSdRt3RtxEnvT7U4fWOfTVHjmK8nkITsLHxyLpX0oZcryQGowKVOvlXF2k6ZYCKvscj10QsV84-uFLFh8YNkbbodL3WT8UB5dmPTvm-lWBTlLkS2UPZJH3Mij_cmEmvc5_HDoVqR6APeecHzLgDl3CL9me08Vw4BqEkVQkBoFPA8tYAwQVp7"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">Parker Fountain Pen</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Others</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Law Faculty Annex</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 21, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1A7A6A] text-white rounded-[11px] font-bold text-sm hover:bg-[#1C3F6E] transition-colors" onClick={() => navigate('/marketplace')}>Contact Owner</button>
</div>
</div>
{/* Card 6 */}
<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="relative h-48 bg-surface-container flex items-center justify-center p-4">
<div className="absolute top-4 left-4 px-3 py-1 bg-[#1A7A6A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Found</div>
<div className="text-6xl group-hover:scale-110 transition-transform duration-500">💻</div>
<img alt="MacBook Air" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-alt="a silver slim laptop slightly open on a minimalist white desk with a small plant in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjBMYo7kI8Z4xWj27noeM1TCwCIQvUJKxjUNNJ5leIJfx-5GFZoCG9ZvNzMDv0OnnYiwyTwfKRjf-_HluUn9PcvMTenf67vDJHe-eoZdBdR-eDo7XFbEhqEP2BuyQkpySU9YtkVi_G35S6YbD5rIPYhKlN8v56UwLq6GpqAJ7i_7Djpgn7j7iWtVxqQrgYdjlurqZSB2P8X83zH5ZxC1nTkgqogbeus7oqJ9kCdcS7N0vOQkoTu8cANP-iTognSzmKho52XWf7-3EX"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<h3 className="font-syne text-xl font-bold text-[#1C3F6E]">MacBook Air M2</h3>
<span className="text-[10px] font-bold text-[#C07828] bg-[#F3F1ED] px-2 py-1 rounded">Electronics</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span>Co-working Hub</span>
</div>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 27, 2023</span>
</div>
</div>
<button className="mt-auto w-full py-3 bg-[#1C3F6E] text-white rounded-[11px] font-bold text-sm hover:opacity-90 transition-opacity" onClick={() => navigate('/marketplace')}>Claim Item</button>
</div>
</div>
</div>
{/* Floating Notification / Curator's Note */}
<div className="mt-16 bg-[#F3F1ED] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/5 rounded-full -mr-20 -mt-20"></div>
<div className="w-16 h-16 bg-[#C07828] rounded-full flex items-center justify-center text-white flex-shrink-0 z-10">
<span className="material-symbols-outlined text-3xl" data-icon="verified">verified</span>
</div>
<div className="flex-1 z-10">
<h4 className="font-syne text-xl font-bold text-[#1C3F6E] mb-2">The Curator's Security Protocol</h4>
<p className="font-dm-sans text-slate-600 leading-relaxed">To ensure high integrity, all "Claim" requests are reviewed by campus security. Please be prepared to provide a detailed description or proof of ownership when contacted.</p>
</div>
<div className="z-10">
<button className="px-6 py-3 border-2 border-[#1C3F6E] text-[#1C3F6E] font-bold rounded-[11px] hover:bg-[#1C3F6E] hover:text-white transition-all" onClick={() => navigate('/marketplace')}>Learn More</button>
</div>
</div>
</div>
{/* Floating FAB for new listing - only on relevant pages */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-[#1A7A6A] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-3xl" data-icon="post_add">post_add</span>
</button>
</main>

    </div>
  );
};

export default LostFoundDesktop;
