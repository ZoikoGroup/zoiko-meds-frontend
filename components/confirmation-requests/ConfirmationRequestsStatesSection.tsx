"use client";

import { useEffect, useRef, useState } from "react";


const STATES = [
  {
    tone: "blue",
    icon: "clock",
    label: "Confirmation received",
    pharmacy: "The request entered the workflow queue.",
    you: "Received — but availability is not yet confirmed.",
    next: "wait for an update, or contact the pharmacy if time-sensitive.",
  },
  {
    tone: "green",
    icon: "refresh",
    label: "Signal updated",
    pharmacy: "Availability signal information was updated.",
    you: "The signal changed. Confirmation is still required.",
    next: "view the updated signal and contact the pharmacy where needed.",
  },
  {
    tone: "blue",
    icon: "phone",
    label: "Direct confirmation recommended",
    pharmacy: "Best handled through direct pharmacy contact.",
    you: "Contact the pharmacy before making a trip.",
    next: "call or message the pharmacy where available.",
  },
  {
    tone: "dark",
    icon: "minusCircle",
    label: "Unable to confirm",
    pharmacy: "Cannot confirm availability through ZoikoMeds now.",
    you: "No reliable confirmation is available here.",
    next: "expand search, create an alert, or contact the pharmacy directly.",
  },
  {
    tone: "orange",
    icon: "pause",
    label: "Workflow paused",
    pharmacy: "Requests are temporarily paused for this workflow.",
    you: "Confirmation requests aren't available here now.",
    next: "search another pharmacy, check later, or create an alert.",
  },
  {
    tone: "dark",
    icon: "clockX",
    label: "Request expired",
    pharmacy: "Not answered within the approved response window.",
    you: "The request is no longer active; availability may have changed.",
    next: "run the search again or contact the pharmacy directly.",
  },
  {
    tone: "orange",
    icon: "arrowUp",
    label: "Escalated for review",
    pharmacy: "Requires additional pharmacy or support review.",
    you: "The request needs further review before an update.",
    next: "wait for an update, or use direct pharmacy contact if urgent.",
  },
] as const;

