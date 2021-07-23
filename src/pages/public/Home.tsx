import { RouteComponentProps } from "@reach/router";
import React from "react";
import HeroContainer from "../../containers/HeroContainer";
import SEO from "../../utils/SEO";
/**
 * Test Response for demo only
 * DONOT Merge
 * TODO: Fix this SEO component
 * @return {*}
 */
const Home: React.FC<RouteComponentProps> = () => {
  return (
    <SEO
      title="test"
      description="test"
      content="test"
      icon57="test"
      icon72="test"
      ogDescription="test"
      ogImage="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
    >
      <HeroContainer />
    </SEO>
  );
};

export default Home;
