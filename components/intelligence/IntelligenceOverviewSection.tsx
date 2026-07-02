"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const MODULES = [
  {
    number: "01",
    label: "Analytics",
    title: "Analytics",
    description: "Understand medicine availability patterns, network coverage, regional demand, and access gaps.",
    items: ["Availability trends", "Regional visibility", "Pharmacy coverage", "Demand mapping", "Confidence monitoring"],
    cta: "View Analytics",
    href: "/analytics",
    icon: (
      <path d="M2.5 13.5V8.5M6.5 13.5V5M10.5 13.5V9.5M14 13.5V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    ),
  },
  {
    number: "02",
    label: "AI Insights",
    title: "AI Insights",
    description: "Detect emerging access risks, shortage signals, confidence changes, and operating blind spots.",
    items: ["Predictive signals", "Access risk scoring", "Explainable AI", "Human review", "Confidence movement"],
    cta: "View AI Insights",
    href: "/ai-insights",
    icon: (
      <>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M8 1.5v1.8M8 12.7v1.8M14.5 8h-1.8M3.3 8H1.5M12.6 3.4l-1.3 1.3M4.7 11.3l-1.3 1.3M12.6 12.6l-1.3-1.3M4.7 4.7L3.4 3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
  },
  {
    number: "03",
    label: "Reports",
    title: "Reports",
    description: "Turn intelligence into leadership, compliance, network, and stakeholder-ready outputs.",
    items: ["Availability reports", "Shortage reports", "Network reports", "Regional access reports", "Executive briefings"],
    cta: "View Reports",
    href: "/reports",
    icon: (
      <>
        <path d="M4.5 1.5h5l2 2V14a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M6 7h4M6 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
  },
] as const;

export default function IntelligenceOverviewSection() {
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
            <span className="opacity-50 text-[#0F1F4E]">02</span>
            <span className="opacity-30 text-[#0F1F4E]">·</span>
            Intelligence Overview
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight sm:text-[2.3rem]">
            <span className="text-[#0F1F4E]">One intelligence system, </span>
            <span style={{ color: ACCENT }}>three connected</span>
            <br />
            <span style={{ color: ACCENT }}>modules.</span>
          </h2>
        </Reveal>

        {/* ── Subtext ── */}
        <Reveal index={2} active={mounted}>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
            Analytics explains what happened. AI Insights identifies what may happen. Reports
            package what stakeholders need to act on.
          </p>
        </Reveal>

        {/* ── Module card grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {MODULES.map((module, i) => (
            <Reveal key={module.title} index={3 + i} active={mounted}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_4px_24px_-10px_rgba(15,31,78,0.06)]">
                <div className="h-[3px] w-full" style={{ backgroundColor: ACCENT }} />

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: ACCENT }}
                  >
                    {module.number} / {module.label}
                  </p>

                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(15,170,135,0.12)", color: ACCENT }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-4.5 w-4.5">
                      {module.icon}
                    </svg>
                  </div>

                  <h3 className="text-[16px] font-bold text-[#0F1F4E]">{module.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5B6478]">
                    {module.description}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {module.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-[#3F4759]">
                        <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: ACCENT }} viewBox="0 0 16 16" fill="none">
                          <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={module.href}
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border border-[#E7EAF1] px-4 py-2.5 text-[12.5px] font-semibold text-[#0F1F4E] transition-colors duration-150 hover:border-[#0F1F4E]"
                  >
                    {module.cta}
                  </a>
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
    <div style={{ opacity: active ? undefined : 0, animation: active ? `intelligenceOverviewFadeUp 0.6s ease-out ${index * 90}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes intelligenceOverviewFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}