"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const CATEGORY_ROWS = [
  {
    title: "Controlled medicines",
    description:
      "Medicines subject to heightened legal, prescribing, dispensing, or monitoring requirements in one or more jurisdictions.",
    icon: "shield",
  },
  {
    title: "Restricted medicines",
    description:
      "Medicines whose availability information may require extra controls due to local law, pharmacy policy, regulatory classification, or safety risk.",
    icon: "lock",
  },
  {
    title: "High-risk medicines",
    description:
      "Medicines that may require suppression, additional confirmation, or careful handling because of misuse, diversion, dependence, safety, or abuse concerns.",
    icon: "triangle",
  },
  {
    title: "Jurisdiction-sensitive",
    description:
      "Medicines that may be handled differently depending on country, state, province, territory, regulator, pharmacy rules, or enforcement context.",
    icon: "globe",
  },
  {
    title: "Operationally sensitive",
    description:
      "Medicines where exact stock visibility, public alerts, or repeated confirmation requests could create risk for pharmacies or users.",
    icon: "chart",
  },
] as const;

export default function ControlledMedicinePolicyCoverageSection() {
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
                01 · What the Policy Covers
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 max-w-2xl font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                The categories that receive{" "}
                <span style={{ color: ACCENT }}>additional handling.</span>
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5B6478]">
                This policy explains scope in plain language. It is not
                a list of specific medicines, schedules, or thresholds.
              </p>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-48 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-xl animate-pulse rounded-lg bg-[#E4E8F0]" />
            <div className="h-4 w-96 animate-pulse rounded bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Category rows card ---------------- */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_16px_40px_-16px_rgba(15,31,78,0.10)]">
          {mounted
            ? CATEGORY_ROWS.map((row, i) => (
                <Reveal key={row.title} index={3 + i}>
                  <CategoryRow
                    {...row}
                    isLast={i === CATEGORY_ROWS.length - 1}
                  />
                </Reveal>
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <CategoryRowSkeleton key={i} isLast={i === 4} />
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
/*  Category row                                                        */
/* ----------------------------------------------------------------- */
function CategoryRow({
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
        <CategoryIcon name={icon} />
      </span>

      <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:gap-8">
        <span className="w-full flex-shrink-0 text-[14px] font-bold text-[#0F1F4E] sm:w-48">
          {title}
        </span>
        <p className="flex-1 text-[13.5px] leading-relaxed text-[#5B6478]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CategoryRowSkeleton({ isLast }: { isLast: boolean }) {
  return (
    <div
      className={`flex items-start gap-5 px-7 py-5 ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <div className="h-9 w-9 flex-shrink-0 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="flex flex-1 items-start gap-8">
        <div className="w-48 flex-shrink-0">
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
function CategoryIcon({ name }: { name: string }) {
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
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="1.5" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3L12 4z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect x="4" y="13" width="3.5" height="7" />
          <rect x="10.25" y="9" width="3.5" height="11" />
          <rect x="16.5" y="5" width="3.5" height="15" />
        </svg>
      );
    default:
      return null;
  }
}