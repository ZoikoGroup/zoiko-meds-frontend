"use client";

export default function SuccessScreen({ pharmacyName }: { pharmacyName: string }) {
  return (
    <div className="mx-auto my-8 max-w-[740px] rounded-2xl bg-white p-6 shadow-sm sm:p-10">
      <div className="px-4 py-10 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-teal-500 bg-teal-50 text-4xl">
          ✅
        </div>
        <h2 className="mb-3 text-[26px] font-extrabold text-gray-900">Your pharmacy node is live.</h2>
        <p className="mx-auto mb-7 max-w-[440px] text-[15px] leading-relaxed text-gray-400">
          {pharmacyName || "Your pharmacy"} has been verified, activated, and is now part of the ZoikoMeds
          Global Medicine Availability Network. High-intent patients can now discover your availability
          signals.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="rounded-[10px] bg-teal-500 px-6 py-3 text-[15px] font-bold text-white hover:bg-teal-600">
            Open Pharmacy Portal →
          </button>
          <button className="rounded-[10px] border-[1.5px] border-gray-200 px-6 py-3 text-[15px] font-bold text-gray-900 hover:border-teal-500 hover:text-teal-500">
            Set up inventory sync
          </button>
          <button className="rounded-[10px] border-[1.5px] border-gray-200 px-6 py-3 text-[15px] font-bold text-gray-900 hover:border-teal-500 hover:text-teal-500">
            Invite team member
          </button>
        </div>
        <div className="mt-8 text-left">
          <h4 className="mb-3 text-[13px] font-bold uppercase tracking-wide text-gray-400">
            What happens next
          </h4>
          <ol className="list-decimal space-y-2 pl-[18px] text-sm leading-relaxed text-gray-400">
            <li>
              Our integration team will contact your technical contact within 2 business days to complete
              the PMS/API connection.
            </li>
            <li>
              Once your first inventory sync completes, your ZoikoAvail™ confidence tier will upgrade to{" "}
              <strong>High</strong> and your pharmacy will appear in patient search results.
            </li>
            <li>
              Access your portal dashboard to manage requests, track demand signals, and adjust visibility
              rules at any time.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}