export default function ConfirmationRequestsStatesSection() {
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
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ---------------- Header ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          {mounted ? (
            <>
              <Reveal index={0}>
                <h2 className="font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-tight text-[#0F1F4E] sm:text-[2.1rem]">
                  Clear responses.{" "}
                  <span style={{ color: "#0FAA87" }}>
                    Safer expectations.
                  </span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  Every response state means the same thing to pharmacies
                  and patients — with an icon, a color, and text, never
                  color alone.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- State cards + never-means box ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {mounted ? (
            <>
              {STATES.map((s, i) => (
                <StateCard key={s.label} {...s} index={i} />
              ))}
              <NeverMeansBox index={STATES.length} />
            </>
          ) : (
            <>
              {STATES.map((_, i) => (
                <CardSkeleton key={i} />
              ))}
              <CardSkeleton />
            </>
          )}
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
      className="animate-[confirmStatesFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes confirmStatesFadeUp {
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
/*  Tone styles                                                        */
/* ----------------------------------------------------------------- */
const TONE_STYLES = {
  blue: {
    border: "#3B5BDB",
    badgeBg: "#E3E8FB",
    badgeText: "#3B5BDB",
    glow: "rgba(59,91,219,0.18)",
  },
  green: {
    border: "#0FAA87",
    badgeBg: "#DCF5EE",
    badgeText: "#0C8A6E",
    glow: "rgba(15,170,135,0.2)",
  },
  dark: {
    border: "#0F1F4E",
    badgeBg: "#EEF1F6",
    badgeText: "#3D445A",
    glow: "rgba(15,31,78,0.15)",
  },
  orange: {
    border: "#C8651E",
    badgeBg: "#FCEAD6",
    badgeText: "#B0570F",
    glow: "rgba(200,101,30,0.18)",
  },
} as const;

/* ----------------------------------------------------------------- */
/*  State card                                                          */
/* ----------------------------------------------------------------- */
function StateCard({
  tone,
  icon,
  label,
  pharmacy,
  you,
  next,
  index,
}: {
  tone: keyof typeof TONE_STYLES;
  icon: StateIconName;
  label: string;
  pharmacy: string;
  you: string;
  next: string;
  index: number;
}) {
  const t = TONE_STYLES[tone];

  return (
    <div
      className="animate-[confirmStatesFadeUp_0.6s_ease-out_forwards] rounded-2xl border-2 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1"
      style={{
        opacity: 0,
        animationDelay: `${250 + index * 90}ms`,
        borderColor: t.border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 14px 32px -16px ${t.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
        style={{ backgroundColor: t.badgeBg, color: t.badgeText }}
      >
        <StateIcon name={icon} />
        {label}
      </span>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[#9AA3B5]">
            Pharmacy
          </span>
          <p className="mt-1 text-[12.5px] leading-relaxed text-[#5B6478]">
            {pharmacy}
          </p>
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[#9AA3B5]">
            You
          </span>
          <p className="mt-1 text-[12.5px] leading-relaxed text-[#5B6478]">
            {you}
          </p>
        </div>
      </div>

      <div className="mt-3 border-t border-[#EEF1F6] pt-3">
        <p className="text-[12px] leading-relaxed text-[#5B6478]">
          <span className="font-semibold" style={{ color: "#0C8A6E" }}>
            Next:
          </span>{" "}
          {next}
        </p>
      </div>
    </div>
  );
}

type StateIconName =
  | "clock"
  | "refresh"
  | "phone"
  | "minusCircle"
  | "pause"
  | "clockX"
  | "arrowUp";

function StateIcon({ name }: { name: StateIconName }) {
  const common = { viewBox: "0 0 16 16", fill: "none" as const, className: "h-3.5 w-3.5" };

  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path
            d="M3 8a5 5 0 0 1 8.5-3.5M13 8a5 5 0 0 1-8.5 3.5M11 3v2.2H8.8M5 13v-2.2h2.2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M3.5 3c0-.4.3-.7.7-.6l2 .3c.3.1.5.3.6.5l.4 1.5c.1.3 0 .6-.2.8l-.9.9c.6 1.2 1.5 2.1 2.7 2.7l.9-.9c.2-.2.5-.3.8-.2l1.5.4c.3.1.5.3.5.6l.3 2c.1.4-.2.7-.6.7-5.1 0-8.7-3.6-8.7-8.7z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "minusCircle":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.5 8h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "pause":
      return (
        <svg {...common}>
          <rect x="4.5" y="3.5" width="2" height="9" rx="0.6" stroke="currentColor" strokeWidth="1.2" />
          <rect x="9.5" y="3.5" width="2" height="9" rx="0.6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "clockX":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M6.5 6.5l3 3M9.5 6.5l-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "arrowUp":
      return (
        <svg {...common}>
          <path
            d="M8 12.5V3.5M8 3.5L4.5 7M8 3.5L11.5 7"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/* ----------------------------------------------------------------- */
/*  "What a response never means" dashed box                          */
/* ----------------------------------------------------------------- */
function NeverMeansBox({ index }: { index: number }) {
  return (
    <div
      className="animate-[confirmStatesFadeUp_0.6s_ease-out_forwards] rounded-2xl border-2 border-dashed border-[#C7CDDA] bg-white p-5 transition-colors duration-300 hover:border-[#9AA3B5]"
      style={{ opacity: 0, animationDelay: `${250 + index * 90}ms` }}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1F6] px-3 py-1 text-[12px] font-semibold text-[#5B6478]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <path
            d="M12.5 8H3.5M3.5 8l3-3M3.5 8l3 3"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        What a response never means
      </span>

      <p className="mt-4 text-[12.5px] leading-relaxed text-[#5B6478]">
        A response <span className="font-semibold text-[#0F1F4E]">never</span>{" "}
        means medicine is reserved or will be dispensed, a prescription is
        valid, a patient is eligible, stock is guaranteed, clinical
        suitability is confirmed, advice was given, or pickup/delivery was
        arranged.
      </p>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Skeletons                                                           */
/* ----------------------------------------------------------------- */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-full max-w-md animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
      <div className="h-4 w-2/3 max-w-md animate-pulse rounded bg-white" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl border-2 border-[#E7EAF1] bg-white p-5">
      <div className="h-6 w-40 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-2.5 w-16 animate-pulse rounded bg-[#E4E8F0]" />
          <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-10 animate-pulse rounded bg-[#E4E8F0]" />
          <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        </div>
      </div>
      <div className="mt-3 border-t border-[#EEF1F6] pt-3">
        <div className="h-3 w-3/4 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}