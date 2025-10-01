import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { policies } from "@/lib/data";
import { PolicySummary } from "@/components/policy-summary";

export function Policies() {
  return (
    <section id="policies" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Platform for Progress
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Clear positions on the issues that matter most to our community.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 mx-auto max-w-3xl">
          {policies.map((policy) => (
            <AccordionItem key={policy.id} value={policy.id} className="bg-card shadow-sm rounded-lg mb-4">
              <AccordionTrigger className="p-6 text-lg font-headline font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  <policy.icon className="h-6 w-6 text-primary" />
                  {policy.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="prose prose-sm max-w-none text-foreground/80">
                  <p className="font-body">{policy.content}</p>
                </div>
                <div className="mt-6">
                    <PolicySummary policyText={policy.content} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
