import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Policies } from "@/components/sections/policies";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Policies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
