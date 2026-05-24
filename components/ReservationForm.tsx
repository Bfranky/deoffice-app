"use client";
import { useState } from "react";

export default function ReservationForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  }

  if (done) return (
    <div className="text-center py-12">
      <div className="text-5xl mb-5">🥂</div>
      <h3 className="font-display text-2xl text-white mb-2">Reservation Received!</h3>
      <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">We'll confirm your table via call or WhatsApp shortly. See you at De Office Bar.</p>
      <button onClick={() => setDone(false)} className="btn-outline-gold mt-6 text-xs">Make Another Reservation</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Full Name *</label>
          <input required placeholder="Your name" className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Phone *</label>
          <input required type="tel" placeholder="08012345678" className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Date</label>
          <input type="date" className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Time</label>
          <select className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors">
            <option>2:00 PM</option><option>4:00 PM</option><option>6:00 PM</option>
            <option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option><option>10:00 PM</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Number of Guests</label>
          <select className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors">
            {[1,2,3,4,5,6,7,8,10,12,15,20].map(n=><option key={n}>{n} {n===1?"guest":"guests"}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Occasion</label>
          <select className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors">
            <option>Just Drinks</option><option>Dinner</option><option>Birthday</option>
            <option>Corporate Event</option><option>Anniversary</option><option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2 font-semibold">Special Requests</label>
        <textarea rows={3} placeholder="Any dietary requirements, bottle service, decoration requests…" className="w-full bg-dark-4 border border-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors resize-none" />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold-light text-black font-bold py-4 text-xs tracking-[3px] uppercase transition-colors disabled:opacity-60">
        {loading ? "Sending…" : "Request Reservation"}
      </button>
      <p className="text-center text-[11px] text-white/20 tracking-wide">We'll confirm via call or WhatsApp within the hour.</p>
    </form>
  );
}
