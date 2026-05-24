"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Reservations" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-dark/95 backdrop-blur border-b border-white/5 px-6 h-[68px] flex items-center justify-between max-w-screen mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gold flex items-center justify-center">
            <span className="text-gold font-display text-sm font-semibold tracking-wider">DO</span>
          </div>
          <div>
            <div className="font-display text-lg font-semibold text-white leading-tight tracking-wide">De Office Bar</div>
            <div className="text-[9px] text-gold/70 uppercase tracking-[2.5px]">Port Harcourt · Est. GRA</div>
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`text-xs tracking-[2px] uppercase font-semibold transition-colors ${path === l.href ? "text-gold" : "text-white/50 hover:text-white"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:08061939718" className="flex items-center gap-2 text-xs text-white/50 hover:text-gold transition-colors">
            <Phone size={13} /><span className="tracking-wider">0806 193 9718</span>
          </a>
          <Link href="/contact" className="btn-gold text-xs px-5 py-2.5">Reserve a Table</Link>
        </div>

        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-dark-2 border-b border-white/5 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-xs tracking-[2px] uppercase font-semibold py-2 border-b border-white/5 ${path === l.href ? "text-gold" : "text-white/50"}`}>
              {l.label}
            </Link>
          ))}
          <a href="tel:08061939718" className="btn-gold text-center mt-2">📞 0806 193 9718</a>
        </div>
      )}
    </header>
  );
}