"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const OUTCOME_CARDS = [
  {
    title: "Standard confidence signal",
    description:
      "May appear only where the medicine, location, pharmacy, data source, and jurisdiction allow standard signal display.",
    icon: "check",
    iconBg: "#DCF5EE",
    iconColor: "#0C8A6E",
    fullWidth: false,
  },
  {
    title: "Limited signal",
    description:
      "May be used where stronger visibility is not appropriate or where confirmation is required.",
    icon: "arrow-up-right",
    iconBg: "#FDE8D8",
    iconColor: "#C2421F",
    fullWidth: false,
  },
  {
    title: "Confirmation-only route",
    description:
      "You may be directed to contact the pharmacy or a healthcare professional directly.",
    icon: "phone",
    iconBg: "#E3E8FB",
    iconColor: "#3B5BDB",
    fullWidth: false,
  },
  {
    title: "Search suppression",
    description:
      "Results may be limited, hidden, or not shown if public display would create safety, legal, abuse, diversion, or compliance risk.",
    icon: "no-entry",
    iconBg: "#EEF1F6",
    iconColor: "#5B6478",
    fullWidth: false,
  },
  {
    title: "No alert creation",
    description:
      "Alerts may be disabled for controlled or sensitive categories where notifications could create risk or false expectations.",
    icon: "bell-off",
    iconBg: "#EEF1F6",
    iconColor: "#5B6478",
    fullWidth: false,
  },
  {
    title: "No exact stock exposure",
    description:
      "Exact public stock quantities are never shown for controlled or sensitive medicine handling.",
    icon: "check",
    iconBg: "#DCF5EE",
    iconColor: "#0C8A6E",
    fullWidth: false,
  },
  {
    title: "Support routing",
    description:
      "You may be routed to policy, medical disclaimer, pharmacy confirmation, provider guidance, or support rather than public results.",
    icon: "code",
    iconBg: "#EEF1F6",
    iconColor: "#5B6478",
    fullWidth: true,
  },
] as const;

export default function ControlledMedicinePolicySensitiveSearchSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  const pairCards = OUTCOME_CARDS.filter((c) => !c.fullWidth);
  const fullWidthCards = OUTCOME_CARDS.filter((c) => c.fullWidth);

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
                02 · How ZoikoMeds Handles Sensitive Searches
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                What you may see — and{" "}
                <span style={{ color: ACCENT }}>why.</span>
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
                Outcomes depend on the medicine, location, pharmacy,
                data source, and jurisdiction. States are shown with an
                icon and a label, never color alone.
              </p>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-72 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-[#E4E8F0]" />
            <div className="h-4 w-96 animate-pulse rounded bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Outcome cards grid (pairs) ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {mounted
            ? pairCards.map((card, i) => (
                <Reveal key={card.title} index={3 + i}>
                  <OutcomeCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <OutcomeCardSkeleton key={i} />
              ))}
        </div>

        {/* ---------------- Full-width card ---------------- */}
        <div className="mt-5">
          {mounted
            ? fullWidthCards.map((card, i) => (
                <Reveal key={card.title} index={9 + i}>
                  <OutcomeCard {...card} />
                </Reveal>
              ))
            : <OutcomeCardSkeleton />}
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
      style={{ opacity: 0, animationDelay: `${index * 65}ms` }}
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
/*  Outcome card                                                        */
/* ----------------------------------------------------------------- */
function OutcomeCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  fullWidth: boolean;
}) {
  return (
    <div className="group h-full rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D7DCE6] hover:shadow-[0_16px_36px_-12px_rgba(15,31,78,0.12)]">
      <div className="flex items-start gap-3.5">
        <span
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <OutcomeIcon name={icon} />
        </span>
        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "#9AA3B5" }}
          >
            Outcome
          </p>
          <h4 className="mt-0.5 text-[15px] font-bold text-[#0F1F4E]">
            {title}
          </h4>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-[#8891A4]">
        {description}
      </p>
    </div>
  );
}

function OutcomeCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="flex items-start gap-3.5">
        <div className="h-9 w-9 flex-shrink-0 animate-pulse rounded-lg bg-[#E4E8F0]" />
        <div className="flex-1">
          <div className="h-2.5 w-16 animate-pulse rounded bg-[#E4E8F0]" />
          <div className="mt-1.5 h-4 w-40 animate-pulse rounded bg-[#E4E8F0]" />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Icons                                                              */
/* ----------------------------------------------------------------- */
function OutcomeIcon({ name }: { name: string }) {
  const common = {
    className: "h-4.5 w-4.5",
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
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "no-entry":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M6 12h12" />
        </svg>
      );
    case "bell-off":
      return (
        <svg {...common}>
          <path d="M8.7 3A6 6 0 0118 8v3M5 5l14 14M10 21h4M4 8c0 1-.2 2-.6 2.8L3 12h11" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 6L3 12l5 6M16 6l5 6-5 6" />
        </svg>
      );
    default:
      return null;
  }
}