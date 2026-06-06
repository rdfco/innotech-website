import energyHero from "../../../../assets/images/industries/energy-and-materials/energyandmaterials.png";
import energyInsightLeft from "../../../../assets/images/industries/energy-and-materials/energyandmaterials1.png";
import energyInsightTop from "../../../../assets/images/industries/energy-and-materials/energyandmaterials2.jpg";
import energyInsightBottom from "../../../../assets/images/industries/energy-and-materials/energyandmaterials3.jpg";
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
  image: energyHero,
  breadcrumbLabel: "Energy And Materials",
  title: "Energy and Materials",
  description:
    "Drive upstream digital transformation. We optimize oil, gas, and petrochemical operations via systemic Innovation Management, predictive Technology Analytics, and actionable Market Analytics to scale energy infrastructure and navigate volatile global asset transitions.",
};

export const accelerationParagraphs = [
  "Complex oil fields and downstream petrochemical facilities face severe infrastructure bottlenecks. Overcoming these operational roadblocks demands unified Innovation Management linking deep engineering research directly to value chain transformation.",
  "Maximize extraction margins. Consulting for enterprise energy corporations with over $4B in combined revenue, our specialized consulting network deploys advanced data architectures to optimize downstream refining assets, streamline supply logistics, and secure market leadership.",
];

export const capabilities = [
  {
    title: "Innovation Management (Optimization)",
    description:
      "Aligning with ISO 56002 protocols, we deploy leading solutions like ITONICS and Brightidea to streamline innovation management processes, track emerging  trends, and accelerate ideation.",
  },
  {
    title: "Technology Analytics (Intelligent Foresight)",
    description:
      "Our rigorous methodology maps complex drilling patents, benchmarks refinery technology, and delivers verified technical scouting across USA, EU, and GCC territories to accelerate executive commercial positioning.",
  },
  {
    title: "Market Research (Landscape Dynamics)",
    description:
      "We analyze massive real datasets, evaluate regional infrastructure hubs, and design bankable feasibility studies to maximize asset profitability for downstream operators.",
  },
  {
    title: "Transformation Architectures (Radar)",
    description:
      "We engineer your entire digital journey from upstream maturity assessments to pipeline roadmap design and cloud system implementation building highly transparent, secure industrial enterprise architectures.",
  },
  {
    title: "AI Automation (Landscape Dynamics) ",
    description:
      "The INFINITY platform automates critical drilling documentation, structures complex geology research, and accelerates technical asset synthesis to drive rapid, data-backed operational decisions.",
  },
];

export const liveInsights = {
  title: "LIVE ENERGY INSIGHTS",
  alt: "Live energy insights",
  cards: [
    {
      id: "energy-featured",
      image: energyInsightLeft,
      title: "Global Energy Materials Outlook",
      date: "June 4, 2026",
      readTime: "2 minutes read",
      description:
        "A technology and market view on energy materials, infrastructure demand, and regional industrial opportunities.",
    },
    {id: "energy-top", image: energyInsightTop, ...inceptionCard},
    {id: "energy-bottom", image: energyInsightBottom, ...inceptionCard},
  ],
};

export const ecosystemCards = [
  {
    id: "itonics",
    image: itonicsImage,
    title: "How AI Agents Augment  Innovation Ecosystem",
    subtitle: "A Siemens and ITONICS joint study",
  },
  {
    id: "brightidea",
    image: BrightIdea,
    title: "GE Harnesses Open Innovation",
    subtitle: "A Brightidea success story",
  },
  {
    id: "idc",
    image: IDC,
    title: "Equipment Supply and After-Sales Support",
    subtitle: "Discover how IDC supports its clients",
  },
];
