type NotCard = {
    title: string;
    body: string;
};

const notCards: NotCard[] = [
    {
        title: "No raw medicine-search leakage",
        body: "Raw medicine names, exact search terms, dosage details, and user-level search behavior must not flow into general marketing analytics.",
    },
    {
        title: "No precise-location leakage",
        body: "Precise location, radius, pharmacy selection, or travel-intent behavior must not flow into non-essential analytics without approved governance.",
    },
    {
        title: "No PHI in analytics",
        body: "Cookie and analytics tools must not collect prescription images, diagnosis, symptoms, insurance details, clinical notes, or medical records.",
    },
    {
        title: "No exact-stock exposure",
        body: "Cookie or analytics events must not capture exact pharmacy stock, confidential inventory, restricted medicine handling, or pharmacy-sensitive data.",
    },
    {
        title: "No cross-context profiling by default",
        body: "Medicine availability behavior is not used to create sensitive advertising or health-interest profiles.",
    },
    {
        title: "Consent versioning",
        body: "Consent text, category definitions, and vendor lists are versioned and reviewable.",
    },
];

export default function CookieData() {
    return (
        <section className="bg-[#f6f9fc] px-6 py-18 md:px-54">
            <div className="max-w-6xl mx-auto">
                <p className="text-xs text-[#13A594] tracking-[2px] font-semibold mb-4">
                    03 · Data protection rules
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    Healthcare-
                    <span className="text-[#0FAA87]">adjacent guardrails.</span>
                </h2>
                <p className="text-[#566476] max-w-[780px] leading-7 mb-5">
                    How cookie governance applies to medicine-availability behavior.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    {notCards.map((c) => (
                        <div key={c.title} className="bg-white rounded-xl p-5 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="bg-[#FEF3F2] flex justify-center items-center h-8 w-8 rounded-[8px]">
                                    <img src="/cookie-settings/cross.png" alt="image" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-[#0D1B2E]">
                                        {c.title}
                                    </p>
                                    <p className="text-[13.4px] max-w-110 text-[#566476] mt-1">
                                        {c.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}