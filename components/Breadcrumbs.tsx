import Link from "next/link";

const SITE_URL = "https://www.transforminglandscapes.ca";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-earth-600">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-earth-700 transition hover:text-earth-900"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-earth-900">
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden className="text-earth-400">
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
