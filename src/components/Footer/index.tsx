import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  APP_NAME,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from "../../constants/appConstants";
const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="6"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "7x1" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text>
            &copy; {new Date().getFullYear()} {`${APP_NAME} `}
            All rights reserve
          </Text>
        </Stack>
        <ButtonGroup marginStart={{ md: "auto" }} variant="ghost">
          <IconButton
            as="a"
            href={LINKEDIN_LINK}
            aria-label="Linkedin"
            icon={<FaLinkedin />}
          />
          <IconButton
            as="a"
            href={GITHUB_LINK}
            aria-label="GitHub"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href={TWITTER_LINK}
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Footer;
