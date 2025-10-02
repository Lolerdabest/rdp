import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TableOfContents } from "@/components/sections/table-of-contents";
import { Policies } from "@/components/sections/policies";
import { GetInvolved } from "@/components/sections/get-involved";
import { AnimatedSection } from "@/components/animated-section";
import { CorePrinciples } from "@/components/sections/core-principles";
import { OurSuccesses } from "@/components/sections/our-successes";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <AnimatedSection>
          <CorePrinciples />
        </AnimatedSection>
        <AnimatedSection>
          <OurSuccesses />
        </AnimatedSection>
        <AnimatedSection>
          <TableOfContents />
        </AnimatedSection>
        <AnimatedSection>
          <Policies />
        </AnimatedSection>
        <AnimatedSection>
          <GetInvolved />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
