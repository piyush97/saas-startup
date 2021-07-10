import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useAuth } from "../../../contexts/AuthProvider";
import ThemeSwitch from "../../ThemeSwitch";
import AvatarMenu from "../AvatarMenu";

const DashboardNavbar = () => {
  const sidebar = useDisclosure();
  const { signOut } = useAuth();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      py="5"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      borderColor="blackAlpha.300"
    >
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", md: "none" }}
        onClick={sidebar.onOpen}
        icon={<FiMenu />}
        size="sm"
      />
      <InputGroup w="96" display={{ base: "none", md: "flex" }}>
        <InputLeftElement color="gray.500" children={<FiSearch />} />
        <Input placeholder="Search... " />
      </InputGroup>

      <Flex align="center">
        <ThemeSwitch />
        <IconButton
          bg="transparent"
          aria-label="notifications"
          icon={<FaBell />}
          onClick={() => {}}
        />
        <AvatarMenu signOut={signOut} />
      </Flex>
    </Flex>
  );
};

export default DashboardNavbar;
