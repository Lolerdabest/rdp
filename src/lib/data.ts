import { Users, Shield, Vote, Lightbulb, Banknote, Palette, Landmark, BookOpen, Scale, Building, Home, CheckSquare } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
  isHeading?: boolean;
};

export const successes: Policy[] = [
  {
    id: "regulating-foreign-exchange",
    title: "Regulating Foreign Exchange",
    content: "The RBP has passed a bill <a href='https://www.democracycraft.net/threads/criminal-code-act.26344/#post-105554' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>(Foreign Exchange Act)</a> which bans banks from using assets on unrecognized nations (aka other servers). This strikes a nice balance between the normal player still being able to do these deals at their own risk and bank depositors being protected from possible losses these assets can create.",
    icon: Landmark,
  },
  {
    id: "frb-overhaul",
    title: "Complete Overhaul of the Federal Reserve Bank",
    content: "The Federal Reserve Bank or FRB for short is our central bank which manages our economy. They are our economic steward doing things like setting reserve requirements for banks, monitoring the market and much more.\nThe flaws in the FRB were apparent. Bad management, inactivity and horrible legislation paralyzed the FRB. The RBP has tried for months to reform this institution and after 3 draft rewrites we finally did it! See the <a href='https://www.democracycraft.net/threads/federal-reserve-act.29219/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Federal Reserve Act</a>!\nThis Act completely overhauls the FRB, allowing for a more independent central bank with better oversight mechanisms and clear powers.\nA small sidenote to the signature statement of the president: WPR explicitly didn’t want a supermajority in the House and Senate for appointments because it “would be too hard to reach”. The higher vote requirements were to eliminate the “political motivation” former president Kaiserin_ accused Speaker Omegabiebel of. As a result of this complaint, the appointment vote requirement was lowered to a majority in the House and a supermajority in the Senate. All the appointment votes passed with such a margin the rejected vote requirement would have been reached\nAll these points lead us to conclude that this was just a baseless allegation made because of pure political motivation instead of good governance, as they explicitly rejected the safety mechanic in place.",
    icon: Banknote,
  },
  {
    id: "corporate-law-reform",
    title: "Complete Reform of Corporate Law",
    content: "The previous corporate law, the Business Structuring Act was vague legislation that required a lot of unnecessary paperwork where default would apply 99% of the time. Additionally it was unclear in several areas. That is why RBP has passed a bill <a href='https://www.democracycraft.net/threads/legal-entity-act.26768/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>(Legal Entity Act)</a> to fix these issues and more.\nThe Legal Entity Act sets out a clear process to create LLCs and Corporations with enough defaults that boilerplate isn’t necessary. It also mandates a share register so there isn’t any uncertainty as to who owns a legal entity, something that used to be a big problem in the past. This greatly increases legal certainty and reasonable transparency together with the company docket, which is a thread where all the verdicts, amendments to the company Certificate of Incorporation are posted",
    icon: Scale,
  },
  {
    id: "classified-materials-and-freedom-of-information",
    title: "Classified Material and Freedom of Information",
    content: "The previous law <a href='https://www.democracycraft.net/threads/classification-act.4823/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>(Classification Act)</a> had several big flaws that made it almost unusable. It was also a major liability on the accountability side. For example there was a provision where the executive could deny revealing a document to Congress even though Congress is supposed to oversee the executive. The RBP helped create the <a href='https://www.democracycraft.net/threads/classified-materials-act.29231/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Classified Materials Act</a> which fixes many of the shortcomings in the Classification Act. Freedom of Information requests are now better regulated, classified information must be put onto a list so nobody “forgets” about it and many other provisions which were desperately needed. A big thank you Gwiis for the initial draft!",
    icon: BookOpen,
  },
];


