import {
  AvailabilitySignalsHeroSection,
  AvailabilitySignalsLanguageSection,
  AvailabilitySignalsProviderUsageSection,
  AvailabilitySignalsReflectSection,
  AvailabilitySignalsGetStartedSection,
  AvailabilitySignalsCtaSection
} from "@/components/availability-signals";

export default function AvailabilitySignalsPage() {
  return (
    <main>
      <AvailabilitySignalsHeroSection />
      <AvailabilitySignalsLanguageSection />
      <AvailabilitySignalsProviderUsageSection />
      <AvailabilitySignalsReflectSection />
      <AvailabilitySignalsGetStartedSection />
      <AvailabilitySignalsCtaSection />
    </main>
  );
}