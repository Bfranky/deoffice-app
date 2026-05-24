"use client";
import { useState } from "react";
import Image from "next/image";
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
  const list = active === "all" ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === active);
  return (
    <>
      <section className="relative h-60 flex items-end overflow-hidden pt-[68px]">
        <Image src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&auto=format&fit=crop" alt="Menu" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-8">
          <p className="section-label">De Office Bar</p>
          <h1 className="font-display text-5xl font-light text-white">Our Menu</h1>
        </div>
      </section>
      <section className="py-16 px-6 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 flex-wrap mb-12 border-b border-white/5 pb-6">
            {tabs.map(t => (
              <button key={t.value} onClick={() => setActive(t.value)}
                className={`px-5 py-2 text-xs tracking-[2px] uppercase font-semibold transition-all duration-200 border ${active === t.value ? "bg-gold border-gold text-black" : "border-white/10 text-white/40 hover:border-gold/40 hover:text-white"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-white/20 tracking-widest uppercase mb-6">{list.length} items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/3">
            {list.map(i => <MenuCard key={i.id} item={i} />)}
          </div>
          <div className="mt-16 border border-gold/20 p-10 text-center bg-dark-2">
            <h3 className="font-display text-2xl text-white mb-2">Looking for something specific?</h3>
            <p className="text-white/35 text-sm mb-6">Our bartenders craft custom cocktails and our kitchen can accommodate special requests. Just ask.</p>
            <a href="tel:08061939718" className="btn-gold text-xs">Call 0806 193 9718</a>
          </div>
        </div>
      </section>
    </>
  );
}