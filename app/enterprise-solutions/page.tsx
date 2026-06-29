import {
  EnterpriseSolutionsHeroSection,
  EnterpriseSolutionsStackSection,
  EnterpriseSolutionsPathsSection,
  EnterpriseSolutionsOutcomesSection,
  EnterpriseSolutionsGovernanceSection,
  EnterpriseSolutionsFaqSection,
  EnterpriseSolutionsAccessSection,
  EnterpriseSolutionsRequestBriefingSection,
} from "@/components/enterprise-solutions";

export default function EnterpriseSolutionsPage() {
  return (
    <main>
      <EnterpriseSolutionsHeroSection />
      <EnterpriseSolutionsStackSection />
      <EnterpriseSolutionsPathsSection />
      <EnterpriseSolutionsOutcomesSection />
      <EnterpriseSolutionsGovernanceSection />
      <EnterpriseSolutionsFaqSection />
      <EnterpriseSolutionsAccessSection />
      <EnterpriseSolutionsRequestBriefingSection />
    </main>
  );
}