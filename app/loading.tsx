"use client";

import Image from "next/image";

/**
 * PageLoader
 * Full-screen branded loading state for ZoikoMeds.
 *
 * Use as:
 *  - app/loading.tsx (Next.js route-level loading UI), or
 *  - a manually-controlled overlay shown while data/auth is resolving.
 *
 * Visual language matches the navbar: navy #1E2F6E, teal #00A99D.
 * The animation echoes the logo mark itself — a pulsing medical-cross
 * dot inside an orbiting ring, with the wordmark fading/breathing
 * beneath it, plus a gradient progress bar using the same navy→teal
 * sweep as the navbar's scroll accent line.
 */

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading ZoikoMeds"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <style>{`
        @keyframes zkOrbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes zkCrossPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.82); opacity: 0.7; }
        }
        @keyframes zkRingPulse {
          0% { transform: scale(0.9); opacity: 0.55; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes zkLogoBreathe {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.72; transform: translateY(-2px); }
        }
        @keyframes zkBarSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
        @keyframes zkDotBlink {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .zk-loader-anim, .zk-loader-anim * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="zk-loader-anim" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
        {/* ---- Orbiting ring + pulsing cross mark ---- */}
        <div style={{ position: "relative", width: "84px", height: "84px" }}>
          {/* Outer expanding pulse rings (echo of navbar's "monitoring" dot) */}
          <span style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: "2px solid #00A99D",
            animation: "zkRingPulse 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite",
          }} />
          <span style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: "2px solid #1E2F6E",
            animation: "zkRingPulse 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite 1.1s",
          }} />

          {/* Rotating dashed ring */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: "3px dashed transparent",
            borderTopColor: "#1E2F6E",
            borderRightColor: "#00A99D",
            animation: "zkOrbitSpin 1.6s linear infinite",
          }} />

          {/* Static track ring */}
          <div style={{
            position: "absolute", inset: "8px", borderRadius: "50%",
            border: "1.5px solid #E7EAF1",
          }} />

          {/* Center medical-cross mark (mirrors the logo's cross-in-circle icon) */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: "linear-gradient(135deg, #1E2F6E, #00A99D)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "zkCrossPulse 1.6s ease-in-out infinite",
              boxShadow: "0 6px 18px rgba(0,169,157,0.35)",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="3.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ---- Wordmark (uses the actual logo asset) ---- */}
        <div style={{ animation: "zkLogoBreathe 2.2s ease-in-out infinite" }}>
          <Image
            src="/logo.png"
            alt="ZoikoMeds"
            width={172}
            height={43}
            priority
            style={{ objectFit: "contain", width: "172px", height: "43px" }}
          />
        </div>

        {/* ---- Gradient progress bar (navy -> teal -> navy sweep) ---- */}
        <div style={{
          position: "relative", width: "180px", height: "4px",
          borderRadius: "999px", backgroundColor: "#EEF0F5", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, height: "100%", width: "45%",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #1E2F6E, #00A99D)",
            animation: "zkBarSweep 1.3s cubic-bezier(0.4,0,0.2,1) infinite",
          }} />
        </div>

        {/* ---- Status label ---- */}
        <p style={{
          display: "flex", alignItems: "center", gap: "6px",
          fontSize: "12.5px", fontWeight: 600, color: "#5B6478",
          fontFamily: "var(--font-jakarta), sans-serif",
          letterSpacing: "0.01em",
        }}>
          <span style={{
            display: "inline-block", width: "6px", height: "6px", borderRadius: "50%",
            backgroundColor: "#00A99D", animation: "zkDotBlink 1.2s ease-in-out infinite",
          }} />
          Loading ZoikoMeds
        </p>
      </div>

      <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        Loading, please wait.
      </span>
    </div>
  );
}