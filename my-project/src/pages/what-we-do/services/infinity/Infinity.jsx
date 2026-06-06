import InfinityIntro from "./sections/InfinityIntro";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {servicePartners} from "../shared/partners";
import {serviceShowcases} from "../shared/showcases";
import {
  infinityActions,
  infinityCapabilities,
  infinityRoad,
  infinityStats,
} from "./data";

function InfinityPage() {
  return (
    <>
      <InfinityIntro />
      <ServiceRoad {...infinityRoad} />
      <ServiceCapabilities
        title="TRANSFORMATION DOMAINS"
        items={infinityCapabilities}
      />
      <ServiceStats stats={infinityStats} />
      <ServiceActionSection title="INFINITY IN ACTION" items={infinityActions} />
      <ServicePartners service="Infinity" partners={servicePartners.infinity} />
      <ServiceShowcase {...serviceShowcases.infinity} />
    </>
  );
}

export default InfinityPage;
