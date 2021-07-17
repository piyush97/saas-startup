import React from "react";
import ProtectedRoutes from "./protected.routes";
import PublicRoutes from "./public.routes";

const Routes = () => {
  return (
    <>
      <PublicRoutes />
      <ProtectedRoutes />
    </>
  );
};

export default Routes;
