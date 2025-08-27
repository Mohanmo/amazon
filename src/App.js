import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#131921",
    },
    secondary: {
      main: "#ff9900",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
