import React from "react";

type StructureItem = {
    name: string;
    desc: string;
    tag: string;
    highlighted?: boolean;
};

const structure: StructureItem[] = [
    { name: "Zoiko Group Inc.", desc: "Group direction & governance", tag: "PARENT" },
    { name: "Zoiko Healthcare Inc.", desc: "Healthcare operating company", tag: "OPERATING" },
    { name: "ZoikoMeds", desc: "Medicine availability infrastructure", tag: "PLATFORM", highlighted: true },
    { name: "Zoiko Tech Inc.", desc: "Technology enablement (where assigned)", tag: "SUPPORT" },
];

const fadeUp = (delay: number): React.CSSProperties => ({
    animation: `fadeUp 0.6s ease-out ${delay}s both`,
});

export default function ZoikoGroupHero() {
    return (
        <section className="bg-linear-to-b from-slate-50 px-5 sm:px-8 lg:px-54 to-slate-100 py-16">
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:gap-40 lg:grid-cols-2 lg:items-start">
                {/* Left column */}
                <div>
                    <div style={fadeUp(0)} className="text-xs flex gap-3 leading-4 tracking-[0.45px] text-[#566476]">
                        <span>Home</span>
                        <span className="text-[#CDD7E3]">/</span>
                        <span>Trust</span>
                        <span>&</span>
                        <span>Legal</span>
                        <span className="text-[#CDD7E3]">/</span>
                        <span className="text-[#7C8A9B]">Zoiko Group</span>
                    </div>

                    <p style={fadeUp(0.05)} className="mt-5 text-xs font-semibold tracking-widest text-[#13A594]">
                        ZOIKO GROUP
                    </p>

                    <h1 style={fadeUp(0.1)} className="mt-3 text-3xl leading-tight font-bold tracking-[-0.8px] text-[#0D1B2E] md:text-[40px] lg:min-w-[550px] lg:leading-12">
                        The group behind ZoikoMeds and governed{" "}
                        <span className="text-[#0FAA87]">healthcare infrastructure.</span>
                    </h1>

                    <p style={fadeUp(0.2)} className="mt-4 text-[#566476] lg:min-w-[580px]">
                        Zoiko Group supports ZoikoMeds and Zoiko Healthcare Inc with strategic direction,
                        governance standards, and ecosystem infrastructure for trusted medicine availability access.
                    </p>

                    <div style={fadeUp(0.3)} className="mt-8 flex flex-col sm:flex-row gap-4 lg:min-w-[580px]">
                        <button className="rounded-xl bg-[#13A594] px-6 py-3 font-semibold border cursor-pointer border-[#13A594] text-white transition hover:bg-teal-700">
                            Request Institutional Briefing
                        </button>
                        <button className="rounded-xl border border-[#CDD7E3] bg-white px-6 py-3 cursor-pointer font-semibold text-[#0D1B2E] transition hover:bg-slate-50">
                            Explore ZoikoMeds
                        </button>
                    </div>

                    <a
                        style={fadeUp(0.4)}
                        href="#"
                        className="mt-4 inline-block text-sm font-medium text-[#13A594] hover:underline"
                    >
                        View Zoiko Healthcare →
                    </a>

                    <p style={fadeUp(0.5)} className="mt-4 flex max-w-[450px] items-start gap-2 text-sm leading-6 text-[#566476]">
                        <img src="/zoiko-group/view.png" alt="image" height={15} width={15} />
                        <span>
                            ZoikoMeds is a governed platform operated by Zoiko Healthcare
                            Inc, a subsidiary of Zoiko Group Inc. ZoikoMeds is not a pharmacy
                            and does not prescribe, dispense, sell, deliver, reserve,
                            recommend, or guarantee medicines.
                        </span>
                    </p>
                </div>

                {/* Right column - Corporate structure card */}
                <div>
                    <div
                        style={fadeUp(0.2)}
                        className="overflow-hidden rounded-2xl border border-slate-200 w-full lg:w-110 bg-white shadow-sm"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Corporate structure
                            </h2>

                            <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
                                Illustrative
                            </span>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-[39px] top-0 bottom-0 w-[3px] bg-slate-200" />

                            <ul>
                                {structure.map((item, i) => (
                                    <li
                                        key={item.name}
                                        style={fadeUp(0.3 + i * 0.1)}
                                        className="relative flex border-b border-slate-100 px-6 py-5 last:border-b-0"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="relative z-10 flex w-8 shrink-0 justify-center pt-1">
                                            <span
                                                className={`flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white ${item.highlighted ? "border-[#1F6FB2]" : "border-[#13A594]"
                                                    }`}
                                            >
                                                <span
                                                    className={`h-2 w-2 rounded-full ${item.highlighted ? "bg-[#1F6FB2]" : "bg-[#13A594]"
                                                        }`}
                                                />
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                                            <div>
                                                <h3 className="text-[15px] font-semibold leading-none text-[#0D1B2E]">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-2 text-xs leading-5 text-[#7C8A9B]">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <span
                                                className={`mt-0.5 shrink-0 rounded-md border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${item.highlighted
                                                    ? "border-sky-200 bg-sky-50 text-sky-600"
                                                    : "border-slate-200 bg-slate-50 text-slate-400"
                                                    }`}
                                            >
                                                {item.tag}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p style={fadeUp(0.8)} className="mx-auto py-4 text-center text-[11.8px] max-w-[450px] text-[#7C8A9B]">
                            Illustrative corporate structure. Legal entity, operating, and regulatory details must be
                            confirmed against current corporate records before publication.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}