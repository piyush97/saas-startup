import { Router } from "@reach/router";
import React from "react";
import { DASHBOARD } from "../constants/appConstants";
import Dashboard from "../pages/dashboard";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Dashboard path={DASHBOARD} />
    </Router>
  );
};

export default ProtectedRoutes;
