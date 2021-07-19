import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardContainer from "../../containers/DashboardContainer";
import UniversitiesContainer from "../../containers/UniversitiesContainer";
const Universities = (props: RouteComponentProps) => {
  const queryClient = new QueryClient();
  const [search, setSearch] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContainer
        content={<UniversitiesContainer search={search} />}
        searchContent={setSearch}
      />
    </QueryClientProvider>
  );
};

export default Universities;
