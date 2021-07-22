import { Router } from "@reach/router";
import React from "react";
import {
  DASHBOARD,
  PROFILE_ROUTE,
  UNIVERSITIES_ROUTE,
} from "../constants/appConstants";
import Dashboard from "../pages/protected/Dashboard";
import Profile from "../pages/protected/Profile";
import Universities from "../pages/protected/Universities";

const ProtectedRoutes: React.FC = () => {
  return (
    <Router>
      <Dashboard path={DASHBOARD} />
      <Profile path={PROFILE_ROUTE} />
      <Universities path={UNIVERSITIES_ROUTE} />
    </Router>
  );
};

export default ProtectedRoutes;
