import { Box } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from "../components/header";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFC",
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
    </Box>
  );
};
export default Home;
