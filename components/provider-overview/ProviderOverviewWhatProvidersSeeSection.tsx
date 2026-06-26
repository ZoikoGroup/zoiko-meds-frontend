"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

const FEATURE_CARDS = [
  {
    icon: "pulse",
    title: "Availability signal",
    description:
      "Whether ZoikoMeds has a strong, limited, confirmation-needed, or no-current availability signal — shown with icon, label, color, and plain English.",
    safety: "must not imply stock guarantee or dispensing approval.",
  },
  {
    icon: "home",
    title: "Pharmacy details",
    description:
      "Participating verified pharmacy information where available, so patients know where to check and confirm.",
    safety: "no exact public stock quantity exposure.",
  },
  {
    icon: "phone",
    title: "Confirmation guidance",
    description:
      "Prompts the provider or patient to confirm directly with the pharmacy before traveling.",
    safety: "must not become a prescription-validation workflow.",
  },
  {
    icon: "doc",
    title: "Patient-safe output",
    description:
      "Lets care teams provide simple, shareable next-step guidance for patients and caregivers.",
    safety: "no clinical advice, dosing, substitution, or treatment recommendations.",
  },
  {
    icon: "bookmark",
    title: "Account-based follow-up",
    description:
      "Patients or caregivers may save searches and create alerts in their own ZoikoMeds account.",
    safety: "patient/caregiver account features stay separate from provider clinical records.",
  },
] as const;

type IconName = "pulse" | "home" | "phone" | "doc" | "bookmark";

export default function ProviderOverviewWhatProvidersSeeSection() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setMounted(true); observer.disconnect(); }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-xl text-center">
          <Reveal index={0} active={mounted}>
            <h2 className="text-[2rem] font-extrabold leading-tight text-[#0F1F4E] sm:text-[2.2rem]">
              What{" "}
              <span style={{ color: ACCENT }}>providers see.</span>
            </h2>
          </Reveal>
          <Reveal index={1} active={mounted}>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-[#5B6478]">
              Practical outputs that support patient conversations — never
              clinical decisions, diagnosis fields, or treatment plans.
            </p>
          </Reveal>
        </div>

        {/* ── Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* 5 feature cards */}
          {FEATURE_CARDS.map((card, i) => (
            <Reveal key={card.title} index={i + 2} active={mounted}>
              <div className="flex h-full flex-col rounded-2xl border border-[#E7EAF1] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9FE3D3] hover:shadow-[0_10px_28px_-14px_rgba(15,170,135,0.15)]">
                {/* Icon */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#DCF5EE", color: ACCENT }}
                >
                  <FeatureIcon name={card.icon} />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[14.5px] font-bold text-[#0F1F4E]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#5B6478]">
                  {card.description}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-[#F0F2F7]" />

                {/* Safety note */}
                <p className="flex items-start gap-2 text-[12px] leading-relaxed text-[#5B6478]">
                  <SafetyCircle />
                  <span>
                    <span className="font-semibold text-[#0F1F4E]">Safety:</span>{" "}
                    {card.safety}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}

          {/* 6th cell — grey highlight card (no icon) */}
          <Reveal index={7} active={mounted}>
            <div className="flex h-full flex-col rounded-2xl border border-[#E7EAF1] bg-[#F0F3F9] p-6 transition-all duration-300 hover:-translate-y-0.5">
              <h3 className="text-[14.5px] font-bold text-[#0F1F4E]">
                Built for conversations, not records.
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#5B6478]">
                Provider-facing information stays clear enough for patient
                communication and controlled enough for regulated environments
                — no EHR-like layouts, diagnosis fields, treatment plans, or
                clinical decision widgets.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Safety circle icon                                                   */
/* ------------------------------------------------------------------ */
function SafetyCircle() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#9AA3B5]"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 7v3.5M8 5.2v.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature icons                                                        */
/* ------------------------------------------------------------------ */
function FeatureIcon({ name }: { name: IconName }) {
  const common = { viewBox: "0 0 24 24", fill: "none" as const, style: { width: 20, height: 20 } };
  switch (name) {
    case "pulse":
      return (
        <svg {...common}>
          <polyline
            points="2,12 6,12 8,5 10,19 13,9 15,14 17,12 22,12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path
            d="M4 11.5L12 4l8 7.5M6.5 10v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M5 4.5c0-.6.5-1 1-.9l3 .5c.4.1.8.4.9.8l.6 2.2c.1.4 0 .9-.3 1.2l-1.3 1.3c.8 1.8 2.3 3.3 4.1 4.1l1.3-1.3c.3-.3.8-.4 1.2-.3l2.2.6c.4.1.7.5.8.9l.5 3c.1.5-.3 1-.9 1C11.4 18.5 5.5 12.6 5 4.5z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
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
    case "bookmark":
      return (
        <svg {...common}>
          <path
            d="M6 3h12a1 1 0 0 1 1 1v16l-7-3.5L5 20V4a1 1 0 0 1 1-1z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div
      style={{
        opacity: active ? undefined : 0,
        animation: active
          ? `providerSeeFadeUp 0.6s ease-out ${index * 80}ms both`
          : "none",
      }}
    >
      {children}
      <style>{`
        @keyframes providerSeeFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}