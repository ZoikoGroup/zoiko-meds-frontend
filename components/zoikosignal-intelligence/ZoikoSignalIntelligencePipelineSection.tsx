"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const STAGES = [
  { label: "Signals" },
  { label: "Normalization" },
  { label: "Confidence & freshness" },
  { label: "Aggregation" },
  { label: "Governed output" },
] as const;

const STAGE_DETAILS = [
  {
    title: "Signal collection",
    description:
      "Ingests approved categories such as participating pharmacy signals, confirmation-workflow outcomes, signal freshness, search friction, and restock movement where permitted.",
    mustNot:
      "collect unnecessary PHI, prescription images, clinical records, or exact public stock counts.",
  },
  {
    title: "Identity normalization",
    description:
      "Uses MediBase™ to normalize medicine names, brands, generics, strengths, dosage forms, identifiers, and jurisdictional context.",
    mustNot: "recommend substitutes or clinical alternatives.",
  },
  {
    title: "Confidence & freshness processing",
    description:
      "Uses ZoikoAvail™ logic to evaluate freshness, confidence, and signal quality.",
    mustNot: "publish proprietary scoring formulas or pharmacy reliability internals.",
  },
  {
    title: "Aggregation & thresholding",
    description:
      "Converts individual activity into aggregated, privacy-safe outputs with minimum thresholds and suppression rules.",
    mustNot:
      "expose identifiable patient behavior, account-level activity, or exact pharmacy stock.",
  },
  {
    title: "Enterprise output",
    description:
      "Delivers dashboards, reports, data feeds, and briefings scoped by contract, use case, role, and jurisdiction.",
    mustNot:
      "imply official shortage declaration, clinical advice, dispensing approval, or patient targeting.",
  },
] as const;

export default function ZoikoSignalIntelligencePipelineSection() {
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ---------------- Header ---------------- */}
        {mounted ? (
          <>
            <Reveal index={0}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                01 · Intelligence Model
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-2 font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-tight text-[#0F1F4E] sm:text-[2rem]">
                From signals to governed intelligence.
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                An intelligence pipeline that builds technical
                credibility without over-disclosing sensitive logic.
              </p>
            </Reveal>
          </>
        ) : (
          <HeaderSkeleton />
        )}

        {/* ---------------- Stage stepper ---------------- */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1">
          {mounted
            ? STAGES.map((s, i) => (
                <Fragment key={s.label}>
                  <StagePill number={i + 1} label={s.label} index={i} />
                  {i < STAGES.length - 1 && (
                    <span
                      className="flex-shrink-0 text-[#C7CEDC] animate-[pipelineFadeUp_0.5s_ease-out_forwards]"
                      style={{ opacity: 0, animationDelay: `${250 + i * 90}ms` }}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </Fragment>
              ))
            : STAGES.map((_, i) => (
                <Fragment key={i}>
                  <div className="h-14 w-32 flex-shrink-0 animate-pulse rounded-xl bg-white" />
                  {i < STAGES.length - 1 && <div className="h-4 w-4 flex-shrink-0" />}
                </Fragment>
              ))}
        </div>

        {/* ---------------- Stage detail card ---------------- */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white">
          {mounted
            ? STAGE_DETAILS.map((d, i) => (
                <StageDetailRow key={d.title} {...d} number={i + 1} index={i} />
              ))
            : STAGE_DETAILS.map((_, i) => <DetailRowSkeleton key={i} />)}
        </div>
      </div>
    </section>
  );
}

function Fragment({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
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
      className="animate-[pipelineFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes pipelineFadeUp {
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
/*  Stage pill (stepper)                                              */
/* ----------------------------------------------------------------- */
function StagePill({
  number,
  label,
  index,
}: {
  number: number;
  label: string;
  index: number;
}) {
  return (
    <div
      className="group flex-shrink-0 rounded-xl border border-[#E7EAF1] bg-white px-4 py-2.5 text-center transition-all duration-300 ease-out animate-[pipelineFadeUp_0.55s_ease-out_forwards] hover:-translate-y-0.5"
      style={{ opacity: 0, animationDelay: `${250 + index * 90}ms`, minWidth: 132 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#9FE3D3";
        e.currentTarget.style.boxShadow =
          "0 10px 24px -14px rgba(15,170,135,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E7EAF1";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="block text-[9.5px] font-bold uppercase tracking-[0.1em]"
        style={{ color: ACCENT }}
      >
        Stage {number}
      </span>
      <span className="mt-0.5 block text-[12.5px] font-bold text-[#0F1F4E]">
        {label}
      </span>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Stage detail row                                                    */
/* ----------------------------------------------------------------- */
function StageDetailRow({
  number,
  title,
  description,
  mustNot,
  index,
}: {
  number: number;
  title: string;
  description: string;
  mustNot: string;
  index: number;
}) {
  return (
    <div
      className="border-b border-[#EEF1F6] p-6 transition-colors duration-200 last:border-b-0 hover:bg-[#FAFBFD] animate-[pipelineFadeUp_0.55s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${550 + index * 110}ms` }}
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
          style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
        >
          Stage {number}
        </span>
        <h3 className="text-[15px] font-bold text-[#0F1F4E]">{title}</h3>
      </div>

      <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5B6478]">
        {description}
      </p>

      <div className="mt-3.5 rounded-lg border border-[#F3C4C4] bg-[#FDECEC] px-4 py-2.5">
        <p className="text-[12.5px] leading-relaxed text-[#B43A3A]">
          <span className="font-bold">Must not:</span> {mustNot}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Skeletons                                                            */
/* ----------------------------------------------------------------- */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-3.5 w-40 animate-pulse rounded bg-white" />
      <div className="h-8 w-full max-w-md animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
    </div>
  );
}

function DetailRowSkeleton() {
  return (
    <div className="border-b border-[#EEF1F6] p-6 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="h-4 w-16 animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-4 w-40 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
      </div>
      <div className="mt-3.5 h-9 w-full animate-pulse rounded-lg bg-[#E4E8F0]" />
    </div>
  );
}