"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const STEPS = [
  {
    number: 1,
    title: "Pharmacy identity",
    description:
      "Pharmacy name, location, business identity, operating jurisdiction, and approved registry references where available.",
    why: "reduces fake, duplicated, or misleading profiles.",
  },
  {
    number: 2,
    title: "Authorization",
    description:
      "Whether the requester appears authorized to act for the pharmacy, branch, group, or organization.",
    why: "prevents unauthorized claims or control changes.",
  },
  {
    number: 3,
    title: "License or registry evidence",
    description:
      "License, registration, regulator, or jurisdiction-specific evidence where available and legally permitted.",
    why: "a more trustworthy network — without acting as a regulator.",
  },
  {
    number: 4,
    title: "Portal role controls",
    description:
      "Organization, branch, user role, and permissions assigned after verification.",
    why: "the right person manages the right workspace.",
  },
  {
    number: 5,
    title: "Availability workflow governance",
    description:
      "Participation settings, confirmation requests, signal controls, exact-stock suppression, and auditability.",
    why: "protects workflow, exact stock, and professional judgment.",
  },
] as const;

export default function PharmacyPortalVerificationLayersSection() {
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
                  Verification is{" "}
                  <span style={{ color: ACCENT }}>
                    more than a profile badge.
                  </span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  A layered review process — so a verified label means
                  something, without implying government certification or
                  quality accreditation.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Step cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {mounted
            ? STEPS.map((s, i) => <StepCard key={s.number} {...s} index={i} />)
            : STEPS.map((_, i) => <StepCardSkeleton key={i} />)}
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
      className="animate-[portalVerifLayersFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes portalVerifLayersFadeUp {
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
/*  Step card                                                           */
/* ----------------------------------------------------------------- */
function StepCard({
  number,
  title,
  description,
  why,
  index,
}: {
  number: number;
  title: string;
  description: string;
  why: string;
  index: number;
}) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-[#E7EAF1] bg-white p-5 transition-all duration-300 ease-out animate-[portalVerifLayersFadeUp_0.6s_ease-out_forwards] hover:-translate-y-1"
      style={{
        opacity: 0,
        animationDelay: `${250 + index * 100}ms`,
      }}
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
        className="flex h-7 w-7 items-center justify-center rounded-lg text-[13px] font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
      >
        {number}
      </span>

      <h3 className="mt-4 text-[14.5px] font-bold leading-snug text-[#0F1F4E]">
        {title}
      </h3>

      <p className="mt-2 text-[12.5px] leading-relaxed text-[#5B6478]">
        {description}
      </p>

      <p className="mt-3 flex items-start gap-1.5 text-[12px] leading-relaxed text-[#5B6478]">
        <svg
          className="mt-0.5 h-3 w-3 flex-shrink-0"
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
          <span className="font-semibold text-[#0F1F4E]">Why:</span> {why}
        </span>
      </p>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Note bar                                                            */
/* ----------------------------------------------------------------- */
function NoteBar() {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] border-l-4 border-l-[#3B5BDB] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_-14px_rgba(59,91,219,0.3)] animate-[portalVerifLayersFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "850ms" }}
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#E3E8FB] text-[#3B5BDB]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <rect x="3.5" y="7.5" width="9" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.5 7.5V5.3a2.5 2.5 0 0 1 5 0v2.2" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </span>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">
        To protect the integrity of the network,{" "}
        <span className="font-semibold text-[#0F1F4E]">
          ZoikoMeds may not publicly disclose all fraud-prevention,
          abuse-detection, risk-review, or verification-control methods.
        </span>
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
      <div className="h-8 w-full max-w-sm animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
      <div className="h-4 w-2/3 max-w-md animate-pulse rounded bg-white" />
    </div>
  );
}

function StepCardSkeleton() {
  return (
    <div className="rounded-2xl border border-[#E7EAF1] bg-white p-5">
      <div className="h-7 w-7 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
      <div className="mt-3 h-3 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
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