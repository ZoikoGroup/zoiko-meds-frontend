// app/provider-support/page.tsx
import { 
    
    ProviderSupportHeroSection, 
    ProviderSupportPathsSection, 
    ProviderSupportPriorityIssuesSection,
    ProviderSupportBoundariesSection,
    ProviderSupportFormSection,
    ProviderSupportClosingCtaSection

} from "@/components/provider-support";

export default function ProviderSupportPage() {
  return (
    <main>
      <ProviderSupportHeroSection />
      <ProviderSupportPathsSection />
      <ProviderSupportPriorityIssuesSection />
      <ProviderSupportBoundariesSection />
      <ProviderSupportFormSection />
      <ProviderSupportClosingCtaSection />
    </main>
  );
}