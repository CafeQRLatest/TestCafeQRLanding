import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Users2,
  Globe2,
  Boxes,
  ToggleLeft,
  ToggleRight,
  Wifi,
  MapPin,
  ShoppingBag
} from 'lucide-react';



// Configuration Modules
interface ERPModule {
  id: string;
  label: string;
  description: string;
}

const erpModules: ERPModule[] = [
  { id: 'payment', label: 'Online Payment', description: 'Enable UPI, Card & Wallet payments at checkout.' },
  { id: 'images', label: 'Menu/Product Images', description: 'Show item images in digital menus and catalogs.' },
  { id: 'ledger', label: 'Credit Ledger (Udhaar)', description: 'Maintain credit accounts for regular customers.' },
  { id: 'tables', label: 'Table Management', description: 'Assign orders, reserve tables, and view layout states.' },
  { id: 'qr', label: 'QR Ordering', description: 'Self-serve tableside QR scanning & billing.' },
  { id: 'inventory', label: 'Inventory ERP', description: 'Track raw materials, stock levels, and food costings.' },
  { id: 'purchase', label: 'Purchase Orders', description: 'Manage supplier lists, POs, and incoming stock entries.' },
  { id: 'crm', label: 'Customers & CRM', description: 'Track purchase history and customer contact logs.' },
  { id: 'loyalty', label: 'Loyalty Points', description: 'Run customer point campaigns and reward systems.' },
  { id: 'discounts', label: 'Enable Discounts', description: 'Manage flat, percentage, or item-wise discount schemes.' },
  { id: 'kot', label: 'Send to Kitchen (KOT)', description: 'Instantly push orders to Kitchen Display Screen.' },
  { id: 'delivery', label: 'Online Delivery', description: 'Dispatch orders directly to delivery app.' }
];

// Presets by Industry
const industryPresets = {
  boutique: ['payment', 'images', 'inventory', 'crm', 'loyalty', 'discounts'],
  grocery: ['payment', 'ledger', 'inventory', 'purchase', 'crm', 'loyalty', 'discounts'],
  cafe: ['payment', 'images', 'tables', 'qr', 'inventory', 'loyalty', 'discounts', 'kot', 'delivery'],
  wholesale: ['payment', 'ledger', 'inventory', 'purchase', 'crm', 'discounts']
};

