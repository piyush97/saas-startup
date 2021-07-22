import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardContainer from "../../containers/DashboardContainer";
import UniversitiesContainer from "../../containers/UniversitiesContainer";
const Universities = (props: RouteComponentProps) => {
  const queryClient = new QueryClient();
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("india");
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContainer
        content={
          <UniversitiesContainer search={search} onSetCountry={country} />
        }
        searchContent={setSearch}
        onSetCountry={setCountry}
      />
    </QueryClientProvider>
  );
};

export default Universities;
