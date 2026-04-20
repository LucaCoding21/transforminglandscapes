import type { Metadata } from "next";
import LibraryGrid from "@/components/LibraryGrid";

export const metadata: Metadata = {
  title: "Library | Transforming Landscapes",
  description:
    "Case studies, leadership interviews, and resources on the future of real estate in British Columbia.",
};

export default function LibraryPage() {
  return (
    <main className="pt-32 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-[1550px] px-6 pb-32 md:px-10 md:pb-48">
        <LibraryGrid />
      </section>
    </main>
  );
}
