import { Users, Leaf, Store } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const policies: Policy[] = [
  {
    id: "community-events",
    title: "Vibrant Community Events",
    content: "We believe in the power of community. Our platform will facilitate and promote regular beach clean-ups, local music festivals, and artisan markets. These events will not only keep our beaches beautiful but also support local artists and businesses, fostering a strong, interconnected community. We will work with local councils to streamline the permit process for such events, making it easier for organizers to bring people together.",
    icon: Users,
  },
  {
    id: "environmental-protection",
    title: "Environmental Protection",
    content: "Our beaches are our most precious resource. We are committed to a radical environmental policy that includes banning single-use plastics at all beachside venues, investing in renewable energy for promenade lighting, and establishing protected zones for local wildlife. We propose a 'Green Wave' fund, financed by a small levy on tourist accommodations, to support these initiatives and ensure the long-term health of our coastal ecosystem.",
    icon: Leaf,
  },
  {
    id: "local-economy",
    title: "Boosting the Local Economy",
    content: "A thriving local economy is the backbone of our community. We advocate for prioritizing local businesses in all public contracts and tenders. Our 'Local First' pledge will encourage tourists and residents alike to support independent shops, restaurants, and services. We will also establish a mentorship program connecting experienced entrepreneurs with new business owners to ensure sustainable growth and prosperity for all.",
    icon: Store,
  },
];
