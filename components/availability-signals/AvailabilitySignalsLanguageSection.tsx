"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

type SignalState = {
  badge: string;
  badgeBg: string;
  badgeText: string;
  badgeIcon: "check" | "alert" | "phone" | "circle-off";
  borderColor: string;
  providerMeaning: string;
  patientSafeExplanation: string;
  recommendedLanguage: string;
  nextStep: string;
};

const SIGNALS: SignalState[] = [
  {
    badge: "Strong signal",
    badgeBg: "#DCF5EE",
    badgeText: "#0B7A62",
    badgeIcon: "check",
    borderColor: ACCENT,
    providerMeaning:
      "Stronger availability confidence based on approved signal inputs and freshness.",
    patientSafeExplanation:
      "This pharmacy may be a stronger place to check, but confirm before traveling.",
    recommendedLanguage:
      '"This is a stronger availability signal. Please confirm with the pharmacy before you go."',
    nextStep: "View pharmacy details or direct pharmacy confirmation.",
  },
  {
    badge: "Limited signal",
    badgeBg: "#FEF3E2",
    badgeText: "#92540A",
    badgeIcon: "alert",
    borderColor: "#F59E0B",
    providerMeaning:
      "Availability information may be older, incomplete, or less certain.",
    patientSafeExplanation:
      "This result may still be useful, but direct pharmacy confirmation is recommended.",
    recommendedLanguage:
      '"This information may be limited. Contact the pharmacy before making a trip."',
    nextStep: "Contact pharmacy, expand search, or create alert.",
  },
  {
    badge: "Confirmation needed",
    badgeBg: "#E8F0FE",
    badgeText: "#2A5BD7",
    badgeIcon: "phone",
    borderColor: "#3B5BDB",
    providerMeaning:
      "Not enough confidence to present a stronger availability signal.",
    patientSafeExplanation:
      "The patient should contact the pharmacy directly before acting.",
    recommendedLanguage:
      '"ZoikoMeds cannot confirm enough from current signals. Please check directly with the pharmacy."',
    nextStep: "Call or request confirmation where supported.",
  },
  {
    badge: "No current signal",
    badgeBg: "#F0F2F7",
    badgeText: "#5B6478",
    badgeIcon: "circle-off",
    borderColor: "#C8CDD9",
    providerMeaning:
      "No usable availability signal data for that medicine and location.",
    patientSafeExplanation:
      "The patient may need to search a wider area, check later, or create an alert.",
    recommendedLanguage:
      '"There is no current signal here. Try expanding the area or set an alert for updates."',
    nextStep: "Expand radius, create alert, or search another location.",
  },
];

export default function AvailabilitySignalsLanguageSection() {
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
        <div className="mx-auto max-w-2xl text-center">
          <Reveal index={0} active={mounted}>
            <h2 className="text-[2rem] font-extrabold leading-tight text-[#0F1F4E] sm:text-[2.2rem]">
              The signal language providers and
            </h2>
          </Reveal>
          <Reveal index={1} active={mounted}>
            <p className="text-[2rem] font-extrabold leading-tight sm:text-[2.2rem]" style={{ color: ACCENT }}>
              patients see.
            </p>
          </Reveal>
          <Reveal index={2} active={mounted}>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-[#5B6478]">
              One shared vocabulary across search, saved searches, alerts,
              caregiver support, and trust education — each state with an icon,
              a color, a label, plain-English meaning, and provider-safe
              language. Never color alone.
            </p>
          </Reveal>
        </div>

        {/* ── 2×2 signal cards ── */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SIGNALS.map((signal, i) => (
            <SignalCard key={signal.badge} signal={signal} index={i} active={mounted} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SignalCard                                                           */
/* ------------------------------------------------------------------ */
function SignalCard({
  signal,
  index,
  active,
}: {
  signal: SignalState;
  index: number;
  active: boolean;
}) {
  return (
    <Reveal index={index + 3} active={active}>
      <div
        className="flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: signal.borderColor,
          borderWidth: "1.5px",
          boxShadow: `0 4px 24px -10px ${signal.borderColor}33`,
        }}
      >
        {/* Badge */}
        <div className="mb-5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12.5px] font-semibold"
            style={{ backgroundColor: signal.badgeBg, color: signal.badgeText }}
          >
            <BadgeIcon name={signal.badgeIcon} color={signal.badgeText} />
            {signal.badge}
          </span>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          <Row label="Provider Meaning" value={signal.providerMeaning} />
          <Row label="Patient-Safe Explanation" value={signal.patientSafeExplanation} />

          {/* Recommended language — blockquote style */}
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9AA3B5]">
              Recommended Language
            </p>
            <blockquote
              className="border-l-4 pl-3 text-[12.5px] italic leading-relaxed text-[#5B6478]"
              style={{ borderColor: signal.borderColor }}
            >
              {signal.recommendedLanguage}
            </blockquote>
          </div>

          <Row label="Next Step" value={signal.nextStep} />
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Row                                                                  */
/* ------------------------------------------------------------------ */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9AA3B5]">
        {label}
      </p>
      <p className="text-[13px] leading-relaxed text-[#5B6478]">{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Badge icons                                                          */
/* ------------------------------------------------------------------ */
function BadgeIcon({ name, color }: { name: SignalState["badgeIcon"]; color: string }) {
  const c = { width: 13, height: 13, viewBox: "0 0 16 16", fill: "none" as const, stroke: color, strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "check":
      return <svg {...c}><path d="M3 8.5l3.5 3.5 6.5-7" /></svg>;
    case "alert":
      return <svg {...c}><path d="M8 2L1.5 13h13L8 2z" /><path d="M8 6.5v3M8 11.5v.5" /></svg>;
    case "phone":
      return <svg {...c}><path d="M3 2.5c0-.4.3-.7.6-.6l2 .3c.3.1.5.3.6.6l.4 1.5c.1.3 0 .6-.2.8l-.9.9c.6 1.2 1.5 2.2 2.7 2.7l.9-.9c.2-.2.5-.3.8-.2l1.5.4c.3.1.5.4.6.6l.3 2c.1.3-.2.7-.6.7C8.3 13 3 7.7 3 2.5z" /></svg>;
    case "circle-off":
      return <svg {...c}><circle cx="8" cy="8" r="6" /><path d="M4 4l8 8" /></svg>;
  }
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div style={{ opacity: active ? undefined : 0, animation: active ? `avSigLangFadeUp 0.6s ease-out ${index * 80}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes avSigLangFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}