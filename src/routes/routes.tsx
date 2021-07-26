import { LocationProvider } from "@reach/router";
import React from "react";
import ProtectedRoutes from "./protected.routes";
import PublicRoutes from "./public.routes";

const Routes: React.FC = () => {
  return (
    <LocationProvider>
      <PublicRoutes />
      <ProtectedRoutes />
    </LocationProvider>
  );
};

export default Routes;
