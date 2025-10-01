import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden"
    >
       <div className="absolute inset-0 z-0 bg-background">
        <div 
          className="absolute inset-0 opacity-50" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 30%, hsl(var(--primary) / 0.3), transparent 40%), radial-gradient(circle at 75% 70%, hsl(var(--accent) / 0.3), transparent 40%)',
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
          Building a Better Server, Together.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-foreground/80 md:text-xl">
          For democracy, transparency, and a vibrant community. The Redmont party is committed to progress for all players.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
