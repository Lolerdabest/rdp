import { Users, Shield, Vote, Lightbulb, Banknote, Palette, Landmark, BookOpen, Scale } from "lucide-react";

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
    id: "civil-liberties",
    title: "Civil Liberties",
    content: "Others often carelessly trample over civil liberties in their efforts for reform. However, here at the Redmont Beach Party, civil liberties are at the front of our minds when making decisions. First and foremost, we vow to protect the freedoms of conscience, expression, speech, press, and assembly; as well as the rights to security, liberty, privacy, life, property, and self defense.",
    icon: Shield,
  },
  {
    id: "democratic-governance",
    title: "Democratic Governance",
    content: "A strong, stable democracy is built on the enduring principles of accountability, transparency, and citizen participation. The Redmont Beach Party is committed to protecting the integrity of free and fair elections, upholding the rule of law, and ensuring that the government remains responsive to the people it serves.",
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
