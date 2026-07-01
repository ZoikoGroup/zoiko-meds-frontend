import {
  TermsOfUseHeroSection,
  TermsOfUseSummarySection,
  TermsOfUseByRoleSection,
  TermsOfUseFullTermsSection,
  TermsOfUseAcceptanceSection,
  TermsOfUseLegalBoundariesSection
} from "@/components/terms-of-use";

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsOfUseHeroSection />
      <TermsOfUseSummarySection />
      <TermsOfUseByRoleSection />
      <TermsOfUseFullTermsSection />
      <TermsOfUseAcceptanceSection />
      <TermsOfUseLegalBoundariesSection />
    </main>
  );
}