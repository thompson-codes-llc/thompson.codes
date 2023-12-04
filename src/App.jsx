import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import { ThemeProvider, createTheme } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
