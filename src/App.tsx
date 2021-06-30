import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@reach/router";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Router>
        <Home path="/" />
        <Login path="/login" />
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