export const policies: Policy[] = [
  {
    id: "new-players-heading",
    title: "New Players",
    content: "",
    icon: Users,
    isHeading: true,
  },
  {
    id: "apartment-registry",
    title: "Apartment Registry",
    content: "The apartment registry would just be a list of apartments and other rentable buildings since the command to find rentable regions is so user unfriendly. See it as the website you use when finding a home irl.\nIt’s something we’ve been calling for a long time. LfR, the predecessor of the RBP, even passed a resolution calling for an apartment registry. Unfortunately this went completely ignored by the 1950 administration. We’ve asked the secretary of the DOE (AsexualDinosaur) in the Kaiserin administration for this but have yet to see any progress at all.\nUPDATE (23/08): Zero progress from the Kaiserin Administration\nUPDATE (3/09): Zero progress from the current DOE secretary or the Juniperfig Administration",
    icon: Building,
  },
  {
    id: "helping-new-players-get-loans",
    title: "Helping New Players get Loans",
    content: "Love them or hate them, banks play a key part in our society. Both irl and ingame. They are tools that can be beneficial if properly used. For example they make it easier to buy a plot by allowing you to pay off the price of a plot over time by lending money. New players use them to get some starting cash for their businesses.\nBanks often have millions sitting there not being able to be lent out.. That is a waste of economic potential. Sometimes a loan is too expensive for the customer or too risky for the bank. That is where the government should come in.\nThe RBP proposes that the government sets up a program to cover the interest(within reason), essentially giving the player an interest free loan at extremely low cost to the government. The loan could even be guaranteed by the government with the proper safeguards for abuse of course.\nIt would allow players to get tractors and plots much faster in comparison to grinding day after day for money.\nThis way the same budget can have a much bigger impact, the finance sector which was decimated by the crisis, is stimulated in a responsible way and it would allow banks to pay interest to their depositors. It is a win situation for tax payers, a win situation for banks and a win situation for the new players.",
    icon: Users,
  },
  {
    id: "economic-financial-reform-heading",
    title: "Economic & Financial Reform",
    content: "",
    icon: Banknote,
    isHeading: true,
  },
  {
    id: "responsible-taxation",
    title: "Responsible Taxation",
    content: "Taxes should only exist to pay for something, or to incentivize something. In addition, we should seek out less invasive forms of producing government revenue. Nobody wants to fill out tax returns.",
    icon: Banknote,
  },
  {
    id: "inactive-sole-proprietorships",
    title: "Inactive Sole Proprietorships",
    content: "Currently there are dozens if not hundreds of sole proprietorships which are completely inactive. These balances should be pruned and the names should be unclaimed so other people can use them.",
    icon: Users,
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    content: `
      <div>
        <h4 class="font-bold text-md mb-2">i. Stricter Compliance</h4>
        <p class="mb-4">The collapse of Vanguard and the seizure of several other financial institutions have proven that strict compliance and a strong regulator are necessary. The current legislation has proven to be a serious problem. We want to make it easier for the DOC to request critical information such as accounting books, investment documents and other key documents.</p>
        <h4 class="font-bold text-md mb-2">ii. Mandatory Public Financial Statements for Banks</h4>
        <p class="mb-4">Financial statements such as a balance sheet, income statement and a cashflow statement give information on the financial health of a company. For those who don’t know what these documents are: A balance sheet lists the assets and debts of a company. The income statement gives an overview of the company's revenue, expenses etc. The cashflow statement is used to know how much cash comes in and goes out of the company. Publicly traded companies on the Exchange already have to provide these documents so investors can make an educated decision of what to do with the share. RBP wants to extend this to banks. These documents are made for the DOC anyways, and they don’t reveal any confidential information while still making sure no crazy moves are being pulled behind the scenes.</p>
        <h4 class="font-bold text-md mb-2">iii. Mandatory Registration of Financial Institutions</h4>
        <p class="mb-4">Currently a bank is not mandated to be registered. Only if they want a tax exemption on their in-game firm. This has resulted in some financial institutions such as The Exchange being able to do “banky things” such as lending out deposits and investing with deposits without the necessary regulatory oversight. We want to mandate the registration of Banks to make sure these are all regulated properly. This doesn’t have to be a drawn out process like irl.</p>
        <h4 class="font-bold text-md mb-2">iv. Banning Fraudulent Practices</h4>
        <p>Many lessons were learned in the Vanguard Crisis. One of these lessons was that banks can transfer their obligation to repay their depositors to companies which aren’t banks. These companies would then be liable to repay the original depositors, but wouldn’t be subjected to the same stricter regulations as banks. We plan to ban this practice. Credit to xSyncx for this idea.</p>
      </div>
    `,
    icon: Landmark,
  },
  {
    id: "accounting-reform",
    title: "Accounting",
    content: `
      <div>
        <h4 class="font-bold text-md mb-2">i. A Rework of the Rules</h4>
        <p class="mb-4">DOC has had the ability to set accounting regulations for months now. They haven’t been using this power for so long that they forgot they had this. In the meantime it is extremely unclear for companies and especially banks what rules need to be followed.<br/>The Beach Party wants to use the IFRS accounting rules as a base and override provisions where necessary. These are real life tried and tested rules for both big and small companies. An added advantage is that there is already a lot of precedent, software and tutorials on this rules package, making it easier to use.</p>
        <h4 class="font-bold text-md mb-2">ii. A Complete Overhaul of the Jobs</h4>
        <p class="mb-4">The accountancy job is completely unused. We want to make this into a qualification such as the legal qualification. We also want to tighten up the exam, that way if you see someone with an accountant's license you can be sure they know what they are doing.</p>
        <h4 class="font-bold text-md mb-2">iii. Independent Auditors</h4>
        <p>The recent Vanguard collapse has taught us that DOC can’t fully audit every bank every time. It simply does not have the manpower. We therefore want to propose independent auditors. These are accountants that have gotten an extra qualification from the DOC and have to adhere to strict independency requirements. They will audit the books of certain companies and banks.</p>
      </div>
    `,
    icon: BookOpen,
  },
  {
    id: "bankruptcy-reform",
    title: "Bankruptcy Reform",
    content: "There are regular instances where players are saddled with so much treasury debt that they can’t pay it off within a 100 lifetimes. Currently there is no way to start over with a clean slate and keep enjoying the server. The current bankruptcy legislation is outdated, cumbersome, complicated and only applies to companies. RBP wants to create a streamlined bankruptcy process which allows people to get rid of their crushing debt, while also protecting those who are owed the debt. This would be a process just like irl where the assets of the debtor are liquidated and distributed accordingly among creditors.",
    icon: Scale,
  },
  {
    id: "regulating-speculative-assets",
    title: "Regulating Speculative Assets",
    content: "Echo securities are in essence a product which allows you to buy a real life stock with Redmontian money. The regulation here is a balance between letting 2 individuals do deals however they please and protecting others from collateral damage. After all, 2 individuals who deal in echo securities and it goes wrong won’t create any other problems, but a bank that fails because of echo security losses is a big problem. See the Vanguard Collapse.\nWe therefore propose to mandate strict risk controls or a ban on these financial instruments for banks.",
    icon: Banknote,
  },
  {
    id: "promotion-of-competition",
    title: "Promotion of Competition",
    content: "RBP heavily encourages competition between businesses since the benefits are clear. Competition encourages businesses to innovate and streamline their processes. This results in better quality and prices of products and services.",
    icon: Lightbulb,
  },
  {
    id: "bankruptcy-is-a-tool",
    title: "Bankruptcy is a Tool to Move on, not a Way to Defraud",
    content: "A “trick” in bankruptcies is that you put all your debts in a new company, then declare bankruptcy on that company \"disappearing\" the debts leaving the creditors in the cold. This is obviously fraudulent but it is legally unclear if this practice is banned. We are planning to ban this practice along with any other bankruptcy misuse situations. Credit to xSyncx for the idea.",
    icon: Scale,
  },
  {
    id: "accountability-heading",
    title: "Accountability",
    content: "",
    icon: Vote,
    isHeading: true,
  },
  {
    id: "improve-whistleblower-law",
    title: "Improve Whistleblower Law",
    content: "The current fine for revealing a whistleblower’s identity is a mere $2,000. Considering both inflation and the severity of the crime, this must be raised. Furthermore, the content of the law is lacking, too. For example, the current definition of whistleblower suppression only covers discrimination based on those who lawfully reveal corporate crimes. This must be expanded, and all whistleblower law must be revisited to ensure fair treatment.\nUPDATE: partially completed with the <a href='https://www.democracycraft.net/threads/whistleblower-anonymity-act.31331/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Whistleblower Anonymity Act</a>, we will continue this work in the September-October term.",
    icon: Shield,
  },
  {
    id: "commission-transparency-guides",
    title: "Commission Transparency Guides",
    content: "We want to mandate standardized wiki or forums pages which list the pay for each position in the department. This will keep the department accountable as well as create some advertising for department positions.",
    icon: Vote,
  },
  {
    id: "plots-and-housing-heading",
    title: "Plots and Housing",
    content: "",
    icon: Home,
    isHeading: true,
  },
  {
    id: "no-punitive-action-on-inactivity-evictions",
    title: "No Punitive Action on Inactivity Evictions",
    content: "We are extremely worried by WPRs plan to take punitive actions on players who have become inactive. They plan to issue fines to players who get evicted multiple times, and cut the money players get when their evicted plot is up for auction by half.\nOften players get inactive for a number of reasons, some of which are real life personal issues. You shouldn’t get punished just because you couldn’t play this month. These are punitive actions that would cost players hundreds of thousands of dollars each.\nImagine this: You bought a plot after a lot of saving and work. It costs you about 50k. You’ve built a house, made some chestshop, life is good. Then for some personal reason you can’t reach the 6 hour playtime requirement for some reason. Sure extensions could help but you can’t extend the eviction report forever. You get evicted for inactivity, but instead of getting your 50k back at auction, you get 25k. This means you get fined 25 THOUSAND dollars just because you couldn’t join.",
    icon: Home,
  },
  {
    id: "plot-prices",
    title: "Plot Prices",
    content: "We’ll continue to monitor plot prices and see if there is a need to adjust the measures we added last term. The Plot Regulations Act wasn’t a one and done but a continuing effort to fix the plot crisis.",
    icon: Home,
  },
  {
    id: "creation-of-small-plots",
    title: "Creation of Small Plots",
    content: "Often the high cost of a big plot is prohibitive for players. It takes a lot of work to come up with the cash. That is why we support creating smaller plots who will obviously be costing less. That way newer and poorer players can have a smaller plot to start out with. It makes it possible for them to put their stuff and it can help the player get in a better financial position through chestshops.",
    icon: Home,
  },
  {
    id: "convert-fairgrounds-to-plots",
    title: "Convert the Fairgrounds into Plots",
    content: "The fairgrounds have been unused since the beginning of time. Let’s convert this space to plots to sell to players. The DPA is much better served with the event world where they can do what they want without the nuisance of other players.",
    icon: Home,
  },
  {
    id: "clarified-degrees-of-culpability",
    title: "Clarified Degrees of Culpability",
    content: "In order to have consistency and clarity in the law, we seek to codify definitions for the four degrees of culpability, including purposely, knowingly, recklessly, and negligently.",
    icon: Scale,
  },
  {
    id: "licensed-security-companies",
    title: "Licensed Security Companies",
    content: "It is one of the constants in DC life. If you do an event you make sure to hire security personnel to fight off the many murderers coming to kill the event attendants. One of the problems security companies face are the many murder charges for their self defense actions as the plugin can’t always differentiate between murder and self defense.\nThis is why we’re proposing a licensing system for security companies where the security guards won’t be charged through the usual plugin system. This is strictly during the event with close oversight from DHS to prevent abuse.",
    icon: Shield,
  },
  {
    id: "fair-punishments",
    title: "Fair Punishments",
    content: "Certain punishments are unproportional to their respective crimes, especially with inflation over the years. Furthermore, some jail times are too low and can be raised, considering the jail mine and the new lack of jail time limit. We would also like to give more summary offenses higher punishments for repeat offenses.",
    icon: Scale,
  }
];
