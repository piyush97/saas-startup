import { Box } from "@chakra-ui/react";
import React from "react";

type DashboardStageProps = {
  content: React.ReactNode;
};

const DashboardStage: React.FC<DashboardStageProps> = ({ content }) => {
  return (
    <Box as="main" p="12">
      {content}
    </Box>
  );
};

export default DashboardStage;
