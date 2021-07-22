import { RouteComponentProps } from "@reach/router";
import React from "react";
import DashboardContainer from "../../containers/DashboardContainer";
import ProfileContainer from "../../containers/ProfileContainer";

const Profile: React.FC<RouteComponentProps> = () => {
  return <DashboardContainer content={<ProfileContainer />} />;
};

export default Profile;
