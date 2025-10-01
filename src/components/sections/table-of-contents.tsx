import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListOrdered } from "lucide-react";

const tocItems = [
    {
      title: "Our Successes Last Term",
      subItems: [
        "Regulating Foreign Exchange",
        "Complete Overhaul of the Federal Reserve Bank",
        "Complete Reform of Corporate Law",
        "Classified Material and Freedom of Information",
      ],
    },
    {
      title: "New Players",
      subItems: ["Apartment Registry", "Helping New Players get Loans"],
    },
    {
      title: "Economic & Financial Reform",
      subItems: [
        "Responsible Taxation",
        "Inactive Sole Proprietorships",
        {
          title: "Financial Institutions",
          subItems: [
            "Stricter Compliance",
            "Mandatory Public Financial Statements",
            "Mandatory Registration of Financial Institutions",
            "Banning Fraudulent Practices",
          ],
        },
        {
          title: "Accounting",
          subItems: [
            "A Rework of the Rules",
            "A Complete Overhaul of the Jobs",
            "Independent Auditors",
          ],
        },
        "Bankruptcy Reform",
        "Regulating Speculative Assets",
        "Promotion of Competition",
        "Targeted management of Trade Wages",
        "Bankruptcy is a Tool to Move on, not a Way to Defraud",
      ],
    },
    {
      title: "Accountability",
      subItems: ["Improve Whistleblower Law", "Commission Transparency Guides"],
    },
    {
      title: "Plots and Housing",
      subItems: [
        "No Punitive Action on Inactivity Evictions",
        "Plot Prices",
        "Creation of Small Plots",
        "Convert the Fairgrounds into Plots",
    ],
    },
    {
        title: "Criminal and Security Policy",
        subItems: [
            "Clarified Degrees of Culpability",
            "Licensed Security Companies",
            "Fair Punishments",
        ],
    }
  ];

  const renderList = (items: (string | { title: string; subItems: any[] })[]) => {
    return (
      <ol className="list-decimal list-inside space-y-2 font-body">
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <span className="font-semibold">{item.title}</span>
                <div className="pl-6 mt-1">
                    {renderList(item.subItems)}
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    );
  };
  
  const renderTopLevelList = (items: { title: string; subItems: any[] }[]) => {
    return (
        <ol className="list-decimal list-outside space-y-4 font-body pl-6">
            {items.map((item, index) => (
            <li key={index}>
                <span className="font-headline font-semibold text-lg">{item.title}</span>
                <div className="pl-6 mt-2">
                    {renderList(item.subItems)}
                </div>
            </li>
            ))}
      </ol>
    );
  };

export function TableOfContents() {
  return (
    <section id="table-of-contents" className="w-full py-20 md:py-28 lg:py-32 bg-background/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Table of Contents
            </h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              An overview of our party's platform and priorities.
            </p>
          </div>
          <Card className="w-full bg-card/80 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <ListOrdered className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">Platform Overview</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              {renderTopLevelList(tocItems)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
