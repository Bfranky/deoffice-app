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
      <header
        style={{ backgroundColor: "rgba(13,13,13,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
        className="sticky top-0 z-50 h-[62px] flex items-center justify-between px-4 md:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 no-underline">
          <div
            style={{ border: "1.5px solid #c9943a", fontFamily: "'Cormorant Garamond', serif" }}
            className="w-[34px] h-[34px] flex items-center justify-center text-[13px] font-semibold"
            aria-hidden
          >
            <span style={{ color: "#c9943a" }}>DO</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-base font-medium text-white leading-tight">
              De Office Bar
            </div>
            <div className="text-[9px] uppercase tracking-[1.8px]" style={{ color: "rgba(201,148,58,0.55)" }}>
              Rivers G.R.A · Port Harcourt
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[11px] tracking-[1.8px] uppercase font-semibold no-underline transition-colors duration-200"
                style={{ color: path === l.href ? "#c9943a" : "rgba(255,255,255,0.4)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:08061939718"
            className="text-[11px] tracking-wide no-underline transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            0806 193 9718
          </a>
          <Link href="/contact" className="btn-outline-gold text-[10px] !py-2 !px-4">
            Reserve
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="hamburger-bar"
            style={open ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}
          />
          <span
            className="hamburger-bar"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="hamburger-bar"
            style={open ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}
          />
        </button>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{ backgroundColor: "rgba(13,13,13,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
          className="md:hidden fixed top-[62px] left-0 right-0 z-40 flex flex-col px-4 py-3"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] tracking-[2px] uppercase font-semibold py-3.5 no-underline transition-colors duration-200"
              style={{
                color: path === l.href ? "#c9943a" : "rgba(255,255,255,0.45)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold block text-center w-full !py-3"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
