"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const RESPONSIBILITY_ROWS = [
  {
    title: "Patients & caregivers",
    description:
      "Use ZoikoMeds as an availability information tool only. Confirm with pharmacies. Follow prescriber, pharmacist, and legal requirements. Do not use the platform to seek restricted access or bypass rules.",
    icon: "person",
  },
  {
    title: "Pharmacies",
    description:
      "Maintain professional judgment, dispensing controls, pharmacy policies, legal obligations, and controlled-category settings. Confirm availability only where safe, lawful, and operationally appropriate.",
    icon: "home",
  },
  {
    title: "Healthcare providers",
    description:
      "Use availability signals only to support access conversations. Do not treat ZoikoMeds outputs as clinical advice, substitution guidance, or dispensing approval.",
    icon: "home-alt",
  },
  {
    title: "Enterprise customers",
    description:
      "Use controlled medicine outputs only within contract scope, privacy rules, jurisdictional restrictions, and approved governance controls.",
    icon: "building",
  },
  {
    title: "ZoikoMeds",
    description:
      "Apply policy controls, signal suppression, abuse prevention, auditability, privacy safeguards, and user-facing boundary language.",
    icon: "shield",
  },
] as const;

export default function ControlledMedicinePolicyResponsibilitiesSection() {
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
                03 · User &amp; Partner Responsibilities
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                Everyone plays a part in{" "}
                <span style={{ color: ACCENT }}>safe handling.</span>
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-60 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Responsibility rows card ---------------- */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_16px_40px_-16px_rgba(15,31,78,0.10)]">
          {mounted
            ? RESPONSIBILITY_ROWS.map((row, i) => (
                <Reveal key={row.title} index={2 + i}>
                  <ResponsibilityRow
                    {...row}
                    isLast={i === RESPONSIBILITY_ROWS.length - 1}
                  />
                </Reveal>
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <ResponsibilityRowSkeleton key={i} isLast={i === 4} />
              ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/*  Reveal                                                             */
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
/*  Responsibility row                                                  */
/* ----------------------------------------------------------------- */
function ResponsibilityRow({
  title,
  description,
  icon,
  isLast,
}: {
  title: string;
  description: string;
  icon: string;
  isLast: boolean;
}) {
  return (
    <div
      className={`group flex items-start gap-5 px-7 py-5 transition-colors duration-200 hover:bg-[#F7F9FC] ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <span
        className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: "#0C8A6E" }}
      >
        <ResponsibilityIcon name={icon} />
      </span>

      <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:gap-8">
        <span className="w-full flex-shrink-0 text-[14px] font-bold text-[#0F1F4E] sm:w-44">
          {title}
        </span>
        <p className="flex-1 text-[13.5px] leading-relaxed text-[#5B6478]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ResponsibilityRowSkeleton({ isLast }: { isLast: boolean }) {
  return (
    <div
      className={`flex items-start gap-5 px-7 py-5 ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <div className="h-9 w-9 flex-shrink-0 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="flex flex-1 items-start gap-8">
        <div className="w-44 flex-shrink-0">
          <div className="h-4 w-36 animate-pulse rounded bg-[#E4E8F0]" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-[#E4E8F0]" />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Icons                                                              */
/* ----------------------------------------------------------------- */
function ResponsibilityIcon({ name }: { name: string }) {
  const common = {
    className: "h-4.5 w-4.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" />
        </svg>
      );
    case "home-alt":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
    default:
      return null;
  }
}