import {
  PharmacySupportHeroSection,
  PharmacySupportPathsSection,
  PharmacySupportPriorityIssuesSection,
  PharmacySupportSecuritySection,
  PharmacySupportFormSection,
  PharmacySupportFinalCtaSection,
} from "@/components/pharmacy-support";

export default function PharmacySupportPage() {
  return (
    <main>
      <PharmacySupportHeroSection />
      <PharmacySupportPathsSection />
      <PharmacySupportPriorityIssuesSection />
      <PharmacySupportSecuritySection />
      <PharmacySupportFormSection />
      <PharmacySupportFinalCtaSection />
    </main>
  );
}