"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

const PROHIBITED = [
  "Diagnosis, symptoms, clinical notes, prescription images, medical records, insurance IDs, or date of birth.",
  "Exact pharmacy stock, confidential inventory, supplier data, procurement terms, pricing, or license documents.",
  "API keys, passwords, access tokens, security logs, unreleased enterprise information, or confidential documents.",
  "Emergency medical details or urgent patient-specific clinical requests.",
] as const;

const ROUTING = [
  "Patients and caregivers seeking availability route to Search Medicines, not general contact.",
  "Medical, clinical, prescribing, treatment, or emergency inquiries route out of ZoikoMeds with clear language.",
  "Pharmacy verification, portal access, confirmation, or inventory-signal issues route to Pharmacy Support.",
  "Enterprise and public-sector requests route to CRM with organization type, interest, and source context.",
  "Privacy, legal, security, and accessibility matters route to controlled workflows with auditability and escalation.",
] as const;

export default function ContactSafeStandardsSection() {
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
        {/* ---------------- Header (left-aligned) ---------------- */}
        <div className="max-w-2xl">
          {mounted ? (
            <>
              <Reveal index={0}>
                <p
                  className="text-[12px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: ACCENT }}
                >
                  03 · Safe contact standards
                </p>
              </Reveal>

              <Reveal index={1}>
                <h2 className="font-[var(--font-plus-jakarta-sans)] mt-2 text-3xl font-bold leading-tight text-[#0F1F4E] sm:text-[2.1rem]">
                  Contact safely. Route correctly.{" "}
                  <span style={{ color: ACCENT }}>
                    Protect sensitive information.
                  </span>
                </h2>
              </Reveal>
            </>
          ) : (
            <HeaderSkeleton />
          )}
        </div>

        {/* ---------------- Two-panel layout (equal height) ---------------- */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {mounted ? <ProhibitedPanel /> : <PanelSkeleton rows={4} />}
          {mounted ? <RoutingPanel /> : <PanelSkeleton rows={5} />}
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
      className="animate-[contactSafeStandardsFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: `${index * 90}ms` }}
    >
      {children}
      <style jsx>{`
        @keyframes contactSafeStandardsFadeUp {
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
/*  Prohibited panel                                                    */
/* ----------------------------------------------------------------- */
function ProhibitedPanel() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white animate-[contactSafeStandardsFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "250ms" }}
    >
      <div className="flex items-center gap-2 px-6 py-5">
        <svg className="h-4 w-4 text-[#C5453F]" viewBox="0 0 16 16" fill="none">
          <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <h3 className="text-[14.5px] font-bold text-[#C5453F]">
          Do not submit through public forms
        </h3>
      </div>

      <div className="flex flex-1 flex-col">
        {PROHIBITED.map((item) => (
          <div key={item} className="flex flex-1 flex-col">
            <div className="h-px w-full bg-[#EEF0F5]" />
            <div className="flex flex-1 items-start gap-2.5 px-6 py-4">
              <svg
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#C5453F]"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] leading-relaxed text-[#3A4258]">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Routing panel                                                       */
/* ----------------------------------------------------------------- */
function RoutingPanel() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white animate-[contactSafeStandardsFadeUp_0.6s_ease-out_forwards]"
      style={{ opacity: 0, animationDelay: "350ms" }}
    >
      <div className="flex items-center gap-2 px-6 py-5">
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" style={{ color: ACCENT }}>
          <path
            d="M3.5 8.5l3 3 6-6.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-[14.5px] font-bold text-[#0F1F4E]">
          How requests are routed safely
        </h3>
      </div>

      <div className="flex flex-1 flex-col">
        {ROUTING.map((item) => (
          <div key={item} className="flex flex-1 flex-col">
            <div className="h-px w-full bg-[#EEF0F5]" />
            <div className="flex flex-1 items-start gap-2.5 px-6 py-4">
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
              <p className="text-[13px] leading-relaxed text-[#3A4258]">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/*  Skeletons                                                           */
/* ----------------------------------------------------------------- */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-3 w-48 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="h-8 w-full max-w-md animate-pulse rounded-lg bg-[#E4E8F0]" />
      <div className="h-8 w-2/3 max-w-sm animate-pulse rounded-lg bg-[#E4E8F0]" />
    </div>
  );
}

function PanelSkeleton({ rows }: { rows: number }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E7EAF1] bg-white p-6">
      <div className="h-4 w-48 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="mt-4 flex-1 space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-3 w-full animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-[#E4E8F0]" />
          </div>
        ))}
      </div>
    </div>
  );
}