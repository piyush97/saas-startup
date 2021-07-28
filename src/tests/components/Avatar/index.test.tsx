import { cleanup, render } from "@testing-library/react";
import Avatar from "../../../components/Avatar/index";
// Unmounts React trees that were mounted with render
afterEach(cleanup);

describe("Avatar", () => {
  it("should render with Initials if URL not given or wrong and upload function check", () => {
    const { getByText, debug, getByTestId } = render(
      <Avatar
        url="hello"
        size={2}
        website="hello"
        name="Piyush Mehta"
        onUpload={() => {}}
      />
    );
    expect(getByText("PM")).toBeInTheDocument();
    expect(getByText("Piyush Mehta")).toBeInTheDocument();
    expect(getByText("hello")).toBeInTheDocument();
    expect(getByTestId("upload-button")).toBeInTheDocument();
    expect(getByTestId("upload-button").hasAttribute("accept")).toBeTruthy();
  });
});
