"use client";

import NextLink, { type LinkProps } from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { usePageTransition } from "./PageTransition";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & { children?: ReactNode };

const TransitionLink = forwardRef<HTMLAnchorElement, Props>(
  function TransitionLink({ href, onClick, ...rest }, ref) {
    const { navigate } = usePageTransition();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      )
        return;
      if (typeof href !== "string") return;
      if (href.startsWith("http") || href.startsWith("mailto:")) return;

      e.preventDefault();
      navigate(href);
    };

    return <NextLink ref={ref} href={href} onClick={handleClick} {...rest} />;
  },
);

export default TransitionLink;
