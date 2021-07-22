import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { COUNTRIES, SEARCH } from "../../../constants/appConstants";
import { useAuth } from "../../../contexts/AuthProvider";
import ThemeSwitch from "../../ThemeSwitch";
import AvatarMenu from "../AvatarMenu";

const DashboardNavbar = ({ onHandleSearch, onSetCountry, defaultSearch }) => {
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
      <InputGroup w="120" display={{ base: "none", md: "flex" }}>
        <InputLeftElement color="gray.500" children={<FiSearch />} />
        <Input placeholder={defaultSearch} onChange={(e) => handleSearch(e)} />
        <Select w="60" onChange={(e) => onSetCountry(e.target.value)}>
          {COUNTRIES.map(({ key, value, name }) => (
            <option key={key} value={value}>
              {name}
            </option>
          ))}
        </Select>
        <Button onClick={() => submitSearch()} ml="2" px="12">
          {SEARCH}
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
