import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
};

export default function SectionLabel({ children, className, tone = "dark" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em]",
        tone === "dark" ? "text-earth-700" : "text-white/75",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "dark" ? "bg-sage-600" : "bg-sage-400",
        )}
      />
      {children}
    </span>
  );
}
