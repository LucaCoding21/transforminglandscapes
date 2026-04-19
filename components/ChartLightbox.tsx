"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ChartLightbox({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  if (!isMobile) return <>{children}</>;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full text-left"
        aria-label="Tap to expand chart"
      >
        <div className="pointer-events-none">{children}</div>
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <span className="rounded-full bg-earth-900/80 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-opacity group-active:opacity-70">
            Tap to expand
          </span>
        </div>
      </button>

      {open &&
        createPortal(
          <div
            ref={backdropRef}
            onClick={(e) => {
              if (e.target === backdropRef.current) setOpen(false);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-earth-900/60 backdrop-blur-sm"
          >
            <div className="relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-auto overscroll-contain rounded-2xl bg-earth-50 p-5 shadow-2xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-earth-200 text-earth-700 transition hover:bg-earth-300"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div className="min-w-[500px]">{children}</div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
