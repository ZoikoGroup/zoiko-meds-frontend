import { 
    PressHeroSection,
    PressNewsroomSection,
    PressAssetsSection,
    PressCompanyFactsSection,
    PressContactSection,
    PressGovernanceSection 
} from "@/components/press";

export default function PressPage() {
  return (
    <main>
      <PressHeroSection />
      <PressNewsroomSection />
      <PressAssetsSection />
      <PressCompanyFactsSection />
      <PressContactSection />
      <PressGovernanceSection />
    </main>
  );
}