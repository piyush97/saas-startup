import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@reach/router";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LOG_IN, SIGN_UP } from "./constants/appConstants";
import { AuthProvider } from "./contexts/AuthProvider";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        <Router>
          <Home path="/" />
          <Login path={LOG_IN} />
          <SignUp path={SIGN_UP} />
        </Router>
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
