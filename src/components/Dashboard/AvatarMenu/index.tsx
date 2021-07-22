import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { navigate } from "@reach/router";
import React from "react";

type AvatarMenuProps = {
  signOut: () => void;
};

const AvatarMenu: React.FC<AvatarMenuProps> = ({ signOut }) => {
  function onSignOutClick() {
    signOut();
  }
  return (
    <Menu>
      <MenuButton
        as={Avatar}
        ml="4"
        size="sm"
        name="piyush97"
        src="https://avatars.githubusercontent.com/piyush97"
        cursor="pointer"
       />
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem cursor="pointer" onClick={onSignOutClick}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
