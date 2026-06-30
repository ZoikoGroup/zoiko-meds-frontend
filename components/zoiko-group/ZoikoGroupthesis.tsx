import React from "react";

type Card = {
    src: string;
    title: string;
    desc: string;
};

const cards: Card[] = [
    {
        src: "/zoiko-group/search.png",
        title: "Access visibility",
        desc: "Support platforms that release uncertainty around medicine availability and help users know what to confirm before they travel.",
    },
    {
        src: "/zoiko-group/governed.png",
        title: "Governed infrastructure",
        desc: "Favor verified participation, privacy safeguards, auditability, data normalization, and jurisdiction-aware controls.",
    },
    {
        src: "/zoiko-group/healthcare.png",
        title: "Healthcare without overreach",
        desc: "Groups-backed healthcare platforms must respect pharmacies, clinicians, regulators, and local laws.",
    },
    {
        src: "/zoiko-group/enterprise.png",
        title: "Enterprise seriousness",
        desc: "The group and Healthcare supports institutional pathways for health systems, public health, governments, pharmacies, data teams, and strategic partners.",
    },
];

const fadeUp = (delay: number): React.CSSProperties => ({
    animation: `fadeUp 0.6s ease-out ${delay}s both`,
});

export default function ZoikoGroupThesis() {
    return (
        <section className="bg-slate-100 px-6 py-16 md:px-16">
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="mx-auto max-w-5xl">
                <p style={fadeUp(0)} className="text-xs tracking-[1.80px] text-[#13A594] font-medium">
                    02 · MISSION &amp; HEALTHCARE THESIS
                </p>
                <h2 style={fadeUp(0.05)} className="mt-2 text-2xl max-w-[550px] font-bold leading-12 text-slate-900 md:text-3xl">
                    Building infrastructure for medicine{" "}
                    <span className="text-[#0FAA87]">access visibility.</span>
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {cards.map((card, i) => (
                        <div
                            key={card.title}
                            style={fadeUp(0.15 + i * 0.1)}
                            className="rounded-2xl border border-slate-200 bg-white flex p-6  gap-4 items-start shadow-sm"
                        >
                            <div className="flex h-10 w-20 items-center justify-center rounded-[10px] bg-[#13A5941A]">
                                <img src={card.src} alt="Image"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-slate-900">{card.title}</p>
                                <p className="mt-2 text-sm text-[#566476]">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
