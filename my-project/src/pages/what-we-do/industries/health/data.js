import healthHero from "../../../../assets/images/industries/health/health.png";
import healthInsightLeft from "../../../../assets/images/industries/health/health1.png";
import healthInsightTop from "../../../../assets/images/industries/health/health2.png";
import healthInsightBottom from "../../../../assets/images/industries/health/health3.png";
import {expertImages} from "../../../../assets/images/shared";

const {itonics: itonicsImage, statista: statistaImage, trex: trexImage} =
  expertImages;

const inceptionCard = {
  title: "InnotechCo launches INCEPTION",
  date: "November 15, 2025",
  readTime: "2 minutes read",
  description:
    "InnotechCo introduced INCEPTION, a modular innovation management system that helps R&D and strategy.",
};

export const hero = {
  image: healthHero,
  breadcrumbLabel: "Health",
  title: "Health",
  description:
    "Reinvent Healthcare Through Digital Intelligence. At Innotech, we help healthcare providers, life sciences firms, biotechnology companies, and medical innovation hubs navigate this transformation with strategic clarity and measurable impact.",
};

export const accelerationParagraphs = [
  "Healthcare providers and life sciences enterprises face fragmented clinical infrastructures, rising diagnostics complexity, and escalating operational inefficiencies. Advancing digital healthcare systems requires integrated Healthcare Innovation frameworks, AI healthcare orchestration, and enterprise-grade clinical intelligence architectures.",
  "Our integrated healthcare solutions combine innovation management, medical technology analytics, AI automation, and digital transformation frameworks to support sustainable growth across healthcare ecosystems, precision medicine initiatives, diagnostics operations, and advanced clinical infrastructures.",
];

export const capabilities = [
  {
    title: "Clinical Intelligence (Optimization)",
    description:
      "We deploy AI healthcare systems to unify distributed clinical operations, strengthen diagnostics acceleration, optimize care coordination, and modernize healthcare infrastructure across enterprise hospital ecosystems.",
  },
  {
    title: "Diagnostics Analytics (Forecasting)",
    description:
      "Our analytics frameworks map diagnostic technologies, biomedical signals, clinical workflows, and patient-care trends to help healthcare organizations identify emerging opportunities and operational risks.",
  },
  {
    title: "Biomedical Strategy (Research)",
    description:
      "We support biomedical research strategy through evidence mapping, technology scouting, translational research analysis, and structured innovation roadmaps for life sciences and care delivery teams.",
  },
  {
    title: "MedTech Systems (Infrastructure)",
    description:
      "We design connected MedTech operating models that combine device ecosystems, data infrastructure, compliance-aware workflows, and scalable digital health platforms.",
  },
  {
    title: "AI Automation (Enhancement)",
    description:
      "The INFINITY platform automates clinical documentation workflows, biomedical intelligence mapping, diagnostics research synthesis, and healthcare operations reporting to accelerate AI-enabled healthcare decision environments.",
  },
];

export const liveInsights = {
  title: "LIVE HEALTH INSIGHTS",
  alt: "Live health insights",
  cards: [
    {
      id: "health-featured",
      image: healthInsightLeft,
      title: "AI and Biotechnology Invention Trends",
      date: "June 4, 2026",
      readTime: "2 minutes read",
      description:
        "Inventions combining AI and biotechnology continue to grow faster than many other technology sectors.",
    },
    {
      id: "health-top",
      image: healthInsightTop,
      title: "Mental Health Diagnostics Using Audio Data",
      date: "November 15, 2025",
      readTime: "2 minutes read",
      description:
        "Audio-driven analysis can help clinical teams identify signals from patient interactions.",
    },
    {id: "health-bottom", image: healthInsightBottom, ...inceptionCard},
  ],
};

export const ecosystemCards = [
  {
    id: "statista",
    image: statistaImage,
    title: "Cord Blood Technology",
    subtitle: "Copyrighted collaborative data ",
  },
  {
    id: "itonics",
    image: itonicsImage,
    title: "Report: Pharma R&D in 2026",
    subtitle: "Practical actions to modernize your Pharma R&D operation",
  },
  {
    id: "trex",
    image: trexImage,
    title: "Bottling and Packaging",
    subtitle: "Regional best practices",
  },
];
