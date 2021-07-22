import { LOG_IN_ROUTE, SIGN_UP_ROUTE } from "./../constants/appConstants";
export const menu = [
  {
    name: "Home",
    key: 1,
    link: "/",
    dependsOnLogin: false,
    isButton: false,
  },

  {
    name: "Login",
    key: 3,
    link: LOG_IN_ROUTE,
    dependsOnLogin: true,
    isButton: false,
  },
  {
    name: "Sign Up",
    key: 4,
    link: SIGN_UP_ROUTE,
    dependsOnLogin: true,
    isButton: true,
  },
];
