import { Sun } from "lucide-react";

export function Logo() {
  return (
    <a href="#policies" aria-label="Scroll to Redmont Platform policies" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
        <Sun className="w-6 h-6" />
      </div>
      <span className="text-xl font-bold font-headline text-foreground">
        Redmont
      </span>
    </a>
  );
}
