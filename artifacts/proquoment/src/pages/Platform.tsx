import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

const LOGO_URL = "/Logo.png";

export default function Platform() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#e1e0ff] selection:text-[#070099]">
      <Navbar activePage="platform" />

      <main className="pt-20 lg:pt-32">
        {/* Section 1: Hero */}
        <section className="relative px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="halftone-texture absolute inset-0"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
            <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
              <span className="text-[#070099] font-bold tracking-[0.1em] uppercase text-[10px] lg:text-xs mb-4 lg:mb-6 block">
                Industrial Supply Chain Intelligence
              </span>
              <h1 className="text-4xl lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] mb-6 lg:mb-8 text-[#1a1c1c]">
                Global Product <br />Sourcing. Automated.
              </h1>
              <p className="text-lg lg:text-xl text-[#454556] max-w-lg lg:max-w-none mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
                Build your industrial legacy with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/waitlist">
                  <button className="w-full sm:w-auto bg-[#0f00da] text-white px-10 py-4 lg:py-5 rounded-full font-bold shadow-[0px_20px_40px_rgba(15,0,218,0.2)] hover:shadow-[0px_20px_40px_rgba(15,0,218,0.4)] transition-all">
                    Join Waitlist
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto border border-[#c6c4d9] px-10 py-4 lg:py-5 rounded-full font-bold hover:bg-[#eeeeee] transition-colors">
                    Book a call
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 lg:p-8 rounded-[10px] shadow-[0px_20px_40px_rgba(15,0,218,0.04)] relative">
                <div className="flex justify-between items-center mb-6 lg:mb-8">
                  <h3 className="font-bold text-lg">Product Specification</h3>
                  <span translate="no" className="material-symbols-outlined text-[#070099]">settings</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden bg-[#f3f3f3] aspect-[4/5] relative group">
                    <img
                      alt="Model in technical jacket"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmiuBKXCr81TX2vZdf2mWIMPD_Xv9eBxa6Dp0JPEbiI-HY2cD07XJLr_XXuZO0h76ddspgASfNmxFahEck3wPvFJyTbuF-I73fL1FssY1cVPWLgw1WHtdo8ojBDSgBkFhAmIsnG_X3cCpDXzHyxFUEPHBKymrIzR7qgFaNbGtyDzjcGI9Bg9pcl8ZGaNi4okYkRCSk19neKdolu-EmO3zF8e6gQ3oA8UCyqkCrcJUWmeaHyIex6zcyItKkHebx6GCOceD7HI0kqpdT"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg flex items-center gap-2">
                      <span translate="no" className="material-symbols-outlined text-[#070099] text-sm">verified</span>
                      <span className="text-[10px] font-bold tracking-tight uppercase">V1 TECHNICAL SHELL</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <div className="p-4 bg-[#f3f3f3] rounded-lg">
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1 lg:mb-2 font-bold">Primary Material</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm lg:text-base">Gore-Tex Pro</span>
                        <span translate="no" className="material-symbols-outlined text-xs text-[#070099]">check_circle</span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#f3f3f3] rounded-lg">
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1 lg:mb-2 font-bold">Coating</p>
                      <div className="flex items-center justify-between text-[#454556]">
                        <span className="font-medium text-sm lg:text-base">DWR Finish</span>
                        <span translate="no" className="material-symbols-outlined text-xs">add</span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#f3f3f3] rounded-lg">
                      <p className="text-[10px] uppercase tracking-widest text-[#767588] mb-1 lg:mb-2 font-bold">Seams</p>
                      <div className="flex items-center justify-between text-[#454556]">
                        <span className="font-medium text-sm lg:text-base">Heat Taped</span>
                        <span translate="no" className="material-symbols-outlined text-xs">add</span>
                      </div>
                    </div>
                    <div className="mt-auto bg-[#0f00da] p-4 rounded-lg text-white flex justify-between items-center cursor-pointer">
                      <span className="font-bold text-sm lg:text-base">Generate BOM</span>
                      <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: AI Assistant Flow */}
        <section className="bg-[#eeeeee] py-16 lg:py-32 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-[10px] overflow-hidden shadow-[0px_20px_40px_rgba(15,0,218,0.04)]">
                <div className="p-4 lg:p-6 bg-white border-b border-[#eeeeee] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#070099] flex items-center justify-center text-white">
                    <span translate="no" className="material-symbols-outlined text-sm">bolt</span>
                  </div>
                  <span className="font-bold tracking-tight text-sm lg:text-base">Proquoment AI</span>
                </div>
                <div className="p-6 lg:p-8 flex flex-col gap-6">
                  <div className="flex gap-4 max-w-[90%] lg:max-w-[80%]">
                    <div className="bg-[#eeeeee] p-4 lg:p-6 rounded-2xl rounded-tl-none text-sm lg:text-base leading-relaxed text-[#1a1c1c]">
                      Got it — men's black puffed jackets, 200 pieces.
                    </div>
                  </div>
                  <div className="flex gap-4 max-w-[95%] lg:max-w-[85%]">
                    <div className="bg-white border border-[#eeeeee] p-4 lg:p-6 rounded-2xl rounded-tl-none shadow-sm flex flex-col gap-4 w-full">
                      <p className="text-sm lg:text-base text-[#1a1c1c] font-medium leading-relaxed">
                        How warm do you want these jackets to be? This will determine the fill type and cost structure.
                      </p>
                      <div className="flex flex-col gap-2">
                        {["Basic polyester fill", "Synthetic Down", "Technical Insulation"].map((opt) => (
                          <div key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-[#c6c4d9] hover:border-[#070099] hover:bg-[#070099]/5 cursor-pointer transition-colors group">
                            <div className="w-4 h-4 rounded-full border-2 border-[#767588] group-hover:border-[#070099]"></div>
                            <span className="text-xs lg:text-sm font-semibold">{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 self-end max-w-[90%]">
                    <div className="bg-[#0f00da] text-white p-4 lg:p-6 rounded-2xl rounded-tr-none text-sm lg:text-base font-medium leading-tight shadow-lg">
                      synthetic fill (polyester)
                    </div>
                  </div>
                  <div className="flex gap-4 max-w-[95%] lg:max-w-[85%] items-start">
                    <div className="bg-[#eeeeee] p-4 lg:p-6 rounded-2xl rounded-tl-none flex items-center gap-3 lg:gap-4">
                      <span translate="no" className="material-symbols-outlined text-[#070099] animate-pulse text-sm lg:text-base">auto_awesome</span>
                      <div className="text-xs lg:text-base leading-relaxed text-[#070099] font-medium italic">
                        Analyzing manufacturing hubs in Tirupur for polyester fill availability...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-[#070099] font-bold tracking-[0.1em] uppercase text-[10px] lg:text-xs mb-3 lg:mb-4 block">
                Precision Interaction
              </span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-4 lg:mb-6 leading-tight">
                How it works:<br />End-to-end sourcing
              </h2>
              <p className="text-base lg:text-lg text-[#454556] mb-8 lg:mb-10 leading-relaxed">
                Add your product details and let Proquoment handle the complexity. Our AI translates technical specs for global suppliers, ensuring nothing is lost in translation.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span translate="no" className="material-symbols-outlined text-[#070099] mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-sm lg:text-base">Automated Specification Translation</h4>
                    <p className="text-xs lg:text-sm text-[#767588] mt-1">Precise conversion of technical requirements for international factories.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span translate="no" className="material-symbols-outlined text-[#070099] mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-sm lg:text-base">Real-time Supply Chain Feedback</h4>
                    <p className="text-xs lg:text-sm text-[#767588] mt-1">Get immediate insight on material availability and current tariff impacts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Quotes Comparison */}
        <section className="py-16 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-4">Get multiple quotes from the best suppliers</h2>
              <p className="text-sm lg:text-base text-[#454556]">Vetted manufacturers competing for your project.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="bg-[#f9f9f9] p-6 lg:p-8 rounded-[10px] h-full">
                  <img
                    className="w-full aspect-square object-cover rounded-lg mb-6 grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrQbz530I3qghgXPfE7vW1OUUxo12aodmUYNf27BEYXhJ28L20vXt_WB7clxVDOfUtkRRmwYekS_jdZQpUukXT0iTpcqTgmREhVmoDku-ps73pdROmub2x3W2mM1nebO5WYQrawbWueFsvIXwE7wu4H9pU9iMwLpBGyJ-sQFy-JRYV9jgl4coYVtZOJdM6O21iNkUqUotoqmagL5WTSM5_AuMkU7TN7VIccl1Bnxs5bPjvQKjV25jk2ZLrLKxWy810ArvXC-N9PX8Z"
                    alt="Blue Canvas Jacket"
                  />
                  <h3 className="text-lg lg:text-xl font-bold mb-2">Blue Canvas Jacket</h3>
                  <p className="text-xs lg:text-sm text-[#767588] mb-4 lg:mb-6">Heavyweight industrial grade cotton canvas with reinforced stitching.</p>
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#070099]/10 text-[#070099] rounded-full w-fit">
                    <span translate="no" className="material-symbols-outlined text-[10px] lg:text-xs">star</span>
                    <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest">Top Pick Recommendation</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  <div className="bg-white p-5 lg:p-6 rounded-[10px] border border-[#eeeeee] flex items-center justify-between hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-[#e8e8e8] overflow-hidden">
                        <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe6Cr17-1dPoA__NCdgxJ6On1sEhq3GqSVITwUFh6ZP4eQ0Bcpij7pkIWzvUS4cTdB4NKoD0u0zweV0o6_JeOU1iD-ynP34OuS9EyJlf594oWW9m72Kr0AhsoCVytuUbr1fxI7EcrE_7Xh1Xp1ynwbS9KfB4PJvwQn9u5W42joDk-f1ohATEBGAkgD15jw5z3C2P4Kt-hyBgKc9QvOGibB7U-ky3lEDTYVcBcJ6JfIZbQ7Oon3TTbwjrS4nPDG6x566mQC5AVzAEvp" alt="" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm lg:text-base leading-tight">Angela, Industrial Textiles</h4>
                        <p className="text-[10px] lg:text-xs text-[#767588]">Surat • 98% Rating</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1 lg:gap-2">
                      <span className="text-xl lg:text-2xl font-black text-[#070099]">$42.50</span>
                      <span className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest bg-[#eeeeee] px-2 py-0.5 lg:py-1 rounded">Per Unit</span>
                    </div>
                  </div>

                  <div className="bg-[#070099]/5 p-5 lg:p-6 rounded-[10px] border-2 border-[#070099] flex items-center justify-between relative">
                    <div className="absolute -top-3 left-4 lg:left-6 bg-[#070099] text-white text-[8px] lg:text-[10px] font-bold px-2 lg:px-3 py-1 rounded-full uppercase tracking-widest">Best Value</div>
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-[#e8e8e8] overflow-hidden">
                        <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3pAyFOPnfhpvvymHbLJQH3hxi6LhmTRDcCR2CFdq7ulVJt3yjZhUsPJxkrQVVCDfpbRRTZolyj3WEKdvfcWJKHL23rxPZCw-08QkRwneeceB-AZ8THpdQhMJRJ18TFUnrxdNqgN0xpXLMG1pRVsMYXvptzQo3JRpJbPomYLzikQVmsgaZ0PMFgULh4Y70fCrrIVKQdkNvjM4t5n3hA31o8RgojAN7_y6Fp0VhFC6P4GRwhVMVy4yBBYKAjAhT0riP3-YEhtHNpTX" alt="" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm lg:text-base leading-tight">Frank, Master Weavers</h4>
                        <p className="text-[10px] lg:text-xs text-[#767588]">Jaipur • 99% Rating</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1 lg:gap-2">
                      <span className="text-xl lg:text-2xl font-black text-[#070099]">$38.90</span>
                      <span className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest bg-[#070099] text-white px-2 py-0.5 lg:py-1 rounded">Heavyweight Canvas</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 lg:p-6 rounded-[10px] border border-[#eeeeee] flex items-center justify-between">
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-[#e8e8e8] overflow-hidden">
                        <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBD-70Jsx7uR0X4GONPXBle8JRpGGFMRt3lcN83oQxyBdlqlbWxrK7NzZTOBiSjVqM9xtfKiYdHlB3pFrDhITJHCetW2hPCofmpRQdCyj62rQtYcxTImUpzUzccpcj7vMihXCc3zL2sXsH770wdFXuGKBe06KS8Ohqtio8OvwW3GZy3S8U4f86uDvxYZxI8Dv5DeAOq-AK1u2K7u7pfBMX-f__k2J21vT5DevBLX7ouPTBaDmCUCMydp3ayITyV45hyPunvs6nI-Ic" alt="" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm lg:text-base leading-tight">Jason, Global Logistics</h4>
                        <p className="text-[10px] lg:text-xs text-[#767588]">Nasik • 95% Rating</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1 lg:gap-2">
                      <span className="text-xl lg:text-2xl font-black text-[#070099]">$41.00</span>
                      <span className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest bg-[#eeeeee] px-2 py-0.5 lg:py-1 rounded">Per Unit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Onsite QA */}
        <section className="py-16 lg:py-32 px-6 lg:px-12 bg-[#f9f9f9]">
          <div className="max-w-[1440px] mx-auto flex flex-col items-center">
            <div className="max-w-3xl text-center mb-12 lg:mb-24">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-4 lg:mb-6">Onsite QA and delivery handled for you</h2>
              <p className="text-sm lg:text-lg text-[#454556] leading-relaxed">We don't just find the supplier. We oversee the entire production cycle with our boots-on-the-ground inspection network.</p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                {[
                  { icon: "request_quote", title: "Sample requested", desc: "Material specs confirmed. Prototype production initiated in our Vietnam facility.", color: "bg-[#0f00da]" },
                  { icon: "payments", title: "Payment completed", desc: "Secure escrow financing finalized. Material procurement has begun.", color: "bg-[#0f00da]" },
                  { icon: "factory", title: "Production started", desc: "Cutting and assembly in progress. Real-time factory floor updates active.", color: "bg-[#0f00da]" },
                  { icon: "verified_user", title: "QA completed", desc: "On-site inspectors verified the shipment. Products cleared for global dispatch.", color: "bg-green-600" },
                ].map((step) => (
                  <div key={step.title} className="flex flex-col items-center md:items-start text-center md:text-left bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
                    <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center mb-4 lg:mb-6 ring-8 ring-[#f9f9f9]`}>
                      <span translate="no" className="material-symbols-outlined text-xl">{step.icon}</span>
                    </div>
                    <h4 className="font-bold text-base lg:text-lg mb-1 lg:mb-2">{step.title}</h4>
                    <p className="text-xs lg:text-sm text-[#767588] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Order Samples */}
        <section className="py-16 lg:py-32 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight">
                Order samples, pick a supplier,<br />get better pricing
              </h2>
              <p className="text-base lg:text-lg text-[#454556] mb-10 lg:mb-12 leading-relaxed">
                No more guessing games. Order physical prototypes from multiple factories to verify weight, texture, and construction before committing to scale.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "science", label: "Materials R&D Support" },
                  { icon: "travel_explore", label: "Transparent Lead Times" },
                  { icon: "account_balance", label: "Escrow Payment Security" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 lg:gap-6 group">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full bg-[#eeeeee] group-hover:bg-[#0f00da] group-hover:text-white transition-colors">
                      <span translate="no" className="material-symbols-outlined text-sm lg:text-base">{item.icon}</span>
                    </div>
                    <p className="font-bold text-sm lg:text-base">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 lg:p-10 rounded-[10px] shadow-[0px_40px_80px_rgba(15,0,218,0.08)] border border-[#eeeeee]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-8 lg:mb-10 gap-2">
                  <div>
                    <p className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest text-[#767588] mb-1">Current Configuration</p>
                    <h3 className="text-xl lg:text-2xl font-black">Industrial Heavy Jacket</h3>
                  </div>
                  <div className="lg:text-right">
                    <p className="text-2xl lg:text-3xl font-black text-[#070099]">$38.90</p>
                    <p className="text-[8px] lg:text-xs text-[#767588]">Unit Price (Estimated)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-10">
                  <div className="p-3 lg:p-4 bg-[#eeeeee] rounded-lg">
                    <p className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest text-[#767588] mb-1">Quantity</p>
                    <p className="font-bold text-sm lg:text-base">1,000 Units</p>
                  </div>
                  <div className="p-3 lg:p-4 bg-[#eeeeee] rounded-lg">
                    <p className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest text-[#767588] mb-1">Supplier</p>
                    <p className="font-bold text-sm lg:text-base">Frank's Master Weavers</p>
                  </div>
                </div>
                <button className="w-full bg-[#0f00da] text-white py-4 lg:py-6 rounded-full font-black text-base lg:text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 lg:gap-3">
                  <span translate="no" className="material-symbols-outlined text-sm lg:text-base">shopping_cart</span>
                  Buy sample for $149.00
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Waitlist CTA */}
        <section className="py-16 lg:py-32 px-6 lg:px-12 bg-[#070099] overflow-hidden relative">
          <div className="absolute inset-0 halftone-texture" style={{ opacity: 0.1 }}></div>
          <div className="max-w-[1440px] mx-auto text-center relative z-10">
            <span className="text-[#a0a4ff] font-black tracking-[0.2em] uppercase text-[10px] lg:text-sm mb-6 lg:mb-8 block">
              Limited Access
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 lg:mb-10 leading-tight">
              Join the&nbsp;<br />Industrial Waitlist
            </h2>
            <p className="text-sm lg:text-xl text-[#a0a4ff] max-w-sm lg:max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed">
              We are selectively onboarding partners for the upcoming production cycle. Secure your place in the future of automated sourcing.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 lg:gap-4 max-w-sm lg:max-w-xl mx-auto">
              <input
                className="w-full bg-white text-[#1a1c1c] px-6 lg:px-8 py-4 lg:py-5 rounded-full text-sm lg:text-base font-medium focus:ring-4 ring-[#a0a4ff] border-none outline-none"
                placeholder="Enter your business email"
                type="email"
              />
              <Link to="/waitlist" className="w-full md:w-auto bg-white text-[#070099] px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-sm lg:text-base whitespace-nowrap hover:bg-[#e1e0ff] transition-colors text-center">
                Get Priority Access
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
