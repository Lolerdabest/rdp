import Image from 'next/image';

export function Logo() {
  return (
    <a href="#policies" aria-label="Scroll to Redmont Platform policies" className="flex items-center gap-2">
      <Image
        src="https://picsum.photos/seed/logo/40/40"
        alt="Redmont Logo"
        width={40}
        height={40}
        className="rounded-full"
        data-ai-hint="logo"
      />
      <span className="text-xl font-bold font-headline text-foreground">
        Redmont
      </span>
    </a>
  );
}
