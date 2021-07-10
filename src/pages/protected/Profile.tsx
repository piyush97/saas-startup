import { RouteComponentProps } from "@reach/router";
import React from "react";
import DashboardContainer from "../../containers/DashboardContainer";

const Profile = (props: RouteComponentProps) => {
  return <DashboardContainer content={<>Profile</>} />;
};

export default Profile;
