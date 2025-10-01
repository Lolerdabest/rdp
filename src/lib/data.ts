import { Users, Shield, Anvil, Vote, Component } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const policies: Policy[] = [
  {
    id: "fair-play",
    title: "Fair & Transparent Governance",
    content: "We will establish a player-led council to oversee rule changes and staff conduct. All major server decisions will be put to a public vote. Our administration logs will be made available for public review to ensure transparency and hold staff accountable.",
    icon: Vote,
  },
  {
    id: "economic-opportunity",
    title: "Real Economic Opportunity",
    content: "We'll overhaul the server economy to reward hard work and creativity. We will introduce new ways to earn currency through non-traditional jobs like building, exploring, and hosting events. A player-run stock market will be introduced to create dynamic investment opportunities.",
    icon: Anvil,
  },
  {
    id: "community-focus",
    title: "A Focus on Community",
    content: "Community is everything. We will fund and support player-run towns and factions, host weekly server-wide events with unique rewards, and create a dedicated conflict-resolution team to handle disputes fairly. We are dedicated to a non-toxic, collaborative environment.",
    icon: Users,
  },
    {
    id: "enhanced-gameplay",
    title: "Enhanced Gameplay & Content",
    content: "We are committed to keeping the server exciting. This includes regular updates with custom items, new mobs, and challenging dungeons. We will actively work with the community to develop and implement new features that you want to see.",
    icon: Component,
  },
];
