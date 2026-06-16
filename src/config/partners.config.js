import alleanitaLogo from "../assets/images/shared/partners/alleanita.svg";
import archeryIcon from "../assets/images/partners/shared/cards/archery.svg";
import brightideaHeroImage from "../assets/images/partners/brightidea/brightidea.webp";
import brightideaLogo from "../assets/images/shared/partners/brightidea-partner.svg";
import circleIcon from "../assets/images/partners/shared/circles/circles.webp";
import gartnerLogo from "../assets/images/shared/partners/gartner.svg";
import globeIcon from "../assets/images/partners/shared/cards/globe.svg";
import idcLogo from "../assets/images/shared/partners/idc-partner.svg";
import itonicsHeroImage from "../assets/images/partners/itonics/image-41.webp";
import itonicsLogo from "../assets/images/shared/partners/Itonics.svg";
import leanLogo from "../assets/images/shared/partners/lean.svg";
import lensorgLogo from "../assets/images/shared/partners/lens-org.svg";
import puzzleIcon from "../assets/images/partners/shared/cards/puzzle.svg";
import sharjahLogo from "../assets/images/shared/partners/sharjah.svg";
import startinLogo from "../assets/images/shared/partners/startin.svg";
import statistaLogo from "../assets/images/shared/partners/statista-partner.svg";
import trexLogo from "../assets/images/shared/partners/trex-partner.svg";

const sharedAssets = {
  cardIcons: {
    archery: archeryIcon,
    globe: globeIcon,
    puzzle: puzzleIcon,
  },
  circleIcon,
};

function partnerAssets(logo, heroImage = itonicsHeroImage, extra = {}) {
  return {
    ...sharedAssets,
    heroImage,
    logo,
    ...extra,
  };
}

export const partnerConfig = {
  alleanita: {
    assets: partnerAssets(alleanitaLogo),
  },
  brightidea: {
    assets: partnerAssets(brightideaLogo, brightideaHeroImage, {
      logoClassName: "max-h-24 max-w-[360px]",
      lightLogoClassName: "brightness-0",
    }),
  },
  gartner: {
    assets: partnerAssets(gartnerLogo),
  },
  idc: {
    assets: partnerAssets(idcLogo),
  },
  itonics: {
    assets: partnerAssets(itonicsLogo, itonicsHeroImage, {
      logoClassName: "max-h-[212px] max-w-[406px]",
    }),
  },
  lean: {
    assets: partnerAssets(leanLogo),
  },
  lensorg: {
    assets: partnerAssets(lensorgLogo),
  },
  sharjah: {
    assets: partnerAssets(sharjahLogo),
  },
  startin: {
    assets: partnerAssets(startinLogo),
  },
  statista: {
    assets: partnerAssets(statistaLogo),
  },
  trex: {
    assets: partnerAssets(trexLogo),
  },
};
