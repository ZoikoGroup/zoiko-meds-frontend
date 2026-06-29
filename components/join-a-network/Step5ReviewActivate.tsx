"use client";

import { JoinNetworkFormData } from "./types";
import { WarnBox, ConfirmCheckbox } from "./FormPrimitives";

const VERIFY_LABELS: Record<string, string> = {
  automated: "Automated registry match confirmed",
  email: "Corporate email verified",
  manual: "Manual compliance review — pending",
};

const INV_LABELS: Record<string, (data: JoinNetworkFormData) => string> = {
  pms: (d) => `PMS/API integration selected · Vendor: ${d.pmsVendor || "—"}`,
  sftp: () => "SFTP/CSV secure feed · Setup pending",
  file: () => "Manual file upload · File provided",
  manual: () => "Manual dashboard entry · Medicines entered",
  skipped: () => "Not set up — profile will activate when inventory connected",
};

function ChecklistRow({
  ok,
  name,
  sub,
}: {
  ok: boolean;
  name: string;
  sub: string;
}) {
  return (
    <div
      className={[
        "flex items-center justify-between rounded-[10px] border-[1.5px] px-4 py-3.5",
        ok ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{ok ? "✅" : "⚠️"}</span>
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="mt-0.5 text-xs text-gray-400">{sub}</div>
        </div>
      </div>
      <span
        className={[
          "rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide",
          ok ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800",
        ].join(" ")}
      >
        {ok ? "COMPLETE" : "PENDING"}
      </span>
    </div>
  );
}

export default function Step5ReviewActivate({
  data,
  update,
  error,
}: {
  data: JoinNetworkFormData;
  update: (patch: Partial<JoinNetworkFormData>) => void;
  error?: string;
}) {
  const pharmacyName = data.pharmacyName || data.searchValue || "—";
  const cityState = data.city ? `, ${data.city}, ${data.state}` : "";
  const verifyLabel = VERIFY_LABELS[data.verifyMethod] || data.verifyMethod;
  const roleLabel = data.pharmacistRole ? ` · ${data.pharmacistRole}` : "";

  const invMethod = data.invSkipped ? "skipped" : data.inventoryMethod;
  const invLabel = (INV_LABELS[invMethod] || (() => invMethod))(data);
  const isInvPending = invMethod === "sftp" || invMethod === "skipped";

  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-emerald-50 text-[22px]">
        ✅
      </div>
      <h2 className="mb-1.5 text-[22px] font-bold text-gray-900">Review &amp; Activate</h2>
      <p className="mb-7 text-sm leading-relaxed text-gray-400">
        Check your readiness before activating your network node. Everything in green is confirmed.
        Address any warnings before going live.
      </p>

      <p className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        Activation readiness checklist
      </p>

      <div className="mb-5 flex flex-col gap-2.5">
        <ChecklistRow ok name="Pharmacy claimed" sub={`${pharmacyName}${cityState}`} />
        <ChecklistRow ok name="Authority verified" sub={`${verifyLabel}${roleLabel}`} />
        <ChecklistRow ok={!isInvPending} name="Inventory sync" sub={invLabel} />
        <ChecklistRow
          ok
          name="Visibility rules configured"
          sub={`${data.serviceRadius} radius · Confirmation requests enabled · Controlled medicines suppressed`}
        />
        <ChecklistRow
          ok
          name="Compliance defaults applied"
          sub="Controlled medicine suppression active · Exact stock never shown · Audit logging enabled"
        />
      </div>

      {isInvPending && (
        <WarnBox>
          ⚠️ Your pharmacy will be activated and visible to patients once your inventory sync setup is
          complete. Your profile is created now — inventory connection completes activation. You can
          track progress in the portal dashboard.
        </WarnBox>
      )}

      <p className="mb-3 mt-5 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        Final confirmation
      </p>
      <ConfirmCheckbox
        id="final_confirm"
        checked={data.finalConfirmed}
        onChange={(v) => update({ finalConfirmed: v })}
        error={error}
      >
        <strong>
          I confirm this information is accurate and I am authorised to activate this pharmacy on
          ZoikoMeds
        </strong>{" "}
        <span className="text-red-500">*</span>
        <br />
        <small className="text-gray-400">
          By activating, you confirm that ZoikoMeds will display availability confidence signals (not
          exact quantities) for this pharmacy, and that your pharmacy remains in control of visibility at
          all times.
        </small>
      </ConfirmCheckbox>
    </div>
  );
}