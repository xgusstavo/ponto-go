import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/poppins";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#5D5FEF",
      200: "#A9AAF6",
      300: "#e9e3fd",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
