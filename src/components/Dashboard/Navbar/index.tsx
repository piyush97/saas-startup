import {
  Button,
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

const DashboardNavbar = ({ onHandleSearch }) => {
  const sidebar = useDisclosure();
  const [internalSearchState, setInternalSearchState] = React.useState("");
  const { signOut } = useAuth();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalSearchState(e.target.value);
  };
  const submitSearch = () => {
    onHandleSearch(internalSearchState);
  };
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
        <Input placeholder="Search... " onChange={(e) => handleSearch(e)} />
        <Button onClick={() => submitSearch()} ml="2">
          Search
        </Button>
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
