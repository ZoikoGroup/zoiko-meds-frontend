import {
  PatientSupportHeroSection,
  PatientSupportMomentsSection,
  PatientSupportWorkflowSection,
  PatientSupportBoundariesSection,
  PatientSupportPathFormSection,
  PatientSupportClosingCtaSection
} from "@/components/patient-support";

export default function PatientSupportPage() {
  return (
    <main>
      <PatientSupportHeroSection />
      <PatientSupportMomentsSection />
      <PatientSupportWorkflowSection />
      <PatientSupportBoundariesSection />
      <PatientSupportPathFormSection />
      <PatientSupportClosingCtaSection />
    </main>
  );
}