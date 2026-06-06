import InceptionIntro from "./sections/InceptionIntro";
import ServiceCapabilities from "../shared/components/ServiceCapabilities";
import ServiceActionSection from "../shared/components/ServiceActionSection";
import ServiceRoad from "../shared/components/ServiceRoad";
import ServiceStats from "../shared/components/ServiceStats";
import ServicePartners from "../shared/components/ServicePartners";
import ServiceShowcase from "../shared/components/ServiceShowcase";
import {servicePartners} from "../shared/partners";
import {serviceShowcases} from "../shared/showcases";
import {
  inceptionActions,
  inceptionCapabilities,
  inceptionRoad,
  inceptionStats,
} from "./data";

function Inception() {
  return (
    <>
      <InceptionIntro />
      <ServiceRoad {...inceptionRoad} />
      <ServiceCapabilities
        title="WHERE INCEPTION BUILDS"
        items={inceptionCapabilities}
      />
      <ServiceStats stats={inceptionStats} />
      <ServiceActionSection title="INCEPTION IN ACTION" items={inceptionActions} />
      <ServicePartners service="Inception" partners={servicePartners.inception} />
      <ServiceShowcase {...serviceShowcases.inception} />
    </>
  );
}

export default Inception;
