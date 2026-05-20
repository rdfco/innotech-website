import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import EcosystemSection from "./components/EcosystemSection";
import LatestNews from "./components/LatestNews";
import HowWeThink from "./components/HowWeThink";
import Map from "./components/Map";
import FooterFirstPage from "./components/FooterFirstPage";

function App() {
  return (
    <div className="relative w-full bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <FirstPage />
      <EcosystemSection />
      <LatestNews />
      <HowWeThink />
      <Map />
      <FooterFirstPage />
    </div>
  );
}

export default App;
