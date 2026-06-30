import { ZoikoGroupArchitecture, ZoikoGroupContact, ZoikoGroupHero, ZoikoGroupPlatform, ZoikoGroupStakeholders, ZoikoGroupStandards, ZoikoGroupThesis } from "@/components/zoiko-group";

export default function ZoikoGroupPage() {
    return (
        <main>
            <ZoikoGroupHero />
            <ZoikoGroupArchitecture />
            <ZoikoGroupThesis />
            <ZoikoGroupStandards />
            <ZoikoGroupStakeholders />
            <ZoikoGroupPlatform />
            <ZoikoGroupContact />
        </main>
    )
}