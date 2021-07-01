import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link, RouteComponentProps } from "@reach/router";
import React from "react";
import { LOG_IN } from "../constants/appConstants";

const SignUp = (props: RouteComponentProps) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="John Doe" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="user@saas-startup.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input type="password" placeholder="*********" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>confirm password</FormLabel>
              <Input placeholder="*********" />
            </FormControl>
            <p>
              Have an account already? <Link to={LOG_IN}>Log In</Link>
            </p>
            <Button width="full" mt={4} type="submit">
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
