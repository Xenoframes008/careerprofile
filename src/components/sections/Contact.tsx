import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfoCard } from "@/components/sections/ContactInfoCard";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable together"
          description="Open to Software QA, Test Automation and Quality Engineering opportunities in Dublin and beyond. Drop a message and I'll get back to you soon."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal y={24}>
            <ContactForm />
          </Reveal>

          <Reveal y={24} delay={0.1} className="flex flex-col gap-6">
            <ContactInfoCard />
            <MapPlaceholder />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
