"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const FACT_ROWS: { left: { label: string; value: string }; right: { label: string; value: string } }[] = [
  {
    left:  { label: "Category", value: "ZoikoMeds is global medicine availability infrastructure." },
    right: { label: "Operating Company", value: "Operated by Zoiko Healthcare Inc., a subsidiary of Zoiko Group Inc." },
  },
  {
    left:  { label: "Core Function", value: "Helps users search confidence-based medicine availability signals from participating verified pharmacies and supports institutions with governed availability intelligence." },
    right: { label: "What It Is Not", value: "Not a pharmacy, prescriber, dispenser, medicine marketplace, delivery service, or clinical advice platform." },
  },
  {
    left:  { label: "Stock Posture", value: "Does not publicly expose exact pharmacy stock quantities and does not guarantee availability." },
    right: { label: "Enterprise Posture", value: "Enterprise outputs are governed by contract, privacy controls, jurisdiction, and role-based access." },
  },
  {
    left:  { label: "US Headquarters", value: "1401 21st Street, Suite R, Sacramento, CA 95811, USA." },
    right: { label: "European Headquarters", value: "67–69 Great Portland Street, 5th Floor, London W1W 5PF, UK." },
  },
];

export default function PressCompanyFactsSection() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setMounted(true); observer.disconnect(); }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Eyebrow ── */}
        <Reveal index={0} active={mounted}>
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            <span className="opacity-50 text-[#0F1F4E]">03</span>
            <span className="opacity-30 text-[#0F1F4E]">·</span>
            Company Facts &amp; Approved Boilerplate
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight sm:text-[2.3rem]">
            <span className="text-[#0F1F4E]">Quotable facts, </span>
            <span style={{ color: ACCENT }}>claim-controlled.</span>
          </h2>
        </Reveal>

        {/* ── Facts card ── */}
        <Reveal index={2} active={mounted}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_4px_24px_-10px_rgba(15,31,78,0.08)]">
            {FACT_ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 gap-x-10 gap-y-5 px-7 py-6 sm:grid-cols-2 ${
                  i !== FACT_ROWS.length - 1 ? "border-b border-[#F0F2F7]" : ""
                }`}
              >
                <FactItem label={row.left.label} value={row.left.value} />
                <FactItem label={row.right.label} value={row.right.value} />
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FactItem                                                             */
/* ------------------------------------------------------------------ */
function FactItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em]"
        style={{ color: ACCENT }}
      >
        {label}
      </p>
      <p className="text-[13px] leading-relaxed text-[#3B4456]">
        {value}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div style={{ opacity: active ? undefined : 0, animation: active ? `pressFactsFadeUp 0.6s ease-out ${index * 100}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes pressFactsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}