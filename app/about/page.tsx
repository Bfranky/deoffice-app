import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { SITE, REVIEWS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | De Office Bar – Port Harcourt",
  description: "The story behind De Office Bar, Port Harcourt's premier bar and lounge in Rivers G.R.A.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 260, backgroundColor: "#242424" }}>
        <Image
          src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=1400&q=80&auto=format&fit=crop"
          alt="About De Office Bar"
          fill
          className="object-cover"
          style={{ opacity: 0.5 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 px-4 md:px-8 pb-8 z-10">
          <p className="section-label">Our Story</p>
          <h1 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,7vw,4rem)" }}>
            About De Office Bar
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="section-label">Who We Are</p>
            <div className="gold-bar" />
            <h2 className="font-light text-white mb-5 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
              Where Port Harcourt Comes to Unwind
            </h2>
            <p className="text-sm leading-[1.85] mb-3 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              De Office Bar sits at the heart of Phase 2, Rivers G.R.A — one of Port Harcourt's most vibrant neighbourhoods. Since opening, we've built a reputation for excellence in both food and drinks, with an atmosphere that keeps guests coming back.
            </p>
            <p className="text-sm leading-[1.85] mb-3 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              Our menu blends Nigerian bar classics — suya platter, peppered snails, grilled fish — with international favourites. Our bar covers local lagers to premium cognac and freshly crafted cocktails.
            </p>
            <p className="text-sm leading-[1.85] mb-8 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              With over 1,023 Google reviews averaging 4.1 stars, De Office Bar isn't just a bar — it's a Port Harcourt institution.
            </p>
            <div className="grid grid-cols-3 gap-1.5 mb-8">
              {[{ v: "1,023", l: "Reviews" }, { v: "4.1★", l: "Rating" }, { v: "2PM", l: "Opens Daily" }].map((s) => (
                <div key={s.v} className="p-3 md:p-4 text-center" style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#141414" }}>
                  <div className="text-xl md:text-2xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9943a" }}>{s.v}</div>
                  <div className="text-[9px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gold">Reserve a Table</Link>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-0.5">
            <div className="col-span-2 relative overflow-hidden" style={{ height: 220, backgroundColor: "#242424" }}>
              <Image src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80&auto=format&fit=crop" alt="Bar" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="relative overflow-hidden" style={{ height: 150, backgroundColor: "#242424" }}>
              <Image src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80&auto=format&fit=crop" alt="Drinks" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative overflow-hidden" style={{ height: 150, backgroundColor: "#242424" }}>
              <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80&auto=format&fit=crop" alt="Cocktail" fill className="object-cover" sizes="25vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#141414" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label flex justify-center">Why Visit Us</p>
            <div className="gold-bar mx-auto" />
            <h2 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
              The De Office Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            {[
              { icon: "🍹", title: "Premium Drinks", desc: "From Hennessy and aged whisky to freshly crafted cocktails — our bar is fully stocked and our bartenders are skilled." },
              { icon: "🍖", title: "Quality Food", desc: "Nigerian classics and international favourites, all made fresh. The chicken, chips and dips alone is worth the visit." },
              { icon: "🎵", title: "Great Atmosphere", desc: "The music is always right. The lighting is perfect. The vibe is exactly what you need after a long week in Port Harcourt." },
              { icon: "👥", title: "Private Events", desc: "Corporate dinners, birthday parties, team outings — we accommodate groups and can arrange private areas." },
              { icon: "📍", title: "Prime Location", desc: "Right in Rivers G.R.A, Phase 2 — easily accessible, secure neighbourhood, ample parking." },
              { icon: "⭐", title: "4.1 on Google", desc: "Over 1,023 genuine reviews from happy guests. Our reputation speaks for itself — see what people are saying." },
            ].map((v) => (
              <div key={v.title} className="p-6 md:p-8" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="text-2xl mb-4">{v.icon}</div>
                <h3 className="font-medium text-white mb-2 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label flex justify-center">Guest Reviews</p>
            <div className="gold-bar mx-auto" />
            <h2 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>What Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-6 md:p-8" style={{ backgroundColor: "#141414" }}>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} fill={s <= r.rating ? "#c9943a" : "none"} style={{ color: s <= r.rating ? "#c9943a" : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-xs font-bold text-black" style={{ backgroundColor: r.color }}>{r.initials}</div>
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
    </>
  );
}
