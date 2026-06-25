// page.tsx
import {
  PharmacyPortalHeroSection,
  PharmacyPortalWorkspaces,
  PharmacyPortalDataProtection,
  PharmacyPortalAccessScale,
  PharmacyPortalFindPath,
  PharmacyPortalFinalCta,
} from "@/components/pharmacy-portal";

export default function PharmacyPortalPage() {
  return (
    <main>
      <PharmacyPortalHeroSection />
      <PharmacyPortalWorkspaces />
      <PharmacyPortalDataProtection />
      <PharmacyPortalAccessScale />
      <PharmacyPortalFindPath />
      <PharmacyPortalFinalCta />
    </main>
  );
}