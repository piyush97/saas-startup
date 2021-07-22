import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
  ONLY_LOGO,
} from "../../constants/appConstants";
import NavbarContainer from "../../containers/NavbarContainer";
import { useAuth } from "../../contexts/AuthProvider";
import { menu } from "../../utils/menu";
import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (): void => setIsOpen(!isOpen);
  const { isAuth } = useAuth();
  const value = localStorage.getItem("isAuth");
  const isLoggedIn = value !== null ? JSON.parse(value) : false;
  // TODO: Check the above if it's wrong
  return (
    <>
      {isLoggedIn ||
        (!isAuth && (
          <NavbarContainer>
            <Flex>
              <Image src={ONLY_LOGO} width="8" />
              <Heading as="h1" size="lg" letterSpacing={"-.1rem"} pl="2">
                {/* We'll create a custom file to use all the constants [Best Practice] */}
                {APP_NAME}
              </Heading>
            </Flex>
            <MenuLinks isOpen={isOpen} />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
          </NavbarContainer>
        ))}
    </>
  );
};

const MenuLinks = ({ isOpen }) => {
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
          <Button colorScheme={COLOR_SCHEME} onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          menu.map((edge) => (
            <MenuItem to={edge.link} key={edge.key} isLast={edge.isLast}>
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
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link
      to={to}
      {...rest}
      getProps={({ isCurrent }) => {
        return {
          style: {
            fontWeight: isCurrent && "bold",
          },
        };
      }}
    >
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
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
const MenuIcon = ({ colorMode }) => (
  <svg
    fill={colorMode === "light" ? "black" : "white"}
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);
export default Navbar;
