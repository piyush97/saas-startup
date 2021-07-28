import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Navbar from "../../components/Navbar";
import {
  APP_NAME,
  LOG_IN_ROUTE,
  SIGN_UP_ROUTE,
} from "../../constants/appConstants";
import { AuthProvider } from "../../contexts/AuthProvider";
import Routes from "../../routes/routes";

// Unmounts React trees that were mounted with render
afterEach(cleanup);
/**
 * Renders Router with given props and returns the rendered element
 *
 * @param {*} ui
 * @param {*} [{ route = "/", history = createHistory(createMemorySource(route)) }={}]
 * @return {*}
 */
function renderWithRouter(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
describe("Navbar", () => {
  it("Navbar Content Not Logged In and is Healthy", async () => {
    const {
      getByText,
      getByTestId,
      history: { navigate },
    } = renderWithRouter(
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    );
    await navigate("/");

    // Navbar Menu currently contains these three items
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
    expect(getByText("Sign Up")).toBeTruthy();

    // Title is the app name
    expect(getByText(APP_NAME)).toBeTruthy();

    // and a Theme switch
    expect(getByTestId("theme-switch")).toBeTruthy();
  });

  it("Navbar Content If user Logged In and is on HomePage/SignUp/Login", async () => {
    localStorage.setItem("isAuth", "true");
    const {
      getByText,
      findByTestId,
      history: { navigate },
    } = renderWithRouter(
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    );
    await navigate("/");

    // Navbar Menu currently contains None and Navbar will only render SignOut and Theme Button
    /** @type {HTMLElement} */
    let navbarMenu: HTMLElement[] = [];
    expect(getByText("Sign Out")).toBeTruthy();
    navbarMenu.push(getByText("Sign Out"));

    // and a Theme switch
    expect(await findByTestId("theme-switch")).toBeTruthy();
  });

  it("Navbar Content If user Logged In and is on Public Route", async () => {
    localStorage.setItem("isAuth", "true");
    const {
      getByText,
      findByTestId,
      history: { navigate },
    } = renderWithRouter(
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    );
    await navigate("/");
    await navigate(SIGN_UP_ROUTE);
    await navigate(LOG_IN_ROUTE);
    // Navbar Menu currently contains None and Navbar will only render SignOut and Theme Button
    /** @type {HTMLElement} */
    let navbarMenu: HTMLElement[] = [];
    expect(getByText("Sign Out")).toBeTruthy();
    navbarMenu.push(getByText("Sign Out"));
    expect(await findByTestId("navbar")).toBeTruthy();

    // and a Theme switch
    expect(await findByTestId("theme-switch")).toBeTruthy();
  });
});
