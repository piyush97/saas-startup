import { RouteComponentProps } from "@reach/router";
import React from "react";
import DashboardContainer from "../../containers/DashboardContainer";
import DashboardHomeContainer from "../../containers/DashboardHomeContainer";
import { useAuth } from "../../contexts/AuthProvider";
import Login from "../public/Login";

const Dashboard = (props: RouteComponentProps) => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <DashboardContainer content={<DashboardHomeContainer />} />
  ) : (
    <Login />
  );
};

export default Dashboard;
