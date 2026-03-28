const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/ADBb0uguUXosTUwY8IKEneC9HGTM5q2EtTIbUcfP6AQeeFEnvqbFUeYdT3wMPoo5yhaA3qwm_-rRYNA2oBIP-s_F6G8P02sNzDVgZvRs-Mj6dtsvgN5cftmf2CnByNsW0oacqWiv9mvdOZfIr1RhUtOI7lzlwxIqHtOfvuL1H71Xbl-nJQfrYNp5eJOHA_tWScpimEaxAe098UuRbhtpCmp2cARZP1kzk9TQXv-SQ5FUA-WXJah3CzyBwWm7ti7NLR0XV2p3JXtkPtuAew";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] border-t border-[#eeeeee] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img alt="Proquoment Logo" className="h-6 w-auto" src={LOGO_URL} />
              <span className="text-xl font-black tracking-tighter text-[#070099]">Proquoment</span>
            </div>
            <p className="text-sm text-[#454556] leading-relaxed max-w-xs mb-8">
              Automated global sourcing for the next generation of industrial manufacturing. Built for precision.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-[#c6c4d9] flex items-center justify-center text-[#1a1c1c] hover:bg-[#070099] hover:text-white hover:border-[#070099] transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm">language</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#c6c4d9] flex items-center justify-center text-[#1a1c1c] hover:bg-[#070099] hover:text-white hover:border-[#070099] transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm">share</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#767588] mb-6">Platform</h4>
              <ul className="space-y-4">
                {["Materials R&D", "Supplier Network", "Quality Control", "Logistics"].map((item) => (
                  <li key={item}>
                    <a className="text-sm font-medium text-[#454556] hover:text-[#070099] transition-colors" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#767588] mb-6">Company</h4>
              <ul className="space-y-4">
                {["Industrial Manifesto", "Case Studies", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a className="text-sm font-medium text-[#454556] hover:text-[#070099] transition-colors" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#767588] mb-6">Legal</h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a className="text-sm font-medium text-[#454556] hover:text-[#070099] transition-colors" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#eeeeee] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold text-[#767588] uppercase tracking-widest">
            © 2026 Proquoment. All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black tracking-widest uppercase text-[#070099]">
              Made for the Industrial Legacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
