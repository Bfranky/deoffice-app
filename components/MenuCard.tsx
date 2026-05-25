"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "@/lib/data";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="menu-card overflow-hidden transition-all duration-300"
      style={{ backgroundColor: "#1c1c1c", border: "1px solid transparent" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,148,58,0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
    >
      {/* Image */}
      <div className="menu-card-img relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          style={{ opacity: 0.8, transition: "opacity 0.4s, transform 0.4s" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1"
            style={{ backgroundColor: "#c9943a", color: "#000" }}
          >
            {item.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 pb-5">
        <p className="text-[9px] tracking-[2px] uppercase font-semibold mb-1.5 capitalize" style={{ color: "rgba(201,148,58,0.5)" }}>
          {item.category}
        </p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg font-medium text-white mb-1.5 leading-snug">
          {item.name}
        </h3>
        <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
          {item.description}
        </p>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9943a" }} className="text-xl font-medium">
            {item.price}
          </span>
          <Link
            href="/contact"
            className="text-[9px] tracking-[1.5px] uppercase font-semibold no-underline transition-colors duration-200 pb-0.5"
            style={{ color: "rgba(255,255,255,0.3)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            Order →
          </Link>
        </div>
      </div>
    </div>
  );
}
