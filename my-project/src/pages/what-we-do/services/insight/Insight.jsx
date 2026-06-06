import InsightIntro from "./sections/InsightIntro";
import ReportStoreCard from "../shared/components/ReportStoreCard";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {servicePartners} from "../shared/partners";
import {serviceShowcases} from "../shared/showcases";
import {
  insightActions,
  insightCapabilities,
  insightRoad,
  insightStats,
} from "./data";

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
      <ServicePartners service="Insight" partners={servicePartners.insight} />
      <ServiceShowcase {...serviceShowcases.insight} />
    </>
  );
}

export default Insight;
