import InfinityIntro from "./sections/InfinityIntro";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {
  actions,
  capabilities,
  partners,
  road,
  sectionLabels,
  showcase,
  stats,
} from "./data";

function InfinityPage() {
  return (
    <>
      <InfinityIntro />
      <ServiceRoad {...road} />
      <ServiceCapabilities
        title={sectionLabels.capabilities}
        items={capabilities}
      />
      <ServiceStats stats={stats} />
      <ServiceActionSection title={sectionLabels.actions} items={actions} />
      <ServicePartners
        service={sectionLabels.partnersServiceName}
        partners={partners}
      />
      <ServiceShowcase {...showcase} />
    </>
  );
}

export default InfinityPage;
