import {
    EyeOff,
    UserCircle2,
    FileText,
    PackageX,
    ToggleLeft,
    ExternalLink,
    Trash2,
} from "lucide-react";

const features = [
    {
        title: "Search Without Alerts",
        description:
            "You can always perform one-time searches without opting into any data persistence or alerts.",
        src: "/availability-alert/eye.png",
        height: 19,
        width: 22
    },
    {
        title: "Account Required",
        description:
            "Active alerts require a verified account to ensure secure notification delivery and data management.",
        src: "/availability-alert/account.png",
        height: 20,
        width: 20
    },
    {
        title: "No Prescription Upload",
        description:
            "We never ask for or store prescription documents. We only monitor generalized availability signals.",
        src: "/availability-alert/file.png",
        height: 20,
        width: 16
    },
    {
        title: "No Stock Guarantees",
        description:
            "ZoikoMeds monitors signals, not actual physical inventory. Final status must be verified by phone.",
        src: "/availability-alert/stock.png",
        height: 19,
        width: 18
    },
    {
        title: "Notification Control",
        description:
            "Pause or delete any alert instantly. One-click unsubscribe is built into every message.",
        src: "/availability-alert/not.png",
        height: 12,
        width: 22
    },
];

const dashboardLinks = [
    {
        title: "Manage Saved Searches",
        icon: ExternalLink,
    },
    {
        title: "Alert Logs",
        icon: ExternalLink,
    },
    {
        title: "Export / Delete All Data",
        icon: Trash2,
    },
];

export default function AvailabilityTrust() {
    return (
        <section className="bg-[#F9F9FF] px-6 py-16 lg:px-12">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}

                <div className="text-center">
                    <h2 className="text-3xl font-semibold leading-10 tracking-[-.32px] text-[#0D1B2E] md:text-[32px]">
                        Trust &{" "}
                        <span className="text-[#0FAA87]">
                            Privacy Infrastructure
                        </span>
                    </h2>

                    <p className="mt-2 text-[#44474D]">
                        How we handle your monitoring data and the boundaries of the
                        service.
                    </p>
                </div>

                {/* Grid */}

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {features.map(({ title, description, src, height, width }) => (
                        <div
                            key={title}
                            className="rounded-[16px] h-48 bg-[#DCE2F3] p-6 transition hover:shadow-md"
                        >
                            <img src={src} alt={title} height={height} width={width} />

                            <h3 className="mt-3 font-medium text-[#000615]">
                                {title}
                            </h3>

                            <p className="mt-4 leading-5 tracking-[-.14px] text-[#44474D]">
                                {description}
                            </p>
                        </div>
                    ))}

                    {/* Dashboard Card */}

                    <div className="rounded-[16px] h-[230px] md:h-[220px] bg-[#0B1F3A] px-6 shadow-sm">
                        {dashboardLinks.map(({ title, icon: Icon }, index) => (
                            <button
                                key={title}
                                className={`flex w-full items-center justify-between py-3 text-left transition
      ${index !== dashboardLinks.length - 1
                                        ? "border-b border-white/10"
                                        : ""
                                    }`}
                            >
                                <span
                                    className={` ${index === dashboardLinks.length - 1
                                        ? "text-[#FFDAD6]"
                                        : "text-[#7587A7]"
                                        } ${index === 0 && "mt-17"}`}
                                >
                                    {title}
                                </span>

                                <Icon
                                    size={16}
                                    className={`
                                        ${index === dashboardLinks.length - 1
                                            ? "text-[#FFDAD6]"
                                            : "text-[#8C9AB3]"}
                                            ${index === 0 && "mt-10"}
                                    `}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}