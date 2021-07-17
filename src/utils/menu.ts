import { LOG_IN, SIGN_UP } from "./../constants/appConstants";
export const menu = [
  {
    name: "Home",
    key: 1,
    link: "/",
    isLast: false,
    dependsOnLogin: false,
    isButton: false,
  },

  {
    name: "Login",
    key: 3,
    link: LOG_IN,
    isLast: false,
    dependsOnLogin: true,
    isButton: false,
  },
  {
    name: "Sign Up",
    key: 4,
    link: SIGN_UP,
    isLast: false,
    dependsOnLogin: true,
    isButton: true,
  },
];
