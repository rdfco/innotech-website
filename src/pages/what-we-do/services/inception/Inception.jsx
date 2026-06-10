import InceptionIntro from "./sections/InceptionIntro";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {actions, capabilities, partners, road, showcase, stats} from "./data";

function Inception() {
  return (
    <>
      <InceptionIntro />
      <ServiceRoad {...road} />
      <ServiceCapabilities
        title="WHERE INCEPTION BUILDS"
        items={capabilities}
      />
      <ServiceStats stats={stats} />
      <ServiceActionSection title="QUALIFICATION AT EVERY LEVEL" items={actions} />
      <ServicePartners service="Inception" partners={partners} />
      <ServiceShowcase {...showcase} />
    </>
  );
}

export default Inception;
