import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden"
    >
       <div className="absolute inset-0 z-0 bg-background">
         <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient-x opacity-30" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl animate-fade-in-up">
          Redmont: For the Players.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-foreground/80 md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Forging a new era of democracy and progress. Your voice, our mission.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg">
            <a href="#policies">
              Explore Our Platform
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
