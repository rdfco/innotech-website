import FirstPage from "./sections/FirstPage";
import EcosystemSection from "./sections/EcosystemSection";
import LatestNews from "./sections/LatestNews";
import WhatWeThink from "./sections/WhatWeThink";
import Map from "./sections/Map";
import FooterFirstPage from "./sections/FooterFirstPage";

function Home() {
  return (
    <>
      <FirstPage />
      <EcosystemSection />
      <LatestNews />
      <WhatWeThink />
      <Map />
      <FooterFirstPage />
    </>
  );
}

export default Home;
