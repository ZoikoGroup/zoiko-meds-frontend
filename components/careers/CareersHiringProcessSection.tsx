"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const STEPS = [
  {
    number: 1,
    title: "Apply or join",
    description:
      "Apply, or join the talent community, through an approved ZoikoMeds recruiting route.",
  },
  {
    number: 2,
    title: "Recruiting review",
    description:
      "We confirm role fit, work-eligibility requirements, and required experience.",
  },
  {
    number: 3,
    title: "Structured interviews",
    description:
      "Selected candidates complete structured interviews relevant to the role family.",
  },
  {
    number: 4,
    title: "Practical exercise",
    description:
      "Used only where role-relevant, respectful of your time, and clearly scoped.",
  },
  {
    number: 5,
    title: "Final steps",
    description:
      "May include reference checks, compliance checks, offer review, and onboarding where lawful and applicable.",
  },
] as const;

const PRIVACY_ITEMS = [
  "We don't ask for medical history, diagnosis, protected health information, government IDs, bank details, or sensitive personal data through public inquiry forms.",
  "Candidate data is collected only through approved recruiting systems and handled per the Candidate Privacy Notice.",
  "Application status pages, candidate portals, assessment links, and offer workflows are private and access-controlled.",
  "Equal opportunity, accessibility accommodations, and anti-discrimination commitments are reviewed before publication.",
] as const;

export default function CareersHiringProcessSection() {
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
                04 · Hiring Process &amp; Candidate Privacy
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                A clear, <span style={{ color: ACCENT }}>respectful process.</span>
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-64 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-md animate-pulse rounded-lg bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Step cards grid ---------------- */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {mounted
            ? STEPS.map((step, i) => (
                <Reveal key={step.number} index={2 + i}>
                  <StepCard {...step} />
                </Reveal>
              ))
            : Array.from({ length: 5 }).map((_, i) => <StepCardSkeleton key={i} />)}
        </div>

        {/* ---------------- Candidate privacy & safety ---------------- */}
        <div className="mt-14">
          {mounted ? (
            <Reveal index={7}>
              <h3 className="text-[20px] font-bold text-[#0F1F4E]">
                Candidate privacy &amp; safety
              </h3>
            </Reveal>
          ) : (
            <div className="h-6 w-64 animate-pulse rounded bg-[#E4E8F0]" />
          )}

          <div className="mt-5 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white">
            {mounted
              ? PRIVACY_ITEMS.map((item, i) => (
                  <Reveal key={item} index={8 + i}>
                    <PrivacyRow
                      text={item}
                      isLast={i === PRIVACY_ITEMS.length - 1}
                    />
                  </Reveal>
                ))
              : Array.from({ length: 4 }).map((_, i) => (
                  <PrivacyRowSkeleton key={i} isLast={i === 3} />
                ))}
          </div>
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
/*  Step card                                                          */
/* ----------------------------------------------------------------- */
function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-[#E7EAF1] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D7DCE6] hover:shadow-[0_16px_36px_-12px_rgba(15,31,78,0.12)]">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: "#0C8A6E" }}
      >
        {number}
      </span>
      <h4 className="mt-3.5 text-[14.5px] font-bold leading-snug text-[#0F1F4E]">
        {title}
      </h4>
      <p className="mt-2 text-[12.5px] leading-relaxed text-[#8891A4]">
        {description}
      </p>
    </div>
  );
}

function StepCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-[#E7EAF1] bg-white p-5">
      <div className="h-7 w-7 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="mt-3.5 h-4 w-24 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-2 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Privacy row                                                         */
/* ----------------------------------------------------------------- */
function PrivacyRow({ text, isLast }: { text: string; isLast: boolean }) {
  return (
    <div
      className={`group flex items-start gap-3 px-6 py-4 transition-colors duration-200 hover:bg-[#F7F9FC] ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <svg
        className="mt-0.5 h-4 w-4 flex-shrink-0"
        viewBox="0 0 16 16"
        fill="none"
        style={{ color: ACCENT }}
      >
        <path
          d="M3.5 8.5l3 3 6-6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[13.5px] leading-relaxed text-[#5B6478]">{text}</p>
    </div>
  );
}

function PrivacyRowSkeleton({ isLast }: { isLast: boolean }) {
  return (
    <div
      className={`flex items-start gap-3 px-6 py-4 ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <div className="mt-0.5 h-4 w-4 flex-shrink-0 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="w-full space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}