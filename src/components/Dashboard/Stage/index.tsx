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
    <Box as="main" p="12">
      <Steps activeStep={activeStep} colorScheme={COLOR_SCHEME}>
        {STEPS.map(({ label, content, description }) => (
          <Step
            label={label}
            key={label}
            onClick={() => nextStep()}
            description={description}
          >
            {content}
          </Step>
        ))}
      </Steps>
    </Box>
  );
};

export default DashboardStage;
