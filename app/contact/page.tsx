import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import ReservationForm from "@/components/ReservationForm";
import { SITE } from "@/lib/data";
import type { Metadata } from "next";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

const Instagram = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Reservations | De Office Bar – Port Harcourt",
  description: "Reserve a table at De Office Bar. Phase 2, 8 Tombia Street, Rivers G.R.A, Port Harcourt. Opens 2 PM daily.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 240, backgroundColor: "#242424" }}>
        <Image
          src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1400&q=80&auto=format&fit=crop"
          alt="Reservations"
          fill
          className="object-cover"
          style={{ opacity: 0.45 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 px-4 md:px-8 pb-8 z-10">
          <p className="section-label">We&apos;ll Be Expecting You</p>
          <h1 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,7vw,4rem)" }}>
            Reservations
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Contact info */}
          <div>
            <p className="section-label">Contact & Location</p>
            <div className="gold-bar" />
            <h2 className="font-light text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
              Find Us in Rivers G.R.A
            </h2>
            <p className="text-sm leading-relaxed mb-8 font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
              Call, WhatsApp, or use the form to secure your table. For private events or large groups, please call directly.
            </p>

            {[
              { icon: <MapPin size={16} />, label: "Address", val: SITE.address, href: undefined },
              { icon: <Phone size={16} />, label: "Phone & WhatsApp", val: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: <Clock size={16} />, label: "Opening Hours", val: `Weekdays: ${SITE.hours.weekday} · Weekends: ${SITE.hours.weekend}`, href: undefined },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-3 mb-5">
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 36, height: 36, border: "1px solid rgba(201,148,58,0.25)", color: "#c9943a" }}
                >
                  {row.icon}
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] uppercase font-semibold mb-0.5" style={{ color: "rgba(201,148,58,0.5)" }}>
                    {row.label}
                  </p>
                  {row.href ? (
                    <a href={row.href} className="text-sm font-semibold no-underline transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {row.val}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{row.val}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex gap-2 mb-8">
              <a
                href={SITE.instagram}
                className="flex items-center justify-center no-underline transition-colors duration-200"
                style={{ width: 38, height: 38, border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href={SITE.facebook}
                className="flex items-center justify-center no-underline transition-colors duration-200"
                style={{ width: 38, height: 38, border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 text-[10px] font-semibold tracking-widest uppercase no-underline transition-colors duration-200"
                style={{ border: "1px solid rgba(37,211,102,0.3)", color: "#25D366" }}
              >
                WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div
              className="flex flex-col items-center justify-center text-center p-8 gap-3"
              style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#141414" }}
            >
              <div className="text-4xl">📍</div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Phase 2, 8 Tombia Street</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Rivers G.R.A, Port Harcourt, Rivers State</p>
                <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>Plus Code: R2F4+43</p>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[2px] uppercase font-semibold no-underline pb-0.5"
                style={{ color: "#c9943a", borderBottom: "1px solid rgba(201,148,58,0.3)" }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8" style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 className="font-light text-white mb-1 text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Reserve a Table
            </h3>
            <p className="text-[11px] tracking-wide mb-6" style={{ color: "rgba(255,255,255,0.2)" }}>
              We&apos;ll confirm via call or WhatsApp within the hour.
            </p>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}
