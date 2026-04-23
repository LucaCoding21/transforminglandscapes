export type Pillar = {
  number: string;
  label: string;
  description: string;
  image: string;
  href: string;
  slug: string;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    label: "Indigenous Land & Development",
    description:
      "This section highlights existing resources that map and explain Indigenous territories and Indigenous-owned business designations. We encourage you to explore these materials for deeper context and understanding, and you’ll find links throughout this report to help guide your learning.",
    image: "/images/orca-indigenous-land.webp",
    href: "/scope/indigenous-land-and-development",
    slug: "indigenous-land-and-development",
  },
  {
    number: "02",
    label: "Truth, Reconciliation & Real Estate",
    description:
      "In British Columbia, Truth and Reconciliation are increasingly woven into how many people live, work, and do business. For the real estate and development industry, the most meaningful way to integrate these principles into projects and practices is by listening to those with lived experience and learning from their perspectives.",
    image: "/images/dylan-gillis-KdeqA3aTnBY-unsplash (1).webp",
    href: "/scope/truth-reconciliation-real-estate",
    slug: "truth-reconciliation-real-estate",
  },
  {
    number: "03",
    label: "Leadership Voices in Indigenous Real Estate",
    description:
      "We grow and improve our practices by engaging in open conversations, listening deeply, and sharing diverse perspectives. In the creation of this report, we spoke with several Indigenous leaders in the BC and Canadian real estate industry to better understand their experiences, priorities, approaches and challenges.",
    image: "/images/kaleidico-3V8xo5Gbusk-unsplash.webp",
    href: "/scope/leadership-voices-in-indigenous-real-estate",
    slug: "leadership-voices-in-indigenous-real-estate",
  },
  {
    number: "04",
    label: "Collaborative Approaches and Emerging Models",
    description:
      "Around the world, there are powerful examples of Indigenous-led and collaborative real estate and land development projects that honour culture, history, and community. These initiatives demonstrate how development can move forward while respecting tradition and place.",
    image: "/images/tobias-schulz-international.webp",
    href: "/scope/international-indigenous-led-development",
    slug: "international-indigenous-led-development",
  },
];
