"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Medicine Availability Discovery",
    desc: "Search verified pharmacies and view availability signals subject to jurisdictional rules and pharmacy confirmation.",
    accent: "#2DC9A0",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Pharmacy Verification",
    desc: "Pharmacies are credential-gated and reviewed before appearing as verified supply nodes.",
    accent: "#2DC9A0",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Availability Confidence",
    desc: "ZoikoAvail™ classifies signals by freshness, confirmation quality, and pharmacy reliability.",
    accent: "#2DC9A0",
    featured: true,
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Shortage Intelligence",
    desc: "ZoikoSignal™ converts aggregated signals into shortage visibility for enterprise and public-sector use.",
    accent: "#a78bfa",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Medicine Identity Normalization",
    desc: "MediBase™ aligns medicine names, brands, generics, strengths, and jurisdiction identifiers.",
    accent: "#60a5fa",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
    title: "Availability Alerts",
    desc: "Users receive notifications when confidence improves or a pharmacy confirms availability.",
    accent: "#2DC9A0",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Account-Based Continuity",
    desc: "Save searches, manage alerts, and control privacy settings — anonymous search always available.",
    accent: "#60a5fa",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Privacy by Design",
    desc: "Data minimization, user control, and strict access governance from architecture upwards.",
    accent: "#f59e0b",
  },
];

export default function PlatformCapabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f0f4f8] py-16 lg:py-24 overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .card-skeleton {
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .card-float-dot {
          animation: floatDot 2.8s ease-in-out infinite;
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid currentColor;
          animation: pulseRing 1.8s ease-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ROW ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div
            className={`transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="inline-flex items-center border border-[#2DC9A0] rounded-full px-4 py-1 mb-5">
              <span className="text-xs font-semibold tracking-widest text-[#1a3a3a] uppercase">
                What Zoikomeds Does
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0d2636] leading-tight">
              Explore our platform capabilities
            </h2>
          </div>

          <p
            className={`lg:max-w-xs text-[#4a6070] text-sm sm:text-base leading-relaxed lg:pt-16
              transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            ZoikoMeds connects verified pharmacy inventory signals with patient search, pharmacy workflows,
            health system visibility, and shortage intelligence across every participating market.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredId === cap.id;
            const delay = `${idx * 70}ms`;

            /* skeleton state before visible */
            if (!isVisible) {
              return (
                <div
                  key={cap.id}
                  className="card-skeleton rounded-2xl h-52"
                  style={{ animationDelay: delay }}
                />
              );
            }

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredId(cap.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative rounded-2xl p-6 cursor-pointer select-none overflow-hidden
                  transition-all duration-500 ease-out group
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${isHovered
                    ? "shadow-2xl -translate-y-2 bg-[#0d2636]"
                    : "bg-white shadow-sm hover:shadow-md"
                  }
                `}
                style={{ transitionDelay: delay }}
              >
                {/* background glow blob on hover */}
                <div
                  className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl transition-all duration-500
                    ${isHovered ? "opacity-20" : "opacity-0"}`}
                  style={{ backgroundColor: cap.accent }}
                />

                {/* top row: icon + circle indicator */}
                <div className="flex items-start justify-between mb-5">
                  {/* icon bubble */}
                  <div
                    className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isHovered ? "scale-110" : ""}`}
                    style={{
                      backgroundColor: isHovered ? `${cap.accent}22` : "#f0f4f8",
                      color: isHovered ? cap.accent : "#64748b",
                    }}
                  >
                    {cap.icon}
                  </div>

                  {/* floating animated dot */}
                  <div
                    className={`card-float-dot w-7 h-7 rounded-full border-2 transition-all duration-300
                      ${isHovered ? "border-[#2DC9A0] bg-[#2DC9A0]/10" : "border-slate-200 bg-transparent"}`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  />
                </div>

                {/* title */}
                <h3
                  className={`font-bold text-sm mb-2 transition-colors duration-300 leading-snug
                    ${isHovered ? "text-white" : "text-[#0d2636]"}`}
                >
                  {cap.title}
                </h3>

                {/* desc */}
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300
                    ${isHovered ? "text-white/70" : "text-[#64748b]"}`}
                >
                  {cap.desc}
                </p>

                {/* accent bottom bar */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500
                    ${isHovered ? "w-full" : "w-0"}`}
                  style={{ backgroundColor: cap.accent }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
