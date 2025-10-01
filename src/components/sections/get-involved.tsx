import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Megaphone } from "lucide-react";
import { ShareButton } from "@/components/share-button";

const actions = [
  {
    icon: MessageSquare,
    title: "Join the Discussion",
    description: "Our Discord server is the heart of our community. Share your ideas, debate policies, and get to know us.",
    buttonText: "Join Discord",
    href: "https://discord.gg/xy8MsApvD4",
    variant: "default" as const,
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description: "Help us reach more players. Share our platform with your friends and in-game networks.",
    buttonText: "Share Platform",
    href: "#",
    variant: "outline" as const,
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Take Action
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Change doesn't happen on its own. Here’s how you can be part of the movement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {actions.map((action, index) => (
            <Card key={index} className="flex flex-col text-center items-center">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full mx-auto">
                    <action.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{action.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground font-body flex-grow">{action.description}</p>
                {action.title === "Spread the Word" ? (
                  <ShareButton />
                ) : (
                  <Button asChild className="mt-6 w-full" variant={action.variant}>
                    <a href={action.href} target={action.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {action.buttonText}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
