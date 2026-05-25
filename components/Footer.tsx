import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#090909", borderTop: "1px solid rgba(255,255,255,0.04)" }} className="pt-14 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid gap-8 pb-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Brand */}
          <div className="md:col-span-2" style={{ gridColumn: "span 2" }}>
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{ border: "1.5px solid #c9943a", fontFamily: "'Cormorant Garamond', serif", color: "#c9943a" }}
                className="w-[34px] h-[34px] flex-shrink-0 flex items-center justify-center text-[13px] font-semibold"
              >
                DO
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg font-medium text-white">
                  {SITE.name}
                </div>
                <div className="text-[9px] uppercase tracking-[2px]" style={{ color: "rgba(201,148,58,0.4)" }}>
                  Bar & Lounge · Port Harcourt
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              Port Harcourt's premier bar and lounge. Great drinks, great food, and a vibe that makes every night unforgettable.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[9px] tracking-[2.5px] uppercase font-semibold mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {[{ href: "/", l: "Home" }, { href: "/menu", l: "Menu" }, { href: "/about", l: "About" }, { href: "/contact", l: "Reservations" }].map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] tracking-[2.5px] uppercase font-semibold mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              <li>
                <a href={`tel:${SITE.phone}`} className="text-sm no-underline hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.28)" }}>
                  {SITE.phone}
                </a>
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>Opens 2 PM Daily</li>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm no-underline hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.28)" }}>
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 text-center text-[10px] uppercase tracking-[0.8px]" style={{ color: "rgba(255,255,255,0.14)" }}>
          © {new Date().getFullYear()} De Office Bar · Phase 2, 8 Tombia Street, Rivers G.R.A, Port Harcourt · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
