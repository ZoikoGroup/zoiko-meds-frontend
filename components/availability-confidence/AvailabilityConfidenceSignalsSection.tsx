"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

type Tone = "green" | "amber" | "blue" | "gray";
type IconName = "check" | "warning" | "phone" | "ban";

type SignalData = {
  tone: Tone;
  icon: IconName;
  badge: string;
  description: string;
  freshness: string;
  action: string;
};

// Explicitly typed as SignalData[] so every field (icon, tone) stays
// narrowed to its literal union instead of widening to `string`.
// Without this annotation, `icon: "check"` infers as `string`, which
// no longer matches SignalCard's `icon: IconName` prop — that mismatch
// was the source of the type error.
const SIGNALS: SignalData[] = [
  {
    tone: "green",
    icon: "check",
    badge: "Strong signal",
    description:
      "Recently updated or supported by stronger availability information. Confirmation is still required before travel.",
    freshness: "updated today / recently",
    action: "View pharmacy details or contact the pharmacy.",
  },
  {
    tone: "amber",
    icon: "warning",
    badge: "Limited signal",
    description:
      "Information may be incomplete, older, or less certain. Confirmation is recommended.",
    freshness: "updated within the last few days",
    action: "Contact the pharmacy before making a trip; consider creating an alert.",
  },
  {
    tone: "blue",
    icon: "phone",
    badge: "Confirmation needed",
    description:
      "ZoikoMeds cannot provide enough confidence from current signals. Direct confirmation is needed.",
    freshness: "confirmation recommended",
    action: "Call, message, or request confirmation where supported.",
  },
  {
    tone: "gray",
    icon: "ban",
    badge: "No current signal",
    description:
      "ZoikoMeds does not currently have a usable availability signal for this medicine and location.",
    freshness: "no current signal",
    action: "Expand search area, try another location, check spelling, or create an alert.",
  },
];

const TONE_STYLES: Record<
  Tone,
  { border: string; badgeBg: string; badgeFg: string; hoverShadow: string }
> = {
  green: {
    border: ACCENT,
    badgeBg: "#DCF5EE",
    badgeFg: "#0E8F70",
    hoverShadow: "rgba(15,170,135,0.22)",
  },
  amber: {
    border: "#D9603A",
    badgeBg: "#FBE7DE",
    badgeFg: "#B6531F",
    hoverShadow: "rgba(217,96,58,0.22)",
  },
  blue: {
    border: "#3B5BDB",
    badgeBg: "#E3E8FB",
    badgeFg: "#3B5BDB",
    hoverShadow: "rgba(59,91,219,0.22)",
  },
  gray: {
    border: "#C7CEDC",
    badgeBg: "#EAEDF2",
    badgeFg: "#3A4258",
    hoverShadow: "rgba(58,66,88,0.18)",
  },
};

export default function AvailabilityConfidenceSignalsSection() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ---------------- Header ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          {mounted ? (
            <>
              <Reveal index={0}>
                <h2 className="font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-tight text-[#0F1F4E] sm:text-[2.25rem]">
                  What the <span style={{ color: ACCENT }}>signals mean.</span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  Every signal uses a color, an icon, a clear label, a
                  plain-English meaning, freshness, and a recommended
                  next step — never color alone.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Signal cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {mounted
            ? SIGNALS.map((s, i) => (
                <SignalCard key={s.badge} {...s} index={i} />
              ))
            : SIGNALS.map((_, i) => <SignalCardSkeleton key={i} />)}
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
      className="animate-[availabilitySignalsFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes availabilitySignalsFadeUp {
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
/*  Signal card                                                         */
/* ----------------------------------------------------------------- */
function SignalCard({
  tone,
  icon,
  badge,
  description,
  freshness,
  action,
  index,
}: SignalData & { index: number }) {
  const colors = TONE_STYLES[tone];

  return (
    <div
      className="flex flex-col rounded-2xl border-2 bg-white p-6 transition-all duration-300 ease-out animate-[availabilitySignalsFadeUp_0.6s_ease-out_forwards] hover:-translate-y-1"
      style={{
        opacity: 0,
        animationDelay: `${250 + index * 100}ms`,
        borderColor: colors.border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 16px 36px -18px ${colors.hoverShadow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
        style={{ backgroundColor: colors.badgeBg, color: colors.badgeFg }}
      >
        <SignalIcon name={icon} />
        {badge}
      </span>

      <p className="mt-3 text-[13px] leading-relaxed text-[#5B6478]">
        {description}
      </p>

      <p className="mt-3 flex items-center gap-1.5 text-[12.5px] leading-relaxed text-[#5B6478]">
        <svg className="h-3.5 w-3.5 flex-shrink-0 text-[#8A91A3]" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-[#0F1F4E]">Freshness:</span>{" "}
        {freshness}
      </p>

      <div className="mt-4 h-px w-full bg-[#EEF0F5]" />

      <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#A6ADBD]">
        Recommended action
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#3A4258]">
        {action}
      </p>
    </div>
  );
}

function SignalIcon({ name }: { name: IconName }) {
  const common = { viewBox: "0 0 16 16", fill: "none" as const, className: "h-3.5 w-3.5" };

  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <path
            d="M3.5 8.5l3 3 6-6.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warning":
      return (
        <svg {...common}>
          <path
            d="M8 2l6.5 11.2H1.5L8 2z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path d="M8 6.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="8" cy="11.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M3.2 2.9c0-.4.3-.6.6-.5l2 .3c.3 0 .5.2.6.5l.4 1.5c.1.3 0 .6-.2.8l-.9.9c.5 1.2 1.5 2.2 2.7 2.7l.9-.9c.2-.2.5-.3.8-.2l1.5.4c.3.1.5.3.5.6 0 .3-.2.6-.5.6-5.1 0-8.7-3.6-8.7-8.7z"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ban":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4.5 4.5l7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ----------------------------------------------------------------- */
/*  Skeletons                                                           */
/* ----------------------------------------------------------------- */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-full max-w-sm animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
      <div className="h-4 w-2/3 max-w-md animate-pulse rounded bg-white" />
    </div>
  );
}

function SignalCardSkeleton() {
  return (
    <div className="rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-6 w-36 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
      <div className="mt-4 h-3 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-6 h-3 w-28 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-2 h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
    </div>
  );
}