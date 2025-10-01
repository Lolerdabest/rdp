import Image from 'next/image';

export function Logo() {
  return (
    <a href="#" aria-label="Back to homepage" className="flex items-center gap-3">
      <Image
        src="https://i.ibb.co/VY90t4J4/image-25.png"
        alt="Redmont Logo"
        width={40}
        height={40}
        className="rounded-full"
        data-ai-hint="logo"
      />
      <span className="text-xl font-bold tracking-tighter font-headline text-foreground">
        Redmont
      </span>
    </a>
  );
}
