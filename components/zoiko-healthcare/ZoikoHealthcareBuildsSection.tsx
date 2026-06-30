"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const BUILD_CARDS = [
  {
    title: "Medicine availability search",
    description:
      "Patient- and caregiver-facing search experiences that help users understand confidence-based pharmacy availability signals.",
    icon: "search",
  },
  {
    title: "Verified pharmacy participation",
    description:
      "Governed pharmacy workflows for profile control, availability signals, confirmation requests, inventory signal participation, and pharmacy support.",
    icon: "pharmacy",
  },
  {
    title: "Provider support workflows",
    description:
      "Provider and care-team guidance for patient access conversations, signal explanation, referral language, and pharmacy confirmation.",
    icon: "people",
  },
  {
    title: "Enterprise intelligence",
    description:
      "ZoikoSignal™ intelligence, ZoikoAvail™ API, and MediBase™ data products for institutions that need availability and access-risk visibility.",
    icon: "chart",
  },
  {
    title: "Governed data infrastructure",
    description:
      "Privacy-conscious, jurisdiction-aware infrastructure designed to protect patients, pharmacies, enterprise customers, and public trust.",
    icon: "shield",
  },
] as const;

export default function ZoikoHealthcareBuildsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F6FA] py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ---------------- Eyebrow + heading ---------------- */}
        {mounted ? (
          <>
            <Reveal index={0}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                02 · What Zoiko Healthcare Builds
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                Healthcare infrastructure for{" "}
                <span style={{ color: ACCENT }}>medicine availability.</span>
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-60 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Build cards grid ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? BUILD_CARDS.map((card, i) => (
                <Reveal key={card.title} index={2 + i}>
                  <BuildCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 5 }).map((_, i) => <BuildCardSkeleton key={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/*  Reveal: bottom -> top staggered fade-up wrapper                   */
/* ----------------------------------------------------------------- */
function Reveal({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className="animate-[zoikoSignalFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 70}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes zoikoSignalFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Build card                                                          */
/* ----------------------------------------------------------------- */
function BuildCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D7DCE6] hover:shadow-[0_16px_36px_-12px_rgba(15,31,78,0.12)]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: "#0C8A6E" }}
      >
        <BuildIcon name={icon} />
      </div>

      <h4 className="mt-4 text-[15.5px] font-bold text-[#0F1F4E]">
        {title}
      </h4>

      <p className="mt-2 text-[13px] leading-relaxed text-[#8891A4]">
        {description}
      </p>
    </div>
  );
}

function BuildCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="mt-4 h-4 w-44 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-2 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Icons                                                              */
/* ----------------------------------------------------------------- */
function BuildIcon({ name }: { name: string }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "pharmacy":
      return (
        <svg {...common}>
          <path d="M7 3h7l3 3v15a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
          <path d="M14 3v3h3M12 11v6M9 14h6" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c.6-3 3-5 5.5-5s4.9 2 5.5 5" />
          <path d="M16 9a2.5 2.5 0 100-5M18.5 19c-.3-2.2-1.5-3.8-3.2-4.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect x="4" y="13" width="3.5" height="7" />
          <rect x="10.25" y="9" width="3.5" height="11" />
          <rect x="16.5" y="5" width="3.5" height="15" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
    default:
      return null;
  }
}