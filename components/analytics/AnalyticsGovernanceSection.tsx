"use client";

import { useEffect, useRef, useState } from "react";

type ControlRow = {
  controlArea: string;
  requirement: string;
  uxTreatment: string;
};

const CONTROL_ROWS: ControlRow[] = [
  {
    controlArea: "Role-based access",
    requirement: "Analytics depth changes by stakeholder role and authorization.",
    uxTreatment: "Locked modules show reason and route to request access.",
  },
  {
    controlArea: "No clinical advice",
    requirement: "No diagnosis, treatment, prescribing, or substitution guidance.",
    uxTreatment: "Persistent disclaimer in footer and sensitive modules.",
  },
  {
    controlArea: "No unauthorized quantity exposure",
    requirement:
      "Exact inventory quantities not visible unless contractually authorized and lawful.",
    uxTreatment: "Confidence tiers, ranges, or status labels by default.",
  },
  {
    controlArea: "Audit trail",
    requirement: "Important report exports and role-sensitive views are traceable.",
    uxTreatment: "Export modal includes timestamp, user, filters, and permitted-use label.",
  },
  {
    controlArea: "Data freshness",
    requirement: "Users must understand when signals were last updated.",
    uxTreatment: "Every dashboard module includes a freshness label.",
  },
  {
    controlArea: "Explainability",
    requirement: "Analytics should explain why confidence or risk changed.",
    uxTreatment: "Expandable \u201cWhy this changed\u201d panel.",
  },
];

export default function AnalyticsGovernanceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F6FA] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <GovernanceFadeUp show={isVisible} delay={0}>
          <span className="text-xs font-bold tracking-[0.18em] text-[#0FAA87]">
            06 &nbsp;&middot;&nbsp; GOVERNANCE, PRIVACY &amp; CONTROLS
          </span>
        </GovernanceFadeUp>

        <GovernanceFadeUp show={isVisible} delay={80}>
          <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.3rem] lg:text-[2.5rem]">
            Healthcare-grade <span className="text-[#0FAA87]">data discipline.</span>
          </h2>
        </GovernanceFadeUp>

        <GovernanceFadeUp show={isVisible} delay={160}>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#0F1F4E]">
                    <th className="w-[22%] px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-white sm:px-8">
                      CONTROL AREA
                    </th>
                    <th className="w-[40%] px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-white sm:px-8">
                      REQUIREMENT
                    </th>
                    <th className="px-6 py-3.5 text-xs font-bold tracking-[0.1em] text-white sm:px-8">
                      UX TREATMENT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONTROL_ROWS.map((row, i) => (
                    <tr
                      key={row.controlArea}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"}
                    >
                      <td className="px-6 py-5 align-top text-sm font-bold text-[#0F1F4E] sm:px-8">
                        {row.controlArea}
                      </td>
                      <td className="px-6 py-5 align-top text-sm leading-relaxed text-[#4B5567] sm:px-8">
                        {row.requirement}
                      </td>
                      <td className="px-6 py-5 align-top text-sm leading-relaxed text-[#4B5567] sm:px-8">
                        {row.uxTreatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </GovernanceFadeUp>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Fade-up wrapper (bottom -> top)     */
/* ---------------------------------- */
function GovernanceFadeUp({
  show,
  delay = 0,
  children,
}: {
  show: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}