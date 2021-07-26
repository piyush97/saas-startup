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

    // Navbar Menu currently contains these three items
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
    expect(getByText("Sign Up")).toBeTruthy();

    // Title is the app name
    expect(getByText(APP_NAME)).toBeTruthy();

    // and a Theme switch
    expect(getByTestId("theme-switch")).toBeTruthy();
  });

  it("Navbar Content If user Logged In and is on HomePage", async () => {
    localStorage.setItem("isAuth", "true");
    const { getByText, findByTestId } = render(
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    );

    // Navbar Menu currently contains None and Navbar will only render SignOut and Theme Button
    /** @type {HTMLElement} */
    let navbarMenu: HTMLElement[] = [];
    expect(getByText("Sign Out")).toBeTruthy();
    navbarMenu.push(getByText("Sign Out"));

    // and a Theme switch
    expect(await findByTestId("theme-switch")).toBeTruthy();
  });
});
