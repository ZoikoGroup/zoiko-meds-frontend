"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const FEATURE_CARDS = [
  {
    title: "Privacy & aggregation",
    description:
      "Aggregation, anonymization, thresholds, suppression, and contract-scoped access. No identifiable patient-level outputs.",
    icon: "shield",
  },
  {
    title: "Exact-stock suppression",
    description:
      "No exact public pharmacy stock, confidential inventory values, or pharmacy-sensitive operating data.",
    icon: "monitor",
  },
  {
    title: "Jurisdiction control",
    description:
      "Respects jurisdiction-specific data rights, controlled-medicine rules, pharmacy regulations, and public-health requirements.",
    icon: "globe",
  },
  {
    title: "Claim control",
    description:
      "Public claims about coverage, partners, signal volume, outcomes, or certifications appear only after verification and approval.",
    icon: "triangle",
  },
  {
    title: "Security review",
    description:
      "Enterprise customers may request security, privacy, compliance, and procurement materials through controlled review.",
    icon: "lock",
  },
  {
    title: "Not an official shortage database",
    description:
      "Supports shortage pressure intelligence but does not claim to be a regulator shortage database unless legally authorized.",
    icon: "no-entry",
  },
] as const;

const PROOF_BAND_CARDS = [
  {
    title: "Coverage",
    description:
      "Verified pharmacy, jurisdiction, medicine-record, or signal-volume counts shown only when verified and approved.",
    status: "In rollout",
    statusTone: "amber",
  },
  {
    title: "Regulatory alignment",
    description:
      "HIPAA-aware, GDPR-aligned, MHRA-aware, DSCSA/FMD-aware, SOC 2 / ISO 27001 only with approved evidence and wording.",
    status: "Available by contract",
    statusTone: "green",
  },
  {
    title: "Partners",
    description:
      "Named partners only where contractually permitted; anonymized categories with approval. Names not invented.",
    status: "Coming",
    statusTone: "amber",
  },
  {
    title: "Leadership / advisory",
    description:
      "Named advisors or governance roles shown only if approved for public disclosure.",
    status: "Available by contract",
    statusTone: "green",
  },
] as const;

export default function ZoikoSignalIntelligenceGovernanceSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B1530] py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ---------------- Eyebrow + heading ---------------- */}
        {mounted ? (
          <>
            <Reveal index={0}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                04 · Governance, Proof &amp; Trust
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-white sm:text-[2.35rem]">
                Built to clear procurement and trust review.
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-56 animate-pulse rounded bg-white/10" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-white/10" />
          </div>
        )}

        {/* ---------------- Feature cards grid ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mounted
            ? FEATURE_CARDS.map((card, i) => (
                <Reveal key={card.title} index={2 + i}>
                  <FeatureCard {...card} />
                </Reveal>
              ))
            : Array.from({ length: 6 }).map((_, i) => <FeatureCardSkeleton key={i} />)}
        </div>

        {/* ---------------- Proof band ---------------- */}
        <div className="mt-16">
          {mounted ? (
            <>
              <Reveal index={8}>
                <h3 className="text-[15px] font-bold text-white">
                  Proof band — real status only
                </h3>
              </Reveal>
              <Reveal index={9}>
                <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[#8891A4]">
                  Coverage, regulatory, and partner claims display approved
                  status only — otherwise &ldquo;in rollout,&rdquo;
                  &ldquo;coming,&rdquo; or &ldquo;available by contract.&rdquo;
                </p>
              </Reveal>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-full max-w-xl animate-pulse rounded bg-white/10" />
            </div>
          )}

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mounted
              ? PROOF_BAND_CARDS.map((card, i) => (
                  <Reveal key={card.title} index={10 + i}>
                    <ProofCard {...card} />
                  </Reveal>
                ))
              : Array.from({ length: 4 }).map((_, i) => <ProofCardSkeleton key={i} />)}
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
      style={{ opacity: 0, animationDelay: `${index * 70}ms` }}
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
/*  Feature card                                                       */
/* ----------------------------------------------------------------- */
function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(15,170,135,0.12)", color: ACCENT }}
      >
        <FeatureIcon name={icon} />
      </div>
      <h4 className="mt-4 text-[15px] font-bold text-white">{title}</h4>
      <p className="mt-2 text-[13px] leading-relaxed text-[#9AA3B5]">
        {description}
      </p>
    </div>
  );
}

function FeatureCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-white/10" />
      <div className="mt-4 h-4 w-32 animate-pulse rounded bg-white/10" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-white/10" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Proof card                                                         */
/* ----------------------------------------------------------------- */
function ProofCard({
  title,
  description,
  status,
  statusTone,
}: {
  title: string;
  description: string;
  status: string;
  statusTone: "green" | "amber";
}) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div>
        <h4 className="text-[14.5px] font-bold text-white">{title}</h4>
        <p className="mt-2 text-[12.5px] leading-relaxed text-[#9AA3B5]">
          {description}
        </p>
      </div>
      <div className="mt-5">
        <StatusPill tone={statusTone}>{status}</StatusPill>
      </div>
    </div>
  );
}

function ProofCardSkeleton() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div>
        <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
        <div className="mt-3 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-white/10" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-5 h-6 w-28 animate-pulse rounded-full bg-white/10" />
    </div>
  );
}

function StatusPill({
  tone,
  children,
}: {
  tone: "green" | "amber";
  children: React.ReactNode;
}) {
  const toneClasses =
    tone === "green"
      ? "bg-[#0FAA87]/15 text-[#3DD9B3] ring-1 ring-inset ring-[#0FAA87]/30"
      : "bg-[#E8A23B]/15 text-[#F0B860] ring-1 ring-inset ring-[#E8A23B]/30";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-semibold transition-transform duration-200 group-hover:scale-105 ${toneClasses}`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- */
/*  Icons                                                              */
/* ----------------------------------------------------------------- */
function FeatureIcon({ name }: { name: string }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3L12 4z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="1.5" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
      );
    case "no-entry":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M6 12h12" />
        </svg>
      );
    default:
      return null;
  }
}