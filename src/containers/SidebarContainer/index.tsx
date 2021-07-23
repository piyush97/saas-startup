import {
  Box,
  Flex,
  Image,
  ResponsiveValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "../../components/Dashboard/NavItem";
import {
  LOGO_DARK,
  LOGO_WHITE,
  SIDEBAR_THEME_DARK,
  SIDEBAR_THEME_LIGHT,
} from "../../constants/appConstants";
import NavbarMenu from "../../utils/navbarMenu";

type SidebarContainerProps = {
  display?: ResponsiveValue<string>;
  w?: string;
  borderRight?: string;
};
const SidebarContainer: React.FC<SidebarContainerProps> = (props) => {
  return (
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
          <NavItem icon={icon} to={url} key={key} {...rest}>
            {name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
export default SidebarContainer;
