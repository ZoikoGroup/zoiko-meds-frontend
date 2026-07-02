"use client";

import { useEffect, useRef, useState } from "react";



const ACCENT = "#0FAA87";

const CARDS = [
  {
    title: "Medicine availability trends",
    description: "Track medicine-level availability signals over time by geography, category, and confidence level.",
    value: "see direction of travel and changes in access visibility.",
    icon: (
      <path d="M2 11l3.5-4 3 2.5L14 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Regional access visibility",
    description: "Understand where patients may face difficulty locating specific medicines.",
    value: "supports geographic planning and stakeholder response.",
    icon: (
      <>
        <path d="M8 14s4.5-4.2 4.5-7.5A4.5 4.5 0 003.5 6.5C3.5 9.8 8 14 8 14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </>
    ),
  },
  {
    title: "Pharmacy network coverage",
    description: "Review where verified pharmacy participation strengthens availability confidence.",
    value: "improves partner-network management.",
    icon: (
      <path d="M8 1.5l6 4v3c0 4-2.6 6.5-6 7.5-3.4-1-6-3.5-6-7.5v-3l6-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Demand signal mapping",
    description: "Identify search and inquiry patterns that may indicate rising demand or emerging gaps.",
    value: "supports proactive operational planning.",
    icon: (
      <path d="M1.5 8.5h2.5l1.5-4 2 6 1.5-4h2.5l1.5 2h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Confidence tier monitoring",
    description: "Use structured signal levels rather than exact inventory disclosure.",
    value: "balances usefulness with responsible data exposure.",
    icon: (
      <path d="M2.5 4.5h11M2.5 8h8M2.5 11.5h5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    ),
  },
  {
    title: "Operational prioritization",
    description: "Help teams decide where outreach, confirmation, or partner engagement may be needed.",
    value: "turns data into action.",
    icon: (
      <path d="M8 1.5l1.8 3.7 4 .6-3 2.9.7 4-3.5-1.9-3.5 1.9.7-4-3-2.9 4-.6L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    ),
  },
] as const;

export default function AnalyticsCapabilitiesSection() {
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
            Analytics
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight sm:text-[2.3rem]">
            <span className="text-[#0F1F4E]">Analytics that reveal medicine </span>
            <span style={{ color: ACCENT }}>access</span>
            <br />
            <span style={{ color: ACCENT }}>patterns.</span>
          </h2>
        </Reveal>

        {/* ── Subtext ── */}
        <Reveal index={2} active={mounted}>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
            ZoikoMeds Analytics helps stakeholders identify where medicine access is strong,
            where availability confidence is changing, and where operational review or partner
            outreach may be required.
          </p>
        </Reveal>

        {/* ── Card grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} index={3 + i} active={mounted}>
              <div className="flex h-full flex-col rounded-2xl border border-[#E7EAF1] bg-white p-6 shadow-[0_4px_24px_-10px_rgba(15,31,78,0.06)]">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(15,170,135,0.12)", color: ACCENT }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-[14.5px] font-bold text-[#0F1F4E]">{card.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#5B6478]">
                  {card.description}
                </p>

                <div className="my-4 h-px w-full bg-[#F0F2F7]" />

                <p className="mt-auto text-[12.5px] leading-relaxed">
                  <span className="font-semibold" style={{ color: ACCENT }}>Value: </span>
                  <span className="text-[#5B6478]">{card.value}</span>
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
    <div style={{ opacity: active ? undefined : 0, animation: active ? `analyticsCapabilitiesFadeUp 0.6s ease-out ${index * 90}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes analyticsCapabilitiesFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}