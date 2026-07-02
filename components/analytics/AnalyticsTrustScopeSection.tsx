"use client";

import { useEffect, useRef, useState } from "react";

interface TrustCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trustCards: TrustCard[] = [
  {
    icon: <ShieldIcon />,
    title: "Not a pharmacy",
    description:
      "ZoikoMeds provides medicine availability intelligence and access visibility. It does not sell, prescribe, dispense, or deliver medicine.",
  },
  {
    icon: <SignalIcon />,
    title: "Confidence-based analytics",
    description:
      "Availability is communicated through structured signals and confidence levels, not unauthorized exposure of exact inventory quantities.",
  },
  {
    icon: <ShieldIcon />,
    title: "Responsible data use",
    description:
      "Analytics workflows are designed around privacy, role-based access, authorized stakeholders, and governance controls.",
  },
  {
    icon: <BarChartIcon />,
    title: "Operational intelligence",
    description:
      "Dashboards support healthcare access visibility and operational planning. They do not replace clinical judgment.",
  },
];

/**
 * AnalyticsTrustScopeSection
 * Second section of the /analytics page.
 * - Scroll-triggered fade-up entrance (bottom -> top), staggered per element/card
 * - Hover lift on each card
 * - Skeleton placeholders shown until the section enters view
 */
export default function AnalyticsTrustScopeSection() {
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
            01 &nbsp;&middot;&nbsp; TRUST &amp; SCOPE
          </span>
        </AnalyticsFadeUp>

        <AnalyticsFadeUp show={isVisible} delay={80}>
          <h2 className="mt-4 max-w-2xl text-[1.9rem] font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.3rem]">
            Analytics with{" "}
            <span className="text-[#0FAA87]">healthcare-grade boundaries.</span>
          </h2>
        </AnalyticsFadeUp>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, i) =>
            isVisible ? (
              <AnalyticsFadeUp key={card.title} show={isVisible} delay={160 + i * 100}>
                <div className="flex h-full flex-col rounded-xl border border-[#E7EAF1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0FAA87]/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0FAA87]/10 text-[#0FAA87]">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0F1F4E]">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7280]">
                    {card.description}
                  </p>
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
    <div className="flex h-full flex-col rounded-xl border border-[#E7EAF1] bg-white p-6 shadow-sm">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-[#F4F6FA]" />
      <div className="mt-4 h-4 w-2/3 animate-pulse rounded bg-[#F4F6FA]" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#F4F6FA]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#F4F6FA]" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-[#F4F6FA]" />
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Icons                               */
/* ---------------------------------- */
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h12M4 12h16M4 18h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 19V10M11 19V5M17 19v-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}