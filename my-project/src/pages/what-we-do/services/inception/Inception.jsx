import InceptionIntro from "./sections/InceptionIntro";
import ServiceCapabilities from "../components/ServiceCapabilities";
import ServiceActionSection from "../components/ServiceActionSection";
import ServiceRoad from "../components/ServiceRoad";
import ServiceStats from "../components/ServiceStats";
import {
  inceptionActions,
  inceptionCapabilities,
  inceptionRoad,
  inceptionStats,
} from "../data";

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
    </>
  );
}

export default Inception;
