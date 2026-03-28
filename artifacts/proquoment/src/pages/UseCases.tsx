import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useCases = [
  {
    emoji: "🌿",
    title: "Agro & Farm Products",
    scenario: "A food brand in Europe needs bulk certified organic spices",
    howItWorks: "✦ AI matches them directly with verified farmers and FPOs across India",
    result: "Farm-direct pricing, certified origin, zero broker markup",
  },
  {
    emoji: "🧵",
    title: "Textiles & Apparel",
    scenario: "A UK retailer wants private-label hand-block printed apparel",
    howItWorks: "✦ Matched with manufacturers in Jaipur and Ahmedabad with private label capability",
    result: "Factory-direct cost with full export and sampling support",
  },
  {
    emoji: "💎",
    title: "Gems & Jewellery",
    scenario: "A Dubai wholesaler needs custom silver jewellery monthly",
    howItWorks: "✦ Matched with certified jewellery manufacturers with custom design capability",
    result: "Wholesale pricing direct from the workshop, no middlemen",
  },
  {
    emoji: "⚙️",
    title: "Engineering & Machinery",
    scenario: "A Gulf construction firm needs precision-forged steel components",
    howItWorks: "✦ Matched with ISO-certified engineering factories in Pune and Rajkot",
    result: "Certified components at competitive factory pricing",
  },
  {
    emoji: "💊",
    title: "Chemicals & Pharma",
    scenario: "A Southeast Asian pharma firm needs bulk API supply",
    howItWorks: "✦ Matched with GMP-licensed Indian API manufacturers with CoA documents",
    result: "Compliant, traceable pharma supply direct from licensed plants",
  },
  {
    emoji: "👟",
    title: "Leather & Footwear",
    scenario: "An Italian brand wants handcrafted leather shoes per season",
    howItWorks: "✦ Matched with Agra and Chennai footwear units with custom sampling",
    result: "Artisan quality at Indian manufacturing cost",
  },
  {
    emoji: "🐟",
    title: "Marine & Seafood",
    scenario: "A Japanese distributor needs HACCP-certified frozen prawns monthly",
    howItWorks: "✦ Matched with certified aquaculture farms in Andhra Pradesh and Kerala",
    result: "Certified, ocean-fresh seafood with recurring export orders",
  },
  {
    emoji: "🏺",
    title: "Handicrafts & Home Décor",
    scenario: "A US décor brand wants hand-painted ceramics for their collection",
    howItWorks: "✦ Matched with artisan clusters in Khurja, Moradabad, and Jaipur",
    result: "Unique handcrafted pieces at artisan pricing, export-ready",
  },
  {
    emoji: "🍱",
    title: "Packaged Foods",
    scenario: "A Canadian grocery chain wants private-label Indian ready-to-eat meals",
    howItWorks: "✦ Matched with FSSAI-licensed food manufacturers with export compliance",
    result: "Retail-ready private label at factory cost with full compliance",
  },
  {
    emoji: "🪨",
    title: "Minerals & Natural Stones",
    scenario: "An Australian developer needs Rajasthan sandstone slabs in bulk",
    howItWorks: "✦ Matched with quarry owners and stone processors direct from source",
    result: "Quarry-direct pricing, shipped ready-to-install",
  },
  {
    emoji: "🌿",
    title: "Organic & Natural Products",
    scenario: "A Singapore wellness brand needs certified organic ashwagandha powder",
    howItWorks: "✦ Matched with certified organic farms with lab reports and traceability",
    result: "Farm-origin pricing with USDA/organic export certificates included",
  },
];

export default function UseCases() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#e1e0ff] selection:text-[#070099]">
      <Navbar activePage="use-cases" />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-8 md:px-12 mb-20">
          <div className="max-w-5xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#070099] font-bold mb-4">The Industrialist Directory</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#1a1c1c] mb-8">
              Use Cases —{" "}
              <span className="text-[#0f00da]">How Proquoment works, domain by domain</span>
            </h1>
            <div className="w-24 h-1 bg-[#070099] mb-12"></div>
          </div>
        </section>

        {/* Domain Grid */}
        <section className="px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl group transition-all duration-300 hover:[box-shadow:0px_20px_40px_rgba(15,0,218,0.04)] hover:ring-2 hover:ring-[#0f00da] flex flex-col justify-between min-h-[400px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-3xl">{card.emoji}</span>
                    <h3 className="font-bold text-xl tracking-tight">{card.title}</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1">Scenario</p>
                      <p className="italic text-[#454556] leading-relaxed">{card.scenario}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1">How It Works</p>
                      <p className="text-[#1a1c1c] leading-relaxed font-medium">{card.howItWorks}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1">Result</p>
                      <p className="text-[#070099] font-bold">{card.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-32 px-8 md:px-12">
          <div className="bg-[#070099] text-white p-12 md:p-20 rounded-xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Every domain. Direct from source. No middlemen.</h2>
              <p className="text-xl text-[#e1e0ff] opacity-90 leading-relaxed font-light">
                Join the Proquoment waitlist and be first to access India's most trusted B2B export network.
              </p>
            </div>
            <div className="relative z-10">
              <Link href="/waitlist">
                <button className="bg-white text-[#070099] px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
                  Join the Waitlist <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-white blur-[120px] rounded-full"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
