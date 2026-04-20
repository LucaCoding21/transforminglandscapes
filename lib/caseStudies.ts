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
  .filter(
    (item): item is typeof item & { image: string } =>
      item.type !== "Interview" && item.type !== "Resource" && !!item.image,
  )
  .map((item) => ({
    slug: item.slug,
    title: item.title,
    teaser: item.description,
    image: item.image,
    tags: [item.type],
    date: item.date ?? "",
  }));
