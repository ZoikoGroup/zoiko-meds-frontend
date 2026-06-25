"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const COMMITMENTS = [
  {
    icon: "eyeOff",
    title: "No exact public stock exposure",
    description:
      "Workflows never publicly expose exact stock, confidential inventory, supplier data, wholesale levels, or pricing.",
  },
  {
    icon: "ban",
    title: "No reservation or allocation",
    description:
      "Confirmation requests do not reserve, allocate, hold, sell, or guarantee medicine.",
  },
  {
    icon: "user",
    title: "Pharmacist judgment comes first",
    description:
      "Prescription rules, pharmacist judgment, eligibility, counseling, pharmacy policies, and local laws always apply.",
  },
  {
    icon: "doc",
    title: "Data-minimized requests",
    description:
      "Requests collect only what is necessary to route and support availability follow-up.",
  },
  {
    icon: "shield",
    title: "Restricted medicine safeguards",
    description:
      "Controlled, restricted, high-risk, or jurisdiction-sensitive medicines may be suppressed, limited, or routed through extra controls.",
  },
  {
    icon: "userBadge",
    title: "Role-based pharmacy access",
    description:
      "Only authorized users review and respond to requests for their approved pharmacy, branch, or organization.",
  },
  {
    icon: "template",
    title: "Template governance",
    description:
      "Response templates are approved by product, legal, compliance, and pharmacy operations before launch.",
  },
  {
    icon: "gauge",
    title: "Queue health controls",
    description:
      "Volume limits, expiry, pause states, support escalation, and high-volume fallback behavior are supported.",
  },
] as const;

export default function ConfirmationRequestsGovernanceSection() {
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
                  Built for controlled pharmacy{" "}
                  <span style={{ color: ACCENT }}>communication.</span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  The governance and privacy commitments behind every
                  confirmation workflow.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Commitment cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {mounted
            ? COMMITMENTS.map((c, i) => (
                <CommitmentCard key={c.title} {...c} index={i} />
              ))
            : COMMITMENTS.map((_, i) => <CardSkeleton key={i} />)}
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
      className="animate-[confirmationGovernanceFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes confirmationGovernanceFadeUp {
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
/*  Commitment card                                                      */
/* ----------------------------------------------------------------- */
function CommitmentCard({
  icon,
  title,
  description,
  index,
}: {
  icon:
    | "eyeOff"
    | "ban"
    | "user"
    | "doc"
    | "shield"
    | "userBadge"
    | "template"
    | "gauge";
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group flex items-start gap-4 rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 ease-out animate-[confirmationGovernanceFadeUp_0.6s_ease-out_forwards] hover:-translate-y-1"
      style={{
        opacity: 0,
        animationDelay: `${250 + index * 90}ms`,
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
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
      >
        <CommitmentIcon name={icon} />
      </div>

      <div>
        <h3 className="text-[14.5px] font-bold text-[#0F1F4E]">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#5B6478]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CommitmentIcon({
  name,
}: {
  name:
    | "eyeOff"
    | "ban"
    | "user"
    | "doc"
    | "shield"
    | "userBadge"
    | "template"
    | "gauge";
}) {
  const common = { viewBox: "0 0 24 24", fill: "none" as const, className: "h-4.5 w-4.5" };

  switch (name) {
    case "eyeOff":
      return (
        <svg {...common}>
          <path
            d="M3.5 12s3.5-6.5 8.5-6.5 8.5 6.5 8.5 6.5-3.5 6.5-8.5 6.5S3.5 12 3.5 12z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "ban":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M6.5 6.5l11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.2" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M5 19.5c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <rect x="5.5" y="3.5" width="13" height="17" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 3.5l7 2.5v5.4c0 4.6-3 7.7-7 9.1-4-1.4-7-4.5-7-9.1V6l7-2.5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12l2 2 3.6-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "userBadge":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M6 19c0-3 2.7-5 6-5s6 2 6 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M9.5 19.5l1.2-1.5 1.3 1 1.3-1 1.2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "template":
      return (
        <svg {...common}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4.5 9.5h15" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path
            d="M4.5 16a7.5 7.5 0 1 1 15 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M12 16l3.2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
  }
}

/* ----------------------------------------------------------------- */
/*  Note bar                                                            */
/* ----------------------------------------------------------------- */
function NoteBar() {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] border-l-4 border-l-[#0F1F4E] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_-14px_rgba(15,31,78,0.25)] animate-[confirmationGovernanceFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "1000ms" }}
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EAEDF2] text-[#3A4258]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 7v4M8 5.2v.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">
        ZoikoMeds confirmation requests support structured availability
        communication.{" "}
        <span className="font-semibold text-[#0F1F4E]">
          They do not reserve medicines, guarantee stock, confirm
          dispensing eligibility, validate prescriptions, provide medical
          advice, or replace pharmacist judgment.
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
      <div className="h-8 w-2/3 max-w-xs animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-9 w-9 flex-shrink-0 animate-pulse rounded-xl bg-[#E4E8F0]" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-[#E4E8F0]" />
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