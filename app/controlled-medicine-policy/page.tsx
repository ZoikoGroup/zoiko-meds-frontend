import { 
    ControlledMedicinePolicyHeroSection,
    ControlledMedicinePolicyCoverageSection,
    ControlledMedicinePolicySensitiveSearchSection,
    ControlledMedicinePolicyResponsibilitiesSection,
    ControlledMedicinePolicyGovernanceSection,
    ControlledMedicinePolicySupportSection
 } from "@/components/controlled-medicine-policy";

export default function ControlledMedicinePolicyPage() {
  return (
    <main>
      <ControlledMedicinePolicyHeroSection />
      <ControlledMedicinePolicyCoverageSection />
      <ControlledMedicinePolicySensitiveSearchSection />
      <ControlledMedicinePolicyResponsibilitiesSection />
      <ControlledMedicinePolicyGovernanceSection />
      <ControlledMedicinePolicySupportSection />
    </main>
  );
}