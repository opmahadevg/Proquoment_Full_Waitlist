import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import Icon from "@/components/Icon";

interface FormState {
  full_name: string;
  work_email: string;
  company_name: string;
  country: string;
  product_domain: string;
  intent_profile: string;
}

const INITIAL: FormState = {
  full_name: "",
  work_email: "",
  company_name: "",
  country: "",
  product_domain: "",
  intent_profile: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Waitlist() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.work_email || !isValidEmail(form.work_email)) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!form.intent_profile) {
      setError("Please select your intent profile.");
      return;
    }

    setLoading(true);
    const { error: sbError } = await supabase
      .from("waitlist_proquoment")
      .insert([
        {
          full_name: form.full_name || null,
          work_email: form.work_email,
          company_name: form.company_name || null,
          country: form.country || null,
          product_domain: form.product_domain || null,
          intent_profile: form.intent_profile,
        },
      ]);
    setLoading(false);

    if (sbError) {
      if (sbError.code === "23505") {
        setError("This email is already on the waitlist.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }

    setSuccess(true);
    setForm(INITIAL);
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#e1e0ff] selection:text-white flex flex-col">
      <Navbar activePage="" />

      <main className="pt-24 sm:pt-32 flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24 lg:mb-32 grid grid-cols-12 gap-8 pb-12 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="halftone-texture absolute inset-0 !opacity-100"></div>
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
              <span translate="no" className="material-symbols-outlined">auto_awesome</span>
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
                {success ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <span translate="no" className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#070099] tracking-tight">You're on the waitlist!</h3>
                    <p className="text-[#454556] max-w-sm">
                      We'll reach out when your access is ready. Watch this space.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Country</label>
                        <select
                          value={form.country}
                          onChange={set("country")}
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors text-[#454556] text-sm font-medium border-none appearance-none"
                        >
                          <option disabled value="">Select Country</option>
                          {["United States", "Germany", "Japan", "India", "China", "United Kingdom", "South Korea", "Vietnam", "Mexico", "Other"].map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Product Domain</label>
                        <select
                          value={form.product_domain}
                          onChange={set("product_domain")}
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors text-[#454556] text-sm font-medium border-none appearance-none"
                        >
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
                          value={form.full_name}
                          onChange={set("full_name")}
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">
                          Work Email <span className="text-[#0f00da]">*</span>
                        </label>
                        <input
                          value={form.work_email}
                          onChange={set("work_email")}
                          required
                          className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                          placeholder="john@company.industrial"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">Company Name</label>
                      <input
                        value={form.company_name}
                        onChange={set("company_name")}
                        className="w-full bg-[#F5F5F7] rounded-[10px] px-4 py-3 focus:bg-[#EAEAEB] focus:ring-0 focus:outline-none transition-colors placeholder:text-[#c6c4d9]/50 border-none text-sm"
                        placeholder="Advanced Robotics Ltd."
                        type="text"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#767588] block">
                        Intent Profile <span className="text-[#0f00da]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { label: "Buyer", value: "buyer" },
                          { label: "Manufacturer / Farmer", value: "manufacturer_farmer" },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center gap-4 p-4 bg-[#F5F5F7] rounded-[10px] cursor-pointer hover:bg-[#EAEAEB] transition-colors group"
                          >
                            <input
                              className="text-[#0f00da] focus:ring-0"
                              name="intent"
                              type="radio"
                              value={opt.value}
                              checked={form.intent_profile === opt.value}
                              onChange={set("intent_profile")}
                            />
                            <span className="text-sm font-semibold text-[#454556] group-hover:text-[#070099] transition-colors">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-center gap-3 px-4 py-3 bg-red-50 rounded-[10px] text-red-600 text-sm font-medium">
                        <span translate="no" className="material-symbols-outlined text-base">error</span>
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0f00da] text-white py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span translate="no" className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
