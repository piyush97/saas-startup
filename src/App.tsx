import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthProvider";
import Routes from "./routes/routes";
function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        <Routes />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
