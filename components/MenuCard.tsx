import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "@/lib/data";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-dark-3 border border-white/5 group hover:border-gold/30 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-dark-4">
        <Image src={item.image} alt={item.name} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" sizes="(max-width:768px) 100vw, 33vw" />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-gold text-black text-[10px] font-bold px-3 py-1 tracking-widest uppercase">{item.tag}</span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-[2px] uppercase text-gold/60 mb-2 font-semibold">{item.category}</p>
        <h3 className="font-display text-lg font-semibold text-white mb-2 leading-tight">{item.name}</h3>
        <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl text-gold font-semibold">{item.price}</span>
          <Link href="/contact" className="text-[10px] tracking-[2px] uppercase text-white/40 hover:text-gold transition-colors font-semibold border-b border-white/10 hover:border-gold pb-0.5">
            Order →
          </Link>
        </div>
      </div>
    </div>
  );
}
