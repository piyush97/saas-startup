import { SEOProps } from "./../types/SEOType.d";

export const APP_NAME = "Succour";
export const APP_LANGUAGE = "en";
export const APP_LOGO_SQUARE =
  "https://i.ibb.co/StLPQnv/Copy-of-Copy-of-Blue-Up-Arrow-Finance-Corporate-Logo.png";
export const LOGO_WHITE =
  "https://i.ibb.co/0t22LX1/Copy-of-Blue-Up-Arrow-Finance-Corporate-Logo.png";
export const LOGO_DARK =
  "https://i.ibb.co/fpKMhhj/Copy-of-Blue-Up-Arrow-Finance-Corporate-Logo-3.png";
export const ONLY_LOGO =
  "https://i.ibb.co/QMg8DpQ/Copy-of-Copy-of-Blue-Up-Arrow-Finance-Corporate-Logo.png";
export const LINKEDIN_LINK = "https://linkedin.com/in/piyush24";
export const GITHUB_LINK = "https://github.com/piyush97";
export const TWITTER_LINK = "https://twitter.com/PiyushMehtas";
export const HERO_TITLE =
  "Solving the issue which students have, one step at a time";
export const HERO_SUBTEXT = "Solving needs since 2021";
export const CTA_IMAGE_URL = "https://picsum.photos/800/600";
export const HERO_CTA_TEXT = "Know More";
/**
 * Routes
 */
export const SIGN_UP_ROUTE = "/signup";
export const LOG_IN_ROUTE = "/login";
export const DASHBOARD = "/dashboard";

export const PASSWORDS_DONT_MATCH = "Passwords don't match";
export const COLOR_SCHEME = "purple";
export const SIDEBAR_THEME_DARK = "purple.700";
export const SIDEBAR_THEME_LIGHT = "purple.100";
export const EMAIL_PLACEHOLDER = "user@succour.xyz";

// Menu bar items
export const HOME = "Home";
export const HOME_ROUTE = "/dashboard";
export const PROFILE = "My Profile";
export const PROFILE_ROUTE = "/profile";
export const COURSES = "Courses";
export const COURSES_ROUTE = "/courses";
export const UNIVERSITIES = "Universities";
export const UNIVERSITIES_ROUTE = "/universities";
export const APPLICATIONS = "My Applications";
export const APPLICATIONS_ROUTE = "/applications";

// APIs
export const API_URL = "http://universities.hipolabs.com/search";

// Button Text Contants
export const SEARCH = "SEARCH";
export const SIGN_OUT = "Sign Out";
export const SIGN_UP = "Sign Up";
export const LOG_IN = "Log In";
export const MENU = "Menu";
export const SIGN_UP_HELPER = "Don't have an account? ";

// Active Country list
export const COUNTRIES: { key: number; name: any; value: any }[] = [
  { key: 0, name: "India", value: "india" },
  { key: 1, name: "Canada", value: "canada" },
  { key: 2, name: "Usa", value: "usa" },
];
/**
 * SEO Content for Pages
 *
 * @type {SEOProps[]} */
export const SEO_CONTENT: SEOProps[] = [
  {
    // Home Page
    title: HOME,
    description: HERO_TITLE,
    content: HERO_TITLE,
    icon57: APP_LOGO_SQUARE,
    icon72: APP_LOGO_SQUARE,
    ogDescription: HERO_TITLE,
    ogImage: LOGO_WHITE,
  },
  {
    // TODO: Other Pages
    title: "TODO",
    description: HERO_TITLE,
    content: HERO_TITLE,
    icon57: APP_LOGO_SQUARE,
    icon72: APP_LOGO_SQUARE,
    ogDescription: HERO_TITLE,
    ogImage: LOGO_WHITE,
  },
];
