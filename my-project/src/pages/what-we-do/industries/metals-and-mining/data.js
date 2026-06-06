import metalsHero from "../../../../assets/images/industries/metals-and-mining/metalsandmining.png";
import metalsInsightLeft from "../../../../assets/images/industries/metals-and-mining/metalsandmining1.png";
import metalsInsightTop from "../../../../assets/images/industries/metals-and-mining/metalsandmining2.png";
import metalsInsightBottom from "../../../../assets/images/industries/metals-and-mining/metalsandmining3.png";
import {ecosystemImages, expertImages} from "../../../../assets/images/shared";

const {brightidea: BrightIdea, idc: IDC} = ecosystemImages;
const {itonics: itonicsImage} = expertImages;

const inceptionCard = {
  title: "InnotechCo launches INCEPTION",
  date: "November 15, 2025",
  readTime: "2 minutes read",
  description:
    "InnotechCo introduced INCEPTION, a modular innovation management system that helps R&D and strategy.",
};

export const hero = {
  image: metalsHero,
  breadcrumbLabel: "Metals and Mining",
  title: "Metals and Mining",
  description:
    "Drive intelligent mining transformation across steel, alumina, minerals, and extraction ecosystems through AI-enabled industrial analytics, technology roadmapping, operational modernization, and predictive infrastructure intelligence.",
};

export const accelerationParagraphs = [
  "Mining operators and metals enterprises face rising extraction complexity, fragmented operational systems, and volatile industrial transitions. Advancing mining modernization requires integrated innovation management, digital mining intelligence, and scalable transformation architectures across distributed industrial assets.",
  "Maximize industrial resilience through enterprise mining consulting for steel producers, mineral operators, alumina systems, and industrial holdings. Our specialized consulting frameworks deploy technology analytics, operational intelligence, and AI-enabled transformation systems to accelerate sustainable metals modernization.",
];

export const capabilities = [
  {
    title: "Innovation Systems (Governance)",
    description:
      "We build mining innovation systems that align governance, operational priorities, capital planning, and technology scouting across metals, minerals, and extraction value chains.",
  },
  {
    title: "Mining Analytics (Forecasting)",
    description:
      "Our technology analytics engines monitor industrial patents, extraction technologies, metallurgy innovation, and mineral infrastructure signals to strengthen mining foresight and strategic operational positioning.",
  },
  {
    title: "Digital Operations (Automation)",
    description:
      "We engineer AI-enabled mining infrastructures integrating operational dashboards, industrial automation, predictive maintenance systems, and connected extraction intelligence across distributed mining environments.",
  },
  {
    title: "Technology Roadmaps (Planning)",
    description:
      "We develop mining transformation roadmaps aligning industrial modernization priorities, digital infrastructure investments, and technology transition pathways across metals and mineral ecosystems.",
  },
  {
    title: "Industrial Intelligence (Enhancement)",
    description:
      "The INFINITY platform automates mining documentation workflows, operational monitoring, industrial intelligence mapping, and extraction analytics to accelerate enterprise-level industrial decision environments.",
  },
];

export const liveInsights = {
  title: "LIVE METALS INSIGHTS",
  alt: "Live metals insights",
  cards: [
    {
      id: "metals-featured",
      image: metalsInsightLeft,
      title: "Smart Carbon Technology",
      date: "June 4, 2026",
      readTime: "2 minutes read",
      description:
        "Industrial operators are scaling carbon technology across global operations and mining value chains.",
    },
    {id: "metals-top", image: metalsInsightTop, ...inceptionCard},
    {id: "metals-bottom", image: metalsInsightBottom, ...inceptionCard},
  ],
};

export const ecosystemCards = [
  {
    id: "idc",
    image: IDC,
    title: "Manufacturing Aluminum Composite Panels",
    subtitle: "IDC Metal Industries",
  },
  {
    id: "itonics",
    image: itonicsImage,
    title: "Minerals and mining",
    subtitle: "The complete list of all 160+ trends",
  },
  {
    id: "brightidea",
    image: BrightIdea,
    title: "The case of John Deere",
    subtitle: "Innovation Cloud in heavy equipment",
  },
];
