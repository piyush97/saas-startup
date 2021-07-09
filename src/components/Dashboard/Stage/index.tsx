import { Box } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import React from "react";
import { COLOR_SCHEME } from "../../../constants/appConstants";
import STEPS from "../../../utils/steps";

const DashboardStage = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Box as="main" p="4">
      <Steps activeStep={activeStep} colorScheme={COLOR_SCHEME}>
        {STEPS.map(({ label, content }) => (
          <Step label={label} key={label} onClick={() => nextStep()}>
            {content}
          </Step>
        ))}
      </Steps>
      <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
    </Box>
  );
};

export default DashboardStage;
