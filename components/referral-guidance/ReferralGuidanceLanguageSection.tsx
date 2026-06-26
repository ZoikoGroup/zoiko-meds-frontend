"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

const APPROVED = [
  {
    label: "General referral",
    quote:
      "ZoikoMeds can help you check medicine availability signals near you. Search by medicine and location, then confirm directly with the pharmacy before traveling.",
  },
  {
    label: "Discharge support",
    quote:
      "Before you leave, you can use ZoikoMeds to check where availability signals appear near your area. The result is not a guarantee, so please confirm with the pharmacy.",
  },
  {
    label: "Caregiver support",
    quote:
      "If someone helps you manage medicine searches, they can use ZoikoMeds to save searches and set alerts. This is for availability support, not medical decision-making.",
  },
  {
    label: "Availability alert",
    quote:
      "You can create an alert so you know when an availability signal changes. An alert does not reserve medicine or guarantee stock.",
  },
] as const;

const PROHIBITED = [
  "This pharmacy has it in stock.",
  "This medicine is guaranteed.",
  "ZoikoMeds will reserve it.",
  "This is the best substitute.",
  "You can safely switch to this medicine.",
  "Your prescription is approved.",
  "The pharmacy will dispense it.",
  "ZoikoMeds confirms your eligibility.",
  "This is medical advice.",
  "This replaces calling the pharmacy.",
] as const;

export default function ReferralGuidanceLanguageSection() {
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
                  Patient-safe <span style={{ color: ACCENT }}>language and boundaries.</span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  Approved wording care teams can use — and the language
                  a referral must never imply.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Two-panel layout ---------------- */}
        <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          {mounted ? <ApprovedPanel /> : <PanelSkeleton rows={4} blocky />}
          {mounted ? <ProhibitedPanel /> : <PanelSkeleton rows={10} />}
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
      className="animate-[referralLanguageFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes referralLanguageFadeUp {
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
/*  Approved language panel                                             */
/* ----------------------------------------------------------------- */
function ApprovedPanel() {
  return (
    <div
      className="rounded-2xl border border-[#E7EAF1] bg-white p-6 animate-[referralLanguageFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "250ms" }}
    >
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" style={{ color: ACCENT }}>
          <path
            d="M3.5 8.5l3 3 6-6.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-[14.5px] font-bold" style={{ color: ACCENT }}>
          Approved language
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {APPROVED.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border-l-4 bg-[#EAFAF4] p-4"
            style={{ borderLeftColor: ACCENT }}
          >
            <p
              className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
              style={{ color: ACCENT }}
            >
              {item.label}
            </p>
            <p className="mt-1.5 text-[13px] italic leading-relaxed text-[#3A4258]">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Prohibited language panel                                           */
/* ----------------------------------------------------------------- */
function ProhibitedPanel() {
  return (
    <div
      className="rounded-2xl border border-[#E7EAF1] bg-white p-6 animate-[referralLanguageFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "350ms" }}
    >
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-[#0F1F4E]" viewBox="0 0 16 16" fill="none">
          <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <h3 className="text-[14.5px] font-bold text-[#0F1F4E]">
          Care teams must not say or imply
        </h3>
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {PROHIBITED.map((phrase) => (
          <li key={phrase} className="flex items-start gap-2">
            <svg
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#0F1F4E]"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <p className="text-[13px] leading-relaxed text-[#3A4258]">
              &ldquo;{phrase}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
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

function PanelSkeleton({ rows, blocky }: { rows: number; blocky?: boolean }) {
  return (
    <div className="rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-4 w-40 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-4 flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={
              blocky
                ? "h-20 w-full animate-pulse rounded-xl bg-[#E4E8F0]"
                : "h-3.5 w-full animate-pulse rounded bg-[#E4E8F0]"
            }
          />
        ))}
      </div>
    </div>
  );
}