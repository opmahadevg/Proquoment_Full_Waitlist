import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState("All Domains");

  const filters = ["All Domains", "Manufacturers", "Farmers & FPOs", "Artisans"];

  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#e1e0ff] selection:text-[#070099]">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <Navbar activePage="catalog" />

      <main className="pt-32 max-w-screen-2xl mx-auto px-8">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f00da] mb-6 block">Industrial Direct-to-Source</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1c1c] mb-8 leading-[0.95]">
              Catalog: Direct from source.{" "}
              <span className="text-slate-300">No middlemen. No markups.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              Proquoment helps global buyers to source directly from Indian manufacturers and farmers — the actual people who make and grow the products. No traders, no brokers, no processors in between.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === f
                    ? "bg-[#0f00da] text-white shadow-lg shadow-[#0f00da]/10"
                    : "bg-white text-slate-600 hover:bg-[#eeeeee]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Catalog Grid (Bento Style) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1. Agro & Farm */}
          <div className="md:col-span-8 bg-white rounded-lg p-10 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)]">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#0f00da] font-bold mb-2 block">Direct from FPOs</span>
                <h3 className="text-3xl font-black tracking-tight text-[#1a1c1c]">Agro & Farm Products</h3>
              </div>
              <span className="material-symbols-outlined text-4xl text-[#0f00da] opacity-20 group-hover:opacity-100 transition-opacity">agriculture</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <p className="text-slate-500 font-medium">Sourced straight from certified Farmers' Producer Organizations. Spices, pulses, high-grade grains, and seasonal produce.</p>
              <div className="relative rounded-lg overflow-hidden h-48 bg-slate-100">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhit0XMbo1_phlAGYW_DXBn1KEui_nkTd5H6l_5leUKMJUfp3pLsPkz8wMDJR2jZ1M-TxLzVfeyGsXRTqksyPwuWHGNleo4lDquN2HxndCF5YNi0gBS1A6HS1zILgvZdaJ7Dh0m6Yf4y_5DlrIfUh9zCDURCAjgDu3qaCk2JrPVPhDbS0wqVaaeaOm8DO-8zcnQ2YcZnFWDjmez5TG"
                  alt="Assorted Indian spices and grains"
                />
              </div>
            </div>
          </div>

          {/* 2. Textiles */}
          <div className="md:col-span-4 bg-white rounded-lg p-10 flex flex-col justify-between group cursor-pointer transition-all hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)]">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-widest text-[#0f00da] font-bold mb-2 block">Factory Output</span>
              <h3 className="text-3xl font-black tracking-tight text-[#1a1c1c]">Textiles & Apparel</h3>
            </div>
            <p className="text-slate-500 font-medium mb-8">Premium fabrics, custom garments, and performance knitwear from vertically integrated units.</p>
            <div className="flex items-center gap-2 text-[#0f00da] font-bold text-sm">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          {/* 3. Gems & Jewellery */}
          <div className="md:col-span-4 bg-white rounded-lg p-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all">
            <div className="h-40 bg-slate-100 rounded-lg mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZh79mVeGUgc_pLGg1xp3yfy4aoeC0fG6p0F_vCFED2QhqQ71Afmb9_HGLATU7vjw5kil6Iafd5c-IkqJpw7G8Xbrm1kxaCx2BqXn6knq0Igu6d2QipPJIlI5_pKefpLdLLLW5wfVl4eFlulRmnqh53OODz9gm19lEZPCO8k5xRzvx-8V9WHwAQyBSZz7F-leZJ9IO8GZbYAq9nLjlA0J-fOGJkO_ptyGm-9vc_Uo0xXfZuX3AUENRQ4cROjFyrDGBkSFQAL"
                alt="Gold jewelry and diamonds"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Gems & Jewellery</h3>
            <p className="text-sm text-slate-500 font-medium">Precision-crafted gold, silver, and diamond pieces directly from manufacturing hubs.</p>
          </div>

          {/* 4. Engineering */}
          <div className="md:col-span-4 bg-[#0f00da] text-white rounded-lg p-8 group cursor-pointer hover:scale-[1.02] transition-all">
            <span className="material-symbols-outlined text-4xl mb-4">precision_manufacturing</span>
            <h3 className="text-2xl font-black tracking-tight mb-4">Engineering & Machinery</h3>
            <p className="text-[#e1e0ff]/80 font-medium text-sm leading-relaxed mb-6">Heavy-duty industrial machinery and precision engineering components forged in India's leading tech corridors.</p>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* 5. Chemicals */}
          <div className="md:col-span-4 bg-white rounded-lg p-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all border-l-4 border-[#0f00da]/10">
            <h3 className="text-xl font-bold mb-2">Chemicals & Pharmaceuticals</h3>
            <p className="text-sm text-slate-500 font-medium mb-6">Bulk drugs, high-purity APIs, and specialty industrial chemicals with full lab traceability.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#f9f9f9] rounded text-[10px] font-bold text-slate-400">API</span>
              <span className="px-2 py-1 bg-[#f9f9f9] rounded text-[10px] font-bold text-slate-400">BATCH TRACED</span>
            </div>
          </div>

          {/* 6. Leather */}
          <div className="md:col-span-3 bg-white rounded-lg p-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all">
            <span className="material-symbols-outlined text-slate-300 mb-4">shopping_bag</span>
            <h3 className="text-lg font-bold mb-2">Leather & Footwear</h3>
            <p className="text-sm text-slate-500 font-medium">Genuine leather shoes and lifestyle accessories from global export houses.</p>
          </div>

          {/* 7. Marine */}
          <div className="md:col-span-6 bg-white rounded-lg p-8 flex items-center gap-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all overflow-hidden relative">
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-black tracking-tight text-[#1a1c1c] mb-2">Marine & Seafood</h3>
              <p className="text-slate-500 font-medium text-sm">Cold-chain integrated shrimp, fish, and value-added seafood products from coastal fisheries.</p>
            </div>
            <div className="w-1/3 h-full absolute right-0 top-0 overflow-hidden" style={{ transform: "skewX(-12deg) translateX(32px)" }}>
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhC-t_9BDKaxOLSFCtkxWCvrR-8q-53xqUyrwZ4c7_dGRTQMgvA9Rfv1muFuMP8s0RG1aGdYcaMpy2lb8fifamQVpxkRp451jsbewGfBcZGCe02Mph2aoDU-aHlqs4V8dXf6_P3y04Pz9obh5eP4ctj-fWomw32QNRVBv7CbMsiZ4Ktc245B8oZGFMQj-oNzNKek5FEcg9mF4ycz0EOT1nUGdaE4qpkrXaOBmqW81i1bmSPKIkTLb_DcDRnW1UWpTsV0DR6SWGK-R-"
                alt="Fresh shrimp seafood"
              />
            </div>
          </div>

          {/* 8. Handicrafts */}
          <div className="md:col-span-3 bg-white rounded-lg p-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all text-center">
            <div className="w-16 h-16 bg-[#e8e8e8] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[#0f00da]">brush</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Handicrafts</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Artisan Clusters</p>
          </div>

          {/* Row 3 */}
          <div className="md:col-span-4 bg-white rounded-lg p-8 flex flex-col justify-between group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all">
            <h3 className="text-xl font-bold mb-4">Packaged Foods</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">Certified branded food products, snacks, and ready-to-eat solutions for global retail.</p>
            <div className="mt-6 flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
            </div>
          </div>
          <div className="md:col-span-4 bg-white rounded-lg p-8 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Minerals & Stones</h3>
              <span className="material-symbols-outlined opacity-20">layers</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">Direct quarry access for high-grade Granite, Marble, and industrial minerals.</p>
          </div>
          <div className="md:col-span-4 bg-white/50 border-2 border-[#0f00da]/5 rounded-lg p-8 group cursor-pointer hover:bg-white transition-all">
            <div className="flex items-center gap-2 text-[#0f00da] font-black text-xs uppercase tracking-widest mb-4">
              <span className="material-symbols-outlined text-sm">star</span> Certified Pure
            </div>
            <h3 className="text-xl font-bold mb-2">Organic & Natural</h3>
            <p className="text-sm text-slate-500 font-medium">Purity-guaranteed organic spices and wellness products directly from sustainable farms.</p>
          </div>

          {/* Small cards */}
          {[
            { title: "Electronics", desc: "Electrical components & OEM parts." },
            { title: "Construction", desc: "Industrial steel, tiles, and fixtures." },
            { title: "Plastics & Rubber", desc: "Precision moulded parts & polymers." },
            { title: "Forest Products", desc: "Bamboo and sustainable wood goods." },
          ].map((card) => (
            <div key={card.title} className="md:col-span-3 bg-white rounded-lg p-6 group cursor-pointer hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] transition-all">
              <h4 className="font-bold text-[#1a1c1c] mb-2">{card.title}</h4>
              <p className="text-xs text-slate-400 font-medium leading-snug">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* AI Sourcing Advisor */}
        <section className="mt-32 glass-modal rounded-xl p-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 text-[#0f00da] font-bold mb-4">
              <span>✦</span> AI Sourcing Advisor
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-6">Not sure where to start?</h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Describe your procurement needs in plain language. Our AI cross-references 15,000+ verified direct-source entities across India to find your perfect match.
            </p>
            <div className="flex gap-4 p-2 bg-white rounded-full items-center shadow-xl shadow-[#0f00da]/5">
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none px-6 text-sm font-medium"
                placeholder="e.g. Need 100MT of Grade A Turmeric from an FPO in Maharashtra..."
                type="text"
              />
              <button className="bg-[#0f00da] text-white p-3 rounded-full hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
          <div className="absolute right-[-10%] bottom-[-20%] opacity-5 pointer-events-none">
            <svg height="600" viewBox="0 0 100 100" width="600">
              <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="1 2" strokeWidth="0.5"></circle>
            </svg>
          </div>
        </section>
      </main>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
