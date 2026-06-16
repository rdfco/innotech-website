import CareersImage from "../assets/images/who-we-are/Careers.webp";
import CirclePlayIcon from "../assets/images/who-we-are/CirclePlay.svg";
import BackgroundMiddleLight from "../assets/images/excludes/who-we-are/WhoWeAreExcludeMiddle.webp";
import BackgroundTopLight from "../assets/images/excludes/who-we-are/WhoWeAreExcludeTop.webp";
import BackgroundTop2Light from "../assets/images/excludes/who-we-are/WhoWeAreExcludeTop2.webp";
import BackgroundTopDark from "../assets/images/excludes/who-we-are/WhoWeAreExcludeTopBlack.webp";
import BackgroundTop2Dark from "../assets/images/excludes/who-we-are/WhoWeAreExcludeTopBlack2.webp";
import BackgroundMiddleDark from "../assets/images/excludes/who-we-are/WhoWeAreExcludeTopMiddle.webp";
import HistoryCurve from "../assets/images/who-we-are/HistoryCurve.webp";
import HistoryCurveLight from "../assets/images/who-we-are/HistoryCurveLight.webp";
import InceptionIcon from "../assets/icons/Inception-Icon 1.svg";
import WindTurbines from "../assets/images/who-we-are/Innotechisin.webp";
import CubeIcon from "../assets/images/who-we-are/stats/CubeIcon.svg";
import DealHandshake from "../assets/images/who-we-are/stats/DealHandshake.svg";
import EmployeesIcon from "../assets/images/who-we-are/stats/EmployeesIcon.svg";
import FactoryIcon from "../assets/images/who-we-are/stats/FactoryIcon.svg";

export const whoWeAreConfig = {
  images: {
    backgroundMiddleDark: BackgroundMiddleLight,
    backgroundMiddleLight: BackgroundMiddleDark,
    backgroundTopDark: BackgroundTopLight,
    backgroundTopLight: BackgroundTopDark,
    backgroundTop2Dark: BackgroundTop2Light,
    backgroundTop2Light: BackgroundTop2Dark,
    careers: CareersImage,
    circlePlay: CirclePlayIcon,
    historyDark: HistoryCurve,
    historyLight: HistoryCurveLight,
    expert: InceptionIcon,
    intro: WindTurbines,
  },
  stats: {
    "experts-primary": {icon: EmployeesIcon},
    "experts-secondary": {icon: FactoryIcon},
    partners: {icon: DealHandshake},
    program: {icon: CubeIcon},
  },
};
