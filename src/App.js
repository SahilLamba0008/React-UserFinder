import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
  colors: {
    primary: "#00040f",
    secondary: "#00f6ff",
    textPrimary: "rgb(255, 255, 255)",
    textSecondary: "rgba(230, 255, 255, 0.8)",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
