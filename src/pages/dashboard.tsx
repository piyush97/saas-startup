import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import Dash from "./Dash";
import Login from "./Login";

const Dashboard = (props: RouteComponentProps) => {
  const { isAuth } = useAuth();
  return isAuth ? <Dash /> : <Login />;
};

export default Dashboard;
