import { Step, Steps, useSteps } from "chakra-ui-steps";
import React from "react";
import { COLOR_SCHEME } from "../../constants/appConstants";
import STEPS from "../../utils/steps";

const DashboardHomeContainer = () => {
  // TODO: Connect backend with this component
  //eslint-disable-next-line
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
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
  );
};

export default DashboardHomeContainer;
