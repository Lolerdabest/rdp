import { Shield, Vote, Lightbulb, Banknote, Palette } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const principles = [
  {
    icon: Shield,
    title: "Civil Liberties",
    description:
      "We vow to protect the freedoms of conscience, expression, speech, press, and assembly; as well as the rights to security, liberty, privacy, life, property, and self defense.",
  },
  {
    icon: Vote,
    title: "Democratic Governance",
    description:
      "We are committed to protecting the integrity of free and fair elections, upholding the rule of law, and ensuring that the government remains responsive to the people it serves.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Progress",
    description:
      "We believe in solutions grounded in evidence, common sense, and what works. It should be common sense that wins, not the person that yells the hardest.",
  },
  {
    icon: Banknote,
    title: "Confident Economics",
    description:
      "We believe in a market economy with reasonable regulations to protect and balance the freedom of consumers, workers, and businesses.",
  },
  {
    icon: Palette,
    title: "Investment in the Arts",
    description:
      "To become a greater nation, we must bring unity. We believe in investing in the arts, education, history, and public spaces that bring people together.",
  },
];

export function CorePrinciples() {
  return (
    <section id="principles" className="w-full py-20 md:py-28 lg:py-32 bg-background/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Principles
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            The values that guide our every decision.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Card key={index} className="flex flex-col text-center items-center transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full mx-auto">
                    <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
