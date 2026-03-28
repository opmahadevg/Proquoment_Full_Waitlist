import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen selection:bg-[#bfc1ff] flex flex-col">
      <Navbar activePage="contact" />

      <main className="flex-grow pt-24 lg:pt-32 pb-12">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[819px]">
          {/* Left: Contact Info */}
          <section className="flex flex-col justify-center pr-12 relative py-20 lg:py-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="halftone-texture-dark absolute inset-0"></div>
            </div>
            <div className="space-y-2 mb-6">
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#0f00d9]">Global Operations</span>
            </div>
            <h1 className="text-6xl md:text-[5rem] font-black tracking-[-0.04em] leading-[0.95] text-[#060055] mb-12 max-w-xl">
              Connect with Proquoment
            </h1>
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#eeeeee] rounded-full text-[#0f00d9] transition-all group-hover:bg-[#0f00d9] group-hover:text-white">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#464651] mb-1">Inquiries</p>
                  <a className="text-xl font-bold text-[#060055] hover:text-[#0f00d9] transition-colors" href="mailto:Proquoment@gmail.com">
                    Proquoment@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#eeeeee] rounded-full text-[#0f00d9] transition-all group-hover:bg-[#0f00d9] group-hover:text-white">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#464651] mb-1">24x7 Support Line</p>
                  <a className="text-xl font-bold text-[#060055] hover:text-[#0f00d9] transition-colors" href="tel:+917982065422">
                    +91-7982065422
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Ecosystem */}
          <section className="flex items-center lg:pl-12 py-20 lg:py-0">
            <div className="w-full bg-white rounded-[10px] p-12 shadow-[0px_20px_40px_rgba(6,0,85,0.04)] relative overflow-hidden">
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#060055] mb-4">Ecosystem</h2>
                <div className="h-1 w-12 bg-[#0f00d9]"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "share_reviews", label: "Professional", title: "LinkedIn", href: "https://www.linkedin.com/company/proquoment/about/" },
                  { icon: "public", label: "Announcements", title: "Twitter", href: "https://x.com/proquoment" },
                  { icon: "photo_camera", label: "Visual Log", title: "Instagram", href: "https://www.instagram.com/proquoment/" },
                  { icon: "video_library", label: "Resources", title: "YouTube", href: "https://www.youtube.com/@Proquoment" },
                ].map((item) => (
                  <a
                    key={item.title}
                    className="group block p-8 bg-[#eeeeee] rounded-[10px] hover:bg-[#e8e8e8] transition-all duration-300"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="material-symbols-outlined text-3xl text-[#0f00d9]">{item.icon}</span>
                      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-[#0f00d9]">arrow_forward</span>
                    </div>
                    <p className="text-[0.7rem] font-bold tracking-widest uppercase text-[#464651] mb-1">{item.label}</p>
                    <p className="text-xl font-black text-[#060055]">{item.title}</p>
                  </a>
                ))}
              </div>
              <a
                href="https://calendly.com/rahull-goswamii2004"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 p-8 industrial-gradient rounded-[10px] text-white flex items-center justify-between group hover:brightness-110 transition-all"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-1">Immediate Assistance</p>
                  <p className="text-xl font-bold tracking-tight">Book a Call</p>
                </div>
                <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110">bolt</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
