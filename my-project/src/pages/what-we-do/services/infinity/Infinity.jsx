import InfinityIntro from "./sections/InfinityIntro";
import ServiceActionSection from "../components/ServiceActionSection";
import ServiceCapabilities from "../components/ServiceCapabilities";
import ServiceRoad from "../components/ServiceRoad";
import ServiceStats from "../components/ServiceStats";
import {
  infinityActions,
  infinityCapabilities,
  infinityRoad,
  infinityStats,
} from "../data";

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
    </>
  );
}

export default InfinityPage;
