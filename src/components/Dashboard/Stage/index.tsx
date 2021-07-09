import { Box } from "@chakra-ui/react";
import React from "react";

const DashboardStage = () => {
  return (
    <Box as="main" p="4">
      {/* Add content here, remove div below  */}
      <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
    </Box>
  );
};

export default DashboardStage;
