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
  EMAIL_PLACEHOLDER,
  LOG_IN,
  SIGN_UP,
  SIGN_UP_HELPER,
  SIGN_UP_ROUTE,
} from "../../constants/appConstants";
import { useAuth } from "../../contexts/AuthProvider";

const Login: React.FC<RouteComponentProps> = () => {
  const { signIn, error } = useAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function onChangeSetPassword(event) {
    setpassword(event.target.value);
  }

  function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn({ email, password })
      .then(() => {})
      .catch((error) => {
        throw new Error("Error" + String(error));
      });
  }

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
                onChange={onChangeSetPassword}
                type="password"
                placeholder="*********"
              />
            </FormControl>
            <p>
              {SIGN_UP_HELPER}
              <Link to={SIGN_UP_ROUTE}>{SIGN_UP}</Link>
            </p>
            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme={COLOR_SCHEME}
            >
              {LOG_IN}
            </Button>
            {error && <Text color="red"> {error.message}</Text>}
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
