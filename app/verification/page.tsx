// app/verification/page.tsx
import {
  VerificationStandardsSection,
  VerificationLayersSection,
  VerificationStatusSection,
  VerificationOngoingGovernanceSection,
  VerificationLimitsAndNextStepSection,
  VerificationCtaSection
} from "@/components/verification";

export default function VerificationPage() {
  return (
    <main>
      <VerificationStandardsSection />
      <VerificationLayersSection />
      <VerificationStatusSection />
      <VerificationOngoingGovernanceSection />
      <VerificationLimitsAndNextStepSection />
      <VerificationCtaSection />
    </main>
  );
}