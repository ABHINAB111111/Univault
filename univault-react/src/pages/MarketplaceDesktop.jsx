import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MarketplaceDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from marketplace-desktop.html */}
      
{/* SideNavBar Shell */}
<aside className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 flex flex-col p-6 z-50 rounded-r-2xl shadow-sm dark:shadow-none">
<div className="mb-10">
<h1 className="text-2xl font-bold tracking-wider text-[#1C3F6E] dark:text-blue-400 font-syne">UniVault</h1>
<p className="font-dm-sans medium text-sm tracking-tight text-slate-500">Campus Asset Management</p>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] transition-all hover:bg-[#F3F1ED]" to="/">
<span className="material-symbols-outlined">home</span>
<span className="font-dm-sans font-medium text-sm">Home</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] transition-all hover:bg-[#F3F1ED]" to="/lost-found">
<span className="material-symbols-outlined">search_check</span>
<span className="font-dm-sans font-medium text-sm">Lost &amp; Found</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] transition-all hover:bg-[#F3F1ED]" to="/rent">
<span className="material-symbols-outlined">key</span>
<span className="font-dm-sans font-medium text-sm">Rent</span>
</Link>
{/* ACTIVE TAB: Marketplace */}
<Link className="flex items-center gap-4 p-4 rounded-xl text-[#1A7A6A] dark:text-teal-400 font-bold border-r-4 border-[#1A7A6A] bg-[#F3F1ED]/50" to="/marketplace">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-dm-sans text-sm">Marketplace</span>
</Link>
<Link className="flex items-center gap-4 p-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] transition-all hover:bg-[#F3F1ED]" to="/profile">
<span className="material-symbols-outlined">person</span>
<span className="font-dm-sans font-medium text-sm">Profile</span>
</Link>
</nav>
<div className="mt-auto">
<button className="w-full bg-[#1C3F6E] text-white py-4 rounded-2xl font-syne font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">add</span>
                New Listing
            </button>
</div>
</aside>
{/* Main Canvas */}
<main className="ml-72 min-h-screen">
{/* TopNavBar Shell */}
<header className="fixed top-0 right-0 left-72 h-20 bg-[#F3F1ED]/80 backdrop-blur-md flex justify-between items-center px-12 z-40 transition-all">
<div className="flex items-center gap-6 w-1/2">
<div className="relative w-full max-w-md">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#1A7A6A] transition-all font-dm-sans text-sm" placeholder="Search textbooks, tech, dorm gear..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-surface-container transition-colors rounded-lg" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">tune</span>
<span className="text-sm font-medium">Filters</span>
</button>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 border-r border-slate-200 pr-6">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-[#1C3F6E]">notifications</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-[#1C3F6E]">settings</span>
</div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-sm font-bold text-[#1C3F6E]">Alex Rivera</p>
<p className="text-xs text-slate-500">Junior Year</p>
</div>
<img alt="User Profile" className="w-10 h-10 rounded-full object-cover border-2 border-[#1A7A6A]/20" data-alt="Close-up portrait of a young college student with a friendly expression in a brightly lit modern campus library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAwKgx6Hc5sgTKfzJvl5ZN8-KgzDFRTvZqJbaRS3EFw386mrBN7xPJk-UahiwYC5XokdGoVn1fk8LjxWCSPEqI_WN9UWsCQXkCErjC6mftmqAj2Ku-9gWplPihFVWkptEZ0lXwBsFmuh4VmLmr65zb2l3NcWYI-OCdWTtg6S9OEmgMs0z9qjmqsBC1lxWRf3f3RRUTVNo7WNuK1YXlTpF5pL8feme8z3cVgYyGcBwtSBDSSd-tzerPPl9YPVT7UPGTXsOh8DFVwb0"/>
</div>
</div>
</header>
{/* Content Canvas */}
<div className="pt-28 pb-12 px-12">
{/* Editorial Hero Banner */}
<section className="relative h-80 rounded-[32px] overflow-hidden mb-12 flex items-center p-16 curator-shadow">
<img alt="Campus Life" className="absolute inset-0 w-full h-full object-cover" data-alt="Vibrant campus marketplace with students browsing tables of books and electronics under soft afternoon sun with academic buildings in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj3nYp133RCwWPrJKg5OaddSjQTBGRaUw-MGxVdM27NjMu3FPczvwMx_G5jd_jOEp2QFpYc-RqUC_ZIysWaxC9aFkQx4_1jDz8orJut_0U9mgsXIgOldEKs1lV_aBaxDaAvjKRTmUAjM7_9k9rfwWFRJpFQtnYNHNYttK0WcJMXO0ElwiBulyH2TeqmmXveYrADqXGuDaQGoDnDLgnvPCVoGudhObezih1XAE_tGOPsED6daWg5ANAyXwiiHChOExWSmf7RAPRsdUy"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C3F6E] via-[#1C3F6E]/60 to-transparent"></div>
<div className="relative z-10 max-w-lg">
<span className="inline-block px-4 py-1 bg-[#C07828] text-white rounded-full text-xs font-bold font-syne tracking-widest uppercase mb-4">Curated Deals</span>
<h2 className="text-5xl font-syne font-extrabold text-white leading-tight mb-6">Sustainable Campus <br/><span className="text-teal-300">Reselling.</span></h2>
<p className="text-slate-100 font-dm-sans text-lg mb-8 opacity-90 leading-relaxed">Give a second life to high-quality gear. From textbooks to tech, curated by your peers.</p>
<button className="bg-[#1A7A6A] hover:bg-[#156155] text-white px-8 py-4 rounded-xl font-syne font-bold transition-all transform hover:-translate-y-1" onClick={() => navigate('/marketplace')}>
                        Explore Marketplace
                    </button>
</div>
</section>
{/* Category Filters */}
<div className="flex items-center gap-4 mb-10 overflow-x-auto no-scrollbar py-2">
<button className="px-6 py-2 rounded-full bg-[#1C3F6E] text-white font-syne font-bold text-sm whitespace-nowrap" onClick={() => navigate('/marketplace')}>All Items</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Textbooks</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Electronics</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Dorm Life</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Kitchenware</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Fashion</button>
<button className="px-6 py-2 rounded-full bg-surface-container-low text-slate-600 hover:bg-surface-container-high font-syne font-medium text-sm whitespace-nowrap transition-all" onClick={() => navigate('/marketplace')}>Transport</button>
</div>
{/* Bento Grid Marketplace */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
{/* Card 1 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Clean stack of academic textbooks on a wooden desk with selective focus on the spine of a biology book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_7b__lLB8HFa1WWWDQXqhyspp8kUCcBG2CckRCw4MDe28vF6FJ4Otwr302L9BIWMoq3E3DNnyZWYyvCh8vin9kJsMUop_JgkIbJ-CsndRFCYkQpJv4P_Kd3WvjefozPY-P1X3BePRtVVsEXjzN9pRoveWQVdLvFeUGJwHJvcQMqQYFegadT59zL76eJxspSszuwUSBztePJptaowQmKBSAneryIfgB2cKGJ622jbATYz0eD5apNMT5n7wDLJJhgnQLdg1902qWi3"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-teal-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold text-[#1C3F6E] uppercase tracking-tighter">Verified</span>
</div>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Advanced Calculus III</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$45</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Hardcover, Latest Edition</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded uppercase">Like New</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">2 hours ago</span>
</div>
</div>
</div>
{/* Card 2 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Professional wireless over-ear headphones in matte black finish, isolated on a neutral gray background with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWfGBZkzrErVPmBEofoES-byrqSaWJOodiLEAPFlYa_uyqpxFnI6gP_uy_LS4qUdRnAbi9v1KBnCY6XPCqvOWBlQ8-KR0kUG4DK-MSBRGCZNoBdtLjRtFitp1rQGm4vMUTYKgM5AIVO_hYrQg5noIxnN-CMK6yJYgQzD8Xz1jGXp94U0stLADWfsOqA5JQivZ98MecJ-UsUQ0iBuqmVXYsIEAPWlVMY73deHn301gi8ye9acmIjfBQqF7Z11Ig8fYlsWvowvYMM83"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-teal-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold text-[#1C3F6E] uppercase tracking-tighter">Verified</span>
</div>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Noise Cancelling Pro</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$120</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Battery life 30h, great for focus</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase">Used</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">5 hours ago</span>
</div>
</div>
</div>
{/* Card 3 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern electric kettle in a minimalist college dorm kitchen setting with warm morning light hitting the surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfBdsy5UDCkaJtg_l19_X5NCkoErnnF4NPZ8j00X-Kklpiu12DRF7X40S8IRYAKOTPc5yT7BTTp8S7L_QdJWlbR9zEprWFVKypGwS0nT-EKiWxL0n98_bmqGqxSPWdQuMEs4jAnYWSjlRd2lftAgPmUwSsBO6bewvh0gvvmwl19Ab2ZRtil_lds9_rD4sfWegmbaQYvWwpKp02nNCVNbVyysTtnotj8_9FRhss9yhUN2f1ZDz6BhvSRkVDpv4RlD9XuqvUYl8n5qW1"/>
<div className="absolute top-3 right-3 bg-[#1A7A6A] text-white px-3 py-1 rounded-full">
<span className="text-[10px] font-bold uppercase tracking-widest">New</span>
</div>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Fast Boil Kettle</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$25</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Unopened, 1.7L Capacity</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded uppercase">New</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">Just now</span>
</div>
</div>
</div>
{/* Card 4 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Clean minimalist white desk lamp on a workstation with laptop and notebooks in a cozy apartment setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt9SSqwEiz6TL6bcQ7L1yeEXzXZEh2-2GljLqVGiO9cCn10kconkVs4MDufgwfqutYgIbZPa0ySsgDcpegdKk_byxJfPCSXZTFz2Ica-K3Clo463-sL9oNLDqz3ZV3xe9yW5yf72g4161raTz6RFtk9i2JSw9jAtalhyIX09MwKFFRgLLzr3KQ9W8XDDKVe_7tBfuE_qrnEgUyX1i4fNVg_to3FCCk7kcXHiyN0hqV43mI3e93o76dvB2qnKnAWFUTeJkU-Baaygq1"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-teal-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold text-[#1C3F6E] uppercase tracking-tighter">Verified</span>
</div>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">LED Study Lamp</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$18</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Adjustable brightness, USB-C</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded uppercase">Like New</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">1 day ago</span>
</div>
</div>
</div>
{/* Card 5 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sleek silver road bike leaning against a modern brick wall on a college campus pathway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_keahI1PF8BcUs6PXZbf8ul23uBxZiVNvkbAOYu73SVN2AB8iCcHWBWbP-alqrlv6iojt5FpE-ygMKLPwiQdbYHSRiSceo5O0NuILyTCCnMpwZufIzduZdENzYZR70i_2HMKIuZ-71ADqzAyftu7MX3_2Mmmd8r_w4quGq3xWimMvPiWGSv_tnck-IR4R9PWSSTgmTnq5XZNtj1AIjgu-8ncLx1aVaMwL4LCKMbJr-eNfiuw2OMQ61uqcEPoQUBOakaOTGbdJX_Gl"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Commuter Road Bike</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$185</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">10-speed, recently serviced</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase">Used</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">4 hours ago</span>
</div>
</div>
</div>
{/* Card 6 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Vintage-style Fujifilm camera on a white surface with small accessories and soft creative lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnHrzP1UehzEOtXlNFsdgM5G3wtGbm4ZBBGfrAvFoY0xlRiaTAgt8vxmdrGv-LE7pWoJQq63vXWxYurqB5YTNBTUzEoAWHGAfWNq6_rqjPqDFwz3TE4wdaAYfLim0-5YXAqcnkUFJYTol_Q8yNVCKR7LgCfRKg5nGyKV8o4N2kDLPIAHaqIFC2Dumg6F7qQn6vwa8DkOIbDOqNhB6RPyB1KZ1FAG7FWVnUnxqT1-ZNTj8PW-s5LuuNYdnmMD_mIG76EYhhhzcew23e"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-teal-600" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold text-[#1C3F6E] uppercase tracking-tighter">Verified</span>
</div>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Instax Mini 11</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$55</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Comes with 10 extra films</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded uppercase">Like New</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">2 days ago</span>
</div>
</div>
</div>
{/* Card 7 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Ergonomic mesh office chair in a bright studio space with a clean aesthetic and natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOHc-GDGBKtqxvztK1L2Dm-9CWCH_-iDKNJd8oNHWmJyzMEaBr639fBwKleYx54pePTn8tAVFrb8czSc5h0W-TbqFb57JFR2pxHUh-xfayVwFAa4VjNaakWOQVqpiV5nDARcyYGNdytRRDv__Sl6kwwZcqX2tcytd2wpoYDOWNcK0qtuFUC-PMSbW9lzYhrbrsl407DdTHZoj7--_ucz47zl_RrafD8BJIemC94Eq6wX81_6QFkNLIvAuDfx9sOkxilmlVo4U6m1J"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Mesh Office Chair</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$75</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Ergonomic, height adjustable</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase">Used</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">6 hours ago</span>
</div>
</div>
</div>
{/* Card 8 */}
<div className="group bg-surface-container-lowest rounded-[24px] p-4 curator-shadow transition-all hover:-translate-y-2">
<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Collection of colorful fashion sneakers neatly arranged on a white shelving unit in a modern retail space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGeeAUn5F8ZBNs3_IfBuytePxYB87Miimb0cnGSU9wFmSSd3HaVMl8zhKCZnifk9wUY_lINv_BfXrpyrSrUTaJhAzEP2YgrJAM2gLht6DHXxK_zDVkY-RTFQlj2Y5VcgfCgvW9oSmvA8wFa5TAFqo1JGrZyPb43D9Cf5oGCGF3lzQGfWEOF9QhpwGwF01k1jLhFMaNv83Ipm3S_YSiEFkfbg05eoVw6xbXUFMg1Bql54vb8FwvBLf4Jg83b_xEMJrB93Tj9ShL9_qD"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-syne font-bold text-slate-800 text-lg leading-tight">Limited Edition Kicks</h3>
<span className="font-syne font-extrabold text-[#1C3F6E]">$90</span>
</div>
<p className="text-xs text-slate-500 font-dm-sans mb-3">Worn once, original box included</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded uppercase">Like New</span>
<span className="text-[10px] text-slate-400 font-medium ml-auto">8 hours ago</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Floating Action Button for Mobile / Small Web (Hidden on Large) */}
<button className="md:hidden fixed bottom-8 right-8 w-16 h-16 bg-[#1A7A6A] text-white rounded-full shadow-2xl flex items-center justify-center z-50" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </div>
  );
};

export default MarketplaceDesktop;
