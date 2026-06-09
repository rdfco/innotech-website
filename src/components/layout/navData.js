import {routes} from "../../routes";

export const searchItems = [
  {title: "Who we are", type: "Page"},
  {title: "What we do", type: "Page"},
  {title: "What we think", type: "Page"},
  {title: "INLEARN Academy", type: "Page"},
  {title: "INSIGHT Store", type: "Page"},
  {title: "Innovation and Technology Management", type: "Article"},
  {title: "Digital Transformation Report", type: "Report"},
  {title: "Market Analytics Report", type: "Report"},
];

export const languageOptions = [
  {label: "En", name: "English"},
  {label: "Tr", name: "Türkçe"},
  {label: "Ar", name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},
];

export const serviceMenuItems = [
  {
    label: "INCEPTION",
    description: "Innovation and Technology Management",
    to: routes.inception,
  },
  {
    label: "INSIGHT",
    description: "Science, Technology, Innovation and Market Analytics & Reports",
    to: routes.insight,
  },
  {
    label: "INFINITY",
    description: "Digital Transformation and Industry 4.0",
    to: routes.infinity,
  },
];

export const industryMenuItems = [
  {label: "Automotive", to: routes.automotive},
  {label: "Energy & Materials", to: routes.energyAndMaterials},
  {label: "Health", to: routes.health},
  {label: "High Tech", to: routes.highTech},
  {label: "Metals & Mining", to: routes.metalsAndMining},
];
