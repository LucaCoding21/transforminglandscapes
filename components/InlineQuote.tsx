import Image from "next/image";
import { type ReactNode } from "react";

type Props = {
  avatar: string;
  name: ReactNode;
  role: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function InlineQuote({
  avatar,
  name,
  role,
  children,
  className = "",
}: Props) {
  return (
    <figure className={`mt-12 ${className}`}>
      <header className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-earth-200 md:h-16 md:w-16">
          <Image
            src={avatar}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <figcaption className="text-sm leading-tight">
          <span className="block font-medium text-earth-900">{name}</span>
          <span className="mt-1 block text-earth-600">{role}</span>
        </figcaption>
      </header>
      <blockquote className="mt-6 space-y-5 border-l-2 border-earth-300 pl-6 text-base leading-[1.8] text-earth-800/90 md:text-lg">
        {children}
      </blockquote>
    </figure>
  );
}
