import {
     IntelligenceHero,
     IntelligenceTrustSafetySection,
     IntelligenceOverviewSection,
     AnalyticsCapabilitiesSection,
     IntelligenceAIInsightsSection,
     IntelligenceReportsSection,
     IntelligenceUseCasesSection,
     IntelligenceGovernanceSection,
     IntelligenceBriefingRequestSection,
     IntelligenceRecurringSection,
     IntelligenceFAQSection,
     IntelligenceFinalCTASection 
    } from "@/components/intelligence";

export default function IntelligencePage() {
  return (
    <main>
      <IntelligenceHero />
      <IntelligenceTrustSafetySection />
      <IntelligenceOverviewSection />
      <AnalyticsCapabilitiesSection />
      <IntelligenceAIInsightsSection />
      <IntelligenceReportsSection />
      <IntelligenceUseCasesSection />
      <IntelligenceGovernanceSection />
      <IntelligenceBriefingRequestSection />
      <IntelligenceRecurringSection />
      <IntelligenceFAQSection />
      <IntelligenceFinalCTASection />
    </main>
  );
}