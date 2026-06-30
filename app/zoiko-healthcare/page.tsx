import { 
    ZoikoHealthcareHeroSection,
    ZoikoHealthcareCorporateRoleSection,
    ZoikoHealthcareBuildsSection,
    ZoikoHealthcareGovernanceSection,
    ZoikoHealthcareStakeholderPathwaysSection,
    ZoikoHealthcareCorporateContactSection 
} from "@/components/zoiko-healthcare";

export default function ZoikoHealthcarePage() {
  return (
    <main>
      <ZoikoHealthcareHeroSection />
      <ZoikoHealthcareCorporateRoleSection />
      <ZoikoHealthcareBuildsSection />
      <ZoikoHealthcareGovernanceSection />
      <ZoikoHealthcareStakeholderPathwaysSection />
      <ZoikoHealthcareCorporateContactSection />
    </main>
  );
}