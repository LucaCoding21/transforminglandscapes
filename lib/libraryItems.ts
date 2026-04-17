export type LibraryItem = {
  slug: string;
  title: string;
  description: string;
  type: "Case Study" | "Interview" | "Economic Analysis" | "Resource";
  image: string;
  readingTime: string;
};

export const libraryItems: LibraryItem[] = [
  {
    slug: "the-cowichan-decision",
    title: "The Cowichan Decision",
    description:
      "A landmark ruling reshaping how rights, land, and development intersect across British Columbia.",
    type: "Case Study",
    image:
      "https://images.unsplash.com/photo-1504788363733-507549153474?auto=format&fit=crop&w=900&q=70",
    readingTime: "12 min read",
  },
  {
    slug: "governance-in-practice",
    title: "Governance in Practice",
    description:
      "A conversation on how long-horizon governance is changing the way deals are structured.",
    type: "Interview",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=900&q=70",
    readingTime: "24 min read",
  },
  {
    slug: "bc-market-outlook",
    title: "BC Market Outlook: 2026",
    description:
      "A quantitative look at capital flows, ground-lease activity, and long-horizon structures across BC.",
    type: "Economic Analysis",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=70",
    readingTime: "18 min read",
  },
  {
    slug: "a-long-view-of-leasehold",
    title: "A Long View of Leasehold Tenure",
    description:
      "How modern ground-lease structures are being rethought for century-scale stewardship.",
    type: "Case Study",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=70",
    readingTime: "15 min read",
  },
  {
    slug: "capital-governance-place",
    title: "Capital, Governance, Place",
    description:
      "Three case studies on how emerging governance models change the real estate balance sheet.",
    type: "Economic Analysis",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=70",
    readingTime: "20 min read",
  },
  {
    slug: "the-long-horizon",
    title: "The Long Horizon",
    description:
      "A leadership conversation on how 100-year thinking is reshaping deal structure in BC.",
    type: "Interview",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=70",
    readingTime: "28 min read",
  },
  {
    slug: "framework-documents",
    title: "Framework & Policy Documents",
    description:
      "A curated collection of public frameworks, policy briefs, and reference material for practitioners.",
    type: "Resource",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=70",
    readingTime: "Library",
  },
  {
    slug: "research-methodology",
    title: "Research Methodology",
    description:
      "Our approach to primary research, interview protocols, and data sources for this platform.",
    type: "Resource",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=70",
    readingTime: "8 min read",
  },
];
