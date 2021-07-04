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
    link: "/login",
    isLast: false,
    dependsOnLogin: true,
    isButton: false,
  },
  {
    name: "Sign Up",
    key: 4,
    link: "/signup",
    isLast: false,
    dependsOnLogin: true,
    isButton: true,
  },
  // {
  //   name: "Logout",
  //   key: 4,
  //   link: "/logout",
  //   isLast: true,
  //   dependsOnLogin: true,
  // },
];
