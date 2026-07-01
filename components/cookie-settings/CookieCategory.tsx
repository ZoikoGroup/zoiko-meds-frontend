type ControlRow = {
    area: string;
    choice: string;
    description: string;
    examples: string;
    alwaysOn?: boolean;
};

const controlRows: ControlRow[] = [
    {
        area: "Essential",
        choice: "Always on",
        alwaysOn: true,
        description:
            "Security, navigation, accessibility, consent storage, fraud prevention, and core functionality.",
        examples:
            "Session security, load balancing, consent receipt, form protection, authentication.",
    },
    {
        area: "Functional",
        choice: "User choice",
        description:
            "Remember preferences that improve the user experience.",
        examples:
            "Language, region, display preferences, saved UI choices.",
    },
    {
        area: "Analytics",
        choice: "User choice",
        description:
            "Understand performance and improve the product — without sensitive medicine-search content.",
        examples:
            "Page views, clicks, conversion funnels, anonymized metrics.",
    },
    {
        area: "Personalization",
        choice: "User choice",
        description:
            "Optional personalization only where approved and privacy-safe.",
        examples:
            "Preferred content paths, user-selected settings.",
    },
    {
        area: "Third-party / embedded",
        choice: "User choice",
        description:
            "Approved embedded tools enabled only with consent.",
        examples:
            "Consent-managed scripts, CRM forms, support widgets.",
    },
];

export default function CookieCategory() {
    return (
        <section className=" px-6 md:px-54 py-12 bg-[#EEF2F7]">
            <div className="max-w-6xl mx-auto">
                <p className="text-xs text-[#13A594] leading-6 tracking-[2px] font-medium mb-2">
                    02 · Cookie categories
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    What each <span className="text-[#0FAA87]">category means.</span>
                </h2>

                <div className="hidden md:block mt-8 overflow-hidden rounded-[24px] border border-[#D7DEE8] bg-white shadow-sm">
                    <table className="w-full mt-7 border-collapse">
                        <thead>
                            <tr className="bg-[#16253B]">
                                <th className="w-[16%] px-5 py-5 text-left text-[12px] font-semibold uppercase tracking-[1.6px] text-[#E7EEF6EB]">
                                    Category
                                </th>

                                <th className="w-[10%] px-5 py-5 text-left text-[12px] font-semibold uppercase tracking-[1.6px] text-[#E7EEF6EB]">
                                    Default
                                </th>

                                <th className="w-[41%] px-5 py-5 text-left text-[12px] font-semibold uppercase tracking-[1.6px] text-[#E7EEF6EB]">
                                    What it does
                                </th>
                                <th className="w-[35%] px-5 py-5 text-left text-[12px] font-semibold uppercase tracking-[1.6px] text-[#E7EEF6EB]">
                                    Exmaples
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {controlRows.map((r, index) => (
                                <tr
                                    key={r.area}
                                    className={`border-t border-[#D7DEE8] align-top ${index % 2 === 1 ? "bg-[#F6F9FC]" : "bg-white"
                                        }`}
                                >
                                    {/* Area */}
                                    <td className="py-3 px-4 text-[13.8px] font-semibold text-[#0D1B2E]">
                                        {r.area}
                                    </td>

                                    {/* Choice */}
                                    <td className="py-3 px-4">
                                        {r.alwaysOn ? (
                                            <div className="flex items-start gap-2">
                                                <svg
                                                    className="mt-4 h-4 w-4 text-[#13A594]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>

                                                <span className="text-[13.8px] font-medium leading-5 text-[#13A594]">
                                                    Always
                                                    <br />
                                                    on
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-[13.8px] leading-6 text-[#2B3A4F]">
                                                User
                                                <br />
                                                choice
                                            </span>
                                        )}
                                    </td>

                                    {/* Description */}
                                    <td className="py-3 px-4 text-[13.8px] leading-7 text-[#2B3A4F]">
                                        {r.description}
                                    </td>

                                    {/* Examples */}
                                    <td className="py-3 px-4 text-[13.8px] leading-7 text-[#2B3A4F]">
                                        {r.examples}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 space-y-4 md:hidden">
                    {controlRows.map((r, index) => (
                        <div
                            key={r.area}
                            className={`rounded-2xl border border-[#D7DEE8] p-5 ${index % 2 === 1 ? "bg-[#F6F9FC]" : "bg-white"
                                }`}
                        >
                            {/* Category */}
                            <div className="mb-4">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                    Category
                                </p>

                                <p className="mt-1 text-[16px] font-semibold text-[#16253B]">
                                    {r.area}
                                </p>
                            </div>

                            {/* Default */}
                            <div className="mb-4">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                    Default
                                </p>

                                <div className="mt-1">
                                    {r.alwaysOn ? (
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="h-4 w-4 text-[#13A594]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>

                                            <span className="font-medium text-[#13A594]">
                                                Always on
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-[#2B3A4F]">
                                            User choice
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* What it does */}
                            <div className="mb-4">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                    What it does
                                </p>

                                <p className="mt-1 text-[14px] leading-6 text-[#2B3A4F]">
                                    {r.description}
                                </p>
                            </div>

                            {/* Examples */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                    Examples
                                </p>

                                <p className="mt-1 text-[14px] leading-6 text-[#2B3A4F]">
                                    {r.examples}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}