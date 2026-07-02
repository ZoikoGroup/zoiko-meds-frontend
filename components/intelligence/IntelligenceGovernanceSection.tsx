"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";
const NAVY = "#0C1B30";

const CARDS = [
  {
    title: "No clinical advice",
    description: "No diagnosis, treatment, prescribing, substitution advice, or patient-specific medical decisions.",
    icon: (
      <>
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M4.2 11.8L11.8 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "No quantity exposure",
    description: "No exact pharmacy inventory quantities to unauthorized users. Confidence tiers and responsible aggregation only.",
    icon: (
      <>
        <rect x="2" y="3" width="12" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M6 13.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Confidence-based signals",
    description: "Availability communicated through structured signals, verification activity, and confidence movement.",
    icon: (
      <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Role-based access",
    description: "Intelligence, reports, exports, and network data controlled by role and authorization level.",
    icon: (
      <>
        <rect x="3.5" y="7" width="9" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      </>
    ),
  },
  {
    title: "Auditability",
    description: "Reports and insights preserve evidence trails, timestamps, data provenance, and review status where appropriate.",
    icon: (
      <path d="M2.5 4.5h11M2.5 8h8M2.5 11.5h5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    ),
  },
  {
    title: "Responsible AI",
    description: "AI outputs remain explainable, bounded, non-clinical, and reviewable by authorized humans.",
    icon: (
      <>
        <path d="M8 1.5v2.2M8 12.3v2.2M14.5 8h-2.2M3.7 8H1.5M12.3 3.7l-1.5 1.5M5.2 10.8l-1.5 1.5M12.3 12.3l-1.5-1.5M5.2 5.2L3.7 3.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </>
    ),
  },
  {
    title: "Data minimization",
    description: "Only collect and expose what is necessary for availability visibility and approved workflows.",
    icon: (
      <path d="M2.5 4.5h11M2.5 8h8M2.5 11.5h5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    ),
  },
  {
    title: "Compliance routing",
    description: "Privacy, terms, medical disclaimer, controlled medicine, and accessibility inquiries route to the right pages.",
    icon: (
      <path d="M5.5 4L2.5 8l3 4M10.5 4l3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
] as const;

export default function IntelligenceGovernanceSection() {
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
    <section ref={ref} className="relative w-full py-20 sm:py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Eyebrow ── */}
        <Reveal index={0} active={mounted}>
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            <span className="opacity-60 text-white">07</span>
            <span className="opacity-40 text-white">·</span>
            Responsible Intelligence &amp; Data Governance
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight text-white sm:text-[2.3rem]">
            Governed by <span style={{ color: ACCENT }}>design.</span>
          </h2>
        </Reveal>

        {/* ── Card grid ── */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} index={2 + i} active={mounted}>
              <div
                className="flex h-full flex-col rounded-2xl border border-white/10 p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(15,170,135,0.15)", color: ACCENT }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-[14px] font-bold text-white">{card.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div style={{ opacity: active ? undefined : 0, animation: active ? `intelligenceGovernanceFadeUp 0.6s ease-out ${index * 90}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes intelligenceGovernanceFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}