import { Router } from "@reach/router";
import React from "react";
import { LOG_IN_ROUTE, SIGN_UP_ROUTE } from "../constants/appConstants";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";

const PublicRoutes: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path={LOG_IN_ROUTE} />
      <SignUp path={SIGN_UP_ROUTE} />
    </Router>
  );
};

export default PublicRoutes;
