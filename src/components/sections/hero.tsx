import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-blue-500 to-yellow-300 animate-gradient-x"></div>
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          A New Day for Redmont
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-gray-200 md:text-xl">
          Join the movement for sunny beaches, strong communities, and a vibrant future.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
            <a href="#policies">
              Discover Our Vision
              <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
