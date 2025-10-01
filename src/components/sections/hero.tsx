import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FloatingShapes } from "@/components/floating-shapes";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <FloatingShapes />
      <div className="relative z-10 flex flex-col items-center text-center p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl animate-fade-in-up [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
          Redmont: For the Players.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/90 md:text-xl animate-fade-in-up [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]" style={{ animationDelay: '0.2s' }}>
          Let the wave of prosperity flow through Redmont
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg">
            <a href="#policies">
              View policies
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20">
            <a href="#get-involved">
              Get Involved
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
