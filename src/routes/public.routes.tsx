import { Router } from "@reach/router";
import React from "react";
import { LOG_IN, SIGN_UP } from "../constants/appConstants";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";

const PublicRoutes = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path={LOG_IN} />
      <SignUp path={SIGN_UP} />
    </Router>
  );
};

export default PublicRoutes;
