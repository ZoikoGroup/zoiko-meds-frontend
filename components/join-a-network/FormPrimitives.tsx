"use client";

import { ReactNode } from "react";

export function Field({
  label,
  required,
  error,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-[18px]">
      <label className="mb-1.5 block text-[13px] font-semibold text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function TextInput({
  error,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-[10px] border-[1.5px] px-3.5 py-[11px] text-sm text-gray-900 outline-none transition",
        "placeholder:text-gray-400 focus:border-teal-500 focus:ring-[3px] focus:ring-teal-500/10",
        error ? "border-red-500" : "border-gray-200",
        className,
      ].join(" ")}
    />
  );
}

export function SelectInput({
  error,
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <div className="relative">
      <select
        {...props}
        className={[
          "w-full appearance-none rounded-[10px] border-[1.5px] bg-white px-3.5 py-[11px] text-sm text-gray-900 outline-none transition",
          "focus:border-teal-500 focus:ring-[3px] focus:ring-teal-500/10",
          error ? "border-red-500" : "border-gray-200",
          className,
        ].join(" ")}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
    </div>
  );
}

export function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-2.5 rounded-[10px] border border-teal-500/25 bg-teal-50 px-4 py-3.5 text-[13px] text-gray-900">
      {children}
    </div>
  );
}

export function WarnBox({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-2 rounded-[10px] border border-amber-300 bg-amber-50 px-4 py-3 text-[13px] text-amber-800">
      {children}
    </div>
  );
}

export function OptionCard({
  selected,
  onClick,
  icon,
  iconBg,
  title,
  desc,
  badge,
  badgeColor,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
  iconBg: string;
  title: string;
  desc: string;
  badge?: string;
  badgeColor?: string;
  children?: ReactNode;
}) {
  return (
    <label
      onClick={onClick}
      className={[
        "flex cursor-pointer items-start gap-3.5 rounded-xl border-2 p-4 transition-all duration-200 ease-out",
        selected
          ? "border-teal-500 bg-teal-50 shadow-sm"
          : "border-gray-200 hover:-translate-y-0.5 hover:border-teal-500 hover:bg-teal-50 hover:shadow-md",
      ].join(" ")}
    >
      <div
        className={[
          "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
          selected ? "scale-110 border-teal-500 bg-teal-500" : "border-gray-200",
        ].join(" ")}
      >
        <div
          className={[
            "h-2 w-2 rounded-full bg-white transition-all duration-200",
            selected ? "scale-100 opacity-100" : "scale-0 opacity-0",
          ].join(" ")}
        />
      </div>
      <div
        className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] text-lg"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="mb-0.5 text-sm font-bold text-gray-900">{title}</div>
        <div className="text-xs leading-relaxed text-gray-400">{desc}</div>
        {children}
        {badge && (
          <span
            className={[
              "mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide",
              badgeColor || "bg-gray-100 text-gray-600",
            ].join(" ")}
          >
            {badge}
          </span>
        )}
      </div>
    </label>
  );
}

export function ConfidenceBar({ pct, color, label }: { pct: number; color: string; label: string }) {
  return (
    <div className="mt-1 flex items-center gap-2">
      <span className="text-[11px] text-gray-400">Confidence</span>
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-[11px] font-semibold" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export function ToggleRow({
  label,
  sub,
  checked,
  onChange,
  required,
  disabled,
}: {
  label: string;
  sub: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 py-3.5 last:border-b-0">
      <div>
        <div className="text-sm font-semibold text-gray-900">
          {label}
          {required && (
            <span className="ml-2 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-500">
              REQUIRED
            </span>
          )}
        </div>
        <div className="mt-0.5 max-w-[480px] text-xs leading-relaxed text-gray-400">{sub}</div>
      </div>
      <label className="relative mt-0.5 h-6 w-11 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <span
          className={[
            "absolute inset-0 cursor-pointer rounded-full transition-colors duration-300",
            checked ? "bg-teal-500" : "bg-gray-300 hover:bg-gray-400",
            disabled ? "cursor-not-allowed opacity-70 hover:bg-gray-300" : "",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform duration-300 ease-out",
            checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </label>
    </div>
  );
}

export function ConfirmCheckbox({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mt-5 flex items-start gap-2.5 rounded-[10px] bg-gray-50 px-4 py-3.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-teal-500"
        />
        <label htmlFor={id} className="cursor-pointer text-[13px] leading-relaxed text-gray-900">
          {children}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}