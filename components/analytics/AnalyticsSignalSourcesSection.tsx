"use client";

import { useEffect, useRef, useState } from "react";

interface SignalCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  warning: string;
}

const signalCards: SignalCard[] = [
  {
    icon: <PulseIcon />,
    title: "Search & demand signals",
    description:
      "Aggregated user interest, medicine search patterns, and regional demand indicators.",
    warning: "No patient diagnosis, treatment intent, or individual-level health data.",
  },
  {
    icon: <StoreIcon />,
    title: "Pharmacy confirmation signals",
    description:
      "Structured confirmation activity from verified or participating pharmacy sources.",
    warning: "No exact stock counts to unauthorized users.",
  },
  {
    icon: <CheckIcon />,
    title: "Availability confidence signals",
    description:
      "Confidence tiers based on freshness, source quality, coverage, and confirmation status.",
    warning: "Confidence is not a guarantee of current availability.",
  },
  {
    icon: <WarningTriangleIcon />,
    title: "Shortage movement signals",
    description:
      "Patterns that may indicate changing access conditions or emerging pressure.",
    warning: "Operational language; no clinical or regulatory determinations unless verified.",
  },
  {
    icon: <GlobeIcon />,
    title: "Network participation signals",
    description:
      "Coverage, confirmation activity, and response patterns across authorized networks.",
    warning: "Sensitive partner-level details restricted by role and contract.",
  },
];

/**
 * AnalyticsSignalSourcesSection
 * Fourth section of the /analytics page.
 * - Scroll-triggered fade-up entrance (bottom -> top), staggered per element/card
 * - Hover lift on each card
 * - Skeleton placeholders shown until the section enters view
 */
export default function AnalyticsSignalSourcesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F6FA] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <AnalyticsFadeUp show={isVisible} delay={0}>
          <span className="text-xs font-bold tracking-[0.18em] text-[#0FAA87]">
            03 &nbsp;&middot;&nbsp; SIGNAL SOURCES
          </span>
        </AnalyticsFadeUp>

        <AnalyticsFadeUp show={isVisible} delay={80}>
          <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.3rem]">
            What informs <span className="text-[#0FAA87]">the analytics.</span>
          </h2>
        </AnalyticsFadeUp>

        <AnalyticsFadeUp show={isVisible} delay={140}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4B5567]">
            Precise, lawful, confidence-based — without implying ZoikoMeds owns all data or
            guarantees availability.
          </p>
        </AnalyticsFadeUp>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {signalCards.map((card, i) =>
            isVisible ? (
              <AnalyticsFadeUp key={card.title} show={isVisible} delay={200 + i * 100}>
                <div className="flex h-full flex-col rounded-xl border border-[#E7EAF1] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0FAA87]/10">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0FAA87]/10 text-[#0FAA87]">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0F1F4E]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <div className="flex items-start gap-2 rounded-lg border border-[#F3D9A8] bg-[#FDF3E2] px-3 py-2.5">
                      <WarningTriangleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B7791F]" />
                      <p className="text-xs leading-relaxed text-[#8A5B10]">{card.warning}</p>
                    </div>
                  </div>
                </div>
              </AnalyticsFadeUp>
            ) : (
              <AnalyticsCardSkeleton key={card.title} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Fade-up wrapper (bottom -> top)     */
/* ---------------------------------- */
function AnalyticsFadeUp({
  show,
  delay = 0,
  children,
}: {
  show: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------- */
/* Skeleton loading state              */
/* ---------------------------------- */
function AnalyticsCardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#E7EAF1] bg-white p-5 shadow-sm">
      <div className="h-9 w-9 animate-pulse rounded-lg bg-[#F4F6FA]" />
      <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-[#F4F6FA]" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#F4F6FA]" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-[#F4F6FA]" />
      </div>
      <div className="mt-auto pt-4">
        <div className="h-12 w-full animate-pulse rounded-lg bg-[#F4F6FA]" />
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Icons                               */
/* ---------------------------------- */
function PulseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12h4l2-7 4 14 2-7h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningTriangleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 4L2 20h20L12 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}