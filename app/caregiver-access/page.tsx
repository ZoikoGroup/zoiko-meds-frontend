import { CaregiverCta, CaregiverDashboard, CaregiverFeatures, CaregiverHero, CaregiverPrivacy } from "@/components/caregiver-access";

export default function CaregiverAccessPage() {
    return (
        <main>
            <CaregiverHero />
            <CaregiverFeatures />
            <CaregiverDashboard />
            <CaregiverPrivacy />
            <CaregiverCta />
        </main>
    )
}