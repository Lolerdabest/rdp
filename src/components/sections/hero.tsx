import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FloatingShapes } from "@/components/floating-shapes";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background">
        <FloatingShapes />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl animate-fade-in-up">
          Redmont: For the Players.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-foreground/80 md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Let the wave of prosperity flow through Redmont
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg">
            <a href="#policies">
              View policies
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#get-involved">
              Get Involved
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
