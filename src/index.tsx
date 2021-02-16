import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import themes from "./styles/themes";
import { ThemeProvider } from "./styles/themed-components";
import GlobalStyle from "./styles/global-styles";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
