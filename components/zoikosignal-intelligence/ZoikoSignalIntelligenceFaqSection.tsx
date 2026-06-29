"use client";

import { useEffect, useState } from "react";

const ACCENT = "#0FAA87";

const FAQ_ITEMS = [
  {
    question: "What is ZoikoSignal™?",
    answer:
      "ZoikoSignal™ is ZoikoMeds enterprise intelligence for aggregated medicine availability signals, shortage pressure, demand movement, restock dynamics, and access-risk visibility.",
  },
  {
    question: "Does ZoikoSignal™ sell patient data?",
    answer:
      "No. ZoikoSignal™ never sells identifiable patient-level data. All outputs are aggregated, anonymized, and subject to privacy thresholds before they leave the platform.",
  },
  {
    question: "Does ZoikoSignal™ show exact stock?",
    answer:
      "No. ZoikoSignal™ does not expose exact public pharmacy stock counts, confidential inventory values, or pharmacy-sensitive operating data.",
  },
  {
    question: "Is ZoikoSignal™ an official shortage database?",
    answer:
      "No. ZoikoSignal™ supports shortage pressure intelligence but does not claim to be a regulator shortage database unless legally authorized to do so.",
  },
] as const;

export default function ZoikoSignalIntelligenceFaqSection() {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F6FA] py-16 sm:py-20">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* ---------------- Eyebrow + heading ---------------- */}
        {mounted ? (
          <>
            <Reveal index={0}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                05 · Answers
              </span>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-3 font-[var(--font-plus-jakarta-sans)] text-3xl font-bold leading-[1.2] text-[#0F1F4E] sm:text-[2.35rem]">
                Intelligence questions, answered.
              </h2>
            </Reveal>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="h-3 w-24 animate-pulse rounded bg-[#E4E8F0]" />
            <div className="h-9 w-full max-w-md animate-pulse rounded-lg bg-[#E4E8F0]" />
          </div>
        )}

        {/* ---------------- Accordion ---------------- */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_16px_40px_-16px_rgba(15,31,78,0.10)]">
          {mounted
            ? FAQ_ITEMS.map((item, i) => (
                <Reveal key={item.question} index={2 + i}>
                  <FaqRow
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === i}
                    isLast={i === FAQ_ITEMS.length - 1}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === i ? null : i))
                    }
                  />
                </Reveal>
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <FaqRowSkeleton key={i} isLast={i === 3} />
              ))}
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
      style={{ opacity: 0, animationDelay: `${index * 80}ms` }}
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
/*  FAQ row                                                            */
/* ----------------------------------------------------------------- */
function FaqRow({
  question,
  answer,
  isOpen,
  isLast,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${isLast ? "" : "border-b border-[#EEF1F6]"}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-[#F7F9FC]"
      >
        <span className="text-[15px] font-bold text-[#0F1F4E]">
          {question}
        </span>
        <span
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out"
          style={{
            color: isOpen ? "#D64545" : ACCENT,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2.5V13.5M2.5 8H13.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-[#8891A4]">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FaqRowSkeleton({ isLast }: { isLast: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-5 ${
        isLast ? "" : "border-b border-[#EEF1F6]"
      }`}
    >
      <div className="h-4 w-56 animate-pulse rounded bg-[#E4E8F0]" />
      <div className="h-6 w-6 animate-pulse rounded-full bg-[#E4E8F0]" />
    </div>
  );
}