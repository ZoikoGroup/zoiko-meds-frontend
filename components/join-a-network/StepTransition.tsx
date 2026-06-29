"use client";

import { ReactNode } from "react";

export default function StepTransition({
  stepKey,
  direction,
  children,
}: {
  stepKey: number | string;
  direction: "forward" | "backward";
  children: ReactNode;
}) {
  return (
    <div key={stepKey} className="relative">
      <div
        className={direction === "forward" ? "animate-step-forward" : "animate-step-backward"}
      >
        {children}
      </div>
      <style>{`
        @keyframes stepForward {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes stepBackward {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-step-forward { animation: stepForward 0.32s cubic-bezier(0.22, 1, 0.36, 1); }
        .animate-step-backward { animation: stepBackward 0.32s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
}