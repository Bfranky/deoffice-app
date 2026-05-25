"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🥂</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl text-white mb-2 font-light">
          Reservation Received!
        </h3>
        <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
          We'll confirm your table via call or WhatsApp shortly. See you at De Office Bar.
        </p>
        <button
          onClick={() => setDone(false)}
          className="btn-outline-gold mt-6 text-[10px]"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Full Name *
          </label>
          <input required type="text" placeholder="Your name" className="form-input" />
        </div>
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Phone *
          </label>
          <input required type="tel" placeholder="08012345678" className="form-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Date
          </label>
          <input type="date" className="form-input" />
        </div>
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Time
          </label>
          <select className="form-input form-input-select">
            {["2:00 PM", "4:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Guests
          </label>
          <select className="form-input form-input-select">
            {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
              <option key={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Occasion
          </label>
          <select className="form-input form-input-select">
            {["Just Drinks", "Dinner", "Birthday", "Corporate Event", "Anniversary", "Other"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[9px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
          Special Requests
        </label>
        <textarea
          rows={3}
          placeholder="Bottle service, dietary needs, VIP section, decoration…"
          className="form-input"
          style={{ resize: "none" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 font-semibold text-[10px] tracking-[2.5px] uppercase transition-colors duration-200 disabled:opacity-60"
        style={{ backgroundColor: "#c9943a", color: "#000", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
        onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#f0c060")}
        onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#c9943a")}
      >
        {loading ? "Sending…" : "Request Reservation"}
      </button>

      <p className="text-center text-[11px] mt-3" style={{ color: "rgba(255,255,255,0.2)" }}>
        We'll confirm via call or WhatsApp within the hour.
      </p>
    </form>
  );
}
