import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link, LinkGetProps } from "@reach/router";
import { IconType } from "react-icons";
type NavItemProps = {
  icon: IconType;
  to: string;
};
/**
 * NavItem component which is used to render a single NavItem on Navbar (Dashboard)
 *
 * @param {NavItemProps} { icon, children, to }
 * @returns {React.FC}
 */
const NavItem: React.FC<NavItemProps> = ({ icon, children, to }) => {
  function styleActive(props: LinkGetProps) {
    return {
      style: {
        fontWeight: props.isCurrent ? "bold" : "normal",
        background: props.isCurrent ? "rgba(0, 0, 0, 0.2)" : "transparent",
      },
    };
  }
  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      as={Link}
      to={to}
      rounded="md"
      py="4"
      cursor="pointer"
      color={useColorModeValue("blackAlpha.800", "whiteAlpha.700")}
      _hover={{
        bg: "blackAlpha.300",
        color: "whiteAlpha.900",
      }}
      role="group"
      getProps={styleActive}
      transition=".15s ease"
    >
      {icon && (
        <Icon
          mr="5"
          boxSize="4"
          _groupHover={{
            color: "gray.300",
          }}
          as={icon}
        />
      )}{" "}
      {children}
    </Flex>
  );
};
export default NavItem;
