"use client";

import { JoinNetworkFormData, US_STATES, VerifyMethod } from "./types";
import {
  Field,
  TextInput,
  SelectInput,
  InfoBox,
  WarnBox,
  OptionCard,
  ConfirmCheckbox,
} from "./FormPrimitives";
import { StepErrors } from "./Step1FindPharmacy";

const ROLES = ["Pharmacist-in-Charge", "Owner", "Manager", "IT / Admin", "Other"];

export default function Step2VerifyAuthority({
  data,
  update,
  errors,
}: {
  data: JoinNetworkFormData;
  update: (patch: Partial<JoinNetworkFormData>) => void;
  errors: StepErrors;
}) {
  const method = data.verifyMethod;

  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-orange-50 text-[22px]">
        🛡️
      </div>
      <h2 className="mb-1.5 text-[22px] font-bold text-gray-900">Verify Your Authority</h2>
      <p className="mb-7 text-sm leading-relaxed text-gray-400">
        Confirm you have legal authority to claim and manage this pharmacy&apos;s network presence.
        Automated verification takes seconds for most pharmacies.
      </p>

      <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        Primary verification method
      </p>

      <div className="mb-2 flex flex-col gap-3">
        <OptionCard
          selected={method === "automated"}
          onClick={() => update({ verifyMethod: "automated" })}
          icon="✅"
          iconBg="#e8faf9"
          title="Automated registry verification"
          desc="We match your NPI/NCPDP against state board and national registry data. Results in under 60 seconds for most pharmacies."
          badge="FASTEST · RECOMMENDED"
          badgeColor="bg-emerald-100 text-emerald-800"
        />
        <OptionCard
          selected={method === "email"}
          onClick={() => update({ verifyMethod: "email" })}
          icon="📧"
          iconBg="#eff6ff"
          title="Corporate email domain verification"
          desc="A verification link is sent to an email at your pharmacy's registered domain. Best for chains and groups with corporate email infrastructure."
          badge="DOMAIN-GATED"
          badgeColor="bg-blue-100 text-blue-800"
        />
        <OptionCard
          selected={method === "manual"}
          onClick={() => update({ verifyMethod: "manual" })}
          icon="📄"
          iconBg="#f9fafb"
          title="Manual compliance review"
          desc="Upload your pharmacy license document. Our compliance team reviews within 1 business day. Use this if automated verification is unavailable for your jurisdiction."
          badge="1 BUSINESS DAY"
          badgeColor="bg-amber-100 text-amber-800"
        />
      </div>

      {method === "automated" && (
        <div className="mt-6">
          <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
            Your pharmacist details
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First name" required error={errors.pharmacistFirst}>
              <TextInput
                placeholder="Jane"
                value={data.pharmacistFirst}
                onChange={(e) => update({ pharmacistFirst: e.target.value })}
                error={!!errors.pharmacistFirst}
              />
            </Field>
            <Field label="Last name" required error={errors.pharmacistLast}>
              <TextInput
                placeholder="Smith"
                value={data.pharmacistLast}
                onChange={(e) => update({ pharmacistLast: e.target.value })}
                error={!!errors.pharmacistLast}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Pharmacist license number" required error={errors.pharmacistLicense}>
              <TextInput
                placeholder="RPh-12345678"
                value={data.pharmacistLicense}
                onChange={(e) => update({ pharmacistLicense: e.target.value })}
                error={!!errors.pharmacistLicense}
              />
            </Field>
            <Field label="Issuing state board" required error={errors.issuingBoard}>
              <SelectInput
                value={data.issuingBoard}
                onChange={(e) => update({ issuingBoard: e.target.value })}
                error={!!errors.issuingBoard}
              >
                <option value="">Select state...</option>
                {Object.entries(US_STATES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>
          <Field label="Your role at this pharmacy" required error={errors.pharmacistRole}>
            <SelectInput
              value={data.pharmacistRole}
              onChange={(e) => update({ pharmacistRole: e.target.value })}
              error={!!errors.pharmacistRole}
            >
              <option value="">Select role...</option>
              {ROLES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </SelectInput>
          </Field>
          <InfoBox>
            <span>🔄</span>
            <span>
              Registry matching runs automatically. If your license is not found, we&apos;ll show a
              fallback option without blocking your progress.
            </span>
          </InfoBox>
        </div>
      )}

      {method === "email" && (
        <div className="mt-6">
          <Field
            label="Corporate email address"
            required
            error={errors.corporateEmail}
            hint="Use your pharmacy's registered domain email. Personal Gmail/Yahoo addresses are not accepted."
          >
            <TextInput
              placeholder="jane@yourpharmacy.com"
              value={data.corporateEmail}
              onChange={(e) => update({ corporateEmail: e.target.value })}
              error={!!errors.corporateEmail}
            />
          </Field>
        </div>
      )}

      {method === "manual" && (
        <div className="mt-6">
          <WarnBox>
            ⚠️ Manual review takes up to 1 business day. You can continue setting up your account and
            inventory path in the meantime.
          </WarnBox>
          <label className="block cursor-pointer rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center transition hover:border-teal-500 hover:bg-teal-50">
            <div className="mb-2 text-[28px]">⬆️</div>
            <h4 className="mb-1 text-sm font-semibold text-gray-900">Upload pharmacy license</h4>
            <p className="mb-3 text-xs text-gray-400">
              Drag and drop, or click to browse.
              <br />
              State board license, GPhC certificate, or equivalent.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-lg border-[1.5px] border-gray-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-gray-900 hover:border-teal-500 hover:text-teal-500">
              ⬆️ Browse file
            </span>
            <p className="mt-2 text-[11px] text-gray-400">PDF, JPG, PNG — max 10 MB</p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => update({ licenseFile: e.target.files?.[0] || null })}
            />
            {data.licenseFile && (
              <p className="mt-2 text-[13px] font-semibold text-teal-500">📎 {data.licenseFile.name}</p>
            )}
          </label>
          {errors.licenseFile && <p className="mt-1.5 text-xs text-red-500">{errors.licenseFile}</p>}
        </div>
      )}

      <ConfirmCheckbox
        id="v_confirm"
        checked={data.authorityConfirmed}
        onChange={(v) => update({ authorityConfirmed: v })}
        error={errors.authorityConfirmed}
      >
        I confirm I have legal authority to claim and manage this pharmacy&apos;s ZoikoMeds network
        presence.
        <br />
        <small className="text-gray-400">
          By checking this box you confirm you are an authorized representative of this pharmacy and
          have authority to accept the ZoikoMeds Pharmacy Network Terms on its behalf.
        </small>
      </ConfirmCheckbox>
    </div>
  );
}

export function validateStep2(data: JoinNetworkFormData): StepErrors {
  const errors: StepErrors = {};
  const method: VerifyMethod = data.verifyMethod;

  if (method === "automated") {
    if (!data.pharmacistFirst.trim()) errors.pharmacistFirst = "First name is required.";
    if (!data.pharmacistLast.trim()) errors.pharmacistLast = "Last name is required.";
    if (!data.pharmacistLicense.trim()) errors.pharmacistLicense = "License number is required.";
    if (!data.issuingBoard.trim()) errors.issuingBoard = "State board is required.";
    if (!data.pharmacistRole.trim()) errors.pharmacistRole = "Role is required.";
  }
  if (method === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.corporateEmail)) {
      errors.corporateEmail = "A valid corporate email is required.";
    }
  }
  if (method === "manual") {
    if (!data.licenseFile) errors.licenseFile = "Please upload your license document.";
  }
  if (!data.authorityConfirmed) errors.authorityConfirmed = "You must confirm your authority to proceed.";

  return errors;
}