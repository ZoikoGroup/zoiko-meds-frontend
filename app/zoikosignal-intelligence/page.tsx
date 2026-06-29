import {
  ZoikoSignalIntelligenceHeroSection,
  ZoikoSignalIntelligencePipelineSection,
  ZoikoSignalIntelligenceModulesSection,
  ZoikoSignalIntelligenceUseCasesSection,
  ZoikoSignalIntelligenceGovernanceSection,
  ZoikoSignalIntelligenceFaqSection,
  ZoikoSignalIntelligenceAccessPathwaysSection,
  ZoikoSignalIntelligenceRequestBriefingSection
} from "@/components/zoikosignal-intelligence";

export default function ZoikoSignalIntelligencePage() {
  return (
    <main>
      <ZoikoSignalIntelligenceHeroSection />
      <ZoikoSignalIntelligencePipelineSection />
      <ZoikoSignalIntelligenceModulesSection />
      <ZoikoSignalIntelligenceUseCasesSection />
      <ZoikoSignalIntelligenceGovernanceSection />
      <ZoikoSignalIntelligenceFaqSection />
      <ZoikoSignalIntelligenceAccessPathwaysSection />
      <ZoikoSignalIntelligenceRequestBriefingSection />
    </main>
  );
}