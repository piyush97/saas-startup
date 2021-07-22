import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Avatar from "../../components/Avatar/index";
import { COLOR_SCHEME } from "../../constants/appConstants";
import { getProfile, updateProfile } from "../../utils/async/profileApis";

const ProfileContainer: React.FC = () => {
  const [profileData, setProfileData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [username, setUserName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getProfile()
      .then((result) => {
        setProfileData(result);
        setUserName(result.username);
        setName(result.name);
        setAvatarUrl(result.avatarUrl);
        setWebsite(result.website);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [setProfileData]);
  const onUpdateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProfile({ username, avatarUrl, website, name })
      .then(() => window.location.reload())
      .catch((error) => {
        throw new Error(error);
      });
  };
  const handleDisablility = () => setDisabled(!disabled);
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Tooltip label="Edit Profile" aria-label="A tooltip">
          <Box float="right" py={4} px={4}>
            <FaPencilAlt onClick={() => handleDisablility()} cursor="pointer" />
          </Box>
        </Tooltip>
        <Box textAlign="center">
          <Heading> My Profile</Heading>
        </Box>

        <Box
          my={4}
          borderWidth="1px"
          bg={useColorModeValue("whiteAlpha.700", "blackAlpha.300")}
          borderRadius="lg"
          p={8}
          overflow="hidden"
        >
          <Avatar
            name={profileData["name"]}
            url={profileData["avatar_url"]}
            website={profileData["website"]}
            size={55}
            onUpload={setAvatarUrl}
          />
          <Text as="i">{profileData["username"]}</Text>
          <Divider py="2" />
          {!disabled && (
            <form onSubmit={(e) => onUpdateProfile(e)}>
              <Box py="4">
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="username"
                    defaultValue={profileData["username"]}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <FormHelperText />
                </FormControl>
                <FormControl id="website">
                  <FormLabel>Website</FormLabel>
                  <Input
                    type="url"
                    defaultValue={profileData["website"]}
                    disabled={disabled}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </FormControl>
                <FormControl id="website">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    defaultValue={profileData["name"]}
                    disabled={disabled}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme={COLOR_SCHEME}
                  width="100%"
                  mt={5}
                >
                  Edit
                </Button>
              </Box>
            </form>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileContainer;
