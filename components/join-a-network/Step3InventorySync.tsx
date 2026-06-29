"use client";

import { JoinNetworkFormData, InventoryMethod, PMS_VENDORS } from "./types";
import { Field, TextInput, SelectInput, InfoBox, WarnBox, OptionCard, ConfidenceBar } from "./FormPrimitives";
import { StepErrors } from "./Step1FindPharmacy";

export default function Step3InventorySync({
  data,
  update,
  errors,
}: {
  data: JoinNetworkFormData;
  update: (patch: Partial<JoinNetworkFormData>) => void;
  errors: StepErrors;
}) {
  const method = data.inventoryMethod;

  function setMedRow(i: number, patch: Partial<typeof data.medRows[0]>) {
    const rows = [...data.medRows];
    rows[i] = { ...rows[i], ...patch };
    update({ medRows: rows });
  }
  function addMedRow() {
    update({
      medRows: [...data.medRows, { name: "", generic: "", strength: "", form: "Tablet", availability: "Available" }],
    });
  }
  function removeMedRow(i: number) {
    update({ medRows: data.medRows.filter((_, idx) => idx !== i) });
  }

  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-green-50 text-[22px]">
        ⟨/⟩
      </div>
      <h2 className="mb-1.5 text-[22px] font-bold text-gray-900">Connect Your Inventory</h2>
      <p className="mb-7 text-sm leading-relaxed text-gray-400">
        Choose how to supply availability signals. Automated feeds keep ZoikoAvail™ confidence high.
        Manual upload is always available as a controlled fallback.
      </p>

      <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        How would you like to supply availability signals?
      </p>

      <div className="mb-6 flex flex-col gap-3">
        <OptionCard
          selected={method === "pms"}
          onClick={() => update({ inventoryMethod: "pms" })}
          icon="⟨/⟩"
          iconBg="#f0fdf4"
          title="PMS / API integration"
          desc="Direct connection to your pharmacy management system. Real-time or near-real-time signals. Highest ZoikoAvail™ confidence."
          badge="RECOMMENDED"
          badgeColor="bg-emerald-100 text-emerald-800"
        >
          <ConfidenceBar pct={90} color="#2ecbc1" label="High" />
        </OptionCard>
        <OptionCard
          selected={method === "sftp"}
          onClick={() => update({ inventoryMethod: "sftp" })}
          icon="⬆️"
          iconBg="#eff6ff"
          title="SFTP / CSV secure feed"
          desc="Schedule automatic file uploads. Good for pharmacies without direct API readiness. Strong confidence when uploaded on schedule."
          badge="AUTOMATED"
          badgeColor="bg-blue-100 text-blue-800"
        >
          <ConfidenceBar pct={68} color="#3b82f6" label="Good" />
        </OptionCard>
        <OptionCard
          selected={method === "file"}
          onClick={() => update({ inventoryMethod: "file" })}
          icon="📤"
          iconBg="#fffbeb"
          title="Manual file upload"
          desc="Upload a CSV/Excel file of your current inventory. Entries expire automatically if not refreshed. Good for getting started quickly."
          badge="FILE UPLOAD"
          badgeColor="bg-amber-100 text-amber-800"
        >
          <ConfidenceBar pct={50} color="#f59e0b" label="Medium" />
        </OptionCard>
        <OptionCard
          selected={method === "manual"}
          onClick={() => update({ inventoryMethod: "manual" })}
          icon="📋"
          iconBg="#f9fafb"
          title="Manual dashboard entry"
          desc="Add medicines one by one via the portal dashboard. Entries expire automatically. Best for small pharmacies during early onboarding."
          badge="FALLBACK"
          badgeColor="bg-gray-100 text-gray-600"
        >
          <ConfidenceBar pct={30} color="#9ca3af" label="Variable" />
        </OptionCard>
      </div>

      {method === "pms" && (
        <div>
          <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
            PMS connection details
          </p>
          <Field label="Your PMS vendor" required error={errors.pmsVendor}>
            <SelectInput
              value={data.pmsVendor}
              onChange={(e) => update({ pmsVendor: e.target.value })}
              error={!!errors.pmsVendor}
            >
              <option value="">Select vendor...</option>
              {PMS_VENDORS.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </SelectInput>
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Technical contact name">
              <TextInput
                placeholder="IT manager or integrator name"
                value={data.techContactName}
                onChange={(e) => update({ techContactName: e.target.value })}
              />
            </Field>
            <Field label="Technical contact email">
              <TextInput
                type="email"
                placeholder="it@yourpharmacy.com"
                value={data.techContactEmail}
                onChange={(e) => update({ techContactEmail: e.target.value })}
              />
            </Field>
          </div>
          <Field label="Desired go-live date">
            <TextInput
              type="date"
              value={data.goLiveDate}
              onChange={(e) => update({ goLiveDate: e.target.value })}
            />
          </Field>
          <InfoBox>
            ⚡ Our integration team will contact your technical contact within 2 business days to walk
            through the connection. Your API credentials will be generated once authority verification is
            confirmed.
          </InfoBox>
        </div>
      )}

      {method === "sftp" && (
        <div>
          <Field label="SFTP email contact" required error={errors.sftpEmail}>
            <TextInput
              type="email"
              placeholder="sftp-admin@yourpharmacy.com"
              value={data.sftpEmail}
              onChange={(e) => update({ sftpEmail: e.target.value })}
              error={!!errors.sftpEmail}
            />
          </Field>
          <Field label="Upload frequency">
            <SelectInput value={data.sftpFrequency} onChange={(e) => update({ sftpFrequency: e.target.value })}>
              <option>Daily</option>
              <option>Every 6 hours</option>
              <option>Every 12 hours</option>
              <option>Weekly</option>
            </SelectInput>
          </Field>
          <InfoBox>📅 After activation we&apos;ll send SFTP credentials to your contact email.</InfoBox>
        </div>
      )}

      {method === "file" && (
        <div>
          <div className="mb-4 flex flex-col items-start justify-between gap-3 rounded-[10px] bg-gray-900 px-4.5 py-3.5 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-sm font-bold text-white">Download the inventory upload template</h4>
              <p className="mt-0.5 text-xs text-gray-400">
                CSV/Excel template with required columns: medicine name, generic name, NDC/barcode,
                strength, form, quantity tier (not exact count), and status.
              </p>
            </div>
            <button
              type="button"
              className="whitespace-nowrap rounded-lg bg-teal-500 px-4 py-2 text-[13px] font-bold text-white hover:bg-teal-600"
            >
              ⬇ Download template
            </button>
          </div>
          <label className="block cursor-pointer rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center transition hover:border-teal-500 hover:bg-teal-50">
            <div className="mb-2 text-[28px]">⬆️</div>
            <h4 className="mb-1 text-sm font-semibold text-gray-900">Drop your inventory file here</h4>
            <p className="mb-3 text-xs text-gray-400">
              CSV or Excel file matching the template schema.
              <br />
              Medicines are mapped through MediBase™ on upload.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-lg border-[1.5px] border-gray-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-gray-900 hover:border-teal-500 hover:text-teal-500">
              Browse file
            </span>
            <p className="mt-2 text-[11px] text-gray-400">CSV, XLS, XLSX — max 25 MB, up to 50,000 rows</p>
            <input
              type="file"
              accept=".csv,.xls,.xlsx"
              className="hidden"
              onChange={(e) => update({ invFile: e.target.files?.[0] || null })}
            />
            {data.invFile && (
              <p className="mt-2 text-[13px] font-semibold text-teal-500">📎 {data.invFile.name}</p>
            )}
          </label>
          <WarnBox>
            ⚠️ File uploads expire after 24 hours without a refresh. Set up a recurring upload schedule in
            the portal after activation to maintain confidence.
          </WarnBox>
        </div>
      )}

      {method === "manual" && (
        <div>
          <WarnBox>
            ⚠️ Manual entries must be refreshed regularly to maintain ZoikoAvail™ confidence. Entries
            automatically expire and downgrade if not updated.
          </WarnBox>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["Medicine name / brand", "Generic / INN", "Strength", "Form", "Availability", ""].map(
                    (h) => (
                      <th
                        key={h}
                        className="border-b border-gray-200 px-2.5 py-2 text-left text-[11px] font-bold uppercase tracking-wide text-gray-400"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data.medRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-2 pr-1">
                      <TextInput
                        className="px-2.5 py-2 text-[13px]"
                        placeholder="e.g. Metformin 500mg"
                        value={row.name}
                        onChange={(e) => setMedRow(i, { name: e.target.value })}
                      />
                    </td>
                    <td className="py-2 pr-1">
                      <TextInput
                        className="px-2.5 py-2 text-[13px]"
                        placeholder="Generic name"
                        value={row.generic}
                        onChange={(e) => setMedRow(i, { generic: e.target.value })}
                      />
                    </td>
                    <td className="py-2 pr-1">
                      <TextInput
                        className="px-2.5 py-2 text-[13px]"
                        placeholder="500 mg"
                        value={row.strength}
                        onChange={(e) => setMedRow(i, { strength: e.target.value })}
                      />
                    </td>
                    <td className="min-w-[100px] py-2 pr-1">
                      <SelectInput value={row.form} onChange={(e) => setMedRow(i, { form: e.target.value })}>
                        {["Tablet", "Capsule", "Liquid", "Injection", "Topical", "Other"].map((f) => (
                          <option key={f}>{f}</option>
                        ))}
                      </SelectInput>
                    </td>
                    <td className="min-w-[120px] py-2 pr-1">
                      <SelectInput
                        value={row.availability}
                        onChange={(e) => setMedRow(i, { availability: e.target.value })}
                      >
                        {["Available", "Limited", "Low stock"].map((a) => (
                          <option key={a}>{a}</option>
                        ))}
                      </SelectInput>
                    </td>
                    <td className="py-2 pl-1 text-center">
                      <button
                        type="button"
                        onClick={() => removeMedRow(i)}
                        className="text-lg text-gray-400 hover:text-red-500"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={addMedRow}
            className="mt-2.5 text-[13px] font-semibold text-teal-500 hover:text-teal-600"
          >
            + Add another medicine
          </button>
          <InfoBox>
            🔒{" "}
            <span>
              <strong>Availability tiers only — never exact quantities.</strong> &quot;Available&quot;,
              &quot;Limited&quot;, and &quot;Low stock&quot; are the only options. Exact pill counts are
              never entered, stored, or displayed on ZoikoMeds.
            </span>
          </InfoBox>
        </div>
      )}
    </div>
  );
}

export function validateStep3(data: JoinNetworkFormData): StepErrors {
  const errors: StepErrors = {};
  if (data.invSkipped) return errors;
  if (data.inventoryMethod === "pms" && !data.pmsVendor.trim()) {
    errors.pmsVendor = "Please select your PMS vendor.";
  }
  if (data.inventoryMethod === "sftp" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.sftpEmail)) {
    errors.sftpEmail = "A valid email is required.";
  }
  return errors;
}