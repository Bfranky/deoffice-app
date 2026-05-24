import Image from "next/image";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import ReservationForm from "@/components/ReservationForm";
import { SITE } from "@/lib/data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Reservations | De Office Bar – Port Harcourt" };

export default function ContactPage() {
  return (
    <>
      <section className="relative h-60 flex items-end overflow-hidden pt-[68px]">
        <Image src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1400&auto=format&fit=crop" alt="Contact" fill className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-8">
          <p className="section-label">We'll Be Expecting You</p>
          <h1 className="font-display text-5xl font-light text-white">Reservations</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="section-label">Contact & Location</p>
            <div className="gold-bar" />
            <h2 className="font-display text-3xl font-light text-white mb-6">Find Us in Rivers G.R.A</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10">Call, WhatsApp, or use the form to secure your table. For private events or large groups, please call us directly.</p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <MapPin size={16} />, label: "Address", val: SITE.address },
                { icon: <Phone size={16} />, label: "Phone & WhatsApp", val: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: <Clock size={16} />, label: "Opening Hours", val: `Weekdays: ${SITE.hours.weekdays} · Weekends: ${SITE.hours.weekends}` },
              ].map(row => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold shrink-0">{row.icon}</div>
                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase text-gold/50 mb-1 font-semibold">{row.label}</p>
                    {row.href
                      ? <a href={row.href} className="text-sm text-white/50 hover:text-gold transition-colors font-semibold">{row.val}</a>
                      : <p className="text-sm text-white/50">{row.val}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-10">
              <a href={SITE.instagram} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/30 transition-colors"><Instagram size={14} /></a>
              <a href={SITE.facebook} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/30 transition-colors"><Facebook size={14} /></a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 border border-[#25D366]/30 text-[#25D366] text-xs tracking-widest uppercase font-semibold hover:bg-[#25D366]/10 transition-colors">WhatsApp</a>
            </div>

            {/* Map placeholder */}
            <div className="border border-white/5 bg-dark-2 h-48 flex flex-col items-center justify-center gap-3">
              <div className="text-3xl">📍</div>
              <p className="text-sm text-white/30 text-center">Phase 2, 8 Tombia Street<br />Rivers G.R.A, Port Harcourt</p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[2px] uppercase text-gold border-b border-gold/30 pb-0.5 hover:text-gold-light">Open in Google Maps →</a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-2 border border-white/5 p-8">
            <h3 className="font-display text-2xl text-white mb-1">Reserve a Table</h3>
            <p className="text-xs text-white/25 tracking-wider mb-7">We'll confirm via call or WhatsApp within the hour.</p>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}