import { AvailabilityControl, AvailabilityCta, AvailabilityHero, AvailabilityMonitoring, AvailabilityStrategic, AvailabilityTrust } from "@/components/availability-alert";

export default function AvailabilityAlert() {
    return (
        <main>
            <AvailabilityHero />
            <AvailabilityMonitoring />
            <AvailabilityControl />
            <AvailabilityStrategic />
            <AvailabilityTrust />
            <AvailabilityCta />
        </main>
    )
}