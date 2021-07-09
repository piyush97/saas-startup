import { RouteComponentProps } from "@reach/router";
import React from "react";
import DashboardContainer from "../containers/DashboardContainer";
import { useAuth } from "../contexts/AuthProvider";
import Login from "./Login";

const Dashboard = (props: RouteComponentProps) => {
  const { isAuth } = useAuth();
  return isAuth ? <DashboardContainer /> : <Login />;
};

export default Dashboard;
