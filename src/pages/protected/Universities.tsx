import { RouteComponentProps } from "@reach/router";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardContainer from "../../containers/DashboardContainer";
import UniversitiesContainer from "../../containers/UniversitiesContainer";
const Universities = (props: RouteComponentProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContainer content={<UniversitiesContainer />} />
    </QueryClientProvider>
  );
};

export default Universities;
