"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const PRINCIPLE_CARDS = [
  {
    title: "Precision over noise",
    description:
      "Work must be accurate, reviewable, and implementation-ready. Healthcare infrastructure cannot be vague.",
    icon: "check",
  },
  {
    title: "Trust by design",
    description:
      "Privacy, security, accessibility, and legal boundaries are product requirements, not afterthoughts.",
    icon: "shield",
  },
  {
    title: "Clinical-boundary discipline",
    description:
      "ZoikoMeds supports availability intelligence. It does not become a prescribing or dispensing platform.",
    icon: "no-entry",
  },
  {
    title: "Execution with evidence",
    description:
      "Decisions should produce artifacts, acceptance criteria, audit trails, and measurable outcomes.",
    icon: "doc",
  },
  {
    title: "User empathy without overreach",
    description:
      "Support anxious patients, caregivers, pharmacies, providers, and institutions while staying within platform boundaries.",
    icon: "person",
  },
  {
    title: "Global readiness",
    description:
      "Design for jurisdictional variation, localization, accessibility, and regulated-market adaptability.",
    icon: "globe",
  },
] as const;

export default function CareersHowWeWorkSection() {
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
                03 · How We Work
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-white sm:text-[2.35rem]">
                Operating principles for{" "}
                <span style={{ color: ACCENT }}>
                  regulated infrastructure.
                </span>
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-44 animate-pulse rounded bg-white/10" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-white/10" />
          </div>
        )}

        {/* ---------------- Principle cards grid ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? PRINCIPLE_CARDS.map((card, i) => (
                <Reveal key={card.title} index={2 + i}>
                  <PrincipleCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 6 }).map((_, i) => <PrincipleCardSkeleton key={i} />)}
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
/*  Principle card                                                      */
/* ----------------------------------------------------------------- */
function PrincipleCard({
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
        <PrincipleIcon name={icon} />
      </div>
      <h4 className="mt-4 text-[15px] font-bold text-white">{title}</h4>
      <p className="mt-2 text-[13px] leading-relaxed text-[#9AA3B5]">
        {description}
      </p>
    </div>
  );
}

function PrincipleCardSkeleton() {
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
function PrincipleIcon({ name }: { name: string }) {
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
    case "check":
      return (
        <svg {...common}>
          <path d="M5 13l4 4 10-10" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
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
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
        </svg>
      );
    default:
      return null;
  }
}