function App() {
  const [activeIndustry, setActiveIndustry] = useState<'cafe' | 'grocery' | 'boutique' | 'wholesale'>('cafe');
  const [selectedModules, setSelectedModules] = useState<string[]>(industryPresets['cafe']);
  const [activeApp, setActiveApp] = useState<'pos' | 'delivery'>('pos');

  // Handle preset selection
  const selectPreset = (preset: 'cafe' | 'grocery' | 'boutique' | 'wholesale') => {
    setActiveIndustry(preset);
    setSelectedModules(industryPresets[preset]);
  };

  // Toggle individual module in simulator
  const toggleModule = (id: string) => {
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Initialize Lenis Smooth Scroll (Crucial for WebGL Scroll Sync)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Calculate dynamic real-time price based on module choices
  const calculatePricing = () => {
    let addOns = 0;
    if (selectedModules.includes('kot')) addOns += 499;
    if (selectedModules.includes('ledger')) addOns += 499;
    if (selectedModules.includes('crm') || selectedModules.includes('loyalty')) addOns += 999;
    if (selectedModules.includes('inventory') || selectedModules.includes('purchase')) addOns += 1999;

    return {
      year1: 2499 + addOns,
      year2: 999 + addOns
    };
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 overflow-hidden font-sans">


      {/* Navigation (Heavily Frosted Glass) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5 lg:px-8 bg-white/50 backdrop-blur-2xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Cafe QR Logo" className="w-10 h-10 object-contain rounded-md" />
          <span className="text-xl font-bold tracking-tight text-zinc-900">Cafe QR ERP</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://pos.cafeqr.in/login/" 
            className="px-6 py-2.5 bg-zinc-900/90 backdrop-blur-md text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors shadow-lg text-sm"
          >
            POS Login
          </a>
        </div>
      </nav>

      {/* Hero Section (Transparent overlay) */}
      <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-none select-none flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-white/50 shadow-sm rounded-full text-xs font-bold uppercase tracking-wider text-primary"
          >
            ✦ Universal POS & ERP Platform
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] text-zinc-900 drop-shadow-sm"
          >
            One Platform. <br/>
            Any <span className="text-primary bg-none">Business ERP.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Adapt billing, inventory, CRM, and multi-timezone branch configurations dynamically. The industry-standard POS ERP crafted for modern retail, F&B, and wholesale operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <a 
              href="#simulator" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 cursor-pointer"
            >
              Configure Your POS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simulator Section (Glassmorphism Configurator) */}
      <section id="simulator" className="relative py-40 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm">Toggle Only What You Need</h2>
            <p className="mt-4 text-zinc-600 text-lg font-medium drop-shadow-sm">Select your industry preset to watch the configuration adapt. Add or remove modules at any time.</p>
          </div>

          {/* Industry Preset Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(['cafe', 'grocery', 'boutique', 'wholesale'] as const).map((industry) => (
              <button
                key={industry}
                onClick={() => selectPreset(industry)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer backdrop-blur-md shadow-sm ${
                  activeIndustry === industry 
                    ? 'bg-zinc-900/90 text-white border border-zinc-700/50 scale-105 shadow-lg' 
                    : 'bg-white/60 border border-white/60 text-zinc-600 hover:bg-white/90 hover:text-zinc-900'
                }`}
              >
                {industry === 'cafe' && '☕ Cafe & Bakery'}
                {industry === 'grocery' && '🍎 Grocery Store'}
                {industry === 'boutique' && '🧥 Fashion Boutique'}
                {industry === 'wholesale' && '📦 Wholesale & B2B'}
              </button>
            ))}
          </div>

          {/* Interactive Toggle Dashboard (Glassmorphism) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {erpModules.map((module) => {
                const isActive = selectedModules.includes(module.id);
                return (
                  <div 
                    key={module.id}
                    onClick={() => toggleModule(module.id)}
                    className={`flex items-start gap-4 p-5 rounded-3xl border backdrop-blur-xl transition-all cursor-pointer select-none ${
                      isActive 
                        ? 'bg-white/80 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]' 
                        : 'bg-white/30 border-white/20 hover:border-white/40 hover:bg-white/50'
                    }`}
                  >
                    <div className="mt-1 transition-colors">
                      {isActive ? (
                        <ToggleRight className="w-6 h-6 text-primary" />
                      ) : (
                        <ToggleLeft className="w-6 h-6 text-zinc-400" />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${isActive ? 'text-zinc-900' : 'text-zinc-500'}`}>
                        {module.label}
                      </h4>
                      <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live System Spec Overview (Dark Glass) */}
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/80 backdrop-blur-2xl border border-zinc-700/50 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Subtle glare effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="relative z-10">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Live Configuration</span>
                <h3 className="text-3xl font-extrabold mt-2 mb-6 capitalize">{activeIndustry} ERP Spec</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm items-center border-b border-zinc-700/50 pb-3">
                    <span className="text-zinc-400">Active Modules:</span>
                    <span className="text-white font-bold px-3 py-1 bg-zinc-800/80 rounded-full">{selectedModules.length} / {erpModules.length}</span>
                  </div>
                  <div className="flex justify-between text-sm items-center border-b border-zinc-700/50 pb-3">
                    <span className="text-zinc-400">Scalability:</span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Unlimited Terminals</span>
                  </div>
                  <div className="flex justify-between text-sm items-center pb-3">
                    <span className="text-zinc-400">Deploy Type:</span>
                    <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Instant Cloud Sync</span>
                  </div>
                </div>

                <div className="mt-8 border-t border-zinc-700/50 pt-6">
                  <h4 className="text-xs font-bold uppercase text-zinc-500 tracking-wider mb-3">Included Apps:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700/50">Owner Dashboard App</span>
                    <span className="px-3 py-1.5 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700/50">Cashier Terminal App</span>
                    {selectedModules.includes('delivery') && (
                      <span className="px-3 py-1.5 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">Delivery Driver App</span>
                    )}
                  </div>
                </div>

                <div className="mt-8 border-t border-zinc-700/50 pt-6">
                  <h4 className="text-xs font-bold uppercase text-zinc-500 tracking-wider mb-3">Real-Time Estimator:</h4>
                  <div className="bg-zinc-800/40 p-4 rounded-2xl border border-zinc-700/30 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Year 1 Total:</span>
                      <span className="text-white font-extrabold text-base">₹{calculatePricing().year1.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-t border-dashed border-zinc-700/50 pt-2.5">
                      <span className="text-zinc-400">Year 2 & Beyond:</span>
                      <span className="text-primary font-extrabold text-base">
                        ₹{calculatePricing().year2.toLocaleString('en-IN')}
                        <span className="text-[10px] text-zinc-400 font-normal"> / year</span>
                      </span>
                    </div>
                    <p className="text-[9px] text-zinc-500 leading-normal font-semibold mt-1">
                      *Includes ₹1,499 one-time setup & onboarding fee in Year 1. Renewal starts in Year 2.
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://pos.cafeqr.in/login/" 
                className="relative z-10 mt-10 w-full py-4 bg-primary text-white font-bold rounded-xl text-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 block"
              >
                Access Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Multi-Branch Features (Frosted Tiles) */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm">Scale Without Boundaries</h2>
            <p className="mt-4 text-zinc-600 text-lg font-medium drop-shadow-sm">Designed for complex organizational hierarchies, multi-timezone branches, and extensive warehouses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-all">
              <div className="p-3.5 bg-indigo-50 text-indigo-600 w-fit rounded-2xl mb-6 shadow-sm border border-indigo-100/50">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Multi-Timezone Branches</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Run separate branches across different cities or countries. The system handles localization, custom currencies, and local operational hours automatically.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-all">
              <div className="p-3.5 bg-rose-50 text-rose-600 w-fit rounded-2xl mb-6 shadow-sm border border-rose-100/50">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Role-Based Access (RBAC)</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Allocate unique privileges to Super Admins, Branch Managers, Cashiers, and Warehousing staff to avoid internal billing fraud.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-all">
              <div className="p-3.5 bg-amber-50 text-amber-600 w-fit rounded-2xl mb-6 shadow-sm border border-amber-100/50">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Warehouses & Terminals</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Manage central warehouses, supply runs, and individual billing terminal allocations to distinct register counters.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Play Store Apps Section */}
      <section id="apps" className="py-40 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side App Selectors */}
            <div className="bg-white/40 p-10 rounded-[3rem] backdrop-blur-xl border border-white/50 shadow-xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-zinc-900">Official Mobile Suite</h2>
              <p className="text-zinc-700 text-lg mb-10 leading-relaxed font-medium">
                Connect and sync mobile operations directly to your main cloud database. Select an app below to view its simulated screen layout inside the smartphone mockup.
              </p>

              <div className="space-y-6">
                
                {/* POS App Card */}
                <div 
                  onClick={() => setActiveApp('pos')}
                  className={`flex gap-5 items-start p-6 rounded-3xl border transition-all duration-300 cursor-pointer select-none ${
                    activeApp === 'pos' 
                      ? 'bg-white/95 border-primary/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]' 
                      : 'bg-white/10 border-transparent hover:bg-white/40'
                  }`}
                >
                  <img src="/logo-pos.png" alt="POS App Logo" className="w-16 h-16 object-contain bg-white rounded-2xl shadow-sm border border-zinc-200 p-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-zinc-900">Cafe QR POS App</h4>
                      {activeApp === 'pos' && <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>}
                    </div>
                    <p className="text-zinc-600 text-sm mt-1 mb-3">Your master terminal register. Install on Android tablets, touch displays, or hand-held devices to process checkout bills immediately.</p>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.cafeqr.app" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Play Store <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Delivery App Card */}
                <div 
                  onClick={() => setActiveApp('delivery')}
                  className={`flex gap-5 items-start p-6 rounded-3xl border transition-all duration-300 cursor-pointer select-none ${
                    activeApp === 'delivery' 
                      ? 'bg-white/95 border-primary/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]' 
                      : 'bg-white/10 border-transparent hover:bg-white/40'
                  }`}
                >
                  <img src="/logo-delivery.png" alt="Delivery App Logo" className="w-16 h-16 object-contain bg-white rounded-2xl shadow-sm border border-zinc-200 p-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-zinc-900">Cafe QR Delivery App</h4>
                      {activeApp === 'delivery' && <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>}
                    </div>
                    <p className="text-zinc-600 text-sm mt-1 mb-3">Driver tracking and dispatch system. Allows fleet drivers to retrieve directions, track customer drops, and update ticket states.</p>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.cafeqr.delivery" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Play Store <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side High-Fidelity Phone Simulator */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
              
              {/* iPhone 15 Styled Device Frame */}
              <div className="w-full max-w-[325px] aspect-[9/19.2] bg-zinc-950 rounded-[3.2rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] relative border-4 border-zinc-900/90 ring-1 ring-zinc-800">
                
                {/* Physical Side Buttons */}
                <div className="absolute top-24 -left-1.5 w-1 h-12 bg-zinc-800 rounded-l-md border-l border-zinc-700"></div>
                <div className="absolute top-38 -left-1.5 w-1 h-12 bg-zinc-800 rounded-l-md border-l border-zinc-700"></div>
                <div className="absolute top-30 -right-1.5 w-1 h-16 bg-zinc-800 rounded-r-md border-r border-zinc-700"></div>

                {/* Inner Screen Area */}
                <div className="w-full h-full bg-zinc-900 rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between border border-zinc-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                  
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-black rounded-full z-30 flex items-center justify-between px-3 text-[9px]">
                    <div className="w-2 h-2 bg-zinc-900 rounded-full border border-zinc-800/80"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Top Status Bar UI */}
                  <div className="flex justify-between items-center px-6 pt-4 text-[10px] font-bold text-zinc-900 z-20 mix-blend-difference select-none pointer-events-none">
                    <span className="text-white">11:40 AM</span>
                    <div className="flex gap-1.5 text-white items-center">
                      <Wifi className="w-3 h-3" />
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Main Display Container */}
                  <div className="flex-1 w-full bg-zinc-50 flex flex-col justify-between p-4 pt-8 overflow-hidden relative">
                    
                    <AnimatePresence mode="wait">
                      {activeApp === 'pos' ? (
                        <motion.div
                          key="pos-screen"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="w-full h-full flex flex-col justify-between pt-4"
                        >
                          {/* POS App Content */}
                          <div>
                            <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-2xl border border-zinc-200/50 shadow-sm">
                              <img src="/logo-pos.png" alt="POS App Logo" className="w-10 h-10 object-contain" />
                              <div>
                                <h5 className="font-extrabold text-zinc-900 text-sm leading-tight">Cafe QR POS</h5>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-0.5 border border-emerald-100">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                  ERP Sync Active
                                </span>
                              </div>
                            </div>

                            {/* Current Sale items */}
                            <div className="space-y-2.5">
                              <h6 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider px-1">Active Ticket</h6>
                              <div className="bg-white rounded-2xl p-3.5 border border-zinc-200/50 shadow-sm space-y-3">
                                <div className="flex justify-between text-xs font-semibold text-zinc-800">
                                  <span>2x Cappuccino</span>
                                  <span className="font-bold text-zinc-900">₹360</span>
                                </div>
                                <div className="flex justify-between text-xs font-semibold text-zinc-800">
                                  <span>1x Paneer Tikka Roll</span>
                                  <span className="font-bold text-zinc-900">₹150</span>
                                </div>
                                <div className="flex justify-between text-xs font-semibold text-zinc-800 border-b border-dashed border-zinc-200 pb-2">
                                  <span>1x Choco Lava Cake</span>
                                  <span className="font-bold text-zinc-900">₹90</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-zinc-900 pt-1">
                                  <span>Total Amount</span>
                                  <span className="text-primary font-extrabold text-base">₹600</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2.5">
                            <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-md">
                              <ShoppingBag className="w-4 h-4" /> Print Bill & Checkout
                            </button>
                            <span className="text-[9px] text-zinc-400 block text-center font-semibold">Registered: Terminal Counter #1</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="delivery-screen"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="w-full h-full flex flex-col justify-between pt-4"
                        >
                          {/* Delivery App Content */}
                          <div>
                            <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-2xl border border-zinc-200/50 shadow-sm">
                              <img src="/logo-delivery.png" alt="Delivery App Logo" className="w-10 h-10 object-contain" />
                              <div>
                                <h5 className="font-extrabold text-zinc-900 text-sm leading-tight">Cafe QR Delivery</h5>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-orange-50 px-2 py-0.5 rounded-full mt-0.5 border border-orange-100">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                  Active Shift
                                </span>
                              </div>
                            </div>

                            {/* Delivery Queue */}
                            <div className="space-y-3">
                              <h6 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider px-1">Upcoming Deliveries</h6>
                              
                              {/* Order Card */}
                              <div className="bg-white rounded-2xl p-3 border border-zinc-200/50 shadow-sm flex items-center justify-between">
                                <div className="space-y-0.5">
                                  <span className="text-[10px] font-bold text-zinc-400">Order #4829</span>
                                  <h6 className="text-xs font-bold text-zinc-900">Pizza Plaza, Sector 4</h6>
                                  <p className="text-[9px] text-zinc-500 font-medium">Distance: 1.2 km</p>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full shrink-0">Ready</span>
                              </div>

                              {/* GPS Mini Map Simulation */}
                              <div className="h-28 bg-sky-50 border border-sky-100 rounded-2xl relative overflow-hidden flex items-center justify-center p-2 shadow-inner">
                                {/* Simulated Route Line */}
                                <svg className="absolute w-full h-full inset-0 p-4" viewBox="0 0 100 50">
                                  <path d="M 10 40 Q 50 10 90 30" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                                  <path d="M 10 40 Q 50 10 90 30" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" />
                                </svg>
                                {/* Start Point Dot */}
                                <div className="absolute left-[13%] bottom-[20%] w-3 h-3 bg-zinc-900 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                  <div className="w-1 h-1 bg-white rounded-full"></div>
                                </div>
                                {/* End Point Marker */}
                                <div className="absolute right-[13%] bottom-[38%] text-primary animate-bounce">
                                  <MapPin className="w-4 h-4 fill-primary text-white" />
                                </div>
                                <span className="absolute bottom-2 left-3 text-[8px] font-bold text-zinc-500 bg-white/80 px-2 py-0.5 rounded-full border border-zinc-200">Simulating Route...</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2.5">
                            <button className="w-full py-3.5 bg-zinc-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-md">
                              Start Delivery Route
                            </button>
                            <span className="text-[9px] text-zinc-400 block text-center font-semibold">Driver ID: Riyas (Online)</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* Home Swipe Indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-300 rounded-full z-20"></div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 py-12 px-4 text-center text-zinc-500 text-sm bg-white/40 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cafe QR Logo" className="w-8 h-8 object-contain rounded-md" />
            <span className="font-bold text-zinc-900">Cafe QR POS ERP Ecosystem</span>
          </div>
          <p>© {new Date().getFullYear()} Cafe QR. All rights reserved.</p>
        </div>
      </footer>



    </div>
  );
}

export default App;
