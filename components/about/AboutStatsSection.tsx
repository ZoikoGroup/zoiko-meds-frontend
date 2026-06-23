"use client";

import { useEffect, useRef, useState } from "react";

// ── Count-up hook ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1600, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  color: string;
  isText?: boolean;
  display?: string;
}

export default function AboutStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const markets = useCountUp(47, 1400, isVisible);
  const engines = useCountUp(3, 1000, isVisible);

  const stats: StatItem[] = [
    {
      value: markets,
      suffix: "+",
      label: "Planned Market Framework",
      color: "#00A99D",
    },
    {
      value: engines,
      suffix: "",
      label: "Proprietary Platform Engines",
      color: "#00A99D",
    },
    {
      value: 0,
      suffix: "",
      label: "Exact Stock Quantities Exposed",
      color: "#0F1F4E",
      isText: true,
      display: "Zero",
    },
    {
      value: 0,
      suffix: "",
      label: "Pharmacy Signals Only",
      color: "#0F1F4E",
      isText: true,
      display: "Verified",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes statFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-item { opacity: 0; }
        .stats-visible .stat-item-0 { animation: statFadeUp .55s ease .05s forwards; }
        .stats-visible .stat-item-1 { animation: statFadeUp .55s ease .15s forwards; }
        .stats-visible .stat-item-2 { animation: statFadeUp .55s ease .25s forwards; }
        .stats-visible .stat-item-3 { animation: statFadeUp .55s ease .35s forwards; }

        @media (prefers-reduced-motion: reduce) {
          .stat-item { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={isVisible ? "stats-visible" : ""}
        style={{
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#EAF1FB",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          className="lg:!grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-item stat-item-${i} group`}
              style={{
                maxWidth: 1200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 40,
                paddingBottom: 40,
                borderLeft: i !== 0 ? "1px solid #ffffff" : "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E0EBFA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div
                className="transition-transform duration-300 group-hover:scale-110"
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                  color: stat.color,
                }}
              >
                {stat.isText ? stat.display : `${stat.value}${stat.suffix}`}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: "#5B6478",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}