import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          A New Day for Redmont
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-gray-200 md:text-xl">
          Join the movement for sunny beaches, strong communities, and a vibrant future.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
