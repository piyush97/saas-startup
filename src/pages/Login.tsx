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
import React, { useState } from "react";
import {
  COLOR_SCHEME,
  EMAIL_PLACEHOLDER,
  SIGN_UP,
} from "../constants/appConstants";
import { useAuth } from "../contexts/AuthProvider";

const Login = (props: RouteComponentProps) => {
  const { signIn } = useAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      signIn({ email, password });
    } catch (error) {
      throw new Error("Error in login: " + error);
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left" borderWidth="2px" borderRadius="lg" p={8}>
          <form onSubmit={(e) => loginUser(e)}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder={EMAIL_PLACEHOLDER}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>password</FormLabel>
              <Input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="*********"
              />
            </FormControl>
            <p>
              Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
            </p>
            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme={COLOR_SCHEME}
            >
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
