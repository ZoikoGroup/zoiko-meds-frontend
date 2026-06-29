"use client";

import { useState } from "react";
import { JoinNetworkFormData, US_STATES, PHARMACY_TYPES } from "./types";
import { Field, TextInput, SelectInput, InfoBox } from "./FormPrimitives";

export interface StepErrors {
  [key: string]: string;
}

export default function Step1FindPharmacy({
  data,
  update,
  errors,
}: {
  data: JoinNetworkFormData;
  update: (patch: Partial<JoinNetworkFormData>) => void;
  errors: StepErrors;
}) {
  const [newRecordOpen, setNewRecordOpen] = useState(data.newRecord);

  function toggleNewRecord() {
    const next = !newRecordOpen;
    setNewRecordOpen(next);
    update({ newRecord: next });
  }

  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-sky-50 text-[22px]">
        🔍
      </div>
      <h2 className="mb-1.5 text-[22px] font-bold text-gray-900">Find &amp; Claim Your Pharmacy</h2>
      <p className="mb-7 text-sm leading-relaxed text-gray-400">
        Search our pre-loaded pharmacy registry. Select your record to claim it — no blank forms
        required for known pharmacies.
      </p>

      <Field label="Search pharmacy registry" required error={!newRecordOpen ? errors.searchValue : undefined}>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <TextInput
            placeholder="Enter pharmacy name, ZIP, city, license number, or NPI"
            className="pl-9"
            value={data.searchValue}
            onChange={(e) => update({ searchValue: e.target.value })}
            disabled={newRecordOpen}
          />
        </div>
        <p className="mt-1 text-xs text-gray-400">
          Type at least 2 characters. We search by name, address, NPI, NCPDP, and state license.
        </p>
      </Field>

      <div className="relative my-5 text-center text-[13px] text-gray-400">
        <span className="relative bg-white px-3">or</span>
        <div className="absolute left-0 top-1/2 -z-10 h-px w-full bg-gray-200" />
      </div>

      <div className="mb-6 text-center">
        <button
          type="button"
          onClick={toggleNewRecord}
          className="text-sm font-semibold text-teal-500 hover:text-teal-600"
        >
          {newRecordOpen ? "← Search the registry instead" : "My pharmacy isn't listed — submit a new record →"}
        </button>
      </div>

      {newRecordOpen && (
        <div className="animate-in fade-in">
          <InfoBox>
            <span>ℹ️</span>
            <span>
              We&apos;ll create a new record and initiate verification. You can set up your account and
              inventory path while review is in progress (usually 1 business day).
            </span>
          </InfoBox>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Pharmacy name" required error={errors.pharmacyName}>
              <TextInput
                placeholder="As it appears on your license"
                value={data.pharmacyName}
                onChange={(e) => update({ pharmacyName: e.target.value })}
                error={!!errors.pharmacyName}
              />
            </Field>
            <Field label="License number" required error={errors.licenseNumber}>
              <TextInput
                placeholder="State board license #"
                value={data.licenseNumber}
                onChange={(e) => update({ licenseNumber: e.target.value })}
                error={!!errors.licenseNumber}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="NPI number">
              <TextInput
                placeholder="10-digit NPI (optional)"
                maxLength={10}
                value={data.npiNumber}
                onChange={(e) => update({ npiNumber: e.target.value })}
              />
            </Field>
            <Field label="NCPDP / NABP number">
              <TextInput
                placeholder="7-digit NCPDP (optional)"
                maxLength={7}
                value={data.ncpdpNumber}
                onChange={(e) => update({ ncpdpNumber: e.target.value })}
              />
            </Field>
          </div>

          <Field label="Street address" required error={errors.address}>
            <TextInput
              placeholder="123 Main St"
              value={data.address}
              onChange={(e) => update({ address: e.target.value })}
              error={!!errors.address}
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[2fr_1fr_1fr]">
            <Field label="City" required error={errors.city}>
              <TextInput
                placeholder="Chicago"
                value={data.city}
                onChange={(e) => update({ city: e.target.value })}
                error={!!errors.city}
              />
            </Field>
            <Field label="State" required error={errors.state}>
              <SelectInput
                value={data.state}
                onChange={(e) => update({ state: e.target.value })}
                error={!!errors.state}
              >
                <option value="">Select state...</option>
                {Object.entries(US_STATES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="ZIP / Postcode" required error={errors.zip}>
              <TextInput
                placeholder="60601"
                maxLength={10}
                value={data.zip}
                onChange={(e) => update({ zip: e.target.value })}
                error={!!errors.zip}
              />
            </Field>
          </div>

          <Field label="Pharmacy type">
            <SelectInput value={data.pharmacyType} onChange={(e) => update({ pharmacyType: e.target.value })}>
              <option value="">Select type...</option>
              {PHARMACY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </SelectInput>
          </Field>
        </div>
      )}

      <InfoBox>
        <span>🔒</span>
        <span>
          <strong>Exact inventory quantities are never publicly exposed.</strong> Controlled medicines
          are suppressed by jurisdictional rules. You remain in full control of your visibility at all
          times.
        </span>
      </InfoBox>
    </div>
  );
}

export function validateStep1(data: JoinNetworkFormData): StepErrors {
  const errors: StepErrors = {};
  if (data.newRecord) {
    if (!data.pharmacyName.trim()) errors.pharmacyName = "Pharmacy name is required.";
    if (!data.licenseNumber.trim()) errors.licenseNumber = "License number is required.";
    if (!data.address.trim()) errors.address = "Street address is required.";
    if (!data.city.trim()) errors.city = "City is required.";
    if (!data.state.trim()) errors.state = "State is required.";
    if (!data.zip.trim()) errors.zip = "ZIP code is required.";
  } else {
    if (!data.searchValue.trim()) errors.searchValue = "Please search and select a pharmacy.";
  }
  return errors;
}