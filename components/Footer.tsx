import Link from "@/components/TransitionLink";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/#summary", label: "Executive Summary" },
  { href: "/#scope", label: "Research Scope" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

const producedBy = [
  { label: "REIBC", href: "https://reibc.org" },
  { label: "Greater Vancouver REALTORS®", href: "https://gvrealtors.ca" },
];

function Wordmark({ text, viewBoxWidth }: { text: string; viewBoxWidth: number }) {
  // Extra horizontal + vertical padding inside viewBox so descenders (g, p)
  // and letter overhangs don't get clipped.
  const padX = 6;
  const innerWidth = viewBoxWidth - padX * 2;
  const totalWidth = viewBoxWidth;
  const totalHeight = 130;
  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className="block w-full overflow-visible"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <text
        x={padX}
        y="92"
        textLength={innerWidth}
        lengthAdjust="spacingAndGlyphs"
        className="fill-current font-heading"
        style={{
          fontSize: "100px",
          fontWeight: 500,
          letterSpacing: "-0.045em",
        }}
      >
        {text}
      </text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-900 text-earth-50">
      <div className="px-6 pt-12 pb-6 md:px-10 md:pt-14 md:pb-8 lg:px-12">
        {/* Row 1 — Transforming, full width */}
        <Wordmark text="Transforming" viewBoxWidth={620} />

        {/* Row 2 — link columns on left, Landscapes pushed right (creates diagonal) */}
        <div className="mt-4 flex items-end gap-6 md:mt-6 md:gap-10 lg:gap-14">
          <div className="flex shrink-0 gap-8 pb-3 text-sm md:gap-12 md:pb-5">
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-50/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {producedBy.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-earth-50/85 transition-colors hover:text-white"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 flex-1">
            <Wordmark text="Landscapes" viewBoxWidth={460} />
          </div>
        </div>

        <h1 className="sr-only">Transforming Landscapes</h1>

        <div className="mt-8 flex flex-col gap-2 border-t border-earth-50/15 pt-5 text-[0.7rem] uppercase tracking-[0.18em] text-earth-50/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 REIBC &amp; Greater Vancouver REALTORS&reg;</p>
          <p>A research platform on First Nations-led real estate development in BC</p>
        </div>
      </div>
    </footer>
  );
}
