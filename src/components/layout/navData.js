import navigationContent from "../../content/en/navigation.json";
import {navigationConfig} from "../../config/navigation.config";

export const searchItems = navigationContent.searchItems;
export const languageOptions = navigationContent.languageOptions;
export const serviceMenuItems = navigationContent.serviceMenuItems.map((item) => ({
  ...item,
  to: navigationConfig.serviceRoutes[item.id],
}));
export const industryMenuItems = navigationContent.industryMenuItems.map(
  (item) => ({
    ...item,
    to: navigationConfig.industryRoutes[item.id],
  }),
);
