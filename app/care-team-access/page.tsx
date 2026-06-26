import {
  CareTeamAccessHeroSection,
  CareTeamAccessRolesSection,
  CareTeamAccessToolsSection,
  CareTeamAccessGovernanceSection,
  CareTeamAccessPathwaySection,
  CareTeamAccessFinalCtaSection
} from "@/components/care-team-access";

export default function CareTeamAccessPage() {
  return (
    <main>
      <CareTeamAccessHeroSection />
      <CareTeamAccessRolesSection />
      <CareTeamAccessToolsSection />
      <CareTeamAccessGovernanceSection />
      <CareTeamAccessPathwaySection />
      <CareTeamAccessFinalCtaSection />
    </main>
  );
}