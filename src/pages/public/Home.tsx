import { RouteComponentProps } from "@reach/router";
import React from "react";
import { SEO_CONTENT } from "../../constants/appConstants";
import HeroContainer from "../../containers/HeroContainer";
import SEO from "../../utils/SEO";
/**
 * Home Page
 *
 * @returns {React.FC}
 */
const Home: React.FC<RouteComponentProps> = () => {
  return (
    <SEO
      title={SEO_CONTENT[0].title}
      description={SEO_CONTENT[0].description}
      content={SEO_CONTENT[0].content}
      icon57={SEO_CONTENT[0].icon57}
      icon72={SEO_CONTENT[0].icon72}
      ogDescription={SEO_CONTENT[0].ogDescription}
      ogImage={SEO_CONTENT[0].ogImage}
    >
      <HeroContainer />
    </SEO>
  );
};

export default Home;
