import AccelerationSection from "./components/AccelerationSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import EcosystemCardsSection from "./components/EcosystemCardsSection";
import IndustryHero from "./components/IndustryHero";
import LiveInsightsSection from "./components/LiveInsightsSection";

function IndustryPage({
  accelerationParagraphs,
  capabilities,
  ecosystemCards,
  hero,
  liveInsights,
}) {
  return (
    <>
      <IndustryHero {...hero} />
      <AccelerationSection paragraphs={accelerationParagraphs} />
      <CapabilitiesSection services={capabilities} />
      <LiveInsightsSection {...liveInsights} />
      <EcosystemCardsSection cards={ecosystemCards} />
    </>
  );
}

export default IndustryPage;
