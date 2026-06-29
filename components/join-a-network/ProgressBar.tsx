"use client";

const STEPS = [
  { label: "Find Pharmacy", sub: "Search & claim" },
  { label: "Verify Authority", sub: "Licence & authority" },
  { label: "Inventory Sync", sub: "Upload or connect" },
  { label: "Visibility Rules", sub: "Controls & compliance" },
  { label: "Review & Activate", sub: "" },
];

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex w-full justify-center overflow-x-auto border-b border-gray-200 bg-white px-4 py-5 sm:px-8">
      <div className="flex items-center">
        {STEPS.map((step, i) => {
          const s = i + 1;
          const isActive = s === currentStep;
          const isDone = s < currentStep;
          return (
            <div key={step.label} className="flex items-center">
              <div className="group flex flex-shrink-0 items-center gap-2.5">
                <div
                  className={[
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-[13px] font-semibold transition-all duration-300 ease-out",
                    isActive
                      ? "scale-110 border-teal-500 bg-teal-500 text-white shadow-[0_0_0_5px_rgba(46,203,193,0.18)]"
                      : isDone
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-gray-200 bg-white text-gray-400",
                  ].join(" ")}
                >
                  <span
                    key={isDone ? "done" : s}
                    className="inline-block animate-[stepPop_0.35s_ease]"
                  >
                    {isDone ? "✓" : s}
                  </span>
                </div>
                <div className="whitespace-nowrap text-xs text-gray-400 transition-colors duration-300">
                  <strong
                    className={[
                      "block text-[13px] transition-colors duration-300",
                      isActive ? "text-teal-500" : isDone ? "text-gray-700" : "text-gray-900",
                    ].join(" ")}
                  >
                    {step.label}
                  </strong>
                  {step.sub}
                </div>
              </div>
              {s < STEPS.length && (
                <div className="relative mx-3 h-0.5 w-10 overflow-hidden rounded-full bg-gray-200 sm:w-14">
                  <div
                    className={[
                      "absolute inset-y-0 left-0 rounded-full bg-emerald-500 transition-all duration-500 ease-out",
                      s < currentStep ? "w-full" : "w-0",
                    ].join(" ")}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes stepPop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}