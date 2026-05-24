"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <>
      <header className="sticky top-0 z-50 bg-[#0d0d0d]/97 backdrop-blur border-b border-white/[0.06] h-[62px] flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-[34px] h-[34px] border border-[#c9943a] flex items-center justify-center font-display text-[13px] font-semibold text-[#c9943a]">DO</div>
          <div>
            <div className="font-display text-base font-medium text-white leading-tight">De Office Bar</div>
            <div className="text-[9px] text-[#c9943a]/55 uppercase tracking-[1.8px]">Rivers G.R.A · Port Harcourt</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`text-[11px] tracking-[1.8px] uppercase font-semibold transition-colors ${path === l.href ? "text-[#c9943a]" : "text-white/40 hover:text-white"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a href="tel:08061939718" className="text-[11px] text-white/30 hover:text-[#c9943a] transition-colors tracking-wide">0806 193 9718</a>
          <Link href="/contact" className="btn-outline-gold text-[10px] px-4 py-2">Reserve</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)} aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-white/60 transition-all ${open ? "rotate-45 translate-x-[5px] translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white/60 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white/60 transition-all ${open ? "-rotate-45 translate-x-[5px] -translate-y-[7px]" : ""}`} />
        </button>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-[62px] left-0 right-0 bg-[#0d0d0d]/98 backdrop-blur border-b border-white/[0.06] z-40 flex flex-col px-4 py-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-[11px] tracking-[2px] uppercase font-semibold py-3.5 border-b border-white/[0.05] transition-colors ${path === l.href ? "text-[#c9943a]" : "text-white/45"}`}>
              {l.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold w-full text-center block py-3">Reserve a Table</Link>
          </div>
        </div>
      )}
    </>
  );
}
