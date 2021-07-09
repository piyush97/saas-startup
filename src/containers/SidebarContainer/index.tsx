import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@reach/router";
import NavItem from "../../components/Dashboard/NavItem";
import {
  LOGO_DARK,
  LOGO_WHITE,
  SIDEBAR_THEME_DARK,
  SIDEBAR_THEME_LIGHT,
} from "../../constants/appConstants";
import NavbarMenu from "../../utils/navbarMenu";

const SidebarContainer = (props) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue(SIDEBAR_THEME_LIGHT, SIDEBAR_THEME_DARK)}
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Image src={useColorModeValue(LOGO_WHITE, LOGO_DARK)} />
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      {NavbarMenu.map(({ name, icon, url, key, ...rest }) => (
        <Link to={url} key={key}>
          <NavItem icon={icon} {...rest}>
            {name}
          </NavItem>
        </Link>
      ))}
    </Flex>
  </Box>
);
export default SidebarContainer;
