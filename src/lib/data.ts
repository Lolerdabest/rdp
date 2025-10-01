import { Users, Shield, Vote, Lightbulb, Banknote, Palette } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const policies: Policy[] = [
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
