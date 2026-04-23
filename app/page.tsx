import Hero from "@/components/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import dynamic from "next/dynamic";

const ExecSummary = dynamic(() => import("@/components/ExecSummary"));
const ExecSummaryVideo = dynamic(() => import("@/components/ExecSummaryVideo"));
const ResearchScope = dynamic(() => import("@/components/ResearchScope"));
const CaseStudyPreview = dynamic(() => import("@/components/CaseStudyPreview"));
const LandAcknowledgement = dynamic(
  () => import("@/components/LandAcknowledgement"),
);

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <ExecSummary />
      <ExecSummaryVideo />
      <SectionDivider />
      <ResearchScope />
      <CaseStudyPreview />
      <LandAcknowledgement />
    </main>
  );
}
