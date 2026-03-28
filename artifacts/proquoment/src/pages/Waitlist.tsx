import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Waitlist() {
  const [intent, setIntent] = useState<string>("");

  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#e1e0ff] selection:text-white flex flex-col">
      <Navbar activePage="" />

      <main className="pt-24 sm:pt-32 flex-grow">
        {/* Hero Section */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24 lg:mb-32 grid grid-cols-12 gap-8 pb-12 sm:pb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="halftone-texture absolute inset-0 !opacity-100" style={{ opacity: 1 }}></div>
          </div>
          <div className="col-span-12 lg:col-span-9 text-center lg:text-left relative z-10">
            <span className="text-[#070099] font-bold tracking-[0.2em] text-[10px] sm:text-[12px] uppercase mb-4 sm:mb-6 block">
              Industrial Revolution 4.0
            </span>
            <h1
              className="leading-[0.9] sm:leading-[0.85] font-black tracking-[-0.04em] text-[#070099] mb-8 sm:mb-12"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              THE NEW ERA OF PRECISION SOURCING
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <p className="text-[#454556] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              We are building a closed-loop ecosystem for high-precision manufacturing. Proquoment connects elite industrial buyers with verified facilities through an AI-governed protocol.
            </p>
            <div className="flex items-center gap-2 text-[#070099] font-bold">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="tracking-[0.1em] text-[10px] sm:text-[11px] uppercase whitespace-nowrap">500+ Verified Manufacturers</span>
            </div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="bg-[#eeeeee] py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-4 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#070099] mb-4 sm:mb-6 uppercase">
                Secure Your Position
              </h2>
              <p className="text-[#454556] mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
                Access is strictly controlled to maintain technical integrity and fulfillment speed. Join the cohort and get full one year of our $2,500 subscription completely free.
              </p>
              <div className="space-y-6 max-w-xs mx-auto lg:mx-0">
                <div className="p-6 bg-white rounded-[12px] shadow-[0px_10px_30px_rgba(6,0,85,0.02)] text-left">
                  <span className="text-[#070099] block text-[10px] font-bold tracking-[0.1em] uppercase mb-2">Network Status</span>
                  <div className="text-2xl font-black text-[#070099]">92% Capacity</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="bg-white p-6 sm:p-10 lg:p-16 rounded-[12px] shadow-[0px_40px_80px_rgba(6,0,85,0.03)]">
                <form className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Country</label>
                      <select defaultValue="" className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors text-[#454556] text-sm font-medium border-none appearance-none">
                        <option disabled value="">Select Country</option>
                        {["United States", "Germany", "Japan", "India", "China", "United Kingdom", "South Korea", "Vietnam", "Mexico", "Other"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Product Domain</label>
                      <select defaultValue="" className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors text-[#454556] text-sm font-medium border-none appearance-none">
                        <option disabled value="">Select Domain</option>
                        {["Textiles", "Agriculture", "Jewellery", "Engineering", "Pharma", "Leather", "Packaged Foods", "Electronics", "Construction", "Plastics", "Minerals", "Handicrafts", "Wood Products", "Other"].map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Full Name</label>
                      <input
                        className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Work Email</label>
                      <input
                        className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                        placeholder="john@company.industrial"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Company Name</label>
                    <input
                      className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                      placeholder="Advanced Robotics Ltd."
                      type="text"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Intent Profile</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Buyer", "Manufacturer / Farmer"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-4 p-4 bg-[#F5F5F7] rounded-[10px] cursor-pointer hover:bg-[#EAEAEB] transition-colors group"
                        >
                          <input
                            className="text-[#0f00da] focus:ring-0"
                            name="intent"
                            type="radio"
                            value={option}
                            onChange={() => setIntent(option)}
                            checked={intent === option}
                          />
                          <span className="text-sm font-semibold text-[#454556] group-hover:text-[#070099] transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full bg-[#0f00da] text-white py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:shadow-xl transition-all"
                    type="submit"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
