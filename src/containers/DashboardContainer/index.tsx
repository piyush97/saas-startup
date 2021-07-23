import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import DashboardNavbar from "../../components/Dashboard/Navbar";
import DashboardStage from "../../components/Dashboard/Stage";
import SidebarContainer from "../SidebarContainer";

type DashboardContainerProps = {
  content: ReactNode;
  searchContent?: (string) => void;
  onSetCountry?: (string) => void;
  defaultSearch?: string;
};

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  content,
  defaultSearch,
  searchContent,
  onSetCountry,
}) => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContainer display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContainer w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".6s ease">
        <DashboardNavbar
          onHandleSearch={searchContent}
          onSetCountry={onSetCountry}
          defaultSearch={defaultSearch}
        />
        <DashboardStage content={content} />
      </Box>
    </Box>
  );
};
export default DashboardContainer;
