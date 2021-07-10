import { Box } from "@chakra-ui/react";
import React from "react";

const DashboardStage = ({ content }) => {
  return (
    <Box as="main" p="12">
      {content}
    </Box>
  );
};

export default DashboardStage;
