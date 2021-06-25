import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
