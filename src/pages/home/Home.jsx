import HeroSection from "./sections/hero/HeroSection";
import EcosystemSection from "./sections/ecosystem/EcosystemSection";
import LatestNewsSection from "./sections/latest-news/LatestNewsSection";
import LiveInsightsSection from "./sections/live-insights/LiveInsightsSection";
import GlobalFootprintSection from "./sections/global-footprint/GlobalFootprintSection";

function Home() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <LatestNewsSection />
      <LiveInsightsSection />
      <GlobalFootprintSection />
    </>
  );
}

export default Home;
