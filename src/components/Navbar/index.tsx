import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ColorMode,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "@reach/router";
import React, { useState } from "react";
import {
  APP_NAME,
  COLOR_SCHEME,
  MENU,
  ONLY_LOGO,
  SIGN_OUT,
} from "../../constants/appConstants";
import NavbarContainer from "../../containers/NavbarContainer";
import { useAuth } from "../../contexts/AuthProvider";
import { menu } from "../../utils/menu";
import ThemeSwitch from "../ThemeSwitch";
type MenuLinksProps = {
  isOpen: boolean;
};

/**
 * Menu Links component; renders the links for the navbar
 *
 * @param {MenuLinksProps} { isOpen }
 * @returns {React.FC}
 */
const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  const { signOut, isAuth } = useAuth();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {isAuth || localStorage.getItem("isAuth") === "true" ? (
          <Button colorScheme={COLOR_SCHEME} onClick={signOut}>
            {SIGN_OUT}
          </Button>
        ) : (
          menu.map((edge) => (
            <MenuItem to={edge.link} key={edge.key}>
              {edge.isButton ? (
                <Button colorScheme={COLOR_SCHEME}>{edge.name}</Button>
              ) : (
                edge.name
              )}
            </MenuItem>
          ))
        )}
        <ThemeSwitch />
      </Stack>
    </Box>
  );
};

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

/**
 * MenuToggle component; renders the toggle button for the menu
 *
 * @param {MenuToggleProps} { toggle, isOpen }
 * @returns {React.FC}
 */
const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  const { colorMode } = useColorMode();
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <CloseIcon colorMode={colorMode} />
      ) : (
        <MenuIcon colorMode={colorMode} />
      )}
    </Box>
  );
};
/**
 * Renders the navigation bar.
 *
 * @returns {React.FC}
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (): void => setIsOpen(!isOpen);
  const { isAuth } = useAuth();
  const value = localStorage.getItem("isAuth");
  const isLoggedIn = value !== null ? JSON.parse(value) : false;
  const isVisible: boolean =
    window.location.pathname === "/login" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/signup";
  return (
    <>
      {isLoggedIn && !isAuth ? (
        <NavbarContainer>
          <Flex data-testid="navbar">
            <Image
              src={ONLY_LOGO}
              width="8"
              alt={`Logo for ${APP_NAME}`}
              data-testid="logo"
            />
            <Heading as="h1" size="lg" letterSpacing={"-.1rem"} pl="2">
              {APP_NAME}
            </Heading>
          </Flex>
          <MenuLinks isOpen={isOpen} />
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </NavbarContainer>
      ) : (
        isVisible && (
          <NavbarContainer>
            <Flex data-testid="navbar">
              <Image
                src={ONLY_LOGO}
                width="8"
                alt={`Logo for ${APP_NAME}`}
                data-testid="logo"
              />
              <Heading as="h1" size="lg" letterSpacing={"-.1rem"} pl="2">
                {APP_NAME}
              </Heading>
            </Flex>
            <MenuLinks isOpen={isOpen} />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
          </NavbarContainer>
        )
      )}
    </>
  );
};

type MenuItemProps = {
  to: string;
};

/**
 * MenuItem component; renders a link for the menu
 *
 * @param {MenuItemProps} { children, to = "/" }
 * @returns {React.FC}
 */
const MenuItem: React.FC<MenuItemProps> = ({ children, to = "/" }) => {
  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        return {
          style: {
            fontWeight: isCurrent && "bold",
          },
        };
      }}
    >
      <Text display="block">{children}</Text>
    </Link>
  );
};
type MenuIconProps = {
  colorMode: ColorMode;
};
/**
 * MenuIcon component; renders the icon for the menu
 *
 * @param {*} { colorMode }
 * @returns {React.FC}
 */
const MenuIcon: React.FC<MenuIconProps> = ({ colorMode }) => (
  <svg
    fill={colorMode === "light" ? "black" : "white"}
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{MENU}</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);
export default Navbar;
