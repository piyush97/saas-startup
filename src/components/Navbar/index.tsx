import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { APP_NAME } from "../../constants/appConstants";
import NavbarContainer from "../../containers/NavbarContainer";

const Navbar = (props: any) => {
  return (
    <NavbarContainer {...props}>
      <Flex>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} pl="2">
          {/* We'll create a custom file to use all the constants [Best Practice] */}
          {APP_NAME}
        </Heading>
      </Flex>
    </NavbarContainer>
  );
};

export default Navbar;
