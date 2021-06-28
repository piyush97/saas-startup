import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroContainer from "./containers/HeroContainer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <HeroContainer />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
