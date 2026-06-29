"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


const ACCENT = "#0FAA87";

type ConsolePillVariant = "teal-check" | "amber-soft" | "grey-region";

const CONSOLE_ROWS: {
  label: string;
  value: string;
  variant: ConsolePillVariant;
}[] = [
  { label: "Shortage pressure",          value: "Moderate",   variant: "amber-soft"  },
  { label: "ZoikoSignal™ intelligence",  value: "Active",     variant: "teal-check"  },
  { label: "ZoikoAvail™ API",            value: "Online",     variant: "teal-check"  },
  { label: "MediBase™ identity layer",   value: "Synced",     variant: "teal-check"  },
  { label: "Jurisdiction filter",        value: "Region: EU", variant: "grey-region" },
];

// Bar chart heights (relative, out of 5 bars)
const BAR_HEIGHTS = [55, 70, 85, 65, 90];

export default function EnterpriseSolutionsHeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative w-full bg-[#F4F6FA] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* ── Left column ── */}
          <div className="flex flex-col">

            {/* Breadcrumb */}
            <Reveal index={0} active={mounted}>
              <nav className="mb-5 flex items-center gap-1.5 text-[11.5px] text-[#8A96B0]">
                <Link href="/" className="hover:text-[#0F1F4E] transition-colors">Home</Link>
                <span>/</span>
                <Link href="#" className="hover:text-[#0F1F4E] transition-colors">Enterprise &amp; Intelligence</Link>
                <span>/</span>
                <span className="text-[#0F1F4E] font-medium">Enterprise solutions</span>
              </nav>
            </Reveal>

            {/* Eyebrow */}
            <Reveal index={1} active={mounted}>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
                Enterprise Medicine Availability Solutions
              </p>
            </Reveal>

            {/* Headline */}
            <Reveal index={2} active={mounted}>
              <h1 className="text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-[#0F1F4E] sm:text-[2.7rem]">
                Infrastructure for institutional medicine availability intelligence.
              </h1>
            </Reveal>

            {/* Body */}
            <Reveal index={3} active={mounted}>
              <p className="mt-5 text-[14.5px] leading-relaxed text-[#5B6478]">
                ZoikoMeds helps organizations convert fragmented pharmacy
                availability signals, medicine identity data, shortage
                pressure, and access-risk patterns into governed intelligence,
                APIs, and workflows for regulated healthcare environments.
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal index={4} active={mounted}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.97]"
                  style={{ backgroundColor: ACCENT }}
                >
                  Request Enterprise Briefing
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl border border-[#D0D5E2] bg-white px-6 py-3 text-[13.5px] font-semibold text-[#0F1F4E] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9FE3D3] hover:bg-[#EAFAF4] hover:text-[#00786F] active:scale-[0.97]"
                >
                  Explore Intelligence Stack
                </Link>
              </div>
            </Reveal>

            {/* Arrow text link */}
            <Reveal index={5} active={mounted}>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium transition-opacity hover:opacity-80"
                style={{ color: ACCENT }}
              >
                View Security &amp; Governance
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>

            {/* Disclaimer */}
            <Reveal index={6} active={mounted}>
              <p className="mt-5 flex items-start gap-2 text-[12.5px] leading-relaxed text-[#5B6478]">
                <InfoIcon />
                <span>
                  Enterprise outputs are governed by contract, privacy
                  controls, jurisdiction rules, and role-based access.
                  ZoikoMeds does not sell identifiable patient data or expose
                  exact public pharmacy stock.
                </span>
              </p>
            </Reveal>
          </div>

          {/* ── Right column: enterprise console card ── */}
          <Reveal index={3} active={mounted}>
            <div className="rounded-2xl border border-[#E7EAF1] bg-white p-6 shadow-[0_8px_40px_-16px_rgba(15,31,78,0.12)]">

              {/* Card header */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[14.5px] font-bold text-[#0F1F4E]">Enterprise console</span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
                  style={{ backgroundColor: "#DCF5EE", color: "#0B7A62" }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Governed
                </span>
              </div>

              {/* Two-column mini header row */}
              <div className="mb-3 grid grid-cols-2 gap-3">
                {/* Regional Access Risk heatmap */}
                <div>
                  <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.13em] text-[#9AA3B5]">
                    Regional Access Risk
                  </p>
                  {/* Gradient heatmap bar */}
                  <div
                    className="h-9 w-full rounded-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #5ED8C0 0%, #A8E6DA 20%, #D4EFE5 35%, #E8D5A3 55%, #D4A96A 75%, #C8956A 90%, #BF8560 100%)",
                      filter: "blur(2px) saturate(0.85)",
                      opacity: 0.85,
                    }}
                  />
                </div>

                {/* Availability Confidence */}
                <div>
                  <p className="mb-1 text-[9.5px] font-semibold uppercase tracking-[0.13em] text-[#9AA3B5]">
                    Availability Confidence
                  </p>
                  <p className="mb-2 text-[1.25rem] font-extrabold text-[#0F1F4E]">High</p>
                  {/* Bar chart */}
                  <div className="flex items-end gap-1" style={{ height: 28 }}>
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === BAR_HEIGHTS.length - 1 ? ACCENT : "#9FE3D3",
                          opacity: i === BAR_HEIGHTS.length - 1 ? 1 : 0.55 + i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-1 h-px bg-[#F0F2F7]" />

              {/* Data rows */}
              <div className="divide-y divide-[#F0F2F7]">
                {CONSOLE_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3">
                    <span className="text-[13px] text-[#5B6478]">{row.label}</span>
                    <ConsolePill value={row.value} variant={row.variant} />
                  </div>
                ))}
              </div>

              {/* Footnote */}
              <p className="mt-4 text-center text-[11px] leading-relaxed text-[#9AA3B5]">
                Illustrative example. Enterprise outputs are governed by
                contract, jurisdiction, access controls, and approved data
                scope.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ConsolePill                                                          */
/* ------------------------------------------------------------------ */
function ConsolePill({ value, variant }: { value: string; variant: ConsolePillVariant }) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium whitespace-nowrap";
  switch (variant) {
    case "teal-check":
      return (
        <span className={base} style={{ backgroundColor: "#DCF5EE", color: "#0B7A62" }}>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {value}
        </span>
      );
    case "amber-soft":
      return (
        <span className={base} style={{ backgroundColor: "#FEF3E2", color: "#92540A" }}>
          {value}
        </span>
      );
    case "grey-region":
      return (
        <span className={base} style={{ backgroundColor: "#F0F2F7", color: "#5B6478" }}>
          {value}
        </span>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Info icon                                                            */
/* ------------------------------------------------------------------ */
function InfoIcon() {
  return (
    <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: ACCENT }} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7v4M8 5.2v.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div style={{ opacity: active ? undefined : 0, animation: active ? `entHeroFadeUp 0.6s ease-out ${index * 80}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes entHeroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}