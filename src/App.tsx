import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthProvider";
import Routes from "./routes/routes";

/**
 * App
 *
 * @returns Our React App
 */
const App: React.FC = () => {
  const theme = extendTheme({
    components: {
      Steps,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Navbar />
        <Routes />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
