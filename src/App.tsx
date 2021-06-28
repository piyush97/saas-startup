import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
