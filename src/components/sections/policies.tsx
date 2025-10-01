import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { policies } from "@/lib/data";
import { PolicySummary } from "@/components/policy-summary";
import { Card } from "@/components/ui/card";

export function Policies() {
  return (
    <section id="policies" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Platform for Progress
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Clear positions on the issues that matter most to our server community.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 mx-auto max-w-3xl space-y-4">
          {policies.map((policy) => (
            <Card key={policy.id} className="overflow-hidden transition-all duration-300">
                <AccordionItem value={policy.id} className="border-b-0">
                <AccordionTrigger className="p-6 text-lg font-headline font-semibold hover:no-underline transition-colors data-[state=open]:bg-primary/5">
                    <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    {policy.title}
                    </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                    <div className="prose prose-base max-w-none text-foreground/80 font-body">
                      {policy.content}
                    </div>
                    <div className="mt-6">
                        <PolicySummary policyText={policy.content} />
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
