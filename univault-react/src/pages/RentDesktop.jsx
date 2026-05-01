import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RentDesktop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {/* Extracted from rent-desktop.html */}
      
{/* SideNavBar (Shared Component) */}
<aside className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 flex flex-col p-6 z-50 rounded-r-2xl curator-shadow">
<div className="mb-10">
<h1 className="text-2xl font-bold tracking-wider text-[#1C3F6E] dark:text-blue-400 font-syne">UniVault</h1>
<p className="font-dm-sans medium text-sm tracking-tight text-slate-500">Campus Asset Management</p>
</div>
<nav className="flex-1 space-y-2">
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-all duration-350 hover:bg-[#F3F1ED] dark:hover:bg-slate-800" to="/">
<span className="material-symbols-outlined">home</span>
<span className="font-dm-sans font-medium text-sm">Home</span>
</Link>
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-all duration-350 hover:bg-[#F3F1ED] dark:hover:bg-slate-800" to="/lost-found">
<span className="material-symbols-outlined">search_check</span>
<span className="font-dm-sans font-medium text-sm">Lost &amp; Found</span>
</Link>
{/* Active State for Rent */}
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#1A7A6A] dark:text-teal-400 font-bold border-r-4 border-[#1A7A6A] dark:border-teal-400 bg-[#F3F1ED]/50 dark:bg-slate-800 transition-all duration-350" to="/rent">
<span className="material-symbols-outlined">key</span>
<span className="font-dm-sans font-medium text-sm">Rent</span>
</Link>
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-all duration-350 hover:bg-[#F3F1ED] dark:hover:bg-slate-800" to="/marketplace">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="font-dm-sans font-medium text-sm">Marketplace</span>
</Link>
<Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#1C3F6E] dark:hover:text-blue-300 transition-all duration-350 hover:bg-[#F3F1ED] dark:hover:bg-slate-800" to="/profile">
<span className="material-symbols-outlined">person</span>
<span className="font-dm-sans font-medium text-sm">Profile</span>
</Link>
</nav>
<div className="mt-auto">
<button className="w-full bg-[#1C3F6E] text-white py-4 rounded-[11px] font-syne font-bold hover:opacity-90 transition-transform active:scale-[0.98]" onClick={() => navigate('/marketplace')}>
                New Listing
            </button>
</div>
</aside>
{/* TopNavBar (Shared Component) */}
<header className="fixed top-0 right-0 left-72 h-20 glass-nav flex justify-between items-center px-12 z-40 transition-all">
<div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full w-96">
<span className="material-symbols-outlined text-slate-400">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm font-dm-sans w-full" placeholder="Search campus rentals..." type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>notifications</button>
<button className="material-symbols-outlined text-slate-500 hover:text-[#1A7A6A] transition-colors" onClick={() => navigate('/marketplace')}>settings</button>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-highest">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="professional portrait of a young man with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA_MRofUSseUiU6wdnIsfn5Tb4UUOijprdK3Z-CcqPQPADCsLubL6fkGQaRrKIM4xtX3fUVZNSt9e3ixHC0QMpPehsHOMi-fejydVmnwqMqZh7nKsFiMavxfVRyX8GM7v-7BjHuL06a579mIoVN77EZxBIDpuFxEevABFaVZKKsXLij_l7EYVa1IekgjUSgItgy-4O2qBQm5b7UFiGKJ1vvQuPXSR94xMtuS2txFAzRHdkCUCtSeqFOPrwN58VrjYGBSfkJ9nWNJDj"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="ml-72 pt-28 px-12 pb-20 max-w-[1600px]">
{/* Hero Banner with Stats */}
<section className="relative rounded-[24px] overflow-hidden mb-12 bg-primary-container text-on-primary-container flex flex-col md:flex-row items-center">
<div className="p-12 md:w-2/3 z-10">
<h2 className="font-syne text-5xl font-extrabold mb-4 leading-tight">Your Campus,<br/>Curated for Utility.</h2>
<p className="font-dm-sans text-lg opacity-90 max-w-lg mb-8">Access thousands of premium university assets from peers you trust. Reduced waste, maximum convenience.</p>
<div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
<div>
<p className="font-syne text-3xl font-bold">1.2k+</p>
<p className="text-sm font-dm-sans opacity-70 uppercase tracking-widest">Active Listings</p>
</div>
<div>
<p className="font-syne text-3xl font-bold">4.9/5</p>
<p className="text-sm font-dm-sans opacity-70 uppercase tracking-widest">Trust Score</p>
</div>
<div>
<p className="font-syne text-3xl font-bold">~15m</p>
<p className="text-sm font-dm-sans opacity-70 uppercase tracking-widest">Avg. Match Time</p>
</div>
</div>
</div>
<div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
<img alt="Campus Life" className="w-full h-full object-cover opacity-60" data-alt="vibrant campus courtyard with modern architecture and students moving between classes in warm afternoon sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Nya3RetdzT-Panrxk5Kenb4fFjUtYq4jcsGSL9jsodxi8o60RWRKMUkK0_mC-kGyp84WWox8tgJU5FZtmIKKriSNh_EUUXZ45gI55JAUQ5Bw_bYwP0EWFnWR3tL_lWG8TkkWOuIiCwvF9EYlx55BBsJJj-GUNEeIh_pwegRdrIgYPggY3qwFCKaIACCg9v0g9XxxnzgJgnP42NKw0Ooq9_FOCgnIo_hpdva6MO75--Qd3Uf2HmLzRYVkxVnychpM90YOIlSyeYKg"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-container/20 to-primary-container"></div>
</div>
</section>
{/* Category Filters */}
<section className="mb-10 overflow-x-auto pb-4">
<div className="flex items-center gap-4">
<button className="bg-[#1C3F6E] text-white px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm curator-shadow" onClick={() => navigate('/marketplace')}>All Assets</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Lab Equipment</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Graphing Calculators</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Photography Gear</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Sports Equipment</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Kitchenware</button>
<button className="bg-surface-container-low text-on-surface px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm hover:bg-surface-container-high transition-colors" onClick={() => navigate('/marketplace')}>Study Furniture</button>
</div>
</section>
{/* Rental Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
{/* Rental Card 1 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="DSLR Camera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="professional dslr camera with high-end lens on a minimalist white desk with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKQZjjVgGbBEwrqwSmUQfq-lOL_B_cPEL9rcH_vMt_8cgdVN9Fkr_iiz0IdKLYsFpi5CfTsGgixRAxEeu5sEHMtIErZiySfnX0W8wO9_O-wrfLv0O1dYZPinkzt8f0zAbvbwdDvF3JARlOdKcGlkC1DcDGG5KZU2wn3ZvLMKj-2l4W9SL6wE2HCCxVZyWfIEkhOZV1aDrO1PxN3bOfPzGjD1SlPIOf8FEA6gDmANc1cCCFqa9ttabTP6txQHf_BfSSyH1sm5GON9-a"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-[#C07828] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Excellent
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">Canon EOS R5 + 24-70mm</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$25<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Perfect for art projects and event coverage. Includes 2 batteries.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="headshot of a smiling university student in a denim jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmYDAEDhIhQxQRGeGImDTaln6Fjv3A1gDBzFF9BdNkTZvFrd21aYnaTw3MHit7hKKlH3z6W8w8cMSKwJT3N1Bc6o8wXe_8yGVah3L2hTHKre6C3EU8_48AEga-XqVe2-5t8U-82TepPBqdFIs2OduDwfirS010vHhYRpIK1xKmaz9QQktrM0UeAl1evpBbBXJ098JnrzoPqV_y_EnmD_u_M4f9vEU2-YUcbgRNAh199F26NnEoWnEarXdocHPezs3cDIUmIcSYBtfV"/>
</div>
<span className="text-xs font-medium text-on-surface">Alex M.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 2 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="Nike Sneakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clean limited edition sneakers on a wooden floor with morning light coming through a window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf3m4FLKDdiWMqJcccq-ppW8y7B_lV6cPU3N0mUViIzffSq7HbFdqgD5g-uvhpF3bcpwWjqwGFD0zgsy_N34sqenNxbeCjWqxomyIJrsPlVUX92fxPW49K4siDpB-0QDH9TIflfj1M2-oymH0BZElvek0kY585ZBhys_GKDvKi_rcWS8nQe6EKynvvmmreENXNO4Baoy73aCLHZEH6geoKQ3NnQjELJr8EA_oxnAxhvCFgIvrPa9ufBu6qYT0isq3igwkLjIty7jmG"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-surface-container-highest text-on-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Good
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">Nike Air Jordan 1 High</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$12<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Size 10. Cleaned and sanitized after every rent. Great for photoshoots.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="cheerful portrait of a young woman with curly hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeRH9dEiM6mr-EGL5RKbzhiNUXON06TlipZBbwpY9rtq-GsXWwHUeKtkfvTTW9F_Qr_20dSOl8OvwvHuyLL8dAqJW8KG_3SJ_AYh2riD35HaxGg7oCLEPy4psq_cdQy6hFFhdHzx1qFTuFvMRWERs6wrisulJBl4ecw4-s1ROvubUPQsZJJSP3S6ghZe5pbhs7hmdfP7ibARbPaQMWRHBiHEJJGG0MuHQHQhmc15XsIaeUY6J1TF1ehJ56GWg1kBQi32m8vNG0WH1C"/>
</div>
<span className="text-xs font-medium text-on-surface">Sarah K.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 3 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="MacBook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="modern laptop open on a wooden table with a cup of coffee and a notebook in a bright cafe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkAcDAXRzU2l3WJC4HiNxSBYAQVjFQw99JJjvhGJbXpYGMoXnLgwwVaEmF8Xd8MuiOH3xhYmxV6__Wpxij_U4fEStE98mV2FwPV3wtDbxlugghpCSAwNjQNjhfvlJF-NFgTsbBaYaQuiOefGH6I-CFmyYLtAgHosXYaSQszRYvZJnAQ1Cv7OMZ5_GWVdNY3KMybzL6tWrf6kmg3JTM-zvACFrCZZNFYVw0YFC1YtqLJTFFoT5QCOt072Gk1T79Yk36bLT4nKedPq7b"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-slate-300">verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Community Member</span>
</div>
<div className="absolute bottom-4 right-4 bg-[#C07828] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Mint
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">MacBook Pro M2 14"</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$45<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">32GB RAM, 1TB SSD. Perfect for heavy video editing or dev work.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="headshot of a student in a hoodie with a bright studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcbfmO36jE9fEhx7jv8aZTTlcT-7b2xG3_LXks6DeKaHPK2A1W9JCTdsJEOOOb8wy0mq181UfZ8lSoZTXmi0oGDEM0nlXjFlLESyh43cc1EKXuoKReGdbiOkYOAk-KPmBQQNhZKONvWLM6luJ76jHbXQc_OspdXl13CFOCt1U4yjvjBlSEBYSmwFnWRDfyevG_2Y__aogmmHBcxDDovQJCxfwKqgplnGnA-EvnDwzTU5jr6WeINhPWrH4KJM1fep-uN8tJKtVKLOu"/>
</div>
<span className="text-xs font-medium text-on-surface">Jordan T.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 4 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="TI Calculator" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="graphing calculator on a math textbook with a pen nearby on a dorm desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAksfsHnG6fEvRo5sHH019OUT6PHjrPGMQJaGb-BZ0VQEKq5aKV5hLFFDrjiQfPJJWhI-5cPzmBNu20c5uVwuRdbk6GODgoBKp643VNkUOJvV_-fob0YpEge46M8ZaxVcB_QAxZBPKv5P5Nk4F5P5DNt1fXAGtaKsaacVg3t_lTneeK5oIr1HgxK0phjPcrR5dKbUwHn3BwsGw3_9g6C5vny6whyZJx_zUDjnDmel0gNVtzN11vBEkb9JsmcPYozhaZTyP8PNnjM4nz"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-surface-container-highest text-on-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Fair
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">TI-84 Plus CE Edition</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$5<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Essential for Calc II exams. Charged and ready to go.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="profile photo of a young man with glasses and a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9aiyTBAys1tj773auqxZ09jKwJ-dqkMf3BGu0jIGz0ybEKlRNMz04wkNZ9KLukIa32qE7uvbiKDJFvn6xjbIIFWMpEP26o1OuwFkfHH7wTYiYeI8WVFfhfIHUndV1peGBqVQeHvMJYeQia14d0dkksR-dlLBPKpFjGvl6xPBtBxNCj6NdNNIeWmFlBnxcQ88GXbnJvBnsyi7FjMV2a_ic8VhUrxeCkcb0NbX5kbkFDQiOtwlKvVo8K1WNlZ3uzAEm6C24KxQNerNQ"/>
</div>
<span className="text-xs font-medium text-on-surface">Mark D.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 5 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="Board Game" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="stack of popular board games on a shelf in a cozy library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwCg-p4AMNV0Ztwg0F5Z9WZ4L_BHkYpZj9O02BaNLKiLVOL0ZD5DbLX5OI05_ktwdGugZLsrWBE7S4UPmiMkC3hvmRnl1qMESD7WWgMva-Ui8WZ7WifBgIBP8Tn1URNZZ_wWTvFhsEG8ZuKXCaUmM6mw2YlVvnZR4PX7Ne2qq2mxWyI6BYK0XP5YDyXoFbGBpXT7qEBuTsexpS7iy0Z8Fp1mIBOVSN9gejNsPqQzb5enhK7SkXAgLfZJbidnlbWoHbyQ16NvEO0ZPX"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-[#C07828] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        New
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">Catan: Starfarers Edition</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$8<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">All pieces included. Great for game night with the roommates.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="close up portrait of a young woman with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnacDBzoObLHjUtQjHDBj5bMKyR60p6azfrlso1xFj4PyuYvTCLzlpvT7tsVdqAIrDKzb7iN0yCzyfWZ5LOW2kRhPknuAERUY3Vtcr8sk1OfzOfVDYWMGAvgwGUN5eQdYrhrEbvWIi6lzqugUovnfoZF2cI4ksRKItBzfPWHpgoTXjxBSLfi1fS9mBnNBHpdriOYteNy3Dx6pwaoiowRufuGCxbQWgH8wR5U-yXPYIfg-TSmNxXN4s8GWSZEno6W8M1dahka7cjydJ"/>
</div>
<span className="text-xs font-medium text-on-surface">Emily R.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 6 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="Monitor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="ultra wide computer monitor on a clean white desk with soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_zUjdkPUSMuR1s-vwxedNKRPk0wzO1GBCrT5ptfnZ7BMsaEquSgBQx2BHhKRTndi2dt4djzRIm70UT53VT59WhJk_NRnM2dVKfvo60w8xo5IRcCDTwRLCTtYdwCA_vhXrElzO_t0oH8dzefgyRMBtcShqYV8MFOyHt02RgIVCa3udyasDKELnSsON3pOR9LLd0YTs5cgRc-cc2cEdzsXj2nC4Y8l-3iT-Z7W7Mob2SXiVt9Yrk0y2tVxasiiCc5uEOSSIeKRHKPg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-[#C07828] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Excellent
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">LG UltraWide 34" Monitor</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$20<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Boost your productivity during finals week. HDMI/USB-C cables included.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="professional portrait of a young man with a slight smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtScwvlBebwYwJfM_xvwB0iVyLmtorzAkGRlbK7S4TYk9LBWN5hfTLrVE4Eng9t2GQHE9amYot-1ty-7tbORAYlB5dj5iAjvnCopJriPlI6_6DsM-YfVQ5cE2uEI5wW0YJ9kuZHTxQIzgtlIfgcMxexWAFPiC6cqej7sDM-W5CEbyN2PEUsvpiNt1_Csjb_Q1yOsOKNx8gwy3e_xO1udLKu5k6JduLalj6u8wrd0vuKyfECl0__Z-Wh2UUw5Ge69NIrcBsK8THDH6i"/>
</div>
<span className="text-xs font-medium text-on-surface">Liam W.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 7 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-slate-300">electric_bike</span>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-slate-300">verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Community Member</span>
</div>
<div className="absolute bottom-4 right-4 bg-surface-container-highest text-on-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Used
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">Electric Scooter (Segway)</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$15<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Quick way to get across campus. Charger and helmet provided.</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="headshot of a smiling man with short hair and glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV3bXLPtIF88MYXL37lhiRBUryTbJYHEQlRrvUwo6T-B4qVrcvLhyeOz8EjCHGr0W_w0EvvW0IaXwJmJ91JcycUUdlMcDbXiqvageSeBtaxWCZavVfDxr5Vlqwb2VsdhId9oG93qWPPxE5yj06LqmjxZpr777EbaSAtgGS1kMwpqyBK68mtCePN4T5z7XPgl43i5dCsc1X3pFYaqFwUrxJAxNOlJiBpaaHMmTICGsTz75o4ZzZ-VHMNP6Ekf9ecNuc1X1nNAYlTaGf"/>
</div>
<span className="text-xs font-medium text-on-surface">Tom H.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
{/* Rental Card 8 */}
<div className="bg-surface-container-lowest rounded-[18px] overflow-hidden curator-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-56 w-full bg-surface-container overflow-hidden">
<img alt="Books" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="stack of engineering textbooks on a library table with dramatic light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp3XoTLoGi5dGpOvX6Idt_TuWJaRvcGTmCLutGFgZwR8UBt6VZT1DjhANAhceJUrM18gjFHU_0yFWByIguQ0u8J3T-M8ZZEfh-CkwuCSyI5kPa7VkmGxI5Upe6Rii6VesZW_xQ_0ZeEi8VeHRExPEISse6r42WN-iQL8LSzl8JcyAqhwHEVXxSuWizUhXPfgwYSxuTuuHBYKRSWEsqjpetdcmbZCPuyjQ-cojSnd-_wJ_zOem6q3XgeeUCvQ5AaTxBg-e-aC0eU62o"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#1A7A6A]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[10px] font-bold font-dm-sans text-on-surface uppercase tracking-tight">Verified Owner</span>
</div>
<div className="absolute bottom-4 right-4 bg-surface-container-highest text-on-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Fair
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-syne text-lg font-bold text-primary">Eng. Textbook Bundle</h3>
<p className="font-dm-sans font-bold text-[#1A7A6A] text-lg">$3<span className="text-xs font-normal text-slate-400">/day</span></p>
</div>
<p className="text-sm text-slate-500 font-dm-sans mb-6">Thermodynamics and Fluid Mechanics. Don't buy new!</p>
<div className="flex items-center justify-between border-t border-surface-container pt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Owner" className="w-full h-full object-cover" data-alt="smiling young woman with blonde hair looking at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUp62TlWQhL_PLvTf0peksvbsOAMsa3mJn1hKP8Qbdug8o-NVbABjBXBbG9Dku2MqpQzG1Vgc1oQ5TpYtgoRMvOmtI_sexzAwOWHjF4C3-NNs4fT2uHrkGTEqXkVkOjpWRZHKxq7kxhvwjwCu-aRXTG-j79lIPiEAZVYnQWnNx-ekqGQDxeMPak7UXVDgQjSaO3pV5T5lffRSLUK9J8S-BHeViEwkCCgkTc3e7-ivksBoynMLbCdWAKCynyewvoxscyzaP3OB_uQOL"/>
</div>
<span className="text-xs font-medium text-on-surface">Chloe B.</span>
</div>
<button className="text-[#1C3F6E] font-syne font-bold text-sm hover:underline" onClick={() => navigate('/marketplace')}>Reserve</button>
</div>
</div>
</div>
</section>
{/* Asymmetric Promotional Section */}
<section className="mt-20 flex flex-col md:flex-row gap-12 items-center bg-surface-container-low rounded-[32px] p-12">
<div className="md:w-1/2">
<span className="font-syne text-[#C07828] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Curator's Tip</span>
<h3 className="font-syne text-4xl font-extrabold text-[#1C3F6E] mb-6 leading-tight">Safety &amp; Trust First.</h3>
<p className="font-dm-sans text-slate-600 text-lg mb-8">Every transaction is protected by UniVault Insurance. We verify every student ID to ensure your gear stays safe and returned on time.</p>
<div className="flex gap-4">
<button className="bg-[#1A7A6A] text-white px-8 py-3 rounded-[11px] font-syne font-bold hover:opacity-90" onClick={() => navigate('/marketplace')}>How it Works</button>
<button className="text-[#1C3F6E] px-8 py-3 rounded-[11px] font-syne font-bold border border-[#1C3F6E]/20 hover:bg-white/50" onClick={() => navigate('/marketplace')}>View Policies</button>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl curator-shadow translate-y-4">
<span className="material-symbols-outlined text-4xl text-[#1A7A6A] mb-4">shield</span>
<h4 className="font-syne font-bold mb-2">Insured Rents</h4>
<p className="text-xs text-slate-500 font-dm-sans">Up to $500 coverage on every rental agreement.</p>
</div>
<div className="bg-white p-6 rounded-2xl curator-shadow">
<span className="material-symbols-outlined text-4xl text-[#C07828] mb-4">handshake</span>
<h4 className="font-syne font-bold mb-2">Peer Verified</h4>
<p className="text-xs text-slate-500 font-dm-sans">Connect with students through your .edu email.</p>
</div>
</div>
{/* Decorative background blob */}
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1C3F6E]/5 rounded-full blur-3xl"></div>
</div>
</section>
</main>
{/* Contextual FAB (Hidden on detail-heavy pages per mandate, but used here as primary action trigger for list screen) */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1A7A6A] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50" onClick={() => navigate('/marketplace')}>
<span className="material-symbols-outlined">add</span>
</button>

    </div>
  );
};

export default RentDesktop;
