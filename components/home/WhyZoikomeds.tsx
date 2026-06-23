"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyZoikomeds() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── LEFT COPY ── */}
        <div className="flex-1 min-w-0">
          {/* eyebrow */}
          <div
            className={`inline-flex items-center border border-[#2DC9A0] rounded-full px-4 py-1 mb-6 transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="text-xs font-semibold tracking-widest text-[#1a3a3a] uppercase">
              Why Zoikomeds Exists
            </span>
          </div>

          {/* headline */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.05] text-[#0d2636] mb-6
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "120ms" }}
          >
            MEDICINE ACCESS
            <br />
            SHOULD NOT DEPEND
            <br />
            ON PHONE CALLS &amp;{" "}
            <span className="text-[#2DC9A0]">GUESSWORK.</span>
          </h2>

          {/* body */}
          <p
            className={`text-[#4a6070] text-base sm:text-lg leading-relaxed max-w-md mb-10
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "240ms" }}
          >
            Every day, patients and caregivers lose time locating medicines.
            Pharmacies handle repeated availability calls. Clinicians prescribe
            without real-time local supply visibility. Governments see shortage
            patterns after patients already feel the impact.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "360ms" }}
          >
            <button className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2DC9A0] text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(45,201,160,0.45)] hover:-translate-y-0.5 active:translate-y-0">
              {/* shimmer on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              See How It Works
            </button>

            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#0d2636]/20 text-[#0d2636] font-semibold text-sm transition-all duration-300 hover:border-[#2DC9A0] hover:text-[#2DC9A0] hover:-translate-y-0.5 active:translate-y-0">
              Explore Platform
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT VISUAL ── */}
        <div
          className={`flex-1 min-w-0 relative transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* card wrapper */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full aspect-[4/3] lg:aspect-[3/2]">
            {/* pharmacy image — replace src with your actual image */}
            <img
              src="/images/pharmacy-hero.jpg"
              alt="Pharmacist checking medicine availability"
              className="w-full h-full object-cover"
              onError={(e) => {
                // fallback gradient when image is missing
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            {/* gradient overlay so cards stay legible */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2636]/10 via-transparent to-[#0d2636]/30 pointer-events-none" />

            {/* ── floating card: Privacy & safety ── */}
            <div
              className={`absolute top-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-3.5 max-w-[220px]
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="text-[10px] font-semibold text-[#2DC9A0] uppercase tracking-wider mb-1">
                Privacy &amp; safety
              </p>
              <p className="text-xs font-semibold text-[#0d2636] leading-snug">
                Privacy-led architecture &amp; jurisdiction-aware design
              </p>
              {/* check tick */}
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2DC9A0] flex items-center justify-center shadow">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>

            {/* ── floating card: Verified / Availability signals ── */}
            <div
              className={`absolute bottom-20 right-6 bg-[#0d2636] text-white rounded-2xl shadow-xl px-5 py-3.5 max-w-[220px]
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "750ms" }}
            >
              <p className="text-[10px] font-semibold text-[#2DC9A0] uppercase tracking-wider mb-1">
                Availability signals
              </p>
              <p className="text-xl font-extrabold text-[#2DC9A0] leading-tight">
                Verified
              </p>
              <p className="text-xs text-white/70 mt-0.5">Pharmacy confidence scoring</p>
            </div>

            {/* ── floating card: Scan prescription ── */}
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl px-5 py-2.5 flex items-center gap-3 whitespace-nowrap
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "900ms" }}
            >
              {/* scanner icon */}
              <span className="w-8 h-8 rounded-full bg-[#2DC9A0]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#2DC9A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#0d2636]">Scan prescription</span>
              <span className="text-xs text-[#4a6070]">Optional →</span>
            </div>

            {/* animated SVG path lines overlay (decorative) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 400"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M 50 320 C 150 200, 300 250, 420 180"
                stroke="#2DC9A0"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.5"
                className={`transition-all duration-1000 ${isVisible ? "opacity-50" : "opacity-0"}`}
                style={{ transitionDelay: "500ms" }}
              />
              <path
                d="M 80 350 C 200 280, 350 300, 470 220"
                stroke="#2DC9A0"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.3"
                className={`transition-all duration-1000 ${isVisible ? "opacity-30" : "opacity-0"}`}
                style={{ transitionDelay: "600ms" }}
              />
              {/* animated dot on path */}
              <circle r="5" fill="#2DC9A0" opacity="0.8">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 50 320 C 150 200, 300 250, 420 180"
                />
              </circle>
            </svg>
          </div>

          {/* subtle glow behind card */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#2DC9A0]/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
