import Link from "next/link";

const SITE_URL = "https://www.transforminglandscapes.ca";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

type Tone = "default" | "muted";

const toneStyles: Record<Tone, { size: string; link: string; current: string; sep: string }> = {
  default: {
    size: "text-xs",
    link: "text-earth-700 transition hover:text-earth-900",
    current: "text-earth-900",
    sep: "text-earth-400",
  },
  muted: {
    size: "text-sm",
    link: "text-earth-300 transition hover:text-earth-500",
    current: "text-earth-300",
    sep: "text-earth-300",
  },
};

export default function Breadcrumbs({
  items,
  tone = "default",
}: {
  items: BreadcrumbItem[];
  tone?: Tone;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
  const styles = toneStyles[tone];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`min-w-0 ${styles.size}`}>
        <ol className="flex min-w-0 items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li
                key={`${item.name}-${i}`}
                className={`flex items-center gap-1.5 ${isLast ? "min-w-0" : "shrink-0"}`}
              >
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.name}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`${styles.current} ${isLast ? "truncate" : ""}`}
                  >
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden className={`${styles.sep} shrink-0`}>
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
