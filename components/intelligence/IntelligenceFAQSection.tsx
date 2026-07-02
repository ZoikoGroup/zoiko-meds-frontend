"use client";

import { useEffect, useRef, useState } from "react";


const ACCENT = "#0FAA87";

const FAQS = [
  {
    question: "What is medicine availability intelligence?",
    answer: "Medicine availability intelligence is the structured analysis of medicine access signals, pharmacy confirmations, demand patterns, shortage indicators, and regional availability confidence.",
  },
  {
    question: "What is ZoikoMeds Intelligence?",
    answer: "ZoikoMeds Intelligence is the analytics, AI Insights, and reporting layer built on top of ZoikoMeds availability data, helping stakeholders understand and act on medicine access patterns.",
  },
  {
    question: "Does ZoikoMeds sell or dispense medicine?",
    answer: "No. ZoikoMeds does not sell, prescribe, dispense, or deliver medicine. Intelligence supports visibility and coordination only.",
  },
  {
    question: "What are ZoikoMeds AI Insights?",
    answer: "AI Insights identify potential shortage signals, access risks, and confidence movement using structured, explainable models that remain reviewable by authorized humans.",
  },
  {
    question: "Can ZoikoMeds show exact pharmacy inventory quantities?",
    answer: "No. ZoikoMeds uses confidence tiers and responsible aggregation instead of exposing exact pharmacy inventory quantities to unauthorized users.",
  },
  {
    question: "Who is ZoikoMeds Intelligence for?",
    answer: "Pharmacy networks, healthcare organizations, wholesalers and distributors, public-health stakeholders, and enterprise partners.",
  },
  {
    question: "Does ZoikoMeds provide medical advice?",
    answer: "No. ZoikoMeds Intelligence does not provide clinical advice, diagnosis, treatment, or patient-specific medical decisions.",
  },
  {
    question: "How can an organization access ZoikoMeds Intelligence?",
    answer: "Organizations can request a briefing to discuss their use case. Access is governed by verification, role, and contract scope.",
  },
] as const;

export default function IntelligenceFAQSection() {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setMounted(true); observer.disconnect(); }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section ref={ref} className="relative w-full bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Eyebrow ── */}
        <Reveal index={0} active={mounted}>
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            <span className="opacity-50 text-[#0F1F4E]">10</span>
            <span className="opacity-30 text-[#0F1F4E]">·</span>
            Frequently Asked Questions
          </p>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal index={1} active={mounted}>
          <h2 className="text-[2rem] font-extrabold leading-tight sm:text-[2.3rem]">
            <span className="text-[#0F1F4E]">Questions about </span>
            <span style={{ color: ACCENT }}>ZoikoMeds Intelligence.</span>
          </h2>
        </Reveal>

        {/* ── Accordion card ── */}
        <Reveal index={2} active={mounted}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E7EAF1] bg-white shadow-[0_4px_24px_-10px_rgba(15,31,78,0.08)]">
            <div className="divide-y divide-[#F0F2F7]">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-[#F8FAFC] sm:px-8"
                    >
                      <span className="text-[14px] font-bold text-[#0F1F4E]">{faq.question}</span>
                      <span
                        className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center transition-transform duration-300 ease-out"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: ACCENT }}
                      >
                        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                          <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Smooth height-agnostic expand/collapse via CSS grid-template-rows */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-[#5B6478] sm:px-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div style={{ opacity: active ? undefined : 0, animation: active ? `intelligenceFaqFadeUp 0.6s ease-out ${index * 90}ms both` : "none" }}>
      {children}
      <style>{`
        @keyframes intelligenceFaqFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}