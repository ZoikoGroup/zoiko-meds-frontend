import React from "react";

type Card = {
    src: string;
    title: string;
    desc: string;
};

const cards: Card[] = [
    {
        src:"/zoiko-group/governed.png",
        title: "Privacy by design",
        desc: "Public search flows avoid unnecessary collection of prescription images, diagnosis, clinical notes, insurance IDs, and identifiable patient-level data.",
    },
    {
        src:"/zoiko-group/exact.png",
        title: "Exact-stock protection",
        desc: "ZoikoMeds avoids confirmation-based availability signals and does not publicly expose exact pharmacy stock quantities.",
    },
    {
        src:"/zoiko-group/role.png",
        title: "Role & access controls",
        desc: "Pharmacies, providers, enterprises, and verticalized surfaces require governed access, verification, and role-based permissions where applicable.",
    },
    {
        src:"/zoiko-group/jurisdication.png",
        title: "Jurisdiction awareness",
        desc: "Prescription rules, pharmacy obligations, and the law requirements, and local laws apply by jurisdiction.",
    },
    {
        src:"/zoiko-group/security.png",
        title: "Security posture",
        desc: "Enterprise and institutional reviewers are routed to the Trust Center, Security Posts, or an enterprise briefing — without publishing sensitive security details.",
    },
    {
        src:"/zoiko-group/claim.png",
        title: "Claim control",
        desc: "No unverifiable claims about jurisdiction, pharmacy counts, claims coverage, or performance metrics are made.",
    },
];

const fadeUp = (delay: number): React.CSSProperties => ({
    animation: `fadeUp 0.6s ease-out ${delay}s both`,
});

export default function ZoikoGroupStandards() {
    return (
        <section className="bg-[#0C1B30] px-6 py-16 md:px-16">
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="mx-auto max-w-5xl">
                <p style={fadeUp(0)} className="text-xs font-semibold tracking-[2px] text-[#34D6C4]">
                    03 · ECOSYSTEM GOVERNANCE &amp; STANDARDS
                </p>
                <h2 style={fadeUp(0.05)} className="mt-2 max-w-125 text-2xl font-bold text-white md:text-3xl">
                    Governance that protects users, <span className="text-[#0FAA87]">pharmacies, and institutions.</span>
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {cards.map((card, i) => (
                        <div
                            key={card.title}
                            style={fadeUp(0.15 + i * 0.08)}
                            className="rounded-xl border border-[#FFFFFF1A] bg-[#FFFFFF08] p-5"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#13A5941A]">
                                <img src={card.src} alt="image" />
                            </div>
                            <p className="mt-4 font-bold text-white">{card.title}</p>
                            <p className="mt-2 text-sm text-[#E7EEF6A6]">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
