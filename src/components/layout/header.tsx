import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#policies", label: "Our Platform" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors text-foreground/60 hover:text-foreground/80"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="https://discord.gg/xy8MsApvD4" target="_blank" rel="noopener noreferrer">
              Join our Discord
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
                 <Button asChild size="lg" className="mt-4">
                    <a href="https://discord.gg/xy8MsApvD4" target="_blank" rel="noopener noreferrer">
                        Join our Discord
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
