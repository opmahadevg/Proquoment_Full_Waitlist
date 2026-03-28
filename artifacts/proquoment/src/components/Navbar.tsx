import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/ADBb0uguUXosTUwY8IKEneC9HGTM5q2EtTIbUcfP6AQeeFEnvqbFUeYdT3wMPoo5yhaA3qwm_-rRYNA2oBIP-s_F6G8P02sNzDVgZvRs-Mj6dtsvgN5cftmf2CnByNsW0oacqWiv9mvdOZfIr1RhUtOI7lzlwxIqHtOfvuL1H71Xbl-nJQfrYNp5eJOHA_tWScpimEaxAe098UuRbhtpCmp2cARZP1kzk9TQXv-SQ5FUA-WXJah3CzyBwWm7ti7NLR0XV2p3JXtkPtuAew";

const navLinks = [
  { label: "Platform", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location === "/" || activePage === "platform";
    return location === href || activePage === href.replace("/", "");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#eeeeee]">
      <div className="flex justify-between items-center px-6 lg:px-12 py-3 lg:py-4 w-full max-w-[1440px] mx-auto relative z-[60]">
        <Link href="/" className="flex items-center gap-2 lg:gap-3">
          <img alt="Proquoment Logo" className="h-6 lg:h-8 w-auto" src={LOGO_URL} />
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-[#070099]">Proquoment</span>
        </Link>

        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm lg:text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#0f00da] border-b-2 border-[#0f00da] pb-1"
                  : "text-[#1a1c1c] hover:text-[#070099]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/waitlist">
            <button className="bg-[#0f00da] text-white px-5 lg:px-8 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-bold hover:opacity-90 transition-all active:scale-95">
              Join Waitlist
            </button>
          </Link>
        </div>

        <div className="flex md:hidden items-center">
          <button
            className="text-[#1a1c1c] focus:outline-none p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-0 bg-white shadow-xl pt-20 pb-10 z-[55] flex flex-col items-center gap-6 border-b border-[#eeeeee]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-2 ${
                isActive(link.href) ? "text-[#0f00da]" : "text-[#1a1c1c] hover:text-[#070099]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/waitlist" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#0f00da] text-white px-10 py-3 rounded-full text-base font-bold hover:opacity-90 transition-all active:scale-95 mt-4">
              Join Waitlist
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
