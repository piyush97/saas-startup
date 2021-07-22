import React from "react";
import Hero from "../../components/Hero";
import {
  CTA_IMAGE_URL,
  HERO_CTA_TEXT,
  HERO_SUBTEXT,
  HERO_TITLE,
} from "../../constants/appConstants";

const HeroContainer: React.FC = () => {
  return (
    <Hero
      title={HERO_TITLE}
      subText={HERO_SUBTEXT}
      image={CTA_IMAGE_URL}
      ctaText={HERO_CTA_TEXT}
      imageText={"Random Image for now"}
    />
  );
};

export default HeroContainer;
