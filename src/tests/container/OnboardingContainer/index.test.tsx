import { cleanup, render } from "@testing-library/react";
import React from "react";
import OnboardingContainer from "../../../containers/OnboardingContainer/index";
import { onBoardingForm } from "../../../utils/onBoardingForm";

// Unmounts React trees that were mounted with render
afterEach(cleanup);
describe("Stage", () => {
  it("should Render Stage", () => {
    const { getByText } = render(
      <OnboardingContainer heading="testing" onBoardingForm={onBoardingForm} />
    );
    expect(getByText("testing")).toBeInTheDocument();
  });
});
