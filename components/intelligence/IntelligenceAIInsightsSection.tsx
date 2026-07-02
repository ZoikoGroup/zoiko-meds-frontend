"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";
const CAUTION_TEXT = "#B45309";
const CAUTION_BG = "#FEF3E2";
const CAUTION_BORDER = "#F5D9A8";

const CARDS = [
  {
    title: "Predictive shortage signals",
    description: "Identify potential shortage movement based on structured availability and demand signals.",
    caution: "Stated as signals, not certainty.",
    icon: (
      <path d="M2 11l3.5-4 3 2.5L14 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Access risk scoring",
    description: "Highlight regions, medicine categories, or network segments requiring closer review.",
    caution: "Operational risk language only.",
    icon: (
      <path d="M8 2l6.5 11.5H1.5L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Confidence movement detection",
    description: "Detect when availability confidence rises, weakens, or becomes uncertain.",
    caution: "Does not imply exact stock levels.",
    icon: (
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    ),
  },
  {
    title: "Network signal intelligence",
    description: "Show how pharmacy confirmations and network activity influence confidence.",
    caution: "Source & evidence visibility controlled.",
    icon: (
      <path d="M8 1.5l6 4v3c0 4-2.6 6.5-6 7.5-3.4-1-6-3.5-6-7.5v-3l6-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Responsible AI guardrails",
    description: "Keep outputs explainable, bounded, and reviewable.",
    caution: "No clinical advice or automated medical decisioning.",
    icon: (
      <>
        <path d="M8 1.5l5 2v4c0 3.5-2.2 6-5 7-2.8-1-5-3.5-5-7v-4l5-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M5.8 8l1.5 1.5 3-3.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Human review pathways",
    description: "Route sensitive signals to authorized review.",
    caution: "Escalate, do not automate, sensitive conclusions.",
    icon: (
      <>
        <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
  },
] as const;

export default function IntelligenceAIInsightsSection() {
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
            <span className="opacity-50 text-[#0F1F4E]">04</span>
            <span className="opacity-30 text-[#0F1F4E]">·</span>
            AI Insights
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight sm:text-[2.3rem]">
            <span className="text-[#0F1F4E]">AI-assisted intelligence for shortage</span>
            <br />
            <span style={{ color: ACCENT }}>awareness and access risk.</span>
          </h2>
        </Reveal>

        {/* ── Subtext ── */}
        <Reveal index={2} active={mounted}>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
            ZoikoMeds AI Insights helps authorized stakeholders detect early signals, interpret
            availability patterns, and identify potential access risks before they become
            operational blind spots.
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
                <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#5B6478]">
                  {card.description}
                </p>

                <div
                  className="mt-4 flex items-start gap-2 rounded-lg border px-3 py-2.5"
                  style={{ backgroundColor: CAUTION_BG, borderColor: CAUTION_BORDER }}
                >
                  <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: CAUTION_TEXT }} viewBox="0 0 16 16" fill="none">
                    <path d="M8 2l6.5 11.5H1.5L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
                    <path d="M8 6.5v3M8 11.5v.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  <span className="text-[12px] font-medium leading-snug" style={{ color: CAUTION_TEXT }}>
                    {card.caution}
                  </span>
                </div>
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
    <div style={{ opacity: active ? undefined : 0, animation: active ? `intelligenceAiInsightsFadeUp 0.6s ease-out ${index * 90}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes intelligenceAiInsightsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}