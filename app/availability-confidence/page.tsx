import {
  AvailabilityConfidenceHeroSection,
  AvailabilityConfidenceSignalsSection,
  AvailabilityConfidenceFactorsSection,
  AvailabilityConfidenceSafeUseSection,
  AvailabilityConfidenceTrustSection,
  AvailabilityConfidenceClosingCtaSection
} from "@/components/availability-confidence";

export default function AvailabilityConfidencePage() {
  return (
    <main>
      <AvailabilityConfidenceHeroSection />
      <AvailabilityConfidenceSignalsSection />
      <AvailabilityConfidenceFactorsSection />
      <AvailabilityConfidenceSafeUseSection />
      <AvailabilityConfidenceTrustSection />
      <AvailabilityConfidenceClosingCtaSection />
    </main>
  );
}