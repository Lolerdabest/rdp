import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Policies } from "@/components/sections/policies";
import { GetInvolved } from "@/components/sections/get-involved";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
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
