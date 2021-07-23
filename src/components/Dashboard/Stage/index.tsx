import { Box } from "@chakra-ui/react";
import React from "react";

type DashboardStageProps = {
  content: React.ReactNode;
};
/**
 * DashboardStage Component It's the stage for the dashboard
 *
 * @param {DashboardStageProps} { content }
 * @returns {React.FC}
 */
const DashboardStage: React.FC<DashboardStageProps> = ({ content }) => {
  return (
    <Box as="main" p="12">
      {content}
    </Box>
  );
};

export default DashboardStage;
