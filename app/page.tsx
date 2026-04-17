import Hero from "@/components/Hero";
import ExecSummary from "@/components/ExecSummary";
import ResearchScope from "@/components/ResearchScope";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import LandAcknowledgement from "@/components/LandAcknowledgement";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <ExecSummary />
      <SectionDivider />
      <ResearchScope />
      <CaseStudyPreview />
      <LandAcknowledgement />
    </main>
  );
}
