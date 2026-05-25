import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import MenuCard from "@/components/MenuCard";
import ReservationForm from "@/components/ReservationForm";
import { SITE, MENU_ITEMS, REVIEWS } from "@/lib/data";

export default function HomePage() {
  const featured = MENU_ITEMS.filter((i) => i.tag).slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "90vh", backgroundColor: "#0d0d0d" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1600&q=80&auto=format&fit=crop"
          alt="De Office Bar"
          fill
          className="object-cover"
          style={{ opacity: 0.4 }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.65) 55%, rgba(13,13,13,0.2) 100%)" }}
        />

        <div className="relative z-10 px-4 md:px-8 pb-16 w-full max-w-5xl">
          {/* Rating */}
          <div
            className="inline-flex items-center gap-2 text-[11px] tracking-[1.5px] uppercase font-medium px-4 py-2 mb-5"
            style={{ border: "1px solid rgba(201,148,58,0.35)", backgroundColor: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.7)" }}
          >
            <Star size={11} fill="#c9943a" style={{ color: "#c9943a" }} />
            <strong style={{ color: "#c9943a" }}>{SITE.rating}</strong>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>
              ({SITE.reviews.toLocaleString()} reviews)
            </span>
          </div>

          <h1
            className="font-light text-white leading-[1.05] tracking-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.2rem, 10vw, 6rem)" }}
          >
            De Office
            <br />
            <em style={{ color: "#c9943a" }}>Bar</em>
          </h1>

          <p className="text-sm leading-relaxed mb-8 max-w-md font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            Port Harcourt's premier bar & lounge. Great drinks, great food, and a vibe that turns every night into a memory.
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <Link href="/menu" className="btn-gold">View Menu</Link>
            <Link href="/contact" className="btn-outline-gold">Reserve a Table</Link>
          </div>

          <div
            className="flex flex-wrap gap-4 md:gap-6 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              { icon: <MapPin size={12} />, text: "8 Tombia Street, Rivers G.R.A" },
              { icon: <Clock size={12} />, text: "Opens 2 PM Daily" },
              { icon: <Utensils size={12} />, text: "Dine-in & Takeaway" },
              { icon: null, text: SITE.priceRange },
            ].map((m) => (
              <div key={m.text} className="flex items-center gap-1.5 text-[11px] tracking-wide" style={{ color: "rgba(255,255,255,0.3)" }}>
                {m.icon && <span style={{ color: "#c9943a" }}>{m.icon}</span>}
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ backgroundColor: "#c9943a" }} className="py-3 overflow-hidden whitespace-nowrap">
        <div className="ticker-animate flex gap-0">
          {Array(2)
            .fill(null)
            .map((_, i) =>
              ["DRINKS", "·", "FOOD", "·", "MUSIC", "·", "GOOD VIBES", "·", "PORT HARCOURT", "·", "OPEN FROM 2PM", "·"].map((t, j) => (
                <span key={`${i}-${j}`} className="text-black text-[11px] font-bold tracking-[3px] uppercase flex-shrink-0 px-6">
                  {t}
                </span>
              ))
            )}
        </div>
      </div>

      {/* ── FEATURED MENU ── */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div>
              <p className="section-label">Menu Highlights</p>
              <div className="gold-bar" />
              <h2 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                What We're
                <br />
                Serving Tonight
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-[10px] tracking-[2px] uppercase font-bold no-underline transition-colors duration-200"
              style={{ color: "#c9943a" }}
            >
              Full Menu →
            </Link>
          </div>
          <div
            className="grid gap-0.5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            {featured.map((i) => (
              <MenuCard key={i.id} item={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative overflow-hidden" style={{ minHeight: 320, backgroundColor: "#242424" }}>
          <Image
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80&auto=format&fit=crop"
            alt="De Office Bar interior"
            fill
            className="object-cover"
            style={{ opacity: 0.8 }}
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,13,13,0.25)" }} />
        </div>
        <div className="flex items-center px-6 py-14 md:px-12" style={{ backgroundColor: "#141414" }}>
          <div className="w-full">
            <p className="section-label">About Us</p>
            <div className="gold-bar" />
            <h2 className="font-light text-white leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              The Definitive Bar
              <br />
              Experience in PH
            </h2>
            <p className="text-sm leading-[1.85] mb-3 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              Nestled in Phase 2, Rivers G.R.A, De Office Bar has built a reputation for excellence — warm, sophisticated, and with over 1,000 five-star reviews.
            </p>
            <p className="text-sm leading-[1.85] mb-8 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              From perfectly crafted cocktails to signature peppered snails and chicken platters, every detail is designed to make your evening exceptional.
            </p>
            <div className="grid grid-cols-3 gap-1.5 mb-8">
              {[{ v: "1,023", l: "Reviews" }, { v: "4.1★", l: "Rating" }, { v: "2PM", l: "Opens" }].map((s) => (
                <div key={s.v} className="p-3 md:p-4 text-center" style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#0d0d0d" }}>
                  <div className="text-xl md:text-2xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9943a" }}>
                    {s.v}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-outline-gold">Our Story</Link>
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5" style={{ backgroundColor: "#0d0d0d" }}>
        {[
          "https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80&auto=format&fit=crop",
        ].map((src, i) => (
          <div key={i} className="gallery-cell">
            <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
          </div>
        ))}
      </div>

      {/* ── REVIEWS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#141414" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-6 md:gap-10 items-end mb-10">
            <div>
              <p className="section-label">Guest Reviews</p>
              <div className="gold-bar" />
              <h2 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
                What People
                <br />
                Are Saying
              </h2>
            </div>
            <div className="flex items-end gap-3 pb-1">
              <div className="font-light leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", color: "#c9943a" }}>
                {SITE.rating}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} fill={s <= Math.round(SITE.rating) ? "#c9943a" : "none"} style={{ color: s <= Math.round(SITE.rating) ? "#c9943a" : "rgba(255,255,255,0.15)" }} />
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {SITE.reviews.toLocaleString()} reviews
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-6 md:p-8" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} fill={s <= r.rating ? "#c9943a" : "none"} style={{ color: s <= r.rating ? "#c9943a" : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-xs font-bold text-black"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{r.name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative py-20 md:py-28 px-4 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80&auto=format&fit=crop"
          alt="De Office Bar at night"
          fill
          className="object-cover"
          style={{ opacity: 0.35 }}
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,13,13,0.87)" }} />
        <div className="relative z-10">
          <p className="section-label flex justify-center">Reserve Your Night</p>
          <div className="gold-bar mx-auto" />
          <h2 className="font-light text-white leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 7vw, 4.5rem)" }}>
            Your Table Awaits
            <br />
            <em style={{ color: "#c9943a" }}>at De Office</em>
          </h2>
          <p className="text-sm max-w-sm mx-auto leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            Call us, WhatsApp, or fill the form. We'll confirm your table and make sure your night is exceptional.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="block mb-8 no-underline font-light transition-colors duration-200"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 5vw, 2.8rem)", color: "#c9943a" }}
          >
            📞 {SITE.phone}
          </a>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold">Reserve a Table</Link>
            <a href={`tel:${SITE.phone}`} className="btn-outline-gold">Call Now</a>
          </div>
        </div>
      </section>

      {/* ── RESERVATION FORM ── */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }} id="reserve">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="section-label">Make a Reservation</p>
            <div className="gold-bar" />
            <h2 className="font-light text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
              Book Your Table
            </h2>
            <p className="text-sm leading-relaxed mb-8 font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
              Fill in the form and we'll confirm your table via call or WhatsApp promptly. For private events or large groups, call us directly.
            </p>
            {[
              { l: "Address", v: SITE.address },
              { l: "Phone & WhatsApp", v: SITE.phone },
              { l: "Opens", v: "Daily from 2:00 PM" },
              { l: "Price Range", v: `${SITE.priceRange} per person` },
            ].map((row) => (
              <div key={row.l} className="flex gap-3 mb-4 items-start">
                <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#c9943a" }} />
                <div>
                  <span className="text-[9px] font-bold tracking-[2px] uppercase block mb-0.5" style={{ color: "rgba(201,148,58,0.6)" }}>
                    {row.l}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{row.v}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8" style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 className="font-light text-white mb-5 text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Reserve Tonight 🥂
            </h3>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}
