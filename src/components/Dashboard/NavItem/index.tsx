import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@reach/router";
import { IconType } from "react-icons";
type NavItemProps = {
  icon: IconType;
  to: string;
};
const NavItem: React.FC<NavItemProps> = ({ icon, children, to, ...rest }) => {
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
      getProps={({ isCurrent }) => {
        return {
          style: {
            fontWeight: isCurrent ? "bold" : "normal",
            background: isCurrent ? "rgba(0, 0, 0, 0.2)" : "transparent",
          },
        };
      }}
      transition=".15s ease"
      {...rest}
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
