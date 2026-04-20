import { libraryItems } from "./libraryItems";

export type CaseStudy = {
  slug: string;
  title: string;
  teaser: string;
  image: string;
  tags: string[];
  date: string;
};

export const caseStudies: CaseStudy[] = libraryItems
  .filter((item) => item.type !== "Interview" && item.type !== "Resource")
  .map((item) => ({
    slug: item.slug,
    title: item.title,
    teaser: item.description,
    image: item.image,
    tags: [item.type],
    date: item.date ?? "",
  }));
