import {
  AnalyticsHeroSection,
  AnalyticsTrustScopeSection,
  AnalyticsCommandViewSection,
  AnalyticsSignalSourcesSection,
  AnalyticsModulesSection,
  AnalyticsStakeholderSection,
  AnalyticsGovernanceSection,
  AnalyticsDashboardStatesSection,
  AnalyticsBriefingFormSection,
  AnalyticsFaqSection,
  AnalyticsClosingCtaSection
} from "@/components/analytics";

export default function AnalyticsPage() {
  return (
    <main>
      <AnalyticsHeroSection />
      <AnalyticsTrustScopeSection />
      <AnalyticsCommandViewSection />
      <AnalyticsSignalSourcesSection />
      <AnalyticsModulesSection />
      <AnalyticsStakeholderSection />
      <AnalyticsGovernanceSection />
      <AnalyticsDashboardStatesSection />
      <AnalyticsBriefingFormSection />
      <AnalyticsFaqSection />
      <AnalyticsClosingCtaSection />
    </main>
  );
}