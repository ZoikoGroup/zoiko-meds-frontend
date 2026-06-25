"use client";

import { useEffect, useRef, useState } from "react";

/**
 * JoinNetworkControlsSection
 * "Your data, your workflow, your professional judgment" section —
 * header, a 2-column list of six control items (icon + title + copy),
 * and a closing disclaimer bar with a left accent border.
 */

const CONTROLS = [
  {
    icon: "monitor",
    title: "No exact public stock counts",
    description:
      "ZoikoMeds does not publicly expose exact stock quantities. Availability is shown through confidence-based signals.",
  },
  {
    icon: "person",
    title: "Pharmacist judgment comes first",
    description:
      "We do not replace pharmacist judgment, prescription validation, eligibility checks, counseling, or dispensing decisions.",
  },
  {
    icon: "gear",
    title: "Participation controls",
    description:
      "Manage visibility, pause participation, adjust signal settings, and update confirmation workflows where supported.",
  },
  {
    icon: "phone",
    title: "Confirmation request controls",
    description:
      "Choose how confirmation requests are routed, reviewed, answered, limited, or paused according to workflow capacity.",
  },
  {
    icon: "shield",
    title: "Controlled medicine safeguards",
    description:
      "Restricted, controlled, high-risk, or jurisdiction-sensitive medicines may be suppressed, limited, or routed through extra controls.",
  },
  {
    icon: "doc",
    title: "Audit and accountability",
    description:
      "Material changes to profile, visibility, signal status, and confirmation workflows are logged for governance and support.",
  },
] as const;

export default function JoinNetworkControlsSection() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------------- Header ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          {mounted ? (
            <>
              <Reveal index={0}>
                <h2 className="font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-tight text-[#0F1F4E] sm:text-[2.25rem]">
                  Your data, your workflow, your
                  <br />
                  <span className="text-[#00A99D]">professional judgment.</span>
                </h2>
              </Reveal>

              <Reveal index={1}>
                <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-[#5B6478]">
                  The controls that keep your pharmacy in charge — stated
                  plainly.
                </p>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Controls list ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mounted
            ? CONTROLS.map((c, i) => (
                <ControlItem key={c.title} {...c} index={i} />
              ))
            : CONTROLS.map((_, i) => <ItemSkeleton key={i} />)}
        </div>

        {/* ---------------- Disclaimer bar ---------------- */}
        <div className="mt-5">
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
      className="animate-[joinNetworkControlFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 100}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes joinNetworkControlFadeUp {
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
/*  Control item                                                       */
/* ----------------------------------------------------------------- */
function ControlItem({
  icon,
  title,
  description,
  index,
}: {
  icon: "monitor" | "person" | "gear" | "phone" | "shield" | "doc";
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group flex items-start gap-4 rounded-2xl border border-[#E7EAF1] bg-white p-5 transition-all duration-300 ease-out animate-[joinNetworkControlFadeUp_0.55s_ease-out_forwards] hover:-translate-y-0.5 hover:border-[#9FE3D3] hover:shadow-[0_12px_28px_-16px_rgba(0,169,157,0.25)]"
      style={{ opacity: 0, animationDelay: `${250 + index * 90}ms` }}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#DCF5EE] text-[#00A99D] transition-transform duration-300 group-hover:scale-110">
        <ControlIcon name={icon} />
      </span>

      <div>
        <h3 className="text-[14px] font-bold text-[#0F1F4E]">{title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5B6478]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ControlIcon({
  name,
}: {
  name: "monitor" | "person" | "gear" | "phone" | "shield" | "doc";
}) {
  const common = { viewBox: "0 0 24 24", fill: "none" as const, className: "h-4.5 w-4.5" };

  switch (name) {
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="11" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 20h7M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5.5 19c.8-3 3.3-5 6.5-5s5.7 2 6.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.3 6.3l1.5 1.5M16.2 16.2l1.5 1.5M6.3 17.7l1.5-1.5M16.2 7.8l1.5-1.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
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
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 3l7 2.6v5.4c0 4.7-3 7.8-7 9.3-4-1.5-7-4.6-7-9.3V5.6L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
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
  }
}

/* ----------------------------------------------------------------- */
/*  Note bar                                                           */
/* ----------------------------------------------------------------- */
function NoteBar() {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-[#E7EAF1] border-l-4 border-l-[#0F1F4E] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_-14px_rgba(15,31,78,0.25)] animate-[joinNetworkControlFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "850ms" }}
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF1F6] text-[#5B6478]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 5.5v.01M8 7.5v3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">
        ZoikoMeds supports medicine availability communication. It does
        not sell, dispense, deliver, prescribe, reserve, recommend,
        allocate, or guarantee medicines.
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
      <div className="h-8 w-full max-w-sm animate-pulse rounded-lg bg-white" />
      <div className="h-8 w-56 animate-pulse rounded-lg bg-white" />
      <div className="h-4 w-full max-w-md animate-pulse rounded bg-white" />
    </div>
  );
}

function ItemSkeleton() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#E7EAF1] bg-white p-5">
      <div className="h-9 w-9 flex-shrink-0 animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
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