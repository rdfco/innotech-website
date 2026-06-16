import {getWhoWeArePage} from "../../services/contentApi";

export const whoWeAreContent = getWhoWeArePage();
export const whoWeAreImages = whoWeAreContent.images;
export const stats = whoWeAreContent.stats;
export const experts = whoWeAreContent.experts;
