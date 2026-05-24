import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, ChevronRight, Utensils, Wine } from "lucide-react";
import MenuCard from "@/components/MenuCard";
import ReservationForm from "@/components/ReservationForm";
import { SITE, MENU_ITEMS, REVIEWS } from "@/lib/data";

export default function Home() {
  const featured = MENU_ITEMS.filter(i => i.tag).slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1600&auto=format&fit=crop" alt="De Office Bar" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />

        {/* Decorative vertical text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
          <div className="w-px h-20 bg-gold/30" />
          <p className="text-[10px] tracking-[4px] uppercase text-white/20 [writing-mode:vertical-lr]">Phase 2 · Rivers G.R.A · Port Harcourt</p>
          <div className="w-px h-20 bg-gold/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-dark/50 backdrop-blur px-4 py-2 mb-8">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-gold text-xs font-bold tracking-wider">{SITE.rating}</span>
            <span className="text-white/30 text-xs">({SITE.reviews.toLocaleString()} reviews)</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-none mb-4 tracking-tight">
            De Office<br /><em className="text-gold">Bar</em>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-10 tracking-wide">
            Port Harcourt's premier bar & lounge. Where the vibe is always right, the drinks are always cold, and every night becomes a memory.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/menu" className="btn-gold">View Menu</Link>
            <Link href="/contact" className="btn-outline-gold">Reserve a Table</Link>
          </div>

          {/* Info bar */}
          <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-white/5">
            {[
              { icon: <MapPin size={12} />, text: "8 Tombia Street, Rivers G.R.A" },
              { icon: <Clock size={12} />, text: "Opens 2 PM Daily" },
              { icon: <Utensils size={12} />, text: "Dine-in & Takeaway" },
              { icon: <Wine size={12} />, text: SITE.priceRange },
            ].map((i) => (
              <div key={i.text} className="flex items-center gap-2 text-xs text-white/35 tracking-wider">
                <span className="text-gold">{i.icon}</span>{i.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIBE STRIP ── */}
      <section className="bg-gold py-4 px-6 overflow-hidden">
        <div className="flex gap-12 items-center whitespace-nowrap">
          {Array(6).fill("DRINKS · FOOD · MUSIC · GOOD VIBES · PORT HARCOURT").map((t, i) => (
            <span key={i} className="text-black text-xs font-bold tracking-[3px] uppercase shrink-0">{t}</span>
          ))}
        </div>
      </section>

      {/* ── FEATURED MENU ── */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="section-label">Menu Highlights</p>
              <div className="gold-bar" />
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">What We're<br />Serving Tonight</h2>
            </div>
            <Link href="/menu" className="flex items-center gap-1 text-xs text-gold tracking-[2px] uppercase font-semibold hover:text-gold-light transition-colors">
              Full Menu <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/3">
            {featured.map(i => <MenuCard key={i.id} item={i} />)}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-96 md:h-auto min-h-[500px]">
          <Image src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&auto=format&fit=crop" alt="Bar interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark/40" />
        </div>
        <div className="bg-dark-2 flex items-center px-10 py-16 md:px-16">
          <div>
            <p className="section-label">About Us</p>
            <div className="gold-bar" />
            <h2 className="font-display text-4xl font-light text-white mb-6 leading-tight">
              The Definitive Bar<br />Experience in PH
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Nestled in the heart of Phase 2, Rivers G.R.A, De Office Bar has established itself as the benchmark for bar culture in Port Harcourt. With over 1,000 five-star reviews, we're not just a bar — we're a destination.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              From the perfectly crafted cocktails to our signature peppered snails and chicken platters, every detail at De Office Bar is designed to make your evening unforgettable.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[{ v: "1,023", l: "Reviews" }, { v: "4.1★", l: "Rating" }, { v: "2PM", l: "Opens Daily" }].map(s => (
                <div key={s.v} className="border border-white/5 p-4 text-center">
                  <div className="font-display text-2xl text-gold font-semibold">{s.v}</div>
                  <div className="text-[10px] text-white/30 tracking-widest uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-outline-gold text-xs">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-dark">
        {[
          "https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=500&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop",
        ].map((src, i) => (
          <div key={i} className="relative h-48 md:h-64 overflow-hidden group">
            <Image src={src} alt={`Gallery ${i}`} fill className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
          </div>
        ))}
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-6 bg-dark-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-8 mb-14 flex-wrap">
            <div>
              <p className="section-label">Guest Reviews</p>
              <div className="gold-bar" />
              <h2 className="font-display text-4xl font-light text-white">
                What People<br />Are Saying
              </h2>
            </div>
            <div className="flex items-end gap-3 mb-2">
              <div className="font-display text-7xl text-gold font-light leading-none">{SITE.rating}</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className={s <= Math.round(SITE.rating) ? "text-gold fill-gold" : "text-white/15"} />)}
                </div>
                <p className="text-xs text-white/30 tracking-widest">{SITE.reviews.toLocaleString()} reviews on Google</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/3">
            {REVIEWS.map(r => (
              <div key={r.name} className="bg-dark p-8">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className={s <= r.rating ? "text-gold fill-gold" : "text-white/10"} />)}
                </div>
                <p className="text-white/55 text-sm leading-relaxed italic mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center text-xs font-bold text-black" style={{ background: r.color }}>{r.initials}</div>
                  <div>
                    <p className="text-white text-sm font-semibold">{r.name}</p>
                    <p className="text-white/25 text-xs tracking-wider">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&auto=format&fit=crop" alt="Bar night" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="section-label justify-center flex">Reserve Your Night</p>
          <div className="gold-bar mx-auto" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-5 leading-tight">
            Your Table<br />Awaits at <em className="text-gold">De Office</em>
          </h2>
          <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-md mx-auto">Call us, WhatsApp, or use the reservation form. We'll confirm your table and make sure your night is exceptional.</p>
          <a href={`tel:${SITE.phone}`} className="block font-display text-3xl text-gold mb-8 hover:text-gold-light transition-colors">📞 {SITE.phone}</a>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold">Reserve a Table</Link>
            <a href={`tel:${SITE.phone}`} className="btn-outline-gold">Call Now</a>
          </div>
        </div>
      </section>

      {/* ── MINI RESERVATION ── */}
      <section className="py-24 px-6 bg-dark" id="reserve">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Book a Table</p>
            <div className="gold-bar" />
            <h2 className="font-display text-4xl font-light text-white mb-6">Make a Reservation</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">Fill in the form and we'll confirm your reservation promptly. For large groups or private events, call us directly.</p>
            {[
              { label: "Address", val: SITE.address },
              { label: "Phone & WhatsApp", val: SITE.phone },
              { label: "Opens", val: "Daily from 2:00 PM" },
              { label: "Price Range", val: `${SITE.priceRange} per person` },
            ].map(row => (
              <div key={row.label} className="flex items-start gap-3 mb-4">
                <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-gold/60 block mb-0.5">{row.label}</span>
                  <span className="text-sm text-white/40">{row.val}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-dark-2 border border-white/5 p-8">
            <h3 className="font-display text-2xl text-white mb-6">Reserve Tonight 🥂</h3>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}