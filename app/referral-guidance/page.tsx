import {
  ReferralGuidanceHeroSection,
  ReferralGuidanceWhenToReferSection,
  ReferralGuidanceHandoffRoutesSection,
  ReferralGuidanceLanguageSection,
  ReferralGuidancePathwaySection,
  ReferralGuidanceFinalCtaSection,
} from "@/components/referral-guidance";

export default function ReferralGuidancePage() {
  return (
    <main>
      <ReferralGuidanceHeroSection />
      <ReferralGuidanceWhenToReferSection />
      <ReferralGuidanceHandoffRoutesSection />
      <ReferralGuidanceLanguageSection />
      <ReferralGuidancePathwaySection />
      <ReferralGuidanceFinalCtaSection />
    </main>
  );
}