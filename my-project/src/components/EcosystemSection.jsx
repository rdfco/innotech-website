import {useTheme} from "../components/ThemeContext";
import InnotechEcopic from "../assets/InnotechEcopic.svg";
import InnotechEcopicLight from "../assets/InnotechEcopicLight.svg";
import ellipseBlack from "../assets/EllipseBlack.png";
import ellipseWhite from "../assets/EllipseWhite.png";
import InnoCard from "./InnoCard";

const cards = [
  {
    title: "INCEPTION",
    subtitle: "BY INNOTECH",
    items: [
      {
        label: "ISO56000 Standard Assistant:",
        description:
          "Innovation management\nmaturity assessment and\n system design",
      },
      {
        label: "ITONICS:",
        description:
          "Gartner’s 4 star End-to-End innovation operating systems (OS)",
      },
      {
        label: "BRIGHTIDEA:",
        description: "World’s #1 ideation tool and innovation cloud",
      },
    ],
  },
  {
    title: "INFINITY",
    subtitle: "BY INNOTECH",
    items: [
      {
        label: "Digital Transformation:",
        description:
          "Transitioning from intuition to data-driven intelligence\nthrough structured human-centric empowerment.",
      },
      {
        label: "AI Agent:",
        description:
          "Prescriptive digital assistant converting real-time production data into actionable operational intelligence..",
      },
    ],
  },
  {
    title: "INSIGHT",
    subtitle: "BY INNOTECH",
    items: [
      {
        label: "Patent Landscape Reports:",
        description:
          "AI-powered technology and market trend analysis using patent data.",
      },
      {
        label: "Market Research Reports:",
        description:
          "Intelligent market research utilizing real global and local data.",
      },
      {
        label: "Opportunity Study:",
        description:
          "Comprehensive and detailed market research, feasibility studies (FS), and business planning (BP).",
      },
    ],
  },
  {
    title: "INLEARN",
    subtitle: "BY INNOTECH",
    items: [
      {
        label: "3-Minute Insights:",
        description: "Bitesized insights on emerging trends and innovations.",
      },
      {
        label: "Webinars:",
        description:
          "Engaging sessions focused on the latest innovations, tools and trends for all industries.",
      },
      {
        label: "Workshops:",
        description:
          "A multilingual, multi-platform curriculum standardized from beginner to industrial professional, blending real-life cases and best-practice tools for measurable professional improvement.",
      },
    ],
  },
];

function EcosystemSection() {
  const {isDarkMode} = useTheme();

  return (
    <section
      className={`relative w-full ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="-mt-20 relative z-10 w-full overflow-x-hidden">
        <img
          src={isDarkMode ? ellipseBlack : ellipseWhite}
          alt="Ellipse Background"
          className="w-full block"
        />
      </div>

      <div className="relative z-20 mt-[-38%] lg:mt-[-33%] pb-28">
        <div className="flex justify-center pb-16 px-4">
          <div className="overflow-hidden max-h-137.5">
            <img
              src={isDarkMode ? InnotechEcopic : InnotechEcopicLight}
              alt="Innotech Ecosystem"
              className="w-auto h-auto max-w-[90vw] object-contain"
            />
          </div>
        </div>

        <div className="w-full max-w-301.25 mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start gap-6">
            {cards.map((card) => (
              <InnoCard
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                items={card.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;
