import InsightIntro from "./sections/InsightIntro";
import ReportStoreCard from "../shared/components/ReportStoreCard";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {actions, capabilities, partners, road, showcase, stats} from "./data";

function Insight() {
  return (
    <>
      <InsightIntro />
      <ServiceRoad {...road} />
      <ReportStoreCard />
      <ServiceCapabilities
        title=" INDUSTRIAL SCOPES"
        items={capabilities}
      />
      <ServiceStats stats={stats} />
      <ServiceActionSection title="THE INSIGHT TRINITY" items={actions} />
      <ServicePartners service="Insight" partners={partners} />
      <ServiceShowcase {...showcase} />
    </>
  );
}

export default Insight;
