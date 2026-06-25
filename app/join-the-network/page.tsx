import {
  JoinNetworkHeroSection,
  JoinNetworkBenefitsSection,
  JoinNetworkVerificationStepsSection,
  JoinNetworkControlsSection,
  JoinNetworkPathFormSection,
  JoinNetworkClosingCtaSection,
} from "@/components/join-network";

export default function JoinNetworkPage() {
  return (
    <main>
      <JoinNetworkHeroSection />
      <JoinNetworkBenefitsSection />
      <JoinNetworkVerificationStepsSection />
      <JoinNetworkControlsSection />
      <JoinNetworkPathFormSection />
      <JoinNetworkClosingCtaSection />
    </main>
  );
}