export type CaseStudy = {
  slug: string;
  title: string;
  teaser: string;
  image: string;
  tags: string[];
  date: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "placeholder-study-a",
    title: "The Cowichan Decision",
    teaser:
      "A landmark ruling reshaping how rights, land, and development intersect in British Columbia.",
    image: "/images/vancouver.webp",
    tags: ["Case Study", "Land & Rights"],
    date: "March 4, 2026",
  },
  {
    slug: "placeholder-study-b",
    title: "A Long View of Leasehold Tenure",
    teaser:
      "How modern ground-lease structures are being rethought for century-scale stewardship.",
    image: "/images/micah-mckerlich-gaZBqZQWSng-unsplash.webp",
    tags: ["Case Study", "Tenure"],
    date: "February 12, 2026",
  },
  {
    slug: "placeholder-study-c",
    title: "Capital, Governance, Place",
    teaser:
      "Three case studies on how emerging governance models are changing the real estate balance sheet.",
    image: "/images/photo123.webp",
    tags: ["Analysis", "Governance"],
    date: "January 20, 2026",
  },
  {
    slug: "placeholder-study-d",
    title: "Infrastructure & the 100-Year Horizon",
    teaser:
      "What enduring infrastructure decisions look like when planning spans generations, not quarters.",
    image: "/images/nathan-rose-sbvzdXqnG4k-unsplash.webp",
    tags: ["Research", "Infrastructure"],
    date: "December 8, 2025",
  },
];
