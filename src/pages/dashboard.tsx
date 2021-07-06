import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import Login from "./Login";

const Dashboard = (props: RouteComponentProps) => {
  const { isAuth } = useAuth();
  return isAuth ? <pre>Welcome Back</pre> : <Login />;
};

export default Dashboard;
