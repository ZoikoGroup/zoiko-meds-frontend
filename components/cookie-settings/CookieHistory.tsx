import { FileText, List, Check, X } from "lucide-react";

type StorageItem = { text: string };

const storageItems: StorageItem[] = [
    {
        text: "A preference receipt shows the date, time, and categories you selected, with an option to change them.",
    },
    {
        text: "Choices apply to your current browser or device unless you are signed in and cross-device sync is approved.",
    },
    {
        text: "When signed in, privacy-safe account preference storage is used where legally approved.",
    },
    {
        text: "Consent status is stored with timestamp, consent version, and jurisdiction context.",
    },
];

type VendorRow = {
    purpose: string;
    category: string;
    on: boolean;
};

const vendorRows: VendorRow[] = [
    { purpose: "Session security", category: "Essential", on: true },
    { purpose: "Consent receipt", category: "Essential", on: true },
    { purpose: "Performance metrics", category: "Analytics", on: false },
    { purpose: "Embedded support widget", category: "Third-party", on: false },
];

function Card({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    {icon}
                </div>
                <h2 className="text-base font-semibold text-gray-900">{title}</h2>
            </div>
            {children}
        </div>
    );
}

function StatusBadge({ on }: { on: boolean }) {
    return on ? (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
            On
        </span>
    ) : (
        <span className="inline-flex items-center gap-1 text-sm text-gray-400">
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            Off by default
        </span>
    );
}


{/* <section className="bg-[#EEF2F7] px-6 py-12 md:px-54">
            <div className="max-w-6xl mx-auto">
                <p className="text-xs text-[#13A594] tracking-[2px] font-semibold mb-4">
                    04 · Consent history & connected controls
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    Durable, auditable, and {" "}
                    <span className="text-[#0FAA87]">connected.</span>
                </h2> */}

export default function PrivacyPreferencesCards() {
    return (
        <div className="bg-[#EEF2F7] px-6 py-12 md:px-54">
            <p className="text-xs text-[#13A594] tracking-[2px] font-semibold mb-4">
                04 · Consent history & connected controls
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Durable, auditable, and {" "}
                <span className="text-[#0FAA87]">connected.</span>
            </h2>
            <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
                <Card icon={<FileText className="h-5 w-5" />} title="How your preferences are stored">
                    <ul>
                        {storageItems.map((item, i) => (
                            <li
                                key={i}
                                className={`flex gap-3 py-3 text-sm leading-relaxed text-gray-600 ${i !== storageItems.length - 1 ? "border-b border-gray-100" : ""
                                    }`}
                            >
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={3} />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card icon={<List className="h-5 w-5" />} title="Vendor & purpose list">
                    <div className="overflow-hidden rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="bg-slate-900 text-xs uppercase tracking-wide text-slate-300">
                                    <th className="px-4 py-3 font-medium">Purpose</th>
                                    <th className="px-4 py-3 font-medium">Category</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vendorRows.map((row, i) => (
                                    <tr
                                        key={row.purpose}
                                        className={i % 2 === 1 ? "bg-slate-50" : "bg-white"}
                                    >
                                        <td className="px-4 py-3 font-medium text-gray-900">{row.purpose}</td>
                                        <td className="px-4 py-3 text-gray-500">{row.category}</td>
                                        <td className="px-4 py-3">
                                            <StatusBadge on={row.on} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-gray-400">
                        Illustrative. The controlled vendor list is versioned and reviewed; status reflects
                        your saved choices.
                    </p>
                </Card>
            </div>
        </div>
    );
}