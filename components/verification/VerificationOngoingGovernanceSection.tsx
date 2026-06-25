"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#0FAA87";

const GOVERNANCE = [
  {
    icon: "refresh",
    title: "Periodic review",
    description:
      "ZoikoMeds may review profiles, participation status, contact information, license references, and role permissions.",
  },
  {
    icon: "trend",
    title: "Change triggers",
    description:
      "Re-review may follow changes in ownership, address, license status, branch structure, users, or participation behavior.",
  },
  {
    icon: "phone",
    title: "Dispute and correction",
    description:
      "Patients, pharmacies, and authorized stakeholders can report inaccurate information or suspected misuse.",
  },
  {
    icon: "lock",
    title: "Access controls",
    description:
      "Portal access is governed by verified roles, branch permissions, MFA, and least-privilege access.",
  },
  {
    icon: "doc",
    title: "Audit history",
    description:
      "Material changes to profile data, visibility, user access, signal settings, and confirmation workflows are logged.",
  },
  {
    icon: "pause",
    title: "Pause, limit, or removal",
    description:
      "Participation may be paused, limited, suspended, or removed if verification fails, access is misused, or rules are violated.",
  },
] as const;

export default function PharmacyPortalOngoingGovernanceSection() {
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
                  Verification{" "}
                  <span style={{ color: ACCENT }}>must stay current.</span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#5B6478]">
                  Participation is governed over time — not a one-time
                  checkbox.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Governance cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {mounted
            ? GOVERNANCE.map((g, i) => (
                <GovernanceCard key={g.title} {...g} index={i} />
              ))
            : GOVERNANCE.map((_, i) => <CardSkeleton key={i} />)}
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
      className="animate-[portalGovernanceFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes portalGovernanceFadeUp {
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
/*  Governance card                                                      */
/* ----------------------------------------------------------------- */
function GovernanceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: "refresh" | "trend" | "phone" | "lock" | "doc" | "pause";
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group flex items-start gap-4 rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 ease-out animate-[portalGovernanceFadeUp_0.6s_ease-out_forwards] hover:-translate-y-1"
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
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
      >
        <GovernanceIcon name={icon} />
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

function GovernanceIcon({
  name,
}: {
  name: "refresh" | "trend" | "phone" | "lock" | "doc" | "pause";
}) {
  const common = { viewBox: "0 0 24 24", fill: "none" as const, className: "h-4.5 w-4.5" };

  switch (name) {
    case "refresh":
      return (
        <svg {...common}>
          <path
            d="M19 9a7 7 0 0 0-12.6-3.2M5 15a7 7 0 0 0 12.6 3.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M19 4.5V9h-4.5M5 19.5V15h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trend":
      return (
        <svg {...common}>
          <path
            d="M4 16l5-5 4 4 7-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15.5 8h4.5v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M5 4.5c0-.6.5-1 1-.9l3 .5c.4.1.8.4.9.8l.6 2.2c.1.4 0 .9-.3 1.2l-1.3 1.3c.8 1.8 2.3 3.3 4.1 4.1l1.3-1.3c.3-.3.8-.4 1.2-.3l2.2.6c.4.1.7.5.8.9l.5 3c.1.5-.3 1-.9 1-7.7 0-13.1-5.4-13.1-13.1z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <rect x="5.5" y="3.5" width="13" height="17" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "pause":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.5 9v6M14.5 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
      className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] border-l-4 border-l-[#0F1F4E] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_-14px_rgba(15,31,78,0.25)] animate-[portalGovernanceFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "950ms" }}
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EAEDF2] text-[#3A4258]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 7v4M8 5.2v.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">
        Ongoing governance protects patients, pharmacies, and the
        integrity of the network.{" "}
        <span className="font-semibold text-[#0F1F4E]">
          It is not a public disciplinary record or a regulatory
          enforcement process.
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