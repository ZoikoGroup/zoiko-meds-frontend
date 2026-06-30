"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const BOUNDARY_CARDS = [
  {
    title: "Not a pharmacy",
    description:
      "Zoiko Healthcare and ZoikoMeds do not sell, dispense, deliver, reserve, allocate, or guarantee medicines.",
    icon: "no-entry",
  },
  {
    title: "Not a prescriber",
    description:
      "The platform does not provide medical, prescribing, treatment, dosage, or substitution advice.",
    icon: "doc",
  },
  {
    title: "No exact public stock",
    description:
      "Public experiences use confidence-based availability signals, not exact stock counts.",
    icon: "monitor",
  },
  {
    title: "Pharmacy control protected",
    description:
      "Pharmacist judgment, prescription rules, pharmacy policy, and jurisdiction-specific laws always apply.",
    icon: "lock",
  },
  {
    title: "Privacy-conscious by design",
    description:
      "Search can be anonymous; account features support saved searches, alerts, preferences, and privacy controls.",
    icon: "shield",
  },
  {
    title: "Enterprise governance",
    description:
      "Institutional outputs are contract-scoped, access-controlled, privacy-thresholded, and jurisdiction-aware.",
    icon: "list",
  },
] as const;

export default function ZoikoHealthcareGovernanceSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B1530] py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ---------------- Eyebrow + heading ---------------- */}
        {mounted ? (
          <>
            <Reveal index={0}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                03 · Governance &amp; Boundaries
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-white sm:text-[2.35rem]">
                Built with clear{" "}
                <span style={{ color: ACCENT }}>healthcare boundaries.</span>
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-52 animate-pulse rounded bg-white/10" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-white/10" />
          </div>
        )}

        {/* ---------------- Boundary cards grid ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? BOUNDARY_CARDS.map((card, i) => (
                <Reveal key={card.title} index={2 + i}>
                  <BoundaryCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 6 }).map((_, i) => <BoundaryCardSkeleton key={i} />)}
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
/*  Boundary card                                                       */
/* ----------------------------------------------------------------- */
function BoundaryCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(15,170,135,0.12)", color: ACCENT }}
      >
        <BoundaryIcon name={icon} />
      </div>
      <h4 className="mt-4 text-[15px] font-bold text-white">{title}</h4>
      <p className="mt-2 text-[13px] leading-relaxed text-[#9AA3B5]">
        {description}
      </p>
    </div>
  );
}

function BoundaryCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-white/10" />
      <div className="mt-4 h-4 w-32 animate-pulse rounded bg-white/10" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-white/10" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Icons                                                              */
/* ----------------------------------------------------------------- */
function BoundaryIcon({ name }: { name: string }) {
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
    case "no-entry":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M6 12h12" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M7 3h7l3 3v15a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
          <path d="M14 3v3h3M9 12h6M9 15h6" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="1.5" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <path d="M8 6h12M8 12h12M8 18h12" />
          <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
          <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}