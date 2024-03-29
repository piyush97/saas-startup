import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardContainer from "../../containers/DashboardContainer";
import UniversitiesContainer from "../../containers/UniversitiesContainer";

const Universities: React.FC<RouteComponentProps> = () => {
  const queryClient = new QueryClient();
  const [search, setSearch] = useState("Indian Institute of Technology");
  const [country, setCountry] = useState("india");
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContainer
        content={
          <UniversitiesContainer search={search} onSetCountry={country} />
        }
        searchContent={setSearch}
        defaultSearch={search}
        onSetCountry={setCountry}
      />
    </QueryClientProvider>
  );
};

export default Universities;
