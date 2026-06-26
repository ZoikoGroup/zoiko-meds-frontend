import {
  ProviderOverviewHeroSection,
  ProviderOverviewUseCasesSection,
  ProviderOverviewWhatProvidersSeeSection,
  ProviderOverviewGovernanceSection,
  ProviderOverviewGetStartedSection,
  ProviderOverviewCtaSection
} from "@/components/provider-overview";

export default function ProviderOverviewPage() {
  return (
    <main>
      <ProviderOverviewHeroSection />
      <ProviderOverviewUseCasesSection />
      <ProviderOverviewWhatProvidersSeeSection />
      <ProviderOverviewGovernanceSection />
      <ProviderOverviewGetStartedSection />
      <ProviderOverviewCtaSection />
    </main>
  );
}