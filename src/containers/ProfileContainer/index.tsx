import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Avatar from "../../components/Avatar";
import { COLOR_SCHEME } from "../../constants/appConstants";
import { getProfile, updateProfile } from "../../utils/async/profileApis";

const ProfileContainer = () => {
  const [profileData, setProfileData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [username, setUserName] = useState("");
  const [_, setAvatarUrl] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    getProfile().then((result) => {
      setProfileData(result);
      setUserName(result.username);
      setAvatarUrl(result.avatarUrl);
      setWebsite(result.website);
    });
  }, [setProfileData]);
  const handleDisablility = () => setDisabled(!disabled);
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Tooltip label="Edit Profile" aria-label="A tooltip">
          <Box style={{ float: "right" }} py={4} px={4}>
            <FaPencilAlt onClick={() => handleDisablility()} cursor="pointer" />
          </Box>
        </Tooltip>
        <Box textAlign="center">
          <Heading>Profile</Heading>
        </Box>
        <pre>{JSON.stringify(profileData)}</pre>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <Avatar
            name={profileData["name"]}
            url={profileData["avatar_url"]}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ username, website, avatar_url: url });
            }}
          />
          <form>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                defaultValue={profileData["username"]}
                disabled={disabled}
              />
              <FormHelperText>Make sure it's unique</FormHelperText>
            </FormControl>
            <FormControl id="website">
              <FormLabel>website</FormLabel>
              <Input
                type="url"
                defaultValue={profileData["website"]}
                disabled={disabled}
              />
            </FormControl>
            <Button type="submit" colorScheme={COLOR_SCHEME} w="100">
              Edit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileContainer;
