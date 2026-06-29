"use client";

import { JoinNetworkFormData, MEDICINE_CATEGORIES } from "./types";
import { Field, SelectInput, InfoBox, ToggleRow } from "./FormPrimitives";

export default function Step4VisibilityRules({
  data,
  update,
}: {
  data: JoinNetworkFormData;
  update: (patch: Partial<JoinNetworkFormData>) => void;
}) {
  function toggleCategory(cat: string) {
    if (cat === "Controlled medicines") return; // locked
    const has = data.categories.includes(cat);
    update({
      categories: has ? data.categories.filter((c) => c !== cat) : [...data.categories, cat],
    });
  }

  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-fuchsia-50 text-[22px]">
        👁️
      </div>
      <h2 className="mb-1.5 text-[22px] font-bold text-gray-900">Set Visibility &amp; Compliance Rules</h2>
      <p className="mb-7 text-sm leading-relaxed text-gray-400">
        You remain in full control. Set your default visibility posture, service radius, confirmation
        workflow, and compliance preferences. These can be changed at any time in the portal.
      </p>

      <InfoBox>
        🛡️ Defaults are set to protect your pharmacy&apos;s regulatory posture. Controlled medicines are
        suppressed. Exact stock is never shown. You can tighten or adjust any rule below.
      </InfoBox>

      <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">Service radius</p>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Default search radius" required hint="Patients searching within this radius will see your availability signals.">
          <SelectInput value={data.serviceRadius} onChange={(e) => update({ serviceRadius: e.target.value })}>
            {["1 mile", "2 miles", "5 miles", "10 miles", "25 miles", "Unlimited"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Confirmation hours">
          <SelectInput
            value={data.confirmationHours}
            onChange={(e) => update({ confirmationHours: e.target.value })}
          >
            <option>During opening hours only</option>
            <option>24 hours</option>
            <option>Business hours (9am–5pm)</option>
          </SelectInput>
        </Field>
      </div>

      <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        Availability signal controls
      </p>
      <div className="mb-6 rounded-xl border-[1.5px] border-gray-200 px-5">
        <ToggleRow
          label="Show availability signals publicly"
          sub="Patients can see your pharmacy's availability confidence in search results."
          checked={data.visPublic}
          onChange={(v) => update({ visPublic: v })}
        />
        <ToggleRow
          label="Accept digital confirmation requests"
          sub="Patients can send structured availability requests to your pharmacy workflow."
          checked={data.visRequests}
          onChange={(v) => update({ visRequests: v })}
        />
        <ToggleRow
          label="Suppress controlled medicines"
          sub="Controlled, restricted, and high-risk medicines hidden from public availability by default. Jurisdiction rules apply automatically."
          checked={data.visControlledSuppressed}
          required
          disabled
        />
        <ToggleRow
          label="Allow demand intelligence aggregation"
          sub="Anonymised and aggregated search demand around your pharmacy contributes to ZoikoSignal™ shortage intelligence. No pharmacy-identifiable data is ever published."
          checked={data.visAggregation}
          onChange={(v) => update({ visAggregation: v })}
        />
        <ToggleRow
          label="Pause visibility during inventory review"
          sub="Temporarily hide your pharmacy from patient search while you review or update your inventory signals."
          checked={data.visPause}
          onChange={(v) => update({ visPause: v })}
        />
      </div>

      <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        Medicine category visibility{" "}
        <span className="font-normal normal-case tracking-normal text-gray-400">
          (all enabled by default)
        </span>
      </p>
      <div className="flex flex-wrap gap-2.5">
        {MEDICINE_CATEGORIES.map((cat) => {
          const isControlled = cat === "Controlled medicines";
          const checked = isControlled ? false : data.categories.includes(cat);
          return (
            <label
              key={cat}
              className={[
                "flex cursor-pointer items-center gap-1.5 rounded-lg border-[1.5px] px-3.5 py-1.5 text-[13px] font-medium transition-all",
                checked ? "border-teal-500 bg-teal-50 text-teal-600" : "border-gray-200",
                isControlled ? "cursor-not-allowed opacity-70" : "",
              ].join(" ")}
            >
              <input
                type="checkbox"
                checked={checked}
                disabled={isControlled}
                onChange={() => toggleCategory(cat)}
                className="h-3.5 w-3.5 accent-teal-500"
              />
              {cat}
              {isControlled && <small className="text-[10px] text-gray-400">(Suppressed per jurisdiction)</small>}
            </label>
          );
        })}
      </div>
    </div>
  );
}

// Step 4 has no hard-blocking validation in the original form.
export function validateStep4() {
  return {};
}