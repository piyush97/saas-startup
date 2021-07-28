import OnboardingContainer from "../containers/OnboardingContainer";
import { onBoardingForm } from "./onBoardingForm";

/**
 * Steps for the steps component
 *  @type {label: string; description: string; content: string }[]
 * */
const STEPS: {
  label: string;
  description: string;
  content: JSX.Element | JSX.Element[] | string;
}[] = [
  {
    label: "Step 1",
    description: "Onboarding",
    content: (
      <OnboardingContainer
        heading="Please Complete your profile"
        onBoardingForm={onBoardingForm}
      />
    ),
  },
  { label: "Step 2", description: "Testing", content: "testing" },
  { label: "Step 3", content: "testing", description: "testing" },
  { label: "Step 4", content: "testing", description: "testing" },
  { label: "Step 5", content: "testing", description: "testing" },
];
export default STEPS;
