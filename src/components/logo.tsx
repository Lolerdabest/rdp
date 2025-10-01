import Image from 'next/image';

export function Logo() {
  return (
    <a href="#" aria-label="Back to homepage" className="flex items-center gap-3">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-slow"></div>
        <Image
          src="https://i.ibb.co/VY90t4J4/image-25.png"
          alt="Redmont Logo"
          width={40}
          height={40}
          className="rounded-full relative z-10"
          data-ai-hint="logo"
        />
      </div>
      <span className="text-xl font-extrabold tracking-wider uppercase font-headline text-foreground">
        Redmont
      </span>
    </a>
  );
}
