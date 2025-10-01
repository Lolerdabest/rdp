import { Users, Shield, Vote, Lightbulb, Banknote, Palette, Landmark, BookOpen, Scale, Building } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const policies: Policy[] = [
  {
    id: "regulating-foreign-exchange",
    title: "Regulating Foreign Exchange",
    content: "The RBP has passed a bill (Foreign Exchange Act) which bans banks from using assets on unrecognized nations (aka other servers). This strikes a nice balance between the normal player still being able to do these deals at their own risk and bank depositors being protected from possible losses these assets can create.",
    icon: Landmark,
  },
  {
    id: "frb-overhaul",
    title: "Complete Overhaul of the Federal Reserve Bank",
    content: "The Federal Reserve Bank or FRB for short is our central bank which manages our economy. They are our economic steward doing things like setting reserve requirements for banks, monitoring the market and much more.\nThe flaws in the FRB were apparent. Bad management, inactivity and horrible legislation paralyzed the FRB. The RBP has tried for months to reform this institution and after 3 draft rewrites we finally did it! See the Federal Reserve Act!\nThis Act completely overhauls the FRB, allowing for a more independent central bank with better oversight mechanisms and clear powers.\nA small sidenote to the signature statement of the president: WPR explicitly didn’t want a supermajority in the House and Senate for appointments because it “would be too hard to reach”. The higher vote requirements were to eliminate the “political motivation” former president Kaiserin_ accused Speaker Omegabiebel of. As a result of this complaint, the appointment vote requirement was lowered to a majority in the House and a supermajority in the Senate. All the appointment votes passed with such a margin the rejected vote requirement would have been reached\nAll these points lead us to conclude that this was just a baseless allegation made because of pure political motivation instead of good governance, as they explicitly rejected the safety mechanic in place.",
    icon: Banknote,
  },
  {
    id: "corporate-law-reform",
    title: "Complete Reform of Corporate Law",
    content: "The previous corporate law, the Business Structuring Act was vague legislation that required a lot of unnecessary paperwork where default would apply 99% of the time. Additionally it was unclear in several areas. That is why RBP has passed a bill (Legal Entity Act) to fix these issues and more.\nThe Legal Entity Act sets out a clear process to create LLCs and Corporations with enough defaults that boilerplate isn’t necessary. It also mandates a share register so there isn’t any uncertainty as to who owns a legal entity, something that used to be a big problem in the past. This greatly increases legal certainty and reasonable transparency together with the company docket, which is a thread where all the verdicts, amendments to the company Certificate of Incorporation are posted",
    icon: Scale,
  },
  {
    id: "classified-materials-and-freedom-of-information",
    title: "Classified Materials and Freedom of Information",
    content: "The previous law (Classification Act) had several big flaws that made it almost unusable. It was also a major liability on the accountability side. For example there was a provision where the executive could deny revealing a document to Congress even though Congress is supposed to oversee the executive. The RBP helped create the Classified Materials Act which fixes many of the shortcomings in the Classification Act. Freedom of Information requests are now better regulated, classified information must be put onto a list so nobody “forgets” about it and many other provisions which were desperately needed. A big thank you Gwiis for the initial draft!",
    icon: BookOpen,
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
    title: "Financial Institutions (BILL IN REVIEW!)",
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
    id: "civil-liberties",
    title: "Civil Liberties",
    content: "Others often carelessly trample over civil liberties in their efforts for reform. However, here at the Redmont Beach Party, civil liberties are at the front of our minds when making decisions. First and foremost, we vow to protect the freedoms of conscience, expression, speech, press, and assembly; as well as the rights to security, liberty, privacy, life, property, and self defense.",
    icon: Shield,
  },
  {
    id: "democratic-governance",
    title: "Democratic Governance",
    content: "A strong, stable democracy is built on the enduring principles of accountability, transparency, and citizen participation. The Redmont Beach Party is committed to protecting the integrity of free and fair elections, upholding the rule of law, and ensuring that the government remains responsive to the apeople it serves.",
    icon: Vote,
  },
  {
    id: "pragmatic-progress",
    title: "Pragmatic Progress",
    content: "The Redmont Beach Party believes in making pragmatic progress: solutions grounded in evidence, common sense, and what works. We want the best outcome for the people of Redmont, and if that means crossing the aisle or trying something new, we’ll gladly do it. However, in our efforts for progress, we will not lose sight of fiscal responsibility, institutional stability, and the diverse needs of our playerbase. It should be common sense that wins, not the person that yells the hardest.",
    icon: Lightbulb,
  },
    {
    id: "confident-economics",
    title: "Confident Economics",
    content: "The Redmont Beach Party believes in a market economy with reasonable regulations to protect and balance the freedom of consumers, workers, and businesses. We’re also looking to sustainably and transparently strengthen the economy through strategic methods, with a particular goal of expanding economic activity, maintaining competition, and promoting hard work.",
    icon: Banknote,
  },
  {
    id: "investment-in-arts",
    title: "Investment in the Arts",
    content: "The people of Redmont have long been polarized. It is clear that to become a greater nation, we must bring unity to Redmont. Thus, we will bring forth a cultural renaissance that will make us all proud to be Redmontians. We believe in investing in the arts, education, history, and public spaces that bring people together and strengthen our national identity.",
    icon: Palette,
  }
];
