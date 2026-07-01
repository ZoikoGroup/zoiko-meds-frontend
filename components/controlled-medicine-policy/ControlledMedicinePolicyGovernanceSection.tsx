"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const GOVERNANCE_CARDS = [
  {
    title: "Jurisdiction-aware controls",
    description:
      "Rules may vary by market, medicine category, pharmacy participation, prescription requirements, and applicable law.",
    icon: "globe",
  },
  {
    title: "Signal suppression",
    description:
      "Sensitive categories may be hidden, limited, de-ranked, routed to confirmation, or handled through support pathways.",
    icon: "arrow-up-right",
  },
  {
    title: "Abuse prevention",
    description:
      "ZoikoMeds may apply rate limits, anomaly detection, bot protection, search pattern review, and enforcement action where misuse is suspected.",
    icon: "shield-check",
  },
  {
    title: "Auditability",
    description:
      "Material changes to policy controls, suppression rules, pharmacy participation, sensitive categories, and support escalation are logged.",
    icon: "list",
  },
  {
    title: "Data minimization",
    description:
      "The platform does not collect prescription images, diagnosis, symptoms, insurance IDs, clinical notes, or medical records by default for public search.",
    icon: "list-alt",
  },
  {
    title: "Privacy controls",
    description:
      "Raw search behavior tied to identifiable users is not sold or exposed as enterprise intelligence.",
    icon: "shield",
  },
] as const;

export default function ControlledMedicinePolicyGovernanceSection() {
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
                04 · Governance, Abuse Prevention &amp; Data Protection
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                Governed by{" "}
                <span style={{ color: ACCENT }}>design.</span>
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
                Controls are described at a high level. Internal
                classification and enforcement logic are intentionally
                not published.
              </p>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-72 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-60 animate-pulse rounded-lg bg-[#E4E8F0]" />
            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Governance cards grid ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? GOVERNANCE_CARDS.map((card, i) => (
                <Reveal key={card.title} index={3 + i}>
                  <GovernanceCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <GovernanceCardSkeleton key={i} />
              ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/*  Reveal                                                             */
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
/*  Governance card                                                     */
/* ----------------------------------------------------------------- */
function GovernanceCard({
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
        <GovernanceIcon name={icon} />
      </div>
      <h4 className="mt-4 text-[15px] font-bold text-[#0F1F4E]">{title}</h4>
      <p className="mt-2 text-[13px] leading-relaxed text-[#8891A4]">
        {description}
      </p>
    </div>
  );
}

function GovernanceCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="mt-4 h-4 w-40 animate-pulse rounded bg-[#E4E8F0]" />
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
function GovernanceIcon({ name }: { name: string }) {
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
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
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
    case "list-alt":
      return (
        <svg {...common}>
          <path d="M9 6h11M9 12h11M9 18h11" />
          <path d="M5 6h.01M5 12h.01M5 18h.01" />
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