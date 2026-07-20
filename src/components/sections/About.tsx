import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { aboutCards } from "@/config/about";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the test cases"
          description="Who I am, what I specialise in, and how I think about quality."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {aboutCards.map((card, index) => (
            <IconCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
              className="min-h-[200px] rounded-3xl p-7 sm:p-8"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
