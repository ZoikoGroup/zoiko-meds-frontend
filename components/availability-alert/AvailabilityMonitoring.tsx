import {
    Info,
} from "lucide-react";

const steps = [
    {
        step: "STEP 01",
        title: "Search",
        src: "/availability-alert/search.png",
        height: 22.5,
        width: 22.5,
        description:
            "Identify the specific medicine and region you need to monitor."
    },
    {
        step: "STEP 02",
        title: "Save",
        src: "/availability-alert/save.png",
        height: 17.5,
        width: 22.5,
        description:
            "Add the search parameters to your private dashboard queue."
    },
    {
        step: "STEP 03",
        title: "Set Alerts",
        src: "/availability-alert/notification.png",
        height: 20,
        width: 25,
        description:
            "Define your sensitivity thresholds and notification methods."
    },
    {
        step: "STEP 04",
        title: "Confirm",
        src: "/availability-alert/verify.png",
        height: 27.5,
        width: 26.25,
        description:
            "Verify your contact info and activate the monitoring service."
    },
];

export default function MonitoringSteps() {
    return (
        <section className="bg-white px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto max-w-3xl flex flex-col justify-center items-center">

                    <h2 className="text-center text-[32px] font-bold leading-tight tracking-[-0.32px] text-[#000615] sm:text-[36px] lg:text-[32px]">
                        Four steps to{" "}
                        <span className="text-[#0FAA87]">
                            precise monitoring
                        </span>
                    </h2>

                    <p className="mt-3 max-w-[672px] text-center text-[16px] font-medium leading-6 text-[#44474D]">
                        Our infrastructure monitors multi-source availability signals in
                        real-time, allowing you to react quickly when data changes.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {steps.map(({ step, title, description, src, height, width }) => (
                        <div
                            key={step}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E2E8F8] shadow-sm">
                                <img src={src} alt={title} height={height} width={width} />
                            </div>

                            <p className="mt-6 text-[16px] font-medium uppercase tracking-[1.6px] leading-6 text-[#006A65]">
                                {step}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-[#000615]">
                                {title}
                            </h3>

                            <p className="mt-2 max-w-[225px] text-[16px] leading-6 text-[#44474D]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-20 rounded-[16px] border border-[#C4C6CE4D] bg-[#F0F3FF] p-6 shadow-sm">
                    <div className="flex items-start gap-4">

                        <img src="/availability-alert/info.png" alt="Info" height={25} width={25} />


                        <p className="text-[16px] leading-6 font-bold text-[#404854]">
                            Important Disclaimer:
                            Alerts help you know when to check again. They do not confirm
                            that a pharmacy will dispense the medicine. Final availability
                            is determined by the provider at the time of purchase.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}