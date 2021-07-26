import { cleanup, render } from "@testing-library/react";
import React from "react";
import Navbar from "../../../components/Navbar";
import { APP_NAME } from "../../../constants/appConstants";
import { AuthProvider } from "../../../contexts/AuthProvider";

afterEach(cleanup);
describe("Navbar", () => {
  it("Navbar Content Not Logged In and is Healthy", () => {
    const { getByText, getByTestId } = render(
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    );
    /** @type {HTMLElement} */
    let navbarMenu: HTMLElement[] = [];
    // Navbar Menu currently contains these three items
    expect(getByText("Home")).toBeTruthy();
    navbarMenu.push(getByText("Home"));
    expect(getByText("Login")).toBeTruthy();
    navbarMenu.push(getByText("Login"));
    expect(getByText("Sign Up")).toBeTruthy();
    navbarMenu.push(getByText("Sign Up"));

    // Title is the app name
    expect(getByText(APP_NAME)).toBeTruthy();
    // Links should be 3
    expect(navbarMenu.length).toBe(3);
    // and a Theme switch
    expect(getByTestId("theme-switch")).toBeTruthy();
  });
});
