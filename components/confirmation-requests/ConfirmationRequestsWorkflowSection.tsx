"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

const STEPS = [
  {
    number: 1,
    title: "User searches",
    description: "A patient or caregiver searches by medicine, location, and radius.",
    safety:
      "no diagnosis, symptoms, insurance, prescription image, or payment required.",
  },
  {
    number: 2,
    title: "Eligible result appears",
    description:
      "A participating verified pharmacy may appear with a signal and confirmation option where supported.",
    safety: "eligibility depends on verification, settings, and category rules.",
  },
  {
    number: 3,
    title: "Request is submitted",
    description:
      "The user submits a structured confirmation request with the minimum required information.",
    safety: "the request object is data-minimized and safe to route.",
  },
  {
    number: 4,
    title: "Pharmacy reviews",
    description:
      "The verified pharmacy receives the request in the portal or approved workflow queue.",
    safety: "only authorized branch/org users can view the request.",
  },
  {
    number: 5,
    title: "Pharmacy responds",
    description: "The pharmacy selects an approved response state or template.",
    safety: "no free-text responses by default in MVP.",
  },
  {
    number: 6,
    title: "User receives guidance",
    description:
      "The user gets a plain-language update and a reminder to confirm directly before traveling.",
    safety:
      "no response implies reservation, dispensing, advice, or guarantee.",
  },
] as const;

export default function ConfirmationRequestsWorkflowSection() {
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
      { threshold: 0.1 }
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
                  From search result to pharmacy
                  <br />
                  <span style={{ color: ACCENT }}>
                    response governed at every step.
                  </span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  A structured, data-minimized workflow that keeps
                  pharmacies in control and patients clearly informed.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Step cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? STEPS.map((s, i) => <StepCard key={s.number} {...s} index={i} />)
            : STEPS.map((_, i) => <CardSkeleton key={i} />)}
        </div>

        {/* ---------------- Disclaimer bar ---------------- */}
        <div className="mt-6">
          {mounted ? <NoteBar /> : <NoteBarSkeleton />}
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
      className="animate-[confirmWorkflowFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes confirmWorkflowFadeUp {
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
  safety,
  index,
}: {
  number: number;
  title: string;
  description: string;
  safety: string;
  index: number;
}) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 ease-out animate-[confirmWorkflowFadeUp_0.6s_ease-out_forwards] hover:-translate-y-1"
      style={{ opacity: 0, animationDelay: `${250 + index * 100}ms` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#9FE3D3";
        e.currentTarget.style.boxShadow =
          "0 14px 32px -16px rgba(15,170,135,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E7EAF1";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
      >
        {number}
      </span>

      <h3 className="mt-4 text-[15px] font-bold text-[#0F1F4E]">{title}</h3>

      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#5B6478]">
        {description}
      </p>

      <div className="mt-4 border-t border-[#EEF1F6] pt-3">
        <p className="flex items-start gap-1.5 text-[12px] leading-relaxed text-[#5B6478]">
          <svg
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: ACCENT }}
          >
            <path
              d="M3.5 8.5l3 3 6-6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            <span className="font-semibold text-[#0F1F4E]">Safety:</span>{" "}
            {safety}
          </span>
        </p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Disclaimer bar                                                     */
/* ----------------------------------------------------------------- */
function NoteBar() {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] border-l-4 border-l-[#3B5BDB] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_-14px_rgba(59,91,219,0.3)] animate-[confirmWorkflowFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "900ms" }}
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#E3E8FB] text-[#3B5BDB]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5.5v.01M8 7.5v3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">
        Confirmation requests support availability communication.{" "}
        <span className="font-semibold text-[#0F1F4E]">
          They do not replace prescription validation, pharmacist review,
          dispensing decisions, eligibility checks, controlled medicine
          rules, or legal requirements.
        </span>
      </p>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Skeletons                                                          */
/* ----------------------------------------------------------------- */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-full max-w-md animate-pulse rounded-lg bg-white" />
      <div className="h-8 w-64 animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-7 w-7 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="mt-4 h-4 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
      <div className="mt-4 border-t border-[#EEF1F6] pt-3">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}

function NoteBarSkeleton() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] bg-white p-5">
      <div className="h-7 w-7 flex-shrink-0 animate-pulse rounded-full bg-[#E4E8F0]" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3.5 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
    </div>
  );
}