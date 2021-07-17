import { RouteComponentProps } from "@reach/router";
import React from "react";
import HeroContainer from "../../containers/HeroContainer";

const Home = (props: RouteComponentProps) => {
  return (
    <>
      <HeroContainer />
    </>
  );
};

export default Home;
