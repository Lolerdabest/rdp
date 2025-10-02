"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { policies } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Policies() {
  const allPolicyIds = policies.map((policy) => policy.id);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const areAllOpen = openItems.length === allPolicyIds.length;

  const toggleExpandCollapse = () => {
    if (areAllOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(allPolicyIds);
    }
  };

  return (
    <section id="policies" className="w-full py-20 md:py-28 lg:py-32 bg-background/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Redmont Beach Party Platform
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            September 2025
          </p>
          <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-foreground">POLICIES</h3>
        </div>

        <div className="mx-auto max-w-3xl mt-8 flex justify-end">
          <Button variant="ghost" onClick={toggleExpandCollapse}>
            {areAllOpen ? "Collapse All" : "Expand All"}
          </Button>
        </div>

        <Accordion 
          type="multiple" 
          className="mt-4 mx-auto max-w-3xl space-y-4"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {policies.map((policy) => (
             <Card key={policy.id} className="overflow-hidden transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02]">
              <AccordionItem value={policy.id} className="border-b-0">
              <AccordionTrigger 
                className={`p-6 text-lg font-headline font-semibold hover:no-underline transition-colors data-[state=open]:bg-primary/5 ${!policy.content && 'pointer-events-none'}`}
              >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    {policy.title}
                  </div>
              </AccordionTrigger>
              {policy.content && (
                <AccordionContent className="p-6 pt-0">
                    <div 
                      className="prose prose-base max-w-none text-foreground/80 font-body prose-p:leading-relaxed"
                      style={{ padding: '0 1rem', lineHeight: '1.75', textAlign: 'justify' }}
                      dangerouslySetInnerHTML={{ __html: policy.content }}
                    />
                </AccordionContent>
              )}
              </AccordionItem>
          </Card>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
