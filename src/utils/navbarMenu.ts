import { CgProfile } from "react-icons/cg";
import { FaBook, FaBookReader, FaUniversity } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import {
  APPLICATIONS,
  APPLICATIONS_ROUTE,
  COURSES,
  COURSES_ROUTE,
  HOME,
  HOME_ROUTE,
  PROFILE,
  PROFILE_ROUTE,
  UNIVERSITIES,
  UNIVERSITIES_ROUTE,
} from "./../constants/appConstants";
const NavbarMenu = [
  { key: 1, name: HOME, url: HOME_ROUTE, icon: MdHome },
  { key: 2, name: PROFILE, url: PROFILE_ROUTE, icon: CgProfile },
  { key: 3, name: UNIVERSITIES, url: UNIVERSITIES_ROUTE, icon: FaUniversity },
  { key: 4, name: COURSES, url: COURSES_ROUTE, icon: FaBook },
  { key: 5, name: APPLICATIONS, url: APPLICATIONS_ROUTE, icon: FaBookReader },
];
export default NavbarMenu;
