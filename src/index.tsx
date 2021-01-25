import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import themes from "./styles/themes";
import { ThemeProvider } from "./styles/themed-components";
import GlobalStyle from "./styles/global-styles";
import configureStore from "./createStore";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
