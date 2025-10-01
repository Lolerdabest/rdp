import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DollarSign, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#policies", label: "Policies" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
            <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">
              <DollarSign className="w-4 h-4 mr-2" />
              Donate
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <div className="flex justify-start">
                    <Logo />
                </div>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                 <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90 mt-4">
                    <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Donate
                    </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
