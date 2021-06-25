import { Flex } from "@chakra-ui/react";
import React from "react";

const NavbarContainer = ({ props, children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      boxShadow="sm"
      rounded="md"
      bg={["transparent"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
