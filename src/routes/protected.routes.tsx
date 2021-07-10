import { Router } from "@reach/router";
import React from "react";
import { DASHBOARD, PROFILE_ROUTE } from "../constants/appConstants";
import Dashboard from "../pages/protected/Dashboard";
import Profile from "../pages/protected/Profile";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Dashboard path={DASHBOARD} />
      <Profile path={PROFILE_ROUTE} />
    </Router>
  );
};

export default ProtectedRoutes;
