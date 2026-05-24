import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold flex items-center justify-center">
                <span className="text-gold font-display text-base font-semibold">DO</span>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-white">{SITE.name}</div>
                <div className="text-[9px] text-gold/60 uppercase tracking-[2px]">Bar & Lounge · Port Harcourt</div>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Port Harcourt's premier bar and lounge. Great drinks, great food, unforgettable vibes — in the heart of Rivers G.R.A.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={SITE.instagram} className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/40 transition-colors">
                <Instagram size={14} />
              </a>
              <a href={SITE.facebook} className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/40 transition-colors">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-semibold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[{href:"/",l:"Home"},{href:"/menu",l:"Menu"},{href:"/about",l:"About"},{href:"/contact",l:"Reservations"}].map(i=>(
                <li key={i.href}><Link href={i.href} className="text-sm text-white/40 hover:text-white transition-colors">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-semibold mb-5">Find Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin size={13} className="text-gold shrink-0 mt-0.5" />{SITE.address}
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors">
                  <Phone size={13} className="text-gold" />{SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/40">
                <Clock size={13} className="text-gold" />Opens 2 PM Daily
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/20">
          <p>© {new Date().getFullYear()} De Office Bar. All rights reserved.</p>
          <p>{SITE.priceRange} per person · Dine-in & Takeaway</p>
        </div>
      </div>
    </footer>
  );
}
