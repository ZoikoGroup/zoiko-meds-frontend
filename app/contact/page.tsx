import { 
    ContactHeroSection,
    ContactPathSelectorSection,
    ContactHighIntentPathsSection,
    ContactSafeStandardsSection,
    ContactFormSection 
} from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactPathSelectorSection />
      <ContactHighIntentPathsSection />
      <ContactSafeStandardsSection />
      <ContactFormSection />
    </main>
  );
}