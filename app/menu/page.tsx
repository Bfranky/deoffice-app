"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { MENU_ITEMS } from "@/lib/data";

type Cat = "all" | "food" | "spirits" | "cocktails" | "beer" | "wine";

const tabs: { label: string; value: Cat }[] = [
  { label: "Everything", value: "all" },
  { label: "Food", value: "food" },
  { label: "Cocktails", value: "cocktails" },
  { label: "Spirits", value: "spirits" },
  { label: "Beer", value: "beer" },
  { label: "Wine", value: "wine" },
];

export default function MenuPage() {
  const [active, setActive] = useState<Cat>("all");
  const list = active === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active);

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden" style={{ height: 240, backgroundColor: "#242424" }}>
        <Image
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&q=80&auto=format&fit=crop"
          alt="Our Menu"
          fill
          className="object-cover"
          style={{ opacity: 0.5 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 px-4 md:px-8 pb-8 z-10">
          <p className="section-label">De Office Bar</p>
          <h1 className="font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,7vw,4rem)" }}>
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu content */}
      <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div
            className="flex gap-2 flex-wrap mb-8 pb-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className="px-4 py-2 text-[10px] tracking-[1.5px] uppercase font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: active === t.value ? "#c9943a" : "transparent",
                  border: `1px solid ${active === t.value ? "#c9943a" : "rgba(255,255,255,0.08)"}`,
                  color: active === t.value ? "#000" : "rgba(255,255,255,0.35)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.2)" }}>
            {list.length} item{list.length !== 1 ? "s" : ""}
          </p>

          <div
            className="grid gap-0.5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            {list.map((i) => (
              <MenuCard key={i.id} item={i} />
            ))}
          </div>

          {/* CTA box */}
          <div
            className="mt-14 p-8 md:p-10 text-center"
            style={{ border: "1px solid rgba(201,148,58,0.2)", backgroundColor: "#141414" }}
          >
            <h3 className="font-light text-white mb-2 text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Can&apos;t find what you&apos;re after?
            </h3>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
              Our bartenders craft custom cocktails on request. The kitchen accommodates special orders. Just ask.
            </p>
            <a href="tel:08061939718" className="btn-gold">
              Call 0806 193 9718
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
