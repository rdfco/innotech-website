import InsightIntro from "./sections/InsightIntro";
import ReportStoreCard from "../components/ReportStoreCard";
import ServiceActionSection from "../components/ServiceActionSection";
import ServiceCapabilities from "../components/ServiceCapabilities";
import ServiceRoad from "../components/ServiceRoad";
import ServiceStats from "../components/ServiceStats";
import {
  insightActions,
  insightCapabilities,
  insightRoad,
  insightStats,
} from "../data";

function Insight() {
  return (
    <>
      <InsightIntro />
      <ServiceRoad {...insightRoad} />
      <ReportStoreCard />
      <ServiceCapabilities
        title="OUR INDUSTRIAL EXPERTISE"
        items={insightCapabilities}
      />
      <ServiceStats stats={insightStats} />
      <ServiceActionSection title="THE INSIGHT TRINITY" items={insightActions} />
    </>
  );
}

export default Insight;
