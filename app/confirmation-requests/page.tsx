import {
  ConfirmationRequestsHeroSection,
  ConfirmationRequestsWorkflowSection,
  ConfirmationRequestsControlsSection,
  ConfirmationRequestsStatesSection,
  ConfirmationRequestsGovernanceSection,
  ConfirmationRequestsPathFormSection,
  ConfirmationRequestsFinalCtaSection
} from "@/components/confirmation-requests";

export default function ConfirmationRequestsPage() {
  return (
    <main>
      <ConfirmationRequestsHeroSection />
      <ConfirmationRequestsWorkflowSection />
      <ConfirmationRequestsControlsSection />
      <ConfirmationRequestsStatesSection />
      <ConfirmationRequestsGovernanceSection />
      <ConfirmationRequestsPathFormSection />
      <ConfirmationRequestsFinalCtaSection />
    </main>
  );
}