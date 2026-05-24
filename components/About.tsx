import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { SITE, REVIEWS } from "@/lib/data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About | De Office Bar – Port Harcourt" };

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 flex items-end overflow-hidden pt-[68px]">
        <Image src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=1400&auto=format&fit=crop" alt="About" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-8">
          <p className="section-label">Our Story</p>
          <h1 className="font-display text-5xl font-light text-white">About De Office Bar</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Who We Are</p>
            <div className="gold-bar" />
            <h2 className="font-display text-4xl font-light text-white mb-6">Where Port Harcourt Comes to Unwind</h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">De Office Bar sits at the heart of Phase 2, Rivers G.R.A — one of Port Harcourt's most vibrant neighbourhoods. Since opening, we've built a reputation for excellence in both food and drinks, with a warm, sophisticated atmosphere that keeps guests coming back.</p>
            <p className="text-white/45 text-sm leading-relaxed mb-4">Our menu blends Nigerian bar classics — the suya platter, peppered snails, and grilled fish — with international favourites like our signature chicken, chips and dips. Our bar programme covers everything from local lagers to premium cognac and freshly crafted cocktails.</p>
            <p className="text-white/45 text-sm leading-relaxed mb-8">With over 1,023 Google reviews averaging 4.1 stars, De Office Bar isn't just a bar. It's a Port Harcourt institution.</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[{ v: "1,023", l: "Reviews" }, { v: "4.1★", l: "Google Rating" }, { v: "2PM", l: "Daily Opening" }].map(s => (
                <div key={s.v} className="border border-white/5 p-4 text-center bg-dark-2">
                  <div className="font-display text-2xl text-gold">{s.v}</div>
                  <div className="text-[10px] text-white/25 tracking-widest uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gold">Reserve a Table</Link>
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            <div className="col-span-2 relative h-56 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&auto=format&fit=crop" alt="Bar" fill className="object-cover" />
            </div>
            <div className="relative h-40 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&auto=format&fit=crop" alt="Drinks" fill className="object-cover" />
            </div>
            <div className="relative h-40 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop" alt="Cocktail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-dark-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label justify-center flex">What Guests Say</p>
            <div className="gold-bar mx-auto" />
            <h2 className="font-display text-4xl font-light text-white">Guest Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/3">
            {REVIEWS.map(r => (
              <div key={r.name} className="bg-dark p-8">
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={12} className={s<=r.rating?"text-gold fill-gold":"text-white/10"} />)}</div>
                <p className="text-white/55 text-sm leading-relaxed italic mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center text-xs font-bold text-black" style={{background:r.color}}>{r.initials}</div>
                  <div><p className="text-white text-sm font-semibold">{r.name}</p><p className="text-white/25 text-xs">{r.location}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}