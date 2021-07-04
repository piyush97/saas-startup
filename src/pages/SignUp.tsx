import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import {
  COLOR_SCHEME,
  LOG_IN,
  PASSWORDS_DONT_MATCH,
} from "../constants/appConstants";
import { useAuth } from "../contexts/AuthProvider";

const SignUp = (props: RouteComponentProps) => {
  const { signUp } = useAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [name, setname] = useState("");
  const [errorMessage, seterrorMessage] = useState(null);

  const SignUpUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    confirmPassword === password
      ? signUp({ email, password, name })
      : seterrorMessage(PASSWORDS_DONT_MATCH);
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form onSubmit={(e) => SignUpUser(e)}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => setname(e.target.value)}
                placeholder="John Doe"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="user@saas-startup.com"
                required
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="*********"
                required
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>confirm password</FormLabel>
              <Input
                placeholder="*********"
                onChange={(e) => setconfirmPassword(e.target.value)}
                required
              />
            </FormControl>
            <p>
              Have an account already? <Link to={LOG_IN}>Log In</Link>
            </p>
            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme={COLOR_SCHEME}
            >
              Sign Up
            </Button>
            <Text fontSize="lg" color="red" align="center">
              {errorMessage && errorMessage}
            </Text>